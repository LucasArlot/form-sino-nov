# Guide de déploiement - Standalone Bundle

## Fichiers à déployer

Après avoir exécuté `npm run build:standalone`, vous obtenez dans le dossier `dist/` :

- `sino-form-standalone.js` (749 KB)
- `sino-form-standalone.css` (190 KB)
- `standalone.html` (optionnel, pour tests)

## Déploiement sur GitHub Pages

### Option 1 : Déployer via Git

1. **Copier les fichiers vers le repo GitHub Pages** :

```bash
# Depuis sino-form-main
cd dist/
cp sino-form-standalone.js /path/to/github-pages-repo/
cp sino-form-standalone.css /path/to/github-pages-repo/
```

2. **Ou directement dans le repo** (si c'est le même repo) :

```bash
cd dist/
cp sino-form-standalone.js ../path/to/docs/
cp sino-form-standalone.css ../path/to/docs/
git add ../path/to/docs/sino-form-standalone.*
git commit -m "Deploy standalone bundle"
git push
```

### Option 2 : Upload manuel sur GitHub

1. Aller sur votre repo GitHub Pages
2. Naviguer vers la branche/docs du repo
3. Uploader les fichiers :
   - `sino-form-standalone.js`
   - `sino-form-standalone.css`

## URL attendue

Les fichiers doivent être accessibles à :
- `https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.js`
- `https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.css`

## Vérification

Après déploiement, vérifier que les fichiers sont accessibles :

```bash
curl -I https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.js
curl -I https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.css
```

Les deux doivent retourner `200 OK`.

## Test local

Un fichier `test-standalone.html` est disponible pour tester localement :

1. Démarrer un serveur local :
```bash
cd sino-form-main
python3 -m http.server 8080
```

2. Ouvrir : `http://localhost:8080/test-standalone.html`

3. Tester :
   - Cliquer sur "Charger sino-form-standalone.js"
   - Cliquer sur "Initialiser dans #sinoform-react-root"
   - Vérifier que le formulaire s'affiche

## Intégration dans HTML

Le HTML `Menu footer de test.html` est déjà configuré pour charger le bundle automatiquement.

La fonction `loadReactBundle()` :
1. Charge le CSS
2. Charge le JS
3. Attend que `window.SinoForm` soit disponible
4. Initialise React avec `window.SinoForm.init('sinoform-react-root')`

## Mise à jour

Pour mettre à jour le bundle :

1. Modifier le code dans `src/`
2. Rebuild : `npm run build:standalone`
3. Redéployer les fichiers `dist/sino-form-standalone.*`

## Notes

- Le bundle est en format ESM (ES Modules)
- Il nécessite un navigateur moderne (support des modules ES)
- Le CSS est séparé mais chargé automatiquement
- L'API globale `window.SinoForm` est disponible après le chargement

