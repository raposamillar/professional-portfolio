import React from 'react';
import About from './components/Header';

function App() {
  return (
    <div>
      <main>
        { true ? 
        <About />:
        ""
        }
      </main>
    </div>
  );
}

export default App;