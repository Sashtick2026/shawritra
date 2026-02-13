
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import PageFooter from '../components/PageFooter';

interface Memory {
  id: number;
  imageSrc: string;
  text: string;
}

const memories: Memory[] = [
  { id: 1, imageSrc: "https://i.ibb.co/gMhm1qCb/1000077293.jpg", text: "01-10-2025✨!! — something magical happened 😭💗\nFor the first time,I didn’t just hear you… I saw you!!!🥹✨\nYour eyes, your smile, the way you looked at me through that little screen — it felt unreal, like a dream I was too afraid to blink inside😌💖\nThat day became one of the most precious memories of my life😭💗!!!\nBecause that was the day I realized…\nI don’t just love you —\nI feel you in every heartbeat❤️‍🩹!" },
  { id: 2, imageSrc: "https://i.ibb.co/84KFTgzm/1000077292.jpg", text: "17-05-2024!!!\nMy whole life quietly changed!😭💖\nI saw you for the very first time… and without even realizing it, I fell in love🥹✨\nIt wasn’t loud,it wasn’t dramatic —it was soft, deep and real😌💗✨\nThe moment my eyes met you, something inside my heart whispered,\n“This is her”❤️‍🩹\nI didn’t know how or why but I felt it so strongly that it almost made me cry!!!😭💌\nThat day is still playing in my mind like a beautiful movie💌✨ (8:43 pm)💖" },
  { id: 3, imageSrc: "https://i.ibb.co/5qN30zL/1000077256.jpg", text: "22-12-2025!!!😭❤️‍🩹\nSomething unbelievable happened😭💖\nAfter 128 kilometers,after so many days of missing you,I finally stood in front of you!!🥹✨\nYou didn’t even know I was there… and that made the moment even more magical😌💗\nWhen you saw me, your eyes changed — shock,happiness,love, everything came together at once!!!😭💌\nThat one look from you was worth every kilometer I traveled ❤️‍🩹!\nI still remember how my heart was beating so fast while I was waiting to surprise you!!🥹\nThat wasn’t just our first meeting — that was two souls who already loved each other, finally touching reality😭❤️‍🩹!!!\nThe distance disappeared in one second, and all that remained was you and me!😌💗\nNo screen,no calls — just us, standing together, breathing the same air🥹✨\nI will carry that day in my heart forever,\nbecause that was the day I didn’t just love you —\nI met my 'Love'💌✨😭!!!!" },
  { id: 4, imageSrc: "https://i.ibb.co/CpsMMzZ5/1000077261.jpg", text: "23-12-2025!!!💗😌\nwe didn’t just go on a date… we stepped into something pure,peaceful and magical together!!😭💗\nInside that temple, everything felt so calm...!🥹✨\nStanding beside you in a holy place,\nI felt something deeper than love❤️‍🩹!\nI felt destiny like our hearts were meant to walk this path together😭💌✨\nThe way you looked at me, the way we talked softly,\nevery second felt like a memory being written forever!!🥹✨\nI wanted time to stop so I could stay there with you just a little longer😌💗\nThat temple saw our smiles, our shy glances,\nand the love we were too emotional to even explain😭💖\nThat day became one of the most beautiful chapters of my life,\nbecause it wasn’t just a date it was two souls praying silently to always stay together❤️‍🩹✨\nI will always keep 23-12-2025 safe in my heart,\nbecause that was the day love felt sacred!!!🥹💌✨" },
  { id: 5, imageSrc: "https://i.ibb.co/hxVPTKSW/1000077270.jpg", text: "04-07-2025!!!😌💌✨\nwe didn’t just talk… we made a promise that touched our souls😭💖\nWe promised each other that we would stay together till our last breath!!!🥹✨\nNot just in happy times but in every storm,every silence,every tear❤️‍🩹!!\nThat promise wasn’t made with words only it was made with hearts that were already deeply connected...😌💗\nNo matter how far,how hard, how long…\nI will always hold that promise close to my heart❤️‍🩹!\nBecause it was made with you the one my soul choose😭💗✨!!!\nIloveeeeyouuuusoooomucchhhhhhh Myyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Godhuuuuuuuuuuuuuuuuuuuuuuuuu🥹💗!!!!!!!!" },
];

interface BalloonState {
  id: number;
  popped: boolean;
  memory: Memory;
  style: React.CSSProperties;
}

const PopEffect: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onAnimationEnd, 600);
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * 360;
        const radius = 40 + Math.random() * 25;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: 'linear-gradient(135deg, #ff7895, #e6395b)',
              width: `${6 + Math.random() * 6}px`,
              height: `${6 + Math.random() * 6}px`,
              '--x': `${x}px`,
              '--y': `${y}px`,
              animation: 'pop-particle-anim 0.6s ease-out forwards',
            }}
          />
        );
      })}
    </div>
  );
};

const Balloon: React.FC<{ state: BalloonState; onClick: () => void }> = ({ state, onClick }) => {
  return (
    <div
      className="absolute cursor-pointer transition-transform duration-200"
      style={state.style}
      onClick={onClick}
    >
      <div 
        className="w-16 h-20 rounded-full"
        style={{ 
          background: 'linear-gradient(135deg, #ff7895, #e6395b)',
          boxShadow: '0 8px 20px rgba(230, 57, 91, 0.4)',
        }}
      />
      <div 
        className="w-4 h-4" 
        style={{
          background: '#e6395b',
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
          position: 'absolute',
          bottom: '-5px',
          left: 'calc(50% - 8px)',
        }}
      />
    </div>
  );
};

