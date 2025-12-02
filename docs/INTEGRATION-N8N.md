# Guide d'intégration n8n - Formulaire Simple

## 📋 Vue d'ensemble

Le formulaire simple est **déjà connecté à n8n** et envoie automatiquement les données soumises à un webhook unique :

**n8n Production** : Webhook n8n principal

---

## 🔗 URL du webhook configuré

### URL de production (utilisée en production)

```typescript
https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91
```

### URL de développement (utilisée en localhost)

En développement, le formulaire utilise une route proxy configurée dans `vite.config.ts` :

- `/api/n8n` → proxy vers n8n Production

Ce proxy permet d'éviter les problèmes CORS en développement.

---

## 📁 Fichiers concernés

### 1. **Fonction de soumission** : `src/simple-form/utils/submitForm.ts`

C'est le fichier principal qui gère l'envoi des données à n8n.

**Fonctions principales :**

- `prepareSubmissionPayload()` : Prépare les données du formulaire pour l'envoi
- `submitFormData()` : Envoie les données aux webhooks

**Localisation de l'URL :**

```126:140:src/simple-form/utils/submitForm.ts
export async function submitFormData(
  payload: Record<string, unknown>,
  onError?: (error: string) => void
): Promise<string> {
  // For standalone builds, always use direct URLs (no proxy available)
  // Only use proxy in dev server mode
  const isDevServer = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const webhookUrl = isDevServer
    ? '/api/n8n'
    : 'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
```

### 2. **Configuration du proxy** : `vite.config.ts`

Configuration du proxy pour le développement local :

```105:133:vite.config.ts
      proxy: {
        '/api/n8n': {
          target: 'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/n8n/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Access-Control-Allow-Origin', '*');
              proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
              proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            });
          },
        },
      },
```

### 3. **Gestion de la soumission** : `src/simple-form/SimpleFooterSection.tsx`

Le bouton de soumission appelle la fonction `submitFormData()` :

```154:173:src/simple-form/SimpleFooterSection.tsx
              try {
                console.log('[SimpleFooterSection] Preparing submission payload...');
                // Prepare the payload
                const { submissionId, payload } = prepareSubmissionPayload(formData);
                console.log('[SimpleFooterSection] Payload prepared, submissionId:', submissionId);

                // Submit to webhooks
                console.log('[SimpleFooterSection] Submitting to webhooks...');
                const resultSubmissionId = await submitFormData(payload, (errorMessage) => {
                  console.error('[SimpleFooterSection] Error callback triggered:', errorMessage);
                  errorHandled = true;
                  setSubmitError(errorMessage);
                });

                console.log(
                  '[SimpleFooterSection] Submission successful, calling onSubmissionSuccess with:',
                  resultSubmissionId
                );
                // On success, call the callback with submission ID
                onSubmissionSuccess(resultSubmissionId);
```

---

## 📦 Structure des données envoyées

Les données sont envoyées en JSON avec la structure suivante :

```typescript
{
  submissionId: string;        // ID unique de soumission (ex: "form-FR-1234567890-abc12")
  timestamp: string;            // Timestamp au format HKT (ex: "2025-01-15T14:30:00+08:00")
  email: string;                // Email du client
  phone: string;                // Téléphone du client
  firstName: string;            // Prénom
  lastName?: string;            // Nom (optionnel)
  companyName?: string;         // Nom de l'entreprise (optionnel)
  country: string;              // Nom du pays (converti depuis le code)
  origin?: string;              // Nom du port/aéroport d'origine (converti depuis le code)
  destCity?: string;            // Ville de destination
  servicesRequested: {          // Services demandés
    shipping?: boolean;
    sourcing?: boolean;
    qc?: boolean;
    warehousing?: boolean;
    dropshipping?: boolean;
    chinaVisit?: boolean;
  };
  loads: Array<{               // Tableau des chargements
    shippingType: string;
    // ... autres champs selon le type
  }>;
  // ... autres champs du formulaire
}
```

### Transformations automatiques

