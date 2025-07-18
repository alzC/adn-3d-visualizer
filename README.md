# ADN 3D Visualizer

Une application Next.js 15 moderne pour la visualisation et l'analyse interactive de données génétiques, avec une interface immersive et animée.

## 🚀 Présentation

**ADN 3D Visualizer** est un prototype d'application web permettant d'explorer, d'analyser et de visualiser des données génétiques de façon interactive et pédagogique. L'interface combine des animations SVG, des effets de glassmorphism et une navigation par onglets pour offrir une expérience utilisateur moderne et agréable.

## ✨ Fonctionnalités principales

- **Visualisation animée d'une hélice d'ADN** (SVG, effet de flottement, particules dynamiques)
- **Panel latéral interactif** avec navigation par onglets :
  - **Analyse** : Statut du séquençage, données clés, qualité de couverture, actions rapides
  - **Séquence** : Navigateur de séquence, annotations géniques, statistiques
  - **Résultats** : Variants détectés, impact clinique, génération de rapports
  - **Avancé** : Paramètres d'algorithmes, seuils de qualité, filtres
- **Composants UI réutilisables** (Button, Card, Tabs)
- **Gestion des styles** avec Tailwind CSS et CSS custom (glassmorphism, gradient, etc.)
- **Polices optimisées** via `next/font/google` (Orbitron, Inter)
- **Code 100% TypeScript**

## 🛠️ Stack technique

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **@react-three/fiber** et **three.js** (prêt pour la 3D, non utilisé dans ce prototype 2D)

## 📁 Structure du projet

```
/app
  layout.tsx         # Layout principal, polices, styles globaux
  page.tsx           # Page d'accueil, composition principale
  globals.css        # Styles globaux et utilitaires
/src
  /components
    DNAHelix2D.tsx   # Composant hélice animée
    LeftPanel.tsx    # Panel latéral interactif
    /ui
      Button.tsx     # Bouton réutilisable
      Card.tsx       # Carte réutilisable
      Tabs.tsx       # Onglets réutilisables
  /hooks
    useAnimatedGradient.ts # Hook pour le fond animé
```

## ⚡ Installation & lancement

1. **Cloner le repo**
   ```bash
   git clone <url-du-repo>
   cd adn-3d-visualizer
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Accéder à l'application**
   Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 🧑‍💻 Bonnes pratiques & évolutivité

- **Composants typés** et découplés pour une meilleure maintenabilité
- **Hooks personnalisés** pour la logique d'animation
- **Séparation claire UI / logique métier**
- **Prêt pour la 3D** : la stack supporte l'intégration de scènes 3D avec React Three Fiber
- **Optimisation SSR/CSR** : gestion correcte de l'hydratation et des effets côté client

## 📚 Personnalisation & extension
- Pour ajouter de nouveaux onglets ou cartes, édite simplement le composant `LeftPanel.tsx`.
- Pour intégrer de la 3D, exploite la stack `@react-three/fiber` déjà installée.
- Les styles sont facilement personnalisables via Tailwind et `globals.css`.

## 📝 Licence

Projet open-source sous licence MIT.

---

**Développé avec passion pour la visualisation scientifique et l'UX moderne.**
