import React from 'react';
import logo from './images/logo512.png'

function Navbar(props) {
  console.log(props.darkMode)
  return (

    <header className={props.darkMode ? "Nav": "Nav dark"}>
    <img src={logo} width="80px"></img>
    <h2> ReactFacts</h2>
    <h3> React Course - Project 1</h3>
     <div className="toggler">
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
    </header>
  
   
  )
}

export default Navbar