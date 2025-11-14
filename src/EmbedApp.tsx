import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [isMobile, setIsMobile] = useState(false);

  // Détecter mobile simplement
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Envoyer la hauteur exacte du formulaire au parent (sans espaces vides)
  useEffect(() => {
    if (isMobile) return; // Pas besoin sur mobile (fullscreen)

    const sendHeightToParent = () => {
      if (window.parent && window.parent !== window) {
        // Trouver le container du formulaire pour mesurer sa hauteur exacte
        const formContainer = document.querySelector('.quote-form-container') as HTMLElement;
        const formWrapper = document.querySelector('.quote-form-wrapper') as HTMLElement;

        let actualHeight = 0;

        if (formContainer) {
          // Mesurer la hauteur réelle du formulaire (sans padding/margin inutiles)
          const containerRect = formContainer.getBoundingClientRect();
          const containerScrollHeight = formContainer.scrollHeight;

          // Prendre la hauteur la plus grande entre le scrollHeight et le getBoundingClientRect
          actualHeight = Math.max(containerRect.height, containerScrollHeight);

          // Si le wrapper existe, vérifier aussi sa hauteur
          if (formWrapper) {
            const wrapperRect = formWrapper.getBoundingClientRect();
            const wrapperScrollHeight = formWrapper.scrollHeight;
            actualHeight = Math.max(actualHeight, wrapperRect.height, wrapperScrollHeight);
          }
        } else {
          // Fallback : mesurer le document
          actualHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          );
        }

        // Envoyer la hauteur exacte sans marge excessive (juste 10px pour éviter les coupures)
        const heightWithMargin = Math.ceil(actualHeight) + 10;

        window.parent.postMessage({ type: 'resize', height: heightWithMargin }, '*');

        console.log(
          '📏 Envoi hauteur au parent:',
          heightWithMargin,
          'px (formulaire:',
          Math.ceil(actualHeight),
          'px + marge: 10px)'
        );
      }
    };

    // Utiliser requestAnimationFrame pour des mesures plus précises après le rendu
    const measureAndSend = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sendHeightToParent();
        });
      });
    };

    // Envoyer après le rendu avec quelques délais
    const timeout1 = setTimeout(measureAndSend, 100);
    const timeout2 = setTimeout(measureAndSend, 500);
    const timeout3 = setTimeout(measureAndSend, 1000);
    const timeout4 = setTimeout(measureAndSend, 2000);

    // Observer les changements de taille du formulaire
    const resizeObserver = new ResizeObserver(() => {
      measureAndSend();
    });

    // Observer le container du formulaire spécifiquement
    const formContainer = document.querySelector('.quote-form-container');
    if (formContainer) {
      resizeObserver.observe(formContainer);
    }

    // Observer aussi le body et documentElement pour les changements globaux
    if (document.body) {
      resizeObserver.observe(document.body);
    }
    if (document.documentElement) {
      resizeObserver.observe(document.documentElement);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <div
      className={isMobile ? 'sino-form-mobile' : 'sino-form-desktop'}
      style={{
        width: '100%',
        minHeight: isMobile ? '100vh' : 'auto',
        height: isMobile ? '100vh' : 'auto', // Hauteur auto pour s'adapter au contenu
        display: 'flex',
        justifyContent: 'center',
        alignItems: isMobile ? 'stretch' : 'flex-start', // flex-start pour éviter les espaces vides
        background: 'transparent',
        backgroundColor: 'transparent',
        padding: isMobile ? '0' : '0',
        overflow: isMobile ? 'auto' : 'visible',
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