const Page5Game: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const [balloons, setBalloons] = useState<BalloonState[]>([]);
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);
  const [pops, setPops] = useState<{ id: number; top: string | number; left: string | number }[]>([]);
  const [fullPreviewImage, setFullPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setBalloons(memories.map((mem) => {
      const roamX = (-40 + Math.random() * 80); // roam between -40px and 40px
      const roamY = (-40 + Math.random() * 80);
      return {
        id: mem.id,
        popped: false,
        memory: mem,
        style: {
          top: `${15 + Math.random() * 50}%`,
          left: `${5 + Math.random() * 70}%`,
          '--roam-x': `${roamX}px`,
          '--roam-y': `${roamY}px`,
          animation: `balloon-roam ${6 + Math.random() * 5}s ease-in-out ${Math.random() * 4}s infinite`,
        }
      };
    }));
  }, []);

  const poppedCount = useMemo(() => balloons.filter(b => b.popped).length, [balloons]);
  const gameComplete = useMemo(() => poppedCount === memories.length && balloons.length > 0, [poppedCount, balloons]);

  const handleBalloonPop = (id: number) => {
    if (activeMemory) return;

    const balloon = balloons.find(b => b.id === id);
    if (balloon && !balloon.popped) {
      if (window.navigator.vibrate) window.navigator.vibrate(50);
      
      const popId = Date.now();
      setPops(current => [...current, { id: popId, top: balloon.style.top, left: balloon.style.left }]);
      
      setBalloons(current => current.map(b => b.id === id ? { ...b, popped: true } : b));
      setActiveMemory(balloon.memory);
    }
  };
  
  const handleNavigate = (path: string) => {
    setIsExiting(true);
    setTimeout(() => navigate(path), 600);
  };
  
  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center p-6 text-center overflow-hidden ${isExiting ? 'animate-page-exit' : 'animate-page-enter'}`}>
      
      {!gameComplete && (
        <>
          <div className="pt-8 text-center px-4 w-full opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', zIndex: 10 }}>
            <h1 className="font-cursive text-[32px] font-bold" style={{ color: '#9C010C', textShadow: '0 2px 8px rgba(255,0,50,0.3)' }}>
              Pop 5 Balloons🎈
            </h1>
            <p className="text-lg font-bold mt-2" style={{ color: 'rgba(156, 1, 12, 0.8)' }}>{poppedCount} / {memories.length}</p>
          </div>

          <div className="absolute inset-0 w-full h-full">
            {balloons.filter(b => !b.popped).map(b => (
              <Balloon key={b.id} state={b} onClick={() => handleBalloonPop(b.id)} />
            ))}
            {pops.map(p => (
              <div key={p.id} style={{ position: 'absolute', top: p.top, left: p.left, width: '64px', height: '80px', pointerEvents: 'none' }}>
                <PopEffect onAnimationEnd={() => setPops(current => current.filter(pop => pop.id !== p.id))} />
              </div>
            ))}
          </div>
          <div className="flex-grow"></div>
          <PageFooter />
        </>
      )}

      {gameComplete && (
        <>
          <div className="relative z-20 flex flex-col items-center justify-center flex-grow animate-page-enter">
              {Array.from({length: 50}).map((_, i) => <div key={i} className="absolute top-0 w-2 h-4 rounded-sm" style={{ left: `${Math.random()*100}%`, background: ['#ff99aa', '#ff7f9e', '#ffc0cb'][Math.floor(Math.random()*3)], animation: `confetti-fall ${2+Math.random()*3}s ${Math.random()*2}s linear infinite`}}/>)}
              <h2 className="text-4xl md:text-6xl font-heading text-glow max-w-lg" style={{lineHeight: '1.4', color: '#E91E63'}}>And I Want Forever With You.</h2>
              <CtaButton onClick={() => handleNavigate('/letter')} className="mt-12">
              One Last Thing…
              </CtaButton>
          </div>
          <PageFooter />
        </>
      )}

      {activeMemory && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70" style={{ backdropFilter: 'blur(8px)'}}>
          <div className="relative flex flex-col items-center p-6 m-4 max-w-sm w-full rounded-3xl animate-modal-slide-in" style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 20px 50px rgba(255,94,98,0.25)'}}>
            <button onClick={() => setActiveMemory(null)} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/20 text-white text-xl font-bold flex items-center justify-center" style={{textShadow: '0 0 5px #ff7f9e'}}>
              &times;
            </button>
            <div className="w-[150px] h-[150px] mb-4 perspective-1000 cursor-pointer" onClick={() => setFullPreviewImage(activeMemory.imageSrc)}>
                <img 
                    src={activeMemory.imageSrc} 
                    alt="Memory"
                    className="w-full h-full object-contain rounded-full border-4 border-white/50 shadow-lg animate-scale-in"
                    style={{
                        transform: 'rotateY(-10deg) rotateX(5deg)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        animationDelay: '0.2s'
                    }}
                />
            </div>
            <div className="w-full max-h-[40vh] overflow-y-auto pr-2">
              <p className="text-base text-left whitespace-pre-wrap leading-relaxed">{activeMemory.text}</p>
            </div>
            <div className="mt-6 w-full flex justify-center">
                <button
                    onClick={() => setActiveMemory(null)}
                    className="bg-white/15 border border-white/30 text-white font-bold py-2 px-8 rounded-full transition hover:bg-white/25 active:scale-95"
                >
                    {poppedCount === memories.length ? 'Okay' : 'Continue'}
                </button>
            </div>
          </div>
        </div>
      )}

      {fullPreviewImage && (
        <div 
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 animate-fade-in" 
          onClick={() => setFullPreviewImage(null)}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <img 
            src={fullPreviewImage} 
            alt="Full Memory Preview"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Page5Game;
