# Prompt Vault — Next.js + Firebase RTDB

Version Next.js de l'application de gestion de prompts IA. **Accès libre, sans connexion.**

## Stack

- Next.js 16 (App Router)
- React
- Firebase Realtime Database
- CSS natif

## Fonctions

- Accès direct, sans authentification ni compte à créer
- Ajout / modification / suppression des prompts (suppression sécurisée par confirmation, accessible via le menu ⋯)
- Cartes compactes (description sur 2-3 lignes, « Voir plus », carte entière cliquable)
- Recherche instantanée (titre, contenu, tags, catégorie) + panneau Filtres (catégorie, favoris, tri dont « plus utilisé »)
- Catégories et tags, avec recherche et repli de la liste de catégories dans la barre latérale
- Favoris (étoile animée)
- Copie du titre (`/titre`) et copie/« Utiliser » du prompt (marque un compteur d'utilisation)
- Interface responsive mobile / desktop

## Installation

```bash
npm install
npm run dev
```

Puis ouvrez `http://localhost:3000`.

## Firebase

La configuration actuelle est déjà enregistrée dans `.env.local`.

Les règles RTDB se trouvent dans `firebase.rules.json`. **Il n'y a plus d'authentification** : la lecture et l'écriture sont ouvertes à tous sur l'emplacement fixe `users/{NEXT_PUBLIC_OWNER_UID}/prompts` (le chemin lui-même reste le seul filtre — personne n'a besoin de compte pour lire ou écrire les prompts).

> ⚠️ Toute personne connaissant l'URL de l'application peut lire, modifier ou supprimer n'importe quel prompt de la bibliothèque : c'est le prix de la suppression totale de l'authentification. Adapté à un usage privé/interne ou à un outil volontairement public ; à reconsidérer si les prompts doivent rester confidentiels.

**Étape manuelle indispensable après toute modification de `firebase.rules.json`** : copiez son contenu dans Firebase Console > Realtime Database > Rules, puis cliquez sur **Publier**. Ce fichier n'est pas déployé automatiquement depuis GitHub/Vercel.

## Déploiement Vercel

1. Importez ce projet dans GitHub.
2. Importez le dépôt dans Vercel.
3. Ajoutez dans Vercel les variables listées dans `.env.local.example` avec les valeurs de `.env.local`.
4. Déployez.

## Bibliothèque de prompts prédéfinis

224 prompts prêts à l'emploi (styles, photographie, rendu 3D, lumière, branding, univers, commandes ChatGPT...) sont disponibles dans `lib/seedPrompts.js`. Un bouton **« Importer N prompts prédéfinis »** apparaît dans la barre latérale tant qu'il en manque : il écrit directement les prompts manquants dans la bibliothèque partagée. Chaque prompt a un identifiant fixe : l'import peut être relancé sans jamais créer de doublons.

## Important

Les variables `NEXT_PUBLIC_FIREBASE_*` sont destinées au client et ne doivent pas être considérées comme des secrets. Sans authentification, la sécurité des données repose uniquement sur la confidentialité de l'URL de l'application et sur les règles Realtime Database — voir l'avertissement ci-dessus.
