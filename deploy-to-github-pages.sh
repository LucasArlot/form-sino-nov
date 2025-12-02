#!/bin/bash

# Script pour déployer les fichiers standalone sur GitHub Pages
# Usage: ./deploy-to-github-pages.sh [path-to-github-pages-repo]

set -e

# Fichiers source
SOURCE_DIR="$(cd "$(dirname "$0")" && pwd)/dist"
JS_FILE="$SOURCE_DIR/sino-form-standalone.js"
CSS_FILE="$SOURCE_DIR/sino-form-standalone.css"

# Vérifier que les fichiers existent
if [ ! -f "$JS_FILE" ]; then
    echo "❌ Erreur: sino-form-standalone.js introuvable dans $SOURCE_DIR"
    exit 1
fi

if [ ! -f "$CSS_FILE" ]; then
    echo "❌ Erreur: sino-form-standalone.css introuvable dans $SOURCE_DIR"
    exit 1
fi

echo "✅ Fichiers trouvés:"
echo "   - $JS_FILE ($(du -h "$JS_FILE" | cut -f1))"
echo "   - $CSS_FILE ($(du -h "$CSS_FILE" | cut -f1))"
echo ""

# Déterminer le chemin du repo GitHub Pages
if [ -n "$1" ]; then
    TARGET_DIR="$1"
else
    # Essayer de trouver le repo automatiquement
    POSSIBLE_PATHS=(
        "$HOME/form-sino-nov"
        "$HOME/Documents/form-sino-nov"
        "$HOME/Desktop/form-sino-nov"
        "$HOME/github/form-sino-nov"
        "$HOME/Projects/form-sino-nov"
        "../form-sino-nov"
        "../../form-sino-nov"
    )
    
    TARGET_DIR=""
    for path in "${POSSIBLE_PATHS[@]}"; do
        if [ -d "$path" ] && [ -d "$path/.git" ]; then
            TARGET_DIR="$path"
            break
        fi
    done
    
    if [ -z "$TARGET_DIR" ]; then
        echo "❌ Erreur: Repo GitHub Pages introuvable"
        echo ""
        echo "Options:"
        echo "1. Cloner le repo: git clone https://github.com/lucasarlot/form-sino-nov.git"
        echo "2. Exécuter avec le chemin: ./deploy-to-github-pages.sh /path/to/form-sino-nov"
        exit 1
    fi
fi

# Vérifier que c'est un repo git
if [ ! -d "$TARGET_DIR/.git" ]; then
    echo "❌ Erreur: $TARGET_DIR n'est pas un repo git"
    exit 1
fi

echo "📁 Destination: $TARGET_DIR"
echo ""

# Copier les fichiers
echo "📋 Copie des fichiers..."
cp "$JS_FILE" "$TARGET_DIR/"
cp "$CSS_FILE" "$TARGET_DIR/"

echo "✅ Fichiers copiés avec succès!"
echo ""
echo "📝 Fichiers dans $TARGET_DIR:"
ls -lh "$TARGET_DIR/sino-form-standalone."* 2>/dev/null || echo "   (fichiers copiés)"
echo ""

# Demander si on veut faire un commit
read -p "🤔 Voulez-vous faire un commit git? (o/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[OoYy]$ ]]; then
    cd "$TARGET_DIR"
    
    # Vérifier le statut git
    if [ -n "$(git status --porcelain)" ]; then
        echo "📝 Ajout des fichiers au commit..."
        git add sino-form-standalone.js sino-form-standalone.css
        
        echo "💬 Création du commit..."
        git commit -m "Deploy standalone bundle v$(date +%Y%m%d-%H%M%S)"
        
        echo "✅ Commit créé!"
        echo ""
        read -p "🚀 Voulez-vous push sur GitHub? (o/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[OoYy]$ ]]; then
            echo "🚀 Push vers GitHub..."
            git push
            
            if [ $? -eq 0 ]; then
                echo "✅ Push réussi!"
                echo ""
                echo "🌐 Les fichiers seront disponibles sur:"
                echo "   - https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.js"
                echo "   - https://lucasarlot.github.io/form-sino-nov/sino-form-standalone.css"
            else
                echo "❌ Erreur lors du push"
                exit 1
            fi
        else
            echo "⏭️  Push ignoré. Vous pouvez faire 'git push' plus tard."
        fi
    else
        echo "ℹ️  Aucun changement à commiter"
    fi
else
    echo "⏭️  Commit ignoré. Vous pouvez faire le commit manuellement plus tard."
    echo ""
    echo "Commandes à exécuter dans $TARGET_DIR:"
    echo "  git add sino-form-standalone.*"
    echo "  git commit -m 'Deploy standalone bundle'"
    echo "  git push"
fi

