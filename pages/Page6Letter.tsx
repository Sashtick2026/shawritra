
import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import PageFooter from '../components/PageFooter';

const loveLetterText = `On this Valentine’s Day, I don’t want chocolates or roses...! I only want you💗your smile💗 your love💗your presence✨in my life because you are more precious to me than anything else in this world💖✨!!!
If someday you ever feel alone, remember this: there is someone who loves you beyond words,beyond time,beyond everything. That someone is me. My heart beats for you,my soul belongs to you and my future is written with your name!!💌🥹✨
And if I had to choose one place to stay forever,it would be in your arms,where the whole world feels quiet and safe😌💖! Godhuli,you are my today, my tomorrow and every dream in between😭💗!!!!
I love you more than these words can ever say and I will keep loving you till my last breath…and even beyond😌🤍✨

                                                    - Yours, Shammo`;

const Page6Letter: React.FC = () => {
  const typedLetter = useTypewriter(loveLetterText, 40);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 text-center overflow-hidden animate-page-enter">
      
      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <h1 
          className="font-cursive font-bold text-4xl opacity-0 animate-slide-down"
          style={{ 
            color: '#9C010C', 
            textShadow: '0 2px 8px rgba(255,0,50,0.3)',
            animationDelay: '0.2s',
          }}
        >
          A Letter From My Heart
        </h1>
        
        <div 
          className="relative mt-6 p-6 rounded-3xl max-w-xl w-full opacity-0 animate-fade-in" 
          style={{
            background: 'rgba(255,255,255,0.08)', 
            backdropFilter: 'blur(16px)', 
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 50px rgba(255,94,98,0.25)',
            animationDelay: '0.6s'
          }}
        >
          <div className="max-h-[50vh] overflow-y-auto pr-2">
            <p className="font-heading italic text-left text-lg leading-loose whitespace-pre-wrap" style={{ color: '#E91E63' }}>
              {typedLetter}
              <span className="opacity-0">{loveLetterText.slice(typedLetter.length)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-6 text-center opacity-0 animate-slide-up" style={{ animationDelay: '3s' }}>
        <p className="font-heading text-2xl font-bold" style={{ color: '#9C010C', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
          Thank You For Entering in My Life ❣️
        </p>
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Page6Letter;
