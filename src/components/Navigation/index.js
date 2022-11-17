import React from 'react';
// import profilePhoto from '../../assets/raposa-millar.jpeg';
import musiCode from '../../assets/music-code.png';

export default function Navigation({setCurrentPage}) {
  
  return (
    <nav>
      <h1>Lisa Raposa Millar</h1>
      <span role='img' aria-label='logo-photo'>
            <img src={musiCode} style={{ width: '40%' }} alt='.'/>
      </span>
      
      <div>
        <button onClick = {() => setCurrentPage('about') }>About Me</button>
        <button onClick = {() => setCurrentPage('portfolio') }>Portfolio</button>
        <button onClick = {() => setCurrentPage('contact') }>Contact</button>
        <button onClick = {() => setCurrentPage('resume') }>Resume</button>
      </div>
    </nav>
  );
}; 