import React from 'react';
import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import Counter from './Counter';
import Greeting from './Greeting';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>TP7 - React Avance</h1>
        <p>JSX | HOC | Render Props | Tests</p>
      </header>

      <main className="main">
        <section className="section">
          <h2>JSX en action</h2>
          <JSXDemo />
        </section>

        <section className="section">
          <h2>Higher-Order Component</h2>
          <p className="desc">Le HOC withLogging affiche les props dans la console</p>
          <ButtonWithLogging label="Cliquez ici" />
        </section>

        <section className="section">
          <h2>Render Props</h2>
          <p className="desc">Le composant DataLoader utilise une fonction render</p>
          <DataLoader render={(data) => (
            <ul className="data-list">
              {data.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )} />
        </section>

        <section className="section">
          <h2>Compteur avec test</h2>
          <Counter />
        </section>

        <section className="section">
          <h2>Test unitaire</h2>
          <Greeting name="Etudiant" />
        </section>
      </main>

      <footer className="footer">
        <p>Comprendre JSX | Composition avancee | Tests React</p>
      </footer>
    </div>
  );
}

export default App;