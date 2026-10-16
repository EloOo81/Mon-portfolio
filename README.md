# Studio Code

Création de sites web sur mesure et d'assistants IA pour artisans, commerçants et petites entreprises. Site officiel : [studio-code.fr](https://studio-code.fr)

## Ce que contient ce dépôt

- **Sites vitrines** en HTML, CSS et JavaScript, sans framework : design unique pour chaque projet, affichage mobile, référencement local (balises, données structurées, sitemap).
- **Assistants IA** branchés sur des sites web, avec leur code dans le dossier [workers](workers) :
  - **Aura** ([workers/aura-ia.js](workers/aura-ia.js)) : assistante d'une agence immobilière de démonstration. Elle répond aux questions sur chaque bien, comprend plusieurs langues et propose une recherche intelligente en langage naturel. Voir la [démo AURA](https://studio-code.fr/conciergerie-immobilier-luxe.html).
  - **Nexo** ([workers/nexo-chat.js](workers/nexo-chat.js)) : assistant de Studio Code qui répond aux visiteurs du site. Ses consignes sont privées et ne sont pas publiées ici.
- **Pages de démonstration** : restaurant, salon de coiffure, fleuriste, hôtel, spa, cabinet juridique, agents IA pour les e-mails, les devis et l'immobilier.

## Compétences mises en œuvre

- HTML sémantique, CSS responsive, animations, JavaScript natif (formulaires, filtres, chat, synthèse vocale du navigateur).
- Cloudflare Workers et Workers AI : serveur léger, modèles de langage, aucune clé secrète exposée côté navigateur.
- Contrôle de la qualité des réponses d'une IA : tests sur des dizaines de questions, correction des consignes, protection contre les demandes détournées.
- GitHub Pages, nom de domaine, Google Search Console, SEO local.

## Remarque

Les sites de démonstration contiennent des informations et des avis fictifs, signalés comme tels sur les pages.
