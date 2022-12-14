import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {
        currentPage === 'about' 
          ? <About />
        : currentPage === 'portfolio'
          ? <Portfolio />
        : currentPage === 'contact'
          ? <Contact />  
          : <Resume />
      }
      {/* {Footer} */}
    </>
  )
}

export default App;