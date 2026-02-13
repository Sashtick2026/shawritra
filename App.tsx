
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1Hero from './pages/Page1Hero';
import Page2Beginning from './pages/Page2Beginning';
import Page3Gallery from './pages/Page3Gallery';
import Page4Reasons from './pages/Page4Reasons';
import Page5Game from './pages/Page5Game';
import Page6Letter from './pages/Page6Letter';
import LoveUniverseBackground from './components/LoveUniverseBackground';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden relative">
      <LoveUniverseBackground />
      <Routes>
        <Route path="/" element={<Page1Hero />} />
        <Route path="/beginning" element={<Page2Beginning />} />
        <Route path="/gallery" element={<Page3Gallery />} />
        <Route path="/reasons" element={<Page4Reasons />} />
        <Route path="/game" element={<Page5Game />} />
        <Route path="/letter" element={<Page6Letter />} />
      </Routes>
    </main>
  );
};

export default App;
