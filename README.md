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
- Accès réservé aux comptes autorisés (liste d'emails partagée entre plusieurs utilisateurs)
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

Les règles RTDB se trouvent dans `firebase.rules.json`. Elles limitent la lecture et l'écriture aux comptes Google dont l'email figure dans la liste autorisée.

### Accès partagé (plusieurs comptes)

Tous les comptes autorisés lisent et écrivent la **même** bibliothèque, stockée à l'emplacement fixe `users/{NEXT_PUBLIC_OWNER_UID}/prompts` — peu importe l'UID Firebase de la personne connectée.

La liste des emails autorisés est définie à deux endroits qui doivent rester synchronisés :
- `lib/firebase.js` (`ALLOWED_EMAILS`) — contrôle l'accès côté application.
- `firebase.rules.json` — contrôle l'accès côté base de données (la vraie sécurité).

Pour ajouter ou retirer quelqu'un :
1. Modifiez `ALLOWED_EMAILS` dans `lib/firebase.js` et la même liste dans `firebase.rules.json`, puis déployez (push sur `main`).
2. **Copiez le contenu de `firebase.rules.json` dans Firebase Console > Realtime Database > Rules, puis cliquez sur Publier.** Ce fichier n'est pas déployé automatiquement — c'est la seule étape manuelle indispensable, sans elle la personne ajoutée aura une erreur de permission malgré le code à jour.

## Déploiement Vercel

1. Importez ce projet dans GitHub.
2. Importez le dépôt dans Vercel.
3. Ajoutez dans Vercel les variables listées dans `.env.local.example` avec les valeurs de `.env.local`.
4. Déployez.
5. Ajoutez votre domaine Vercel dans Firebase Console > Authentication > Settings > Authorized domains si nécessaire.

## Bibliothèque de prompts prédéfinis

224 prompts prêts à l'emploi (styles, photographie, rendu 3D, lumière, branding, univers, commandes ChatGPT...) sont disponibles dans `lib/seedPrompts.js`. Une fois connecté avec un compte autorisé, un bouton **« Importer N prompts prédéfinis »** apparaît dans la barre latérale tant qu'il en manque : il écrit directement les prompts manquants dans la bibliothèque partagée via votre session Firebase déjà authentifiée (donc respecte les règles RTDB, sans exposer aucune clé). Chaque prompt a un identifiant fixe : l'import peut être relancé sans jamais créer de doublons.

## Important

Les variables `NEXT_PUBLIC_FIREBASE_*` sont destinées au client et ne doivent pas être considérées comme des secrets. La sécurité des données repose sur Firebase Authentication et les règles Realtime Database.
