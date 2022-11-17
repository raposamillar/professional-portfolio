import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {
        currentPage === 'about' 
          ? <About />
        : currentPage === 'contact'
          ? <Contact />
          : <Resume />
      }
    </>
  )
}

export default App;