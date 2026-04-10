# 🎓 TP7 - Architecture React Avancée

Ce projet a été réalisé dans le cadre du TP7 sur React. Il illustre l'utilisation de concepts avancés tels que JSX, les patterns de composition (HOC, Render Props) et la mise en place de tests automatisés.

L'interface utilisateur a été entièrement repensée avec **Tailwind CSS** pour offrir une expérience de type "Dashboard" moderne et responsive.

![Aperçu du projet](https://img.shields.io/badge/UI-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/Framework-React-61DAFB?style=flat-square&logo=react)
![Tests](https://img.shields.io/badge/Tests-Jest_%26_RTL-C21325?style=flat-square&logo=jest)

---

## ✨ Fonctionnalités implémentées

1. **Comprendre JSX** : 
   - Comparaison visuelle entre la syntaxe `JSX` claire et la fonction `React.createElement()` générée par Babel.
2. **Higher-Order Component (HOC)** : 
   - Création d'un wrapper `withLogging` qui intercepte et affiche les `props` dans la console du navigateur au rendu du composant.
3. **Render Props Pattern** : 
   - Séparation de la logique de données (`DataLoader`) et de la logique d'affichage, permettant une personnalisation totale du rendu UI depuis le composant parent.
4. **Tests Unitaires et d'Intégration** : 
   - Utilisation de *Jest* et *React Testing Library* pour vérifier l'affichage des éléments textuels (y compris avec les Emojis via Regex) et simuler l'interaction utilisateur (clic sur un compteur).

---

## 🛠️ Technologies utilisées

- **React.js** (v18+)
- **Tailwind CSS** (Styling utilitaire)
- **Jest** (Test Runner)
- **React Testing Library** (Tests de composants)

---

## 📂 Structure du projet

\`\`\`text
tp7-jsx-tests/
├── src/
│   ├── App.js             # Composant principal (Dashboard)
│   ├── App.test.js        # Test global de l'interface
│   ├── Counter.js         # Composant compteur interactif
│   ├── Counter.test.js    # Test d'intégration (clic bouton)
│   ├── DataLoader.js      # Logique Render Props
│   ├── Greeting.js        # Composant d'affichage simple
│   ├── Greeting.test.js   # Test unitaire classique
│   ├── JSXDemo.js         # Comparaison JSX vs JS pur
│   ├── withLogging.js     # Composant d'ordre supérieur (HOC)
│   ├── index.css          # Fichier CSS racine (imports Tailwind)
│   └── index.js           # Point d'entrée React
├── tailwind.config.js     # Configuration du design système
├── package.json           # Dépendances du projet
└── README.md              # Documentation du projet
\`\`\`

---

## 🚀 Installation et lancement

### Prérequis
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

### Instructions

1. Cloner le dépôt ou naviguer dans le dossier du projet :
   \`\`\`bash
   cd tp7-jsx-tests
   \`\`\`

2. Installer les dépendances (React, Tailwind, Jest, etc.) :
   \`\`\`bash
   npm install
   \`\`\`

3. Lancer le serveur de développement :
   \`\`\`bash
   npm start
   \`\`\`
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🧪 Lancer les tests

Pour vérifier que tous les composants fonctionnent correctement et que le code respecte les spécifications, lancez la commande suivante :

\`\`\`bash
npm test
\`\`\`

Appuyez sur `a` dans le terminal pour forcer l'exécution de tous les tests.



