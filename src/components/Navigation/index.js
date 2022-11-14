import React, { useState } from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import ContactForm from '../pages/Contact';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  // Conditionally checks for the value of "currentPage" and renders the selected component, accordingly.  
  const renderPage = () => {
    if (currentPage === '/') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio')  {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    // Renders the Contact component if no other page is selected.
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}; 