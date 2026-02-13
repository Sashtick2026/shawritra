
import React from 'react';
import PageFooter from '../components/PageFooter';

const Page7Flower: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 text-center overflow-hidden animate-page-enter">
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Flower and Stem Container */}
        <div className="flex flex-col items-center">
          {/* Flower Head */}
          <div className="relative w-40 h-40 opacity-0 animate-bloom">
            {/* Petals */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <div 
                  className="absolute top-0 left-1/2 -ml-5 w-10 h-16 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
                  style={{
                    background: `linear-gradient(to top, #ff7f9e, #ffc0cb)`,
                    transformOrigin: 'bottom center',
                    transform: `translateY(-30px) rotate(${Math.sin(i * 0.9) * 20}deg)`,
                    opacity: 0.8,
                    boxShadow: 'inset 0 -2px 5px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            ))}
            {/* Center Bud */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #fffaf0, #ffe4e1)'}}></div>
            </div>
          </div>

          {/* Stem */}
          <div className="relative w-1.5 bg-[#6b8e23] rounded-full animate-grow-stem" style={{ boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.3)' }}>
            {/* Leaves */}
            <div className="absolute top-[30%] -left-6 w-8 h-6 bg-[#8fbc8f] rounded-[100%_0%] opacity-0 animate-unfold-leaf" style={{ transformOrigin: 'bottom right', '--rotate': '-120deg', animationDelay: '1.5s' }} />
            <div className="absolute top-[50%] -right-6 w-8 h-6 bg-[#8fbc8f] rounded-[0%_100%] opacity-0 animate-unfold-leaf" style={{ transformOrigin: 'bottom left', '--rotate': '120deg', animationDelay: '1.7s' }} />
          </div>
        </div>

        <h1 
          className="mt-12 font-cursive text-4xl text-glow opacity-0 animate-fade-in"
          style={{ color: '#9C010C', animationDelay: '2.5s' }}
        >
          Our Love in Full Bloom
        </h1>
      </div>
      <PageFooter />
    </div>
  );
};

export default Page7Flower;
