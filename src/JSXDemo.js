import React from 'react';

function JSXDemo() {
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div className="demo-card">
      <div className="demo-box blue">
        <span className="badge">JSX</span>
        {elementJSX}
        <p className="info">Syntaxe courte et lisible</p>
      </div>
      
      <div className="demo-box green">
        <span className="badge">React.createElement</span>
        {elementJS}
        <p className="info">Ce que Babel genere</p>
      </div>
    </div>
  );
}

export default JSXDemo;