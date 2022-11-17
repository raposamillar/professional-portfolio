import React from 'react';
import profilePhoto from '../../assets/raposa-millar.jpeg';
import Footer from '../Footer';

export default function Navigation({setCurrentPage}) {
  
  return (
    <nav>
      <h1>Lisa Raposa Millar</h1>
      <span role='img' aria-label='profile photo'>
            <img src={profilePhoto} style={{ width: '25%' }} alt='Lisa Raposa Millar in High Park in Toronto.'/>
      </span>
      
      <div>
        <button onClick = {() => setCurrentPage('about') }>About Me</button>
        <button onClick = {() => setCurrentPage('portfolio') }>Portfolio</button>
        <button onClick = {() => setCurrentPage('contact') }>Contact</button>
        <button onClick = {() => setCurrentPage('resume') }>Resume</button>
      </div>
      { Footer }
    </nav>
    
  );
}; 