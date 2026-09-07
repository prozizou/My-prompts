# Prompt Vault — Next.js + Firebase RTDB

Version Next.js de l'application personnelle de gestion de prompts IA.

## Stack

- Next.js 16 (App Router)
- React
- Firebase Authentication (Google)
- Firebase Realtime Database
- CSS natif

## Fonctions

- Connexion Google
- Accès réservé à un seul UID Firebase
- Ajout / modification / suppression des prompts
- Recherche instantanée
- Catégories et tags
- Favoris
- Copie en un clic
- Tri
- Interface responsive mobile / desktop

## Installation

```bash
npm install
npm run dev
```

Puis ouvrez `http://localhost:3000`.

## Firebase

La configuration actuelle est déjà enregistrée dans `.env.local`.

Les règles RTDB se trouvent dans `firebase.rules.json`. Elles limitent la lecture et l'écriture à l'UID propriétaire configuré.

## Déploiement Vercel

1. Importez ce projet dans GitHub.
2. Importez le dépôt dans Vercel.
3. Ajoutez dans Vercel les variables listées dans `.env.local.example` avec les valeurs de `.env.local`.
4. Déployez.
5. Ajoutez votre domaine Vercel dans Firebase Console > Authentication > Settings > Authorized domains si nécessaire.

## Bibliothèque de prompts prédéfinis

99 prompts prêts à l'emploi (styles, photographie, rendu 3D, lumière, branding, univers, outils...) sont disponibles dans `lib/seedPrompts.js`. Une fois connecté avec le compte propriétaire, un bouton **« Importer N prompts prédéfinis »** apparaît dans la barre latérale tant qu'il en manque : il écrit directement les prompts manquants dans `users/{uid}/prompts` via votre session Firebase déjà authentifiée (donc respecte les règles RTDB, sans exposer aucune clé). Chaque prompt a un identifiant fixe : l'import peut être relancé sans jamais créer de doublons.

## Important

Les variables `NEXT_PUBLIC_FIREBASE_*` sont destinées au client et ne doivent pas être considérées comme des secrets. La sécurité des données repose sur Firebase Authentication et les règles Realtime Database.
