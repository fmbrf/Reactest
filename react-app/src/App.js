import React, { useState } from 'react';
import './App.css';

function App() {
  const [reacftest, setReacftest] = useState('');

  const handleChange = (event) => {
    setReacftest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with value:', reacftest);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            reacftest:
            <input type="text" value={reacftest} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
