import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <p className="counter-value">{count}</p>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
    </div>
  );
}

export default Counter;