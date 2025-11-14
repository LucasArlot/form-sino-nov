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
        // IMPORTANT: Le footer est en position: fixed, donc il ne prend pas d'espace dans le flux
        // Il faut ajouter un padding-bottom au container pour que le contenu ne soit pas caché
        const footer = document.querySelector('.form-footer');
        const footerHeight = footer ? (footer as HTMLElement).offsetHeight : 0;
        const footerRect = footer ? footer.getBoundingClientRect().height : 0;
        const actualFooterHeight = Math.max(footerHeight, footerRect, 100); // Au moins 100px pour le footer

        // Ajouter un padding-bottom dynamique au container pour compenser le footer fixed
        // CRITIQUE: Le container est scalé, donc le padding-bottom visuel = padding réel * scale
        // Pour avoir assez d'espace visuel pour le footer (non scalé), il faut:
        // padding réel = (footer height + marge) / scale
        const containerElement = formContainer as HTMLElement;
        const currentPaddingBottom =
          parseInt(window.getComputedStyle(containerElement).paddingBottom) || 60;

        // Le footer n'est PAS scalé, donc on a besoin de sa hauteur complète + marge
        // Mais le padding est dans le container scalé, donc on doit compenser
        const footerSpaceNeeded = actualFooterHeight + 40; // Footer + marge de sécurité
        // Si scale < 1, le padding visuel est réduit, donc on doit augmenter le padding réel
        const requiredPaddingBottom =
          scale < 1
            ? Math.ceil(footerSpaceNeeded / scale) + 20 // Compenser le scale + marge supplémentaire
            : footerSpaceNeeded;

        if (requiredPaddingBottom > currentPaddingBottom) {
          containerElement.style.paddingBottom = requiredPaddingBottom + 'px';
        }

        // CRITIQUE: Le container a un transform: scale() appliqué via CSS
        // getBoundingClientRect() retourne la hauteur VISUELLE après le scale
        // offsetHeight/scrollHeight retournent la hauteur RÉELLE (non scalée)
        // IMPORTANT: scrollHeight inclut TOUT le contenu, y compris le padding-bottom ajouté dynamiquement

        // Attendre un peu pour que le padding-bottom soit appliqué avant de mesurer
        // Utiliser scrollHeight qui capture TOUT le contenu réel, y compris le padding
        const containerScrollHeight = containerElement.scrollHeight;
        const containerOffsetHeight = containerElement.offsetHeight;

        // Vérifier aussi la hauteur du body et du wrapper pour être sûr
        const bodyScrollHeight = document.body.scrollHeight;
        const wrapper = document.querySelector('.quote-form-wrapper');
        const wrapperScrollHeight = wrapper ? (wrapper as HTMLElement).scrollHeight : 0;

        // Prendre la hauteur RÉELLE la plus grande (avant scale)
        // Cela inclut le padding-bottom ajouté dynamiquement
        const containerRealHeight = Math.max(
          containerScrollHeight, // Inclut TOUT, y compris padding-bottom
          containerOffsetHeight, // Inclut padding mais pas overflow
          bodyScrollHeight,
          wrapperScrollHeight
        );

        // Appliquer le scale pour obtenir la hauteur VISUELLE
        // C'est la hauteur que l'utilisateur voit réellement
        const containerVisualHeight = containerRealHeight * scale;

        // Vérifier aussi getBoundingClientRect() pour comparaison
        const containerRect = formContainer.getBoundingClientRect();
        const containerRectHeight = containerRect.height;

        // Prendre le MAXIMUM entre la hauteur calculée et la hauteur rect
        // (au cas où getBoundingClientRect() capture quelque chose de plus)
        const containerMaxHeight = Math.max(containerVisualHeight, containerRectHeight);

        // La hauteur totale = hauteur visuelle du container (après scale) + hauteur du footer (non scalé car fixed)
        // Le footer fixed n'est PAS scalé, donc on l'ajoute tel quel
        const maxHeight = containerMaxHeight + actualFooterHeight;

        // Marge de sécurité TRÈS généreuse, surtout importante sur petits écrans avec scale < 1
        // Sur un 14 pouces avec scale ~0.77, on a besoin de beaucoup plus de marge
        // Augmenter significativement les marges pour éviter toute coupure
        const extraMargin = scale < 0.8 ? 400 : scale < 0.9 ? 300 : 200;
        const heightWithMargin = maxHeight + extraMargin;

        window.parent.postMessage({ type: 'resize', height: heightWithMargin }, '*');

        console.log(
          '📏 Envoi hauteur au parent:',
          heightWithMargin,
          'px (scale:',
          scale,
          '| container réel:',
          containerRealHeight,
          'px | container visuel (réel*scale):',
          containerVisualHeight,
          'px | container rect:',
          containerRectHeight,
          'px | footer:',
          actualFooterHeight,
          'px | marge:',
          extraMargin,
          'px)',
          '| Détails: container offset:',
          containerOffsetHeight,
          'px, container scroll:',
          containerScrollHeight,
          'px, body scroll:',
          bodyScrollHeight,
          'px, wrapper scroll:',
          wrapperScrollHeight,
          'px'
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
