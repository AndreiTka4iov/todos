import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/UI/header/Header';
import NavMenu from './components/UI/navMenu/NavMenu'
import Main from './pages/Main';

function App() {
  const mode = useSelector(state => state.mode.dark)
  return (
    <div className={mode ? "App dark" : "App"}>
      <NavMenu/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
