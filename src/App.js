//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import React from 'react';
function App() {
  const [darkmode, setdarkmode] = React.useState(true)

  function toggleDarkMode (){
    setdarkmode(prevvalue => !prevvalue)
  } 

  return (   
    <div className="App">
      <Navbar
      darkMode = {darkmode}
      toggleDarkMode = {toggleDarkMode}
      />
      <MainContent
      darkMode = {darkmode}
      />
    </div>
  );
}

export default App;

