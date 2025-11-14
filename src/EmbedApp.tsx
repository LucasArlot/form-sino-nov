import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecter si on est sur mobile
    function detectMobile() {
      let parentWidth;

      try {
        if (window.parent && window.parent !== window) {
          parentWidth = window.parent.innerWidth;
        } else if (window.top && window.top !== window) {
          parentWidth = window.top.innerWidth;
        } else {
          parentWidth = window.innerWidth;
        }
      } catch {
        parentWidth = window.innerWidth;
      }

      setIsMobile(parentWidth <= 900);
    }

    detectMobile();
    window.addEventListener('resize', detectMobile);

    // Envoyer la hauteur au parent pour ajuster l'iframe
    const sendHeight = () => {
      try {
        const height = document.body.scrollHeight;
        window.parent.postMessage(
          {
            type: 'resize',
            height: height,
          },
          '*'
        );
      } catch (e) {
        console.log('Cannot send height to parent:', e);
      }
    };

    // Envoyer la hauteur périodiquement
    const heightInterval = setInterval(sendHeight, 500);

    // Observer les changements de DOM
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.removeEventListener('resize', detectMobile);
      clearInterval(heightInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        minHeight: isMobile ? '100vh' : 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: isMobile ? 'stretch' : 'flex-start',
        background: 'transparent',
        backgroundColor: 'transparent',
        padding: isMobile ? '0' : '20px 0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : '1200px',
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
