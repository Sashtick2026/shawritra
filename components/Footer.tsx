
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 text-center opacity-0 animate-fade-in"
      style={{
        color: '#E91E63',
        animationDelay: '2s',
        pointerEvents: 'none',
      }}
    >
      <p className="text-sm font-semibold">
        © Made With L❤️VE Especially for You GODHULI
      </p>
    </footer>
  );
};

export default Footer;
