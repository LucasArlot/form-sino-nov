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

  // Envoyer simplement la hauteur totale du document au parent
  useEffect(() => {
    if (isMobile) return; // Pas besoin sur mobile (fullscreen)

    const sendHeightToParent = () => {
      if (window.parent && window.parent !== window) {
        // Mesurer simplement la hauteur totale du document
        const totalHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
          document.documentElement.offsetHeight,
          document.body.offsetHeight
        );

        // Ajouter une petite marge de sécurité
        const heightWithMargin = totalHeight + 50;

        window.parent.postMessage({ type: 'resize', height: heightWithMargin }, '*');

        console.log(
          '📏 Envoi hauteur au parent:',
          heightWithMargin,
          'px (document:',
          totalHeight,
          'px + marge: 50px)'
        );
      }
    };

    // Envoyer après le rendu avec quelques délais
    const timeout1 = setTimeout(sendHeightToParent, 100);
    const timeout2 = setTimeout(sendHeightToParent, 500);
    const timeout3 = setTimeout(sendHeightToParent, 1000);
    const timeout4 = setTimeout(sendHeightToParent, 2000);

    // Observer les changements de taille
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
        padding: isMobile ? '0' : '0',
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
