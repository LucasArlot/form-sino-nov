import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [isMobile, setIsMobile] = useState(false);

  // Détecter mobile basé sur la largeur de la fenêtre
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Envoyer la hauteur réelle du formulaire au parent pour ajuster l'iframe
  useEffect(() => {
    if (isMobile) return; // Pas besoin sur mobile (fullscreen)

    const sendHeightToParent = () => {
      if (window.parent && window.parent !== window) {
        // Mesurer la hauteur totale du document - SIMPLE et DIRECT
        // scrollHeight inclut TOUT le contenu, y compris le padding-bottom
        const documentHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
          document.documentElement.offsetHeight,
          document.body.offsetHeight
        );

        // Ajouter une marge de sécurité généreuse pour éviter toute coupure
        const heightWithMargin = documentHeight + 100;

        window.parent.postMessage({ type: 'resize', height: heightWithMargin }, '*');

        console.log(
          '📏 Envoi hauteur au parent:',
          heightWithMargin,
          'px (document:',
          documentHeight,
          'px + marge: 100px)'
        );
      }
    };

    // Envoyer après le rendu initial avec des délais progressifs
    const sendHeightWithRAF = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Double RAF pour s'assurer que le layout est complètement à jour
          sendHeightToParent();
        });
      });
    };

    const timeout1 = setTimeout(sendHeightWithRAF, 100);
    const timeout2 = setTimeout(sendHeightWithRAF, 500);
    const timeout3 = setTimeout(sendHeightWithRAF, 1000);
    const timeout4 = setTimeout(sendHeightWithRAF, 2000);
    const timeout5 = setTimeout(sendHeightWithRAF, 3000);

    // Observer les changements de taille sur le body et le document
    const resizeObserver = new ResizeObserver(() => {
      sendHeightToParent();
    });

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
      clearTimeout(timeout5);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <div
      className={isMobile ? 'sino-form-mobile' : 'sino-form-desktop'}
      style={{
        width: '100%',
        minHeight: isMobile ? '100vh' : 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: isMobile ? 'stretch' : 'center',
        background: 'transparent',
        backgroundColor: 'transparent',
        padding: '0',
        overflow: isMobile ? 'auto' : 'visible',
      }}
    >
      <div
        className="quote-form-wrapper"
        style={{
          width: '100%',
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
