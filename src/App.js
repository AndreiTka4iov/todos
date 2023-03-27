import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import DarkScreen from './components/UI/darkScreen/DarkScreen';
import Header from './components/UI/header/Header';
import MakeNew from './components/UI/makeNew/MakeNew';
import NavMenu from './components/UI/navMenu/NavMenu'
import Main from './pages/Main';

function App() {
  const mode = useSelector(state => state.mode.dark)
  return (
    <div className={mode ? "App dark" : "App"}>
      <MakeNew/>
      <NavMenu/>
      <Header/>
      <Main/>
      <DarkScreen/>
    </div>
  );
}

export default App;
