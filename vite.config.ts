/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isStandalone = mode === 'standalone';
  const isStandaloneSimple = mode === 'standalone-simple';
  const isAnyStandalone = isStandalone || isStandaloneSimple;

  const input: Record<string, string> = isStandalone
    ? {
        standalone: resolve(__dirname, 'standalone.html'),
      }
    : isStandaloneSimple
      ? {
          'standalone-simple': resolve(__dirname, 'standalone-simple.html'),
        }
      : {
          main: resolve(__dirname, 'index.html'),
          embed: resolve(__dirname, 'embed.html'),
        };

  return {
    base: './',
    plugins: [react()],
    build: {
      rollupOptions: {
        // Inputs for different modes
        input,
        output: {
          // Pour standalone, mettre tout dans un seul fichier
          // Format ESM par défaut (compatible avec type="module")
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'standalone') {
              return 'sino-form-standalone-v3.js';
            }
            if (chunkInfo.name === 'standalone-simple') {
              return 'sino-form-simple-standalone-v3.js';
            }
            return 'assets/[name]-[hash].js';
          },
          // Pour standalone, nom fixe pour le CSS
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css' && isStandalone) {
              return 'sino-form-standalone-v3.css';
            }
            if (assetInfo.name === 'style.css' && isStandaloneSimple) {
              return 'sino-form-simple-standalone-v3.css';
            }
            return 'assets/[name]-[hash][extname]';
          },
          // Pour standalone, pas de code splitting (tout dans un seul fichier)
          manualChunks: isAnyStandalone
            ? undefined // Pas de chunks pour standalone
            : (id) => {
                // Chunks normaux pour les autres builds
                if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                  return 'react-vendor';
                }
                if (id.includes('node_modules/lucide-react')) {
                  return 'ui-icons';
                }
                if (
                  id.includes('features/lead/context/i18n') ||
                  id.includes('features/lead/context/ports') ||
                  id.includes('features/lead/context/types')
                ) {
                  return 'lead-context';
                }
                if (id.includes('features/lead/context/QuoteFormContext')) {
                  return 'quote-form-context';
                }
              },
          // Pour standalone, tout dans un seul fichier
          ...(isAnyStandalone && {
            inlineDynamicImports: true,
          }),
        },
      },
      // Pour standalone, pas de code splitting CSS
      ...(isAnyStandalone && {
        cssCodeSplit: false,
      }),
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: true, // Expose dev server on local network (0.0.0.0)
      port: 5173,
      strictPort: true,
      cors: true, // Allow cross-origin access (needed when embedding from file:// or another origin)
      hmr: {
        overlay: false, // Disable error overlay to prevent reload issues
      },
      proxy: {
        '/api/n8n': {
          target:
            'https://n8n.srv783609.hstgr.cloud/webhook-test/5e52c71e-b113-4b3c-8c7d-91c78496ea91',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/n8n/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Access-Control-Allow-Origin', '*');
              proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
              proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            });
          },
        },
      },
    },
    // Vitest configuration
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['__tests__/**/*.test.{ts,tsx}'],
      setupFiles: ['__tests__/setup.ts'],
    },
  };
});
