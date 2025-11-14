import { QuoteForm } from '@/features/lead';
import { QuoteFormProvider } from '@/features/lead/QuoteFormContext';
import { useEffect, useState } from 'react';
import '@/styles/main.css';

function EmbedApp() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Système de scaling responsive pour maintenir les proportions du formulaire
    function applyResponsiveScaling() {
      let parentWidth;
      let parentHeight;

      try {
        // Essayer de détecter la largeur/hauteur de l'écran parent
        if (window.parent && window.parent !== window) {
          parentWidth = window.parent.innerWidth;
          parentHeight = window.parent.innerHeight;
        } else if (window.top && window.top !== window) {
          parentWidth = window.top.innerWidth;
          parentHeight = window.top.innerHeight;
        } else {
          parentWidth = window.innerWidth;
          parentHeight = window.innerHeight;
        }
      } catch {
        // Fallback si on ne peut pas accéder au parent
        parentWidth = window.innerWidth;
        parentHeight = window.innerHeight;
      }

      // Détecter mobile
      const mobile = parentWidth <= 900;
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

        setScale(newScale);
      }
    }

    // Appliquer le scaling au chargement
    applyResponsiveScaling();

    // Réappliquer le scaling si la fenêtre est redimensionnée
    window.addEventListener('resize', applyResponsiveScaling);

    return () => {
      window.removeEventListener('resize', applyResponsiveScaling);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        minHeight: isMobile ? '100vh' : 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: isMobile ? 'stretch' : 'center',
        background: 'transparent',
        backgroundColor: 'transparent',
        padding: isMobile ? '0' : '20px 0',
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
