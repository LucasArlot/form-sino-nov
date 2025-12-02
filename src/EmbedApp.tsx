import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState, useCallback } from 'react';
import '@/styles/main.css';

type ScreenType = 'mobile-small' | 'mobile-medium' | 'mobile-large' | 'tablet' | 'desktop';

function EmbedApp() {
  const [isMobile, setIsMobile] = useState(false);
  const [screenType, setScreenType] = useState<ScreenType>('desktop');
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  // Détecter le type d'écran de manière précise
  const updateScreenType = useCallback(() => {
    const width = window.innerWidth;
    
    // Déterminer si c'est mobile ou desktop
    const mobile = width <= 768; // Breakpoint unifié
    
    // Catégoriser les mobiles par taille
    let type: ScreenType;
    if (width < 375) {
      type = 'mobile-small'; // iPhone SE, petits Androids (< 375px)
    } else if (width < 414) {
      type = 'mobile-medium'; // iPhone standard (375px - 414px)
    } else if (width < 768) {
      type = 'mobile-large'; // iPhone Pro Max, grands Androids (414px - 768px)
    } else if (width < 1024) {
      type = 'tablet'; // Tablettes (768px - 1024px)
    } else {
      type = 'desktop'; // Desktop (> 1024px)
    }
    
    setIsMobile(mobile);
    setScreenType(type);
    
    // Mettre à jour la variable CSS pour utilisation dans le CSS
    document.documentElement.style.setProperty('--screen-type', type);
    document.documentElement.classList.toggle('sino-form-mobile', mobile);
    document.documentElement.classList.toggle('sino-form-desktop', !mobile);
  }, []);

  // Gérer le viewport dynamique (barres du navigateur)
  const updateViewportHeight = useCallback(() => {
    // Utiliser visualViewport si disponible (plus précis pour mobile)
    // visualViewport donne la hauteur visible réelle, sans les barres du navigateur
    let height: number;
    
    if (typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport) {
      height = window.visualViewport.height;
    } else {
      height = window.innerHeight;
    }
    
    setViewportHeight(height);
    
    // Mettre à jour une variable CSS pour utilisation dans le CSS
    document.documentElement.style.setProperty('--viewport-height', `${height}px`);
    document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
  }, []);

  // Empêcher le scroll du body sur mobile pour éviter le double scroll
  useEffect(() => {
    if (!isMobile) return;

    // Bloquer le scroll du body et du html sur mobile
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyHeight = document.body.style.height;
    const originalHtmlHeight = document.documentElement.style.height;
    const originalBodyPosition = document.body.style.position;

    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';
    document.body.style.left = '0';
    
    // Bloquer le scroll du html
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';

    return () => {
      // Restaurer les styles originaux
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
      document.body.style.position = originalBodyPosition;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.height = originalHtmlHeight;
    };
  }, [isMobile]);

  // Gérer le clavier virtuel et le scroll automatique
  useEffect(() => {
    if (!isMobile) return;

    let lastViewportHeight = viewportHeight;
    let keyboardTimeout: NodeJS.Timeout;

    const handleKeyboardShow = () => {
      // Le clavier réduit window.innerHeight / visualViewport.height
      // Scroll vers l'input actif pour qu'il soit visible au-dessus du clavier
      const activeElement = document.activeElement as HTMLElement;
      
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'SELECT')) {
        // Attendre que le clavier soit complètement ouvert (animation)
        clearTimeout(keyboardTimeout);
        keyboardTimeout = setTimeout(() => {
          try {
            // Trouver le conteneur scrollable
            const scrollContainer = document.querySelector('.form-content-scroll') as HTMLElement;
            
            if (scrollContainer) {
              // Calculer la position relative dans le conteneur scrollable
              const containerRect = scrollContainer.getBoundingClientRect();
              const elementRect = activeElement.getBoundingClientRect();
              
              // Position relative de l'élément dans le conteneur
              const relativeTop = elementRect.top - containerRect.top + scrollContainer.scrollTop;
              
              // Scroll pour centrer l'input dans le viewport visible (sans le clavier)
              const viewportHeight = window.visualViewport?.height || window.innerHeight;
              const scrollTo = relativeTop - (viewportHeight / 2) + (elementRect.height / 2);
              
              scrollContainer.scrollTo({
                top: Math.max(0, scrollTo),
                behavior: 'smooth'
              });
            } else {
              // Fallback : utiliser scrollIntoView
              activeElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
              });
            }
          } catch (e) {
            // Fallback si scrollIntoView échoue
            try {
              activeElement.scrollIntoView({ block: 'center' });
            } catch {
              // Ignorer si échec complet
            }
          }
        }, 350); // Délai augmenté pour laisser le clavier s'ouvrir complètement
      }
    };

    const handleViewportChange = () => {
      const currentHeight = typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      
      // Détecter si le clavier apparaît (réduction significative de hauteur)
      const heightDiff = lastViewportHeight - currentHeight;
      
      if (heightDiff > 150) {
        // Clavier probablement ouvert (réduction > 150px)
        handleKeyboardShow();
      }
      
      lastViewportHeight = currentHeight;
      updateViewportHeight();
    };

    // Écouter les changements de focus sur les inputs
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        // Petit délai pour laisser le clavier commencer à apparaître
        setTimeout(() => {
          handleKeyboardShow();
        }, 200);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    
    if (typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange, { passive: true });
    }

    return () => {
      clearTimeout(keyboardTimeout);
      document.removeEventListener('focusin', handleFocusIn);
      
      if (typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
      }
    };
  }, [isMobile, viewportHeight, updateViewportHeight]);

  useEffect(() => {
    // Initialiser
    updateScreenType();
    updateViewportHeight();

    // Debounce pour éviter trop de recalculs
    let resizeTimeout: NodeJS.Timeout;
    let viewportTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateScreenType();
        updateViewportHeight();
      }, 150);
    };

    const handleViewportChange = () => {
      clearTimeout(viewportTimeout);
      viewportTimeout = setTimeout(() => {
        updateViewportHeight();
      }, 100);
    };

    // Écouter les événements de redimensionnement
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize);

    // Écouter les changements de viewport (barres du navigateur qui apparaissent/disparaissent)
    if (typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange, { passive: true });
      window.visualViewport.addEventListener('scroll', handleViewportChange, { passive: true });
    }

    return () => {
      clearTimeout(resizeTimeout);
      clearTimeout(viewportTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      
      if (typeof window !== 'undefined' && 'visualViewport' in window && window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, [updateScreenType, updateViewportHeight]);

  return (
    <div
      className={`sino-form ${isMobile ? 'sino-form-mobile' : 'sino-form-desktop'} sino-form-${screenType}`}
      style={{
        width: '100%',
        // Utiliser la hauteur du viewport réel plutôt que 100vh
        // dvh (dynamic viewport height) s'adapte aux barres du navigateur
        minHeight: isMobile ? 'var(--viewport-height, 100dvh)' : 'auto',
        height: isMobile ? 'var(--viewport-height, 100dvh)' : 'auto',
        maxHeight: isMobile ? 'var(--viewport-height, 100dvh)' : 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: isMobile ? 'stretch' : 'flex-start',
        background: 'transparent',
        backgroundColor: 'transparent',
        padding: isMobile ? '0' : '0',
        // Sur mobile, le scroll est géré par form-content-scroll, pas ici
        overflow: isMobile ? 'hidden' : 'visible',
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: isMobile ? 'fixed' : 'relative',
        top: isMobile ? '0' : 'auto',
        left: isMobile ? '0' : 'auto',
        right: isMobile ? '0' : 'auto',
        bottom: isMobile ? '0' : 'auto',
      }}
    >
      <div
        className="quote-form-wrapper"
        style={{
          width: '100%',
          height: 'auto', // Hauteur auto pour s'adapter au contenu
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
