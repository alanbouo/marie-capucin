# Marie Capucin - Site Officiel

Site web de Marie Capucin, auteure de romans.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Ajouter un nouvel article de blog / épisode de podcast

Pour ajouter un nouvel article, créez un fichier `.mdx` dans le dossier `content/blog/`.

### Format du fichier

Créez un fichier avec un nom descriptif (ex: `2024-01-17-mon-nouvel-episode.mdx`) :

```mdx
---
title: "Titre de l'épisode"
date: "2024-01-17"
excerpt: "Un court résumé de l'épisode qui apparaîtra dans la liste du blog."
audioUrl: "/audio/episode-17.mp3"
coverImage: "/images/episode-17.jpg"
---

Contenu de votre article ici...

Vous pouvez utiliser du **Markdown** pour formater le texte :
- Listes
- *Italique*
- **Gras**
- [Liens](https://example.com)

> Citations

Et bien plus encore !
```

### Champs disponibles

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| `title` | Oui | Titre de l'article |
| `date` | Oui | Date au format YYYY-MM-DD |
| `excerpt` | Oui | Résumé court pour la liste |
| `audioUrl` | Non | URL du fichier audio (podcast) |
| `coverImage` | Non | Image de couverture |

### Ajouter des fichiers audio

Placez vos fichiers audio dans `public/audio/` et référencez-les avec `/audio/nom-du-fichier.mp3`.

## 🖼️ Images requises

Ajoutez les images suivantes dans `public/images/` :

- `marie-capucin.jpg` - Photo de l'auteure
- `je-te-hais-cover.jpg` - Couverture du livre "Je te hais"
- `tu-ne-seras-pas-cover.jpg` - Couverture du livre "Tu ne seras pas"
- `le-costume-de-soi-cover.jpg` - Couverture du livre "Le Costume de Soi"

## 🌐 Déploiement sur Vercel

1. Connectez votre repository GitHub à [Vercel](https://vercel.com)
2. Vercel détectera automatiquement Next.js
3. Cliquez sur "Deploy"

Chaque push sur la branche principale déclenchera un nouveau déploiement.

## 📁 Structure du projet

```
marie-capucin/
├── content/
│   └── blog/           # Articles de blog (fichiers .mdx)
├── public/
│   ├── images/         # Images du site
│   └── audio/          # Fichiers audio (podcasts)
├── src/
│   ├── app/            # Pages Next.js
│   │   ├── blog/       # Page blog et articles
│   │   ├── romans/     # Pages des romans
│   │   └── qui-est-marie-capucin/
│   ├── components/     # Composants React
│   └── lib/            # Utilitaires (gestion blog)
└── package.json
```

## 🛠️ Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles
- **MDX** - Articles de blog avec Markdown + JSX
- **Vercel** - Hébergement
