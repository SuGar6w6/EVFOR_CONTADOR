import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card text-center">
        <div className="card-body">
          <h1>Contador App</h1>
          <div className="body">
            <h2 className="count">{count}</h2>
            <div className="button-group">
              <button className="btn btn-1" onClick={() => setCount(count + 1)}>+</button>
              <button className="btn btn-2" onClick={() => setCount(0)}>Reset</button>
              <button className="btn btn-3" onClick={() => setCount(count - 1)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 

