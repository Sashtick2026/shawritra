
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import CtaButton from '../components/CtaButton';
import PageFooter from '../components/PageFooter';

const Page2Beginning: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const typedText = useTypewriter("This is where our story began...", 50);

  const handleNavigate = (path: string) => {
    setIsExiting(true);
    setTimeout(() => navigate(path), 600);
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center p-6 text-center overflow-hidden ${isExiting ? 'animate-page-exit' : 'animate-page-enter'}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm scale-110"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/couplelove/800/800)' }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="flex-grow w-full flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-heading text-glow">
            Where It All Started
          </h1>
          
          <p className="mt-6 text-lg text-[#fff6e9] min-h-[28px] font-mono">
            {typedText}
          </p>

          <div className="w-24 h-px my-12 bg-gradient-to-r from-transparent via-[#ff99aa] to-transparent"></div>

          <CtaButton onClick={() => handleNavigate('/gallery')}>
            Relive Our Memories
          </CtaButton>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Page2Beginning;
