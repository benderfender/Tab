import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './component/Tablet';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Tab/>
    </div>
  );
}

export default App;
