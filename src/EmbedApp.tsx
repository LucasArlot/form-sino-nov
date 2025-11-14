import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [parentDimensions, setParentDimensions] = useState({
    width: 1920, // Valeur par défaut desktop
    height: 1080,
  });

  useEffect(() => {
    // Recevoir les dimensions du parent via postMessage
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'parentDimensions') {
        console.log('📏 Dimensions reçues du parent:', event.data.width, 'x', event.data.height);
        setParentDimensions({
          width: event.data.width,
          height: event.data.height,
        });
      }
    };

    window.addEventListener('message', handleMessage);

    // Demander les dimensions au parent plusieurs fois pour s'assurer
    if (window.parent && window.parent !== window) {
      const requestDimensions = () => {
        window.parent.postMessage({ type: 'requestDimensions' }, '*');
      };

      requestDimensions();
      setTimeout(requestDimensions, 100);
      setTimeout(requestDimensions, 300);
      setTimeout(requestDimensions, 500);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    // Système de scaling responsive pour maintenir les proportions du formulaire
    function applyResponsiveScaling() {
      const parentWidth = parentDimensions.width;
      const parentHeight = parentDimensions.height;

      console.log('🔍 Calcul avec dimensions:', parentWidth, 'x', parentHeight);

      // Détecter mobile
      const mobile = parentWidth <= 900;
      console.log('📱 Mode mobile?', mobile);

      setIsMobile(mobile);

      if (mobile) {
        // Sur mobile, pas de scaling, mode fullscreen
        setScale(1);
      } else {
        // Sur desktop/laptop, calculer le scale pour maintenir les proportions
        // Form fixe: 880px width x 1100px height
        const formWidth = 880;
        const formHeight = 1100;

        // Marges de sécurité
        const availableWidth = parentWidth - 80; // 40px de chaque côté
        const availableHeight = parentHeight - 80; // 40px en haut/bas

        // Calculer les scales possibles
        const scaleByWidth = availableWidth / formWidth;
        const scaleByHeight = availableHeight / formHeight;

        // Prendre le plus petit pour que tout rentre
        let newScale = Math.min(scaleByWidth, scaleByHeight, 1);

        // Limites min/max pour la lisibilité
        newScale = Math.max(0.5, Math.min(1, newScale));

        console.log('📐 Scale calculé:', newScale);
        setScale(newScale);
      }
    }

    // Appliquer le scaling
    applyResponsiveScaling();
  }, [parentDimensions]);

  // Envoyer la hauteur réelle du formulaire au parent pour ajuster l'iframe
  useEffect(() => {
    if (isMobile) return; // Pas besoin sur mobile (fullscreen)

    const sendHeightToParent = () => {
      const formContainer = document.querySelector('.quote-form-container');
      if (formContainer && window.parent && window.parent !== window) {
        // Capturer la hauteur du container avec offsetHeight pour inclure TOUT (même overflow)
        const containerHeight = (formContainer as HTMLElement).offsetHeight;
        const containerRect = formContainer.getBoundingClientRect();

        // Vérifier aussi la hauteur du body et du wrapper
        const bodyHeight = document.body.scrollHeight;
        const bodyOffsetHeight = document.body.offsetHeight;
        const wrapper = document.querySelector('.quote-form-wrapper');
        const wrapperHeight = wrapper ? (wrapper as HTMLElement).offsetHeight : 0;
        const wrapperRect = wrapper ? wrapper.getBoundingClientRect().height : 0;

        // Vérifier aussi le footer pour être sûr qu'il est inclus
        const footer = document.querySelector('.form-footer');
        const footerHeight = footer ? (footer as HTMLElement).offsetHeight : 0;

        // Prendre la hauteur la plus grande pour être sûr de tout capturer
        // Utiliser offsetHeight qui inclut padding, border et contenu overflow
        const maxHeight = Math.max(
          containerHeight,
          containerRect.height,
          bodyHeight,
          bodyOffsetHeight,
          wrapperHeight,
          wrapperRect,
          containerHeight + footerHeight // Container + footer séparément au cas où
        );

        // Envoyer la hauteur réelle + marge de sécurité TRÈS GÉNÉREUSE pour éviter le clipping
        // La hauteur réelle inclut déjà le padding et le footer, on ajoute une marge très généreuse
        const heightWithMargin = maxHeight + 300; // Augmenter à 300px pour être absolument sûr

        window.parent.postMessage({ type: 'resize', height: heightWithMargin }, '*');

        console.log(
          '📏 Envoi hauteur au parent:',
          heightWithMargin,
          'px (container offset:',
          containerHeight,
          'px, container rect:',
          containerRect.height,
          'px, body scroll:',
          bodyHeight,
          'px, wrapper offset:',
          wrapperHeight,
          'px, footer:',
          footerHeight,
          'px)'
        );
      }
    };

    // Envoyer après le rendu initial avec plus de délais pour s'assurer que tout est rendu
    const timeout1 = setTimeout(sendHeightToParent, 100);
    const timeout2 = setTimeout(sendHeightToParent, 500);
    const timeout3 = setTimeout(sendHeightToParent, 1000);
    const timeout4 = setTimeout(sendHeightToParent, 2000);
    const timeout5 = setTimeout(sendHeightToParent, 3000);
    const timeout6 = setTimeout(sendHeightToParent, 4000);

    // Observer les changements de taille sur le container, le wrapper et le body
    const resizeObserver = new ResizeObserver(() => {
      sendHeightToParent();
    });

    const formContainer = document.querySelector('.quote-form-container');
    const wrapper = document.querySelector('.quote-form-wrapper');

    if (formContainer) {
      resizeObserver.observe(formContainer);
    }
    if (wrapper) {
      resizeObserver.observe(wrapper);
    }
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      resizeObserver.disconnect();
    };
  }, [isMobile, scale]);

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
        padding: isMobile ? '0' : '0', // Retirer le padding vertical sur desktop
        overflow: isMobile ? 'auto' : 'visible',
      }}
    >
      <div
        className="quote-form-wrapper"
        style={
          {
            width: '100%',
            background: 'transparent',
            backgroundColor: 'transparent',
            '--form-scale': isMobile ? '1' : scale.toString(),
          } as React.CSSProperties & { '--form-scale': string }
        }
      >
        <QuoteFormProvider>
          <QuoteForm />
        </QuoteFormProvider>
      </div>
    </div>
  );
}

export default EmbedApp;
