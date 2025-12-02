# Déploiement sur GitHub Pages

## Fichiers à déployer

Les fichiers suivants sont prêts dans `dist/` :
- `sino-form-standalone.js` (752 KB)
- `sino-form-standalone.css` (192 KB)

## Option 1 : Déployer via le script automatique

```bash
cd sino-form-main
./deploy-to-github-pages.sh [path-to-github-pages-repo]
```

Exemple :
```bash
./deploy-to-github-pages.sh ~/form-sino-nov
```

## Option 2 : Déployer manuellement

### Étape 1 : Cloner ou naviguer vers le repo GitHub Pages

```bash
# Si le repo n'existe pas encore localement
git clone https://github.com/lucasarlot/form-sino-nov.git
cd form-sino-nov

# OU si le repo existe déjà
cd /path/to/form-sino-nov
```

### Étape 2 : Copier les fichiers

```bash
# Depuis sino-form-main
cp dist/sino-form-standalone.js /path/to/form-sino-nov/
cp dist/sino-form-standalone.css /path/to/form-sino-nov/
```

### Étape 3 : Commit et push

```bash
cd /path/to/form-sino-nov
git add sino-form-standalone.js sino-form-standalone.css
git commit -m "Deploy standalone bundle $(date +%Y%m%d)"
git push
```

## Option 3 : Upload via GitHub Web Interface

1. Aller sur https://github.com/lucasarlot/form-sino-nov
2. Naviguer vers la branche/docs ou la racine du repo
3. Cliquer sur "Upload files"
4. Glisser-déposer `sino-form-standalone.js` et `sino-form-standalone.css`
5. Commit directement depuis l'interface

## Vérification après déploiement

Après déploiement, vérifier que les fichiers sont accessibles :

- ✅ https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.js
- ✅ https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.css

Les deux URLs doivent retourner `200 OK`.

## Test

Après déploiement, tester dans `Menu footer de test.html` :
1. Ouvrir le fichier HTML
2. Cliquer sur un bouton "Get a Quote"
3. Vérifier que le formulaire se charge correctement depuis GitHub Pages

