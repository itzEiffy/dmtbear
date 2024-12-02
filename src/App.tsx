import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Tokenomics />
      <HowToBuy />
    </div>
  );
}

export default App;