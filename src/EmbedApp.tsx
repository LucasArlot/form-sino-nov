import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState, useRef } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Système de scaling responsive
    function applyResponsiveScaling() {
      let parentWidth;

      try {
        // Essayer de détecter la largeur de l'écran parent
        if (window.parent && window.parent !== window) {
          parentWidth = window.parent.innerWidth;
        } else if (window.top && window.top !== window) {
          parentWidth = window.top.innerWidth;
        } else {
          parentWidth = window.screen.width;
        }
      } catch {
        // Fallback si on ne peut pas accéder au parent
        parentWidth = window.screen.width;
      }

      let newScale = 1;

      // Breakpoints de scaling
      if (parentWidth >= 2560) {
        newScale = 1; // 100% - taille optimale pour 32"
      } else if (parentWidth >= 1920) {
        newScale = 0.85; // 85% pour 27"
      } else if (parentWidth >= 1440) {
        newScale = 0.75; // 75% pour 24"
      } else {
        newScale = 0.65; // 65% pour écrans plus petits
      }

      setScale(newScale);
    }

    // Fonction pour envoyer la hauteur au parent
    function sendHeightToParent() {
      try {
        // Calculer la hauteur réelle du contenu
        const root = document.getElementById('root');
        if (!root) return;

        // Obtenir la hauteur du contenu (scrollHeight ou offsetHeight)
        const scrollHeight = root.scrollHeight;
        const offsetHeight = root.offsetHeight;
        const height = Math.max(scrollHeight, offsetHeight, 600); // Minimum 600px

        // Envoyer la hauteur au parent via postMessage
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(
            {
              type: 'resize',
              height: height,
            },
            '*' // En production, spécifier l'origine exacte pour plus de sécurité
          );
        }
      } catch (error) {
        // Ignorer les erreurs CORS silencieusement
        console.debug('[EmbedApp] Could not send height to parent:', error);
      }
    }

    // Appliquer le scaling au chargement
    applyResponsiveScaling();

    // Envoyer la hauteur initiale après un court délai
    const initialTimeout = setTimeout(() => {
      sendHeightToParent();
    }, 500);

    // Observer les changements de taille du contenu
    const resizeObserver = new ResizeObserver(() => {
      sendHeightToParent();
    });

    // Observer les mutations du DOM
    const mutationObserver = new MutationObserver(() => {
      sendHeightToParent();
    });

    // Démarrer l'observation
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const root = document.getElementById('root');
    if (root) {
      resizeObserver.observe(root);
      mutationObserver.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      });
    }

    // Réappliquer le scaling si la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
      applyResponsiveScaling();
      sendHeightToParent();
    });

    // Écouter les messages du parent pour les mises à jour
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize') {
        applyResponsiveScaling();
        sendHeightToParent();
      }
    };

    window.addEventListener('message', handleMessage);

    // Envoyer la hauteur périodiquement pour s'assurer qu'elle est à jour
    const heightInterval = setInterval(sendHeightToParent, 2000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(heightInterval);
      window.removeEventListener('resize', applyResponsiveScaling);
      window.removeEventListener('message', handleMessage);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        transition: 'transform 0.3s ease',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: 'transparent',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          width: '100%',
          minHeight: '100%',
          background: 'transparent',
          backgroundColor: 'transparent',
        }}
      >
        <QuoteFormProvider>
          <QuoteForm />
        </QuoteFormProvider>
      </div>
    </div>
  );
}

export default EmbedApp;
