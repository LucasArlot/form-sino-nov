import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SimpleFormProvider } from '@/simple-form/context';
import SimpleQuoteForm from '@/simple-form/SimpleQuoteForm';
import '@/styles/main.css';
import '@/simple-form/styles/simple-form.css';

interface SinoSimpleFormAPI {
  init: (containerId: string) => void;
  destroy: (containerId: string) => void;
  isInitialized: (containerId: string) => boolean;
}

const instances: Map<string, Root> = new Map();

function init(containerId: string): void {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`[SinoSimpleForm] Container with id "${containerId}" not found`);
    return;
  }
  if (instances.has(containerId)) {
    console.warn(`[SinoSimpleForm] Container "${containerId}" is already initialized`);
    return;
  }

  container.innerHTML = '';

  const root = createRoot(container);
  root.render(
    <StrictMode>
      <div className="sino-simple-form-root">
        <SimpleFormProvider>
          <SimpleQuoteForm />
        </SimpleFormProvider>
      </div>
    </StrictMode>
  );

  instances.set(containerId, root);

  console.log(`[SinoSimpleForm] Initialized in container "${containerId}"`);
}

function destroy(containerId: string): void {
  const root = instances.get(containerId);
  if (!root) {
    console.warn(`[SinoSimpleForm] No instance found for container "${containerId}"`);
    return;
  }
  root.unmount();
  instances.delete(containerId);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '';
  }

  console.log(`[SinoSimpleForm] Destroyed instance in container "${containerId}"`);
}

function isInitialized(containerId: string): boolean {
  return instances.has(containerId);
}

const SinoSimpleFormAPI: SinoSimpleFormAPI = {
  init,
  destroy,
  isInitialized,
};

declare global {
  interface Window {
    SinoSimpleForm?: SinoSimpleFormAPI;
  }
}

if (typeof window !== 'undefined') {
  window.SinoSimpleForm = SinoSimpleFormAPI;

  console.log('[SinoSimpleForm] Global API initialized (simple v2)');

  // Auto-init pour la page de test standalone-simple.html
  window.addEventListener('DOMContentLoaded', () => {
    const defaultContainerId = 'sinoform-react-root';
    const container = document.getElementById(defaultContainerId);
    if (container && !isInitialized(defaultContainerId)) {
      init(defaultContainerId);
    }
  });
}

export { init, destroy, isInitialized };
