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
          // Le reflow sera déclenché par requestAnimationFrame dans sendHeightWithRAF
        }

        // CRITIQUE: Le container a un transform: scale() appliqué via CSS
        // Le container a une hauteur fixe de 1100px dans le CSS, mais le contenu peut dépasser
        // scrollHeight inclut TOUT le contenu réel, y compris le padding-bottom ajouté dynamiquement

        // Mesurer la hauteur RÉELLE du container (avant scale)
        // scrollHeight est la mesure la plus fiable car elle inclut tout, même si le container a height: 1100px fixe
        const containerScrollHeight = containerElement.scrollHeight;
        const containerOffsetHeight = containerElement.offsetHeight;

        // Vérifier aussi la hauteur du body et du document pour capturer TOUT
        const bodyScrollHeight = document.body.scrollHeight;
        const bodyOffsetHeight = document.body.offsetHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const documentOffsetHeight = document.documentElement.offsetHeight;

        const wrapper = document.querySelector('.quote-form-wrapper');
        const wrapperScrollHeight = wrapper ? (wrapper as HTMLElement).scrollHeight : 0;
        const wrapperOffsetHeight = wrapper ? (wrapper as HTMLElement).offsetHeight : 0;

        // Prendre la hauteur RÉELLE la plus grande (avant scale)
        // scrollHeight est généralement la meilleure mesure car elle inclut tout le contenu
        const containerRealHeight = Math.max(
          containerScrollHeight, // Inclut TOUT, y compris padding-bottom et contenu qui dépasse
          containerOffsetHeight, // Hauteur avec padding mais limitée par height: 1100px
          bodyScrollHeight, // Hauteur totale du body
          bodyOffsetHeight,
          documentHeight, // Hauteur totale du document
          documentOffsetHeight,
          wrapperScrollHeight,
          wrapperOffsetHeight
        );

        // Appliquer le scale pour obtenir la hauteur VISUELLE du container
        // Le scale réduit visuellement la taille du container
        const containerVisualHeight = containerRealHeight * scale;

        // Vérifier aussi getBoundingClientRect() qui retourne la hauteur visuelle après scale
        const containerRect = formContainer.getBoundingClientRect();
        const containerRectHeight = containerRect.height;

        // Prendre le MAXIMUM entre toutes les mesures pour être absolument sûr
        // containerRectHeight peut être plus grand si le contenu dépasse visuellement
        const containerMaxHeight = Math.max(
          containerVisualHeight, // Hauteur réelle * scale
          containerRectHeight, // Hauteur visuelle mesurée
          containerScrollHeight * scale, // scrollHeight * scale (au cas où)
          bodyScrollHeight * scale // body scrollHeight * scale (au cas où)
        );

        // La hauteur totale = hauteur visuelle du container (après scale) + hauteur du footer (non scalé car fixed)
        // Le footer fixed n'est PAS scalé et n'est pas dans le flux, donc on l'ajoute tel quel
        const maxHeight = containerMaxHeight + actualFooterHeight;

        // Marge de sécurité TRÈS généreuse, surtout importante sur petits écrans avec scale < 1
        // Sur un 14 pouces avec scale ~0.77, on a besoin de beaucoup plus de marge
        // Augmenter significativement les marges pour éviter toute coupure
        // Ajouter aussi une marge supplémentaire basée sur la hauteur réelle pour être sûr
        const baseMargin = scale < 0.8 ? 500 : scale < 0.9 ? 400 : 300;
        // Ajouter aussi un pourcentage de la hauteur réelle pour les très grands contenus
        const percentageMargin = Math.ceil(containerRealHeight * 0.1); // 10% de la hauteur réelle
        const extraMargin = baseMargin + percentageMargin;
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
          'px | container max:',
          containerMaxHeight,
          'px | container rect:',
          containerRectHeight,
          'px | footer:',
          actualFooterHeight,
          'px | marge:',
          extraMargin,
          'px (base:',
          baseMargin,
          'px + %:',
          percentageMargin,
          'px))',
          '| Détails: container offset:',
          containerOffsetHeight,
          'px, container scroll:',
          containerScrollHeight,
          'px, body scroll:',
          bodyScrollHeight,
          'px, document scroll:',
          documentHeight,
          'px, wrapper scroll:',
          wrapperScrollHeight,
          'px'
        );
      }
    };

    // Envoyer après le rendu initial avec plus de délais pour s'assurer que tout est rendu
    // Utiliser requestAnimationFrame pour s'assurer que le layout est à jour
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
    const timeout6 = setTimeout(sendHeightWithRAF, 4000);

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
