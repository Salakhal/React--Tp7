# 🎓 TP7 - Architecture React Avancée

Ce projet a été réalisé dans le cadre du TP7 sur React. Il illustre l'utilisation de concepts avancés tels que JSX, les patterns de composition (HOC, Render Props) et la mise en place de tests automatisés.

L'interface utilisateur a été entièrement repensée avec **Tailwind CSS** pour offrir une expérience de type "Dashboard" moderne et responsive.

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

```
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

````

---

## 🚀 Installation et lancement

### Prérequis
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

### Instructions

1. Cloner le dépôt ou naviguer dans le dossier du projet :
  ```
   cd tp7-jsx-tests
```
2. Installer les dépendances (React, Tailwind, Jest, etc.) :
```
   npm install
```
3. Lancer le serveur de développement :
```
   npm start
```
   L'application sera accessible sur  `[http://localhost:3000](http://localhost:3000).`

---

## 🧪 Lancer les tests

Pour vérifier que tous les composants fonctionnent correctement et que le code respecte les spécifications, lancez la commande suivante :

```
npm test -- --watchAll=false

```
Appuyez sur `a` dans le terminal pour forcer l'exécution de tous les tests.


<img width="885" height="988" alt="image" src="https://github.com/user-attachments/assets/8555c851-dfc2-4beb-93c8-6a835a0410e1" />


## 📺 Vidéo de Démo
 la démonstration vidéo de l'application :





## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Module :** `Développement Front-End moderne avec React`