1. **Code pays → Nom du pays** : Le code pays (ex: `FR`) est converti en nom complet (ex: `France`)
2. **Code origine → Nom** : Le code du port/aéroport (ex: `SHA`) est converti en nom (ex: `Shanghai`)
3. **Nettoyage des données** : Les champs non applicables sont nettoyés selon le type de chargement

---

## 🔧 Comment modifier l'URL du webhook n8n

### Option 1 : Modifier directement dans `submitForm.ts`

1. Ouvrez `src/simple-form/utils/submitForm.ts`
2. Modifiez l'URL aux lignes 134-137 :

```typescript
const webhookUrl = isDevServer ? '/api/n8n' : 'https://VOTRE-NOUVELLE-URL-N8N';
```

### Option 2 : Utiliser des variables d'environnement (recommandé)

Pour une configuration plus flexible, vous pouvez utiliser des variables d'environnement :

1. Créez un fichier `.env` à la racine du projet :

```env
VITE_N8N_WEBHOOK=https://n8n.srv783609.hstgr.cloud/webhook/VOTRE-ID
```

2. Modifiez `submitForm.ts` pour utiliser cette variable :

```typescript
const webhookUrl = isDevServer
  ? '/api/n8n'
  : import.meta.env.VITE_N8N_WEBHOOK ||
    'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
```

### Option 3 : Modifier le proxy de développement

Si vous voulez changer l'URL du proxy en développement, modifiez `vite.config.ts` :

```typescript
proxy: {
  '/api/n8n': {
    target: 'https://VOTRE-NOUVELLE-URL-N8N',
    // ... reste de la config
  },
}
```

---

## 🧪 Comment tester l'intégration

### 1. Test en développement local

1. Démarrez le serveur de développement :

```bash
npm run dev
```

2. Remplissez et soumettez le formulaire
3. Vérifiez la console du navigateur pour les logs :
   - `[submitFormData] Starting submission with payload:`
   - `[submitFormData] Webhook to ... succeeded.`

4. Vérifiez dans n8n que les données sont bien reçues

### 2. Test en production

1. Build le projet :

```bash
npm run build
```

2. Déployez le build
3. Testez la soumission du formulaire
4. Vérifiez les logs dans n8n

### 3. Vérification des erreurs

Si une erreur survient, elle sera affichée à l'utilisateur et loggée dans la console :

- **Erreur réseau** : "Network error: Could not reach our servers..."
- **Erreur serveur** : "We could not send your quote request (status XXX)..."
- **Erreur générale** : "Something went wrong while sending your request..."

---

## 🔍 Dépannage

### Problème : Les données n'arrivent pas dans n8n

**Solutions :**

1. Vérifiez que l'URL du webhook n8n est correcte
2. Vérifiez que le workflow n8n est actif
3. Vérifiez la console du navigateur pour les erreurs
4. Vérifiez les logs n8n pour voir si la requête arrive

### Problème : Erreur CORS en développement

**Solution :** Le proxy devrait gérer cela automatiquement. Si le problème persiste :

1. Vérifiez que le serveur de développement est bien démarré
2. Vérifiez la configuration du proxy dans `vite.config.ts`

### Problème : Les données sont mal formatées dans n8n

**Solution :** Vérifiez la structure des données dans `prepareSubmissionPayload()` et ajustez si nécessaire.

---

## 📝 Notes importantes

1. **Un seul webhook** : Le formulaire envoie les données à un seul webhook n8n
2. **Gestion d'erreurs** : Si le webhook échoue, la soumission est considérée comme échouée et un message d'erreur est affiché à l'utilisateur
3. **ID de soumission** : Un ID unique est généré pour chaque soumission au format `form-{COUNTRY}-{TIMESTAMP}-{RANDOM}`

---

## 🔐 Sécurité

- Les webhooks n8n utilisent des URLs avec des IDs uniques
- Les données sont envoyées en HTTPS
- Aucune authentification supplémentaire n'est requise (les IDs dans les URLs servent de clé)

Pour ajouter une authentification, vous pouvez :

1. Ajouter un header `Authorization` dans les requêtes fetch
2. Utiliser un token dans le body de la requête
3. Configurer l'authentification côté n8n

---

## 📚 Ressources

- [Documentation n8n Webhooks](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)

---

**Dernière mise à jour :** Janvier 2025
