# Activer GitHub Pages pour form-sino-nov

## Problème
Les fichiers standalone retournent 404 car GitHub Pages n'est pas activé sur le repo.

## Solution : Activer GitHub Pages

### Étapes

1. **Aller sur les settings du repo** :
   - https://github.com/LucasArlot/form-sino-nov/settings/pages

2. **Configurer la source** :
   - **Branch** : `main`
   - **Folder** : `/ (root)` 

3. **Sauvegarder**

4. **Attendre 1-2 minutes** pour que GitHub Pages propage les fichiers

5. **Vérifier** que les fichiers sont accessibles :
   - https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.js
   - https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.css

## Test local (en attendant)

Pour tester en local avec `file://` :

1. **Démarrer le serveur local** :
```bash
cd sino-form-main
python3 -m http.server 8080
```

2. **Ouvrir le fichier HTML** :
   - Le fichier `Menu footer de test.html` détecte automatiquement `file://` et charge depuis `http://localhost:8080`

3. **Les fichiers doivent être accessibles sur** :
   - http://localhost:8080/sino-form-standalone.js
   - http://localhost:8080/sino-form-standalone.css

## Alternative : Dossier docs/

Si vous préférez utiliser un dossier `docs/` :

1. Créer le dossier `docs/` dans le repo
2. Copier les fichiers dans `docs/`
3. Configurer GitHub Pages pour servir depuis `/docs`

