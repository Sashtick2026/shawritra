
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import PageFooter from '../components/PageFooter';

const reasons = [
  "I love you because when I talk to you, everything inside me feels calm!! 😌✨",
  "I love you because you understand me even when I don’t explain 🤍🥹",
  "I love you because you accept me exactly the way I am ❤️‍🩹",
  "I love you because your smile can make my worst day better!!! 😭💗",
  "I love you because even small moments with you feel special!! 💌✨",
  "I love you because you make me emotionally stronger 💖",
  "I love you because with you, I feel safe and comfortable 😌💗",
  "I love you because you inspire me to be a better person 😭🫶🏻",
  "I love you because meeting you feels like destiny 😌💖",
  "I love you because when I imagine my future, you are always there!!! 💌✨"
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(16px)',
  borderRadius: '24px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 50px rgba(255, 94, 98, 0.35), 0 0 15px -2px rgba(233, 30, 99, 0.6)',
  border: '2px solid #E91E63',
  cursor: 'pointer'
};

interface ReasonCardProps {
  reason: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason, isFlipped, onFlip }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] max-w-sm aspect-[4/5] p-4 snap-center perspective-1000">
      <div
        className={`relative w-full h-full card-flip ${isFlipped ? 'card-flip-back' : ''}`}
        onClick={onFlip}
      >
        {/* Front Face */}
        <div className="card-face w-full h-full flex flex-col items-center justify-center p-6" style={cardStyle}>
          <p className="text-2xl font-bold text-[#fff6e9]">Tap to Know 😊</p>
        </div>

        {/* Back Face */}
        <div className="card-face card-back w-full h-full flex items-center justify-center p-6 text-center" style={cardStyle}>
          <p className="font-medium text-xl leading-relaxed" style={{ color: '#E91E63' }}>{reason}</p>
        </div>
      </div>
    </div>
  );
};

const Page4Reasons: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [flippedCards, setFlippedCards] = useState(() => Array(reasons.length).fill(false));
  const [popupKey, setPopupKey] = useState(0);
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const startScrolling = () => {
      if (isInteractingRef.current) return;
      scrollIntervalRef.current = window.setInterval(() => {
        const cardWidth = container.querySelector('div')?.clientWidth || 0;
        const scrollAmount = container.scrollLeft + cardWidth;
        
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 3500);
    };

    const stopScrolling = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const onInteractionStart = () => {
        isInteractingRef.current = true;
        stopScrolling();
    };

    const onInteractionEnd = () => {
        isInteractingRef.current = false;
        startScrolling();
    };
    
    startScrolling();
    container.addEventListener('touchstart', onInteractionStart, { passive: true });
    container.addEventListener('touchend', onInteractionEnd, { passive: true });
    container.addEventListener('mousedown', onInteractionStart);
    container.addEventListener('mouseup', onInteractionEnd);


    return () => {
      stopScrolling();
      container.removeEventListener('touchstart', onInteractionStart);
      container.removeEventListener('touchend', onInteractionEnd);
      container.removeEventListener('mousedown', onInteractionStart);
      container.removeEventListener('mouseup', onInteractionEnd);
    };
  }, []);

  const handleCardFlip = (index: number) => {
    setFlippedCards(current => {
      if (current[index]) return current; // Already flipped, do nothing
      const newFlipped = [...current];
      newFlipped[index] = true;
      return newFlipped;
    });
  };

  const handleNavigate = (path: string) => {
    setIsExiting(true);
    setTimeout(() => navigate(path), 600);
  };

  const handleButtonClick = () => {
    const allFlipped = flippedCards.every(flipped => flipped);
    if (allFlipped) {
      handleNavigate('/game');
    } else {
      setPopupKey(prev => prev + 1);
    }
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center overflow-hidden ${isExiting ? 'animate-page-exit' : 'animate-page-enter'}`}>
      <div className="pt-8 text-center px-4 w-full">
        <h1 
          className="font-cursive text-[32px] font-bold opacity-0 animate-fade-in"
          style={{ 
            color: '#9C010C', 
            textShadow: '0 2px 8px rgba(255,0,50,0.3)',
            animationDelay: '0.2s',
          }}
        >
          Why I Love You
        </h1>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex w-full items-center py-6 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex-shrink-0 w-2 h-2"></div> {/* Spacer */}
        {reasons.map((reason, index) => (
          <ReasonCard 
            key={index} 
            reason={reason} 
            isFlipped={flippedCards[index]}
            onFlip={() => handleCardFlip(index)}
          />
        ))}
        <div className="flex-shrink-0 w-2 h-2"></div> {/* Spacer */}
      </div>

      <div className="text-center px-6 py-2 opacity-0 animate-fade-in flex-grow flex flex-col justify-center" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg font-medium" style={{ color: '#E91E63' }}>There Are Infinite Reasons More♾️</p>
      </div>
      
      <div className="text-center pt-4 opacity-0 animate-slide-up" style={{ animationDelay: '1s' }}>
        <CtaButton onClick={handleButtonClick}>
          Play a Little Game
        </CtaButton>
      </div>

      <PageFooter />

      {popupKey > 0 && (
        <div key={popupKey} className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-black/60 text-white px-6 py-3 rounded-full animate-popup shadow-lg" style={{backdropFilter: 'blur(5px)'}}>
          Please Know All The Reasons🙏🏻
        </div>
      )}

       <style>{`
          .snap-x { scroll-snap-type: x mandatory; }
          .snap-center { scroll-snap-align: center; }
          .overflow-x-auto::-webkit-scrollbar { display: none; }
       `}</style>
    </div>
  );
};

export default Page4Reasons;
