import React from 'react';

function DataLoader({ render }) {
  const data = ['Salma', 'Ahmed', 'Sara'];

  return (
    <div className="bg-white p-4 rounded-xl shadow-inner border border-purple-100">
      <h3 className="text-purple-700 font-bold mb-3 flex items-center">
        📋 Liste des utilisateurs
      </h3>
      {render(data)}
    </div>
  );
}

export default DataLoader;