import React from 'react'

function MainContent(props) {
  return (
    
    <div className={props.darkMode ? "Maincontent" : "Maincontent dark"}>
        <h1 className='Title'> Fun facts about React </h1>
        <ul>
            <li>Was first released in 2013</li><br></br>
            <li>Was originally created by Jordan Walke </li><br></br>
            <li>Has well over 100k stars on GitHub </li><br></br>
            <li>Is maintained by Facebook </li><br></br>
            <li className='last li'>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    
    
    

  )
}

export default MainContent