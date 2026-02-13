
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import PageFooter from '../components/PageFooter';

const HeartIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Page1Hero: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setIsExiting(true);
    setTimeout(() => navigate(path), 600);
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center p-6 text-center overflow-hidden ${isExiting ? 'animate-page-exit' : 'animate-page-enter'}`}>
      <div className="flex-grow w-full flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
          
          {/* 1. Name + Hearts */}
          <div className="flex items-center justify-center space-x-4 opacity-0 animate-pop-up" style={{ animationDelay: '0s' }}>
            <HeartIcon className="w-8 h-8 text-[#ff758c] animate-heartbeat" style={{ filter: 'drop-shadow(0 4px 12px rgba(255,117,140,0.4))' }} />
            <h1 className="font-cursive text-8xl font-bold" style={{ color: '#ff4e8a' }}>
              Godhuli
            </h1>
            <HeartIcon className="w-8 h-8 text-[#ff758c] animate-heartbeat" style={{ filter: 'drop-shadow(0 4px 12px rgba(255,117,140,0.4))' }} />
          </div>

          {/* 2. Profile Image */}
          <div 
              className="relative w-[200px] h-[200px] rounded-full opacity-0 animate-scale-in"
              style={{ 
                  animationDelay: '0.8s', 
                  boxShadow: '0 8px 20px rgba(255,117,140,0.25)' 
              }}
          >
              <img 
                  src="https://i.ibb.co/xS99f4nQ/IMG-20260213-204428.jpg" 
                  alt="Godhuli" 
                  className="w-full h-full object-cover rounded-full border-8 border-[#E91E63] animate-subtle-float"
                  style={{
                    animationDelay: '1.4s', // Start floating after scaling in
                    boxShadow: '0 0 25px 8px rgba(255, 182, 193, 0.6)' // Glow effect
                  }}
              />
          </div>

          {/* 3. Main Heading */}
          <h2 className="text-4xl font-bold font-heading opacity-0 animate-slide-down" style={{ color: '#9C010C', textShadow: '0 2px 4px rgba(0,0,0,0.2)', animationDelay: '1.5s' }}>
            Out of Billions... I Found You!!!
          </h2>

          {/* 4. Subtext */}
          <p className="text-lg font-medium leading-relaxed max-w-xs opacity-0 animate-fade-in" style={{ color: '#E91E63', animationDelay: '2.3s' }}>
            A Love Story Written by Destiny. Let The Journey Begin.
          </p>

          {/* 5. CTA Button */}
          <div className="pt-2 opacity-0 animate-slide-up" style={{ animationDelay: '2.5s' }}>
              <CtaButton 
                className="opacity-0 animate-fade-in" 
                style={{ animationDelay: '3.3s' }}
                onClick={() => handleNavigate('/beginning')}
              >
                  Step Into Our Story
              </CtaButton>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Page1Hero;
