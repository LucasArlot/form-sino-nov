import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import EmbedApp from './EmbedApp';
import './styles/main.css';

// Type pour l'API globale
interface SinoFormAPI {
  init: (containerId: string) => void;
  destroy: (containerId: string) => void;
  isInitialized: (containerId: string) => boolean;
}

// Stockage des instances React par containerId
const instances: Map<string, Root> = new Map();

/**
 * Initialise React dans un container donné
 * @param containerId - ID de l'élément DOM où React sera monté
 */
function init(containerId: string): void {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`[SinoForm] Container with id "${containerId}" not found`);
    return;
  }

  // Vérifier si déjà initialisé
  if (instances.has(containerId)) {
    console.warn(`[SinoForm] Container "${containerId}" is already initialized`);
    return;
  }

  // Vider le container (au cas où il contient déjà quelque chose)
  container.innerHTML = '';

  // Créer la root React
  const root = createRoot(container);
  
  // Rendre l'application
  root.render(
    <StrictMode>
      <EmbedApp />
    </StrictMode>
  );

  // Stocker l'instance
  instances.set(containerId, root);

  console.log(`[SinoForm] Initialized in container "${containerId}"`);
}

/**
 * Détruit l'instance React dans un container donné
 * @param containerId - ID de l'élément DOM à nettoyer
 */
function destroy(containerId: string): void {
  const root = instances.get(containerId);

  if (!root) {
    console.warn(`[SinoForm] No instance found for container "${containerId}"`);
    return;
  }

  // Unmount React
  root.unmount();

  // Supprimer l'instance du Map
  instances.delete(containerId);

  // Optionnel: nettoyer le container
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '';
  }

  console.log(`[SinoForm] Destroyed instance in container "${containerId}"`);
}

/**
 * Vérifie si un container est initialisé
 * @param containerId - ID de l'élément DOM à vérifier
 * @returns true si initialisé, false sinon
 */
function isInitialized(containerId: string): boolean {
  return instances.has(containerId);
}

// Créer l'API globale
const SinoFormAPI: SinoFormAPI = {
  init,
  destroy,
  isInitialized,
};

// Exposer l'API globalement
if (typeof window !== 'undefined') {
  // Vérifier si window.SinoForm existe déjà
  if ((window as any).SinoForm) {
    console.warn('[SinoForm] window.SinoForm already exists, overwriting...');
  }

  // Exposer immédiatement pour être sûr que c'est synchrone
  (window as any).SinoForm = SinoFormAPI;
  
  // Log pour debug
  console.log('[SinoForm] Global API initialized');
  console.log('[SinoForm] API methods:', Object.keys(SinoFormAPI));
  
  // Double check
  if ((window as any).SinoForm && typeof (window as any).SinoForm.init === 'function') {
    console.log('[SinoForm] ✅ window.SinoForm.init is available');
  } else {
    console.error('[SinoForm] ❌ window.SinoForm.init is NOT available!');
  }
}

// Exporter pour les tests éventuels
export { init, destroy, isInitialized };

