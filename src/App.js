import React from 'react';
import './App.css';
import Header from './components/UI/header/Header';
import NavMenu from './components/UI/navMenu/NavMenu'

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Header/>
    </div>
  );
}

export default App;
