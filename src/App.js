import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LETS GO VIKES!
        </p>
        <a
          className="App-link"
          href="https://www.vikings.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Website
        </a>
      </header>
    </div>
  );
}

export default App;
