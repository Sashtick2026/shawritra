
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import PageFooter from '../components/PageFooter';

const galleryItems = [
  { id: 1, src: 'https://i.ibb.co/hxVPTKSW/1000077270.jpg' },
  { id: 2, src: 'https://i.ibb.co/CpsMMzZ5/1000077261.jpg' },
  { id: 3, src: 'https://i.ibb.co/WWWPCw65/1000077266.jpg' },
  { id: 4, src: 'https://i.ibb.co/5qN30zL/1000077256.jpg' },
  { id: 5, src: 'https://i.ibb.co/PGqHQ5vJ/1000077258.jpg' },
];

const GalleryImage: React.FC<{ item: typeof galleryItems[0]; onClick: () => void }> = ({ item, onClick }) => (
  <div 
    className="relative w-44 h-60 rounded-[24px] overflow-hidden cursor-pointer group p-2"
    style={{
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 20px rgba(255,94,98,0.25)'
    }}
    onClick={onClick}
  >
    <img src={item.src} alt={`Gallery image ${item.id}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-[16px] border-4 border-[#E91E63]" />
  </div>
);

const Page3Gallery: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [showHeart, setShowHeart] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setIsExiting(true);
    setTimeout(() => navigate(path), 600);
  };
  
  const openModal = (src: string) => {
    setModalImage(src);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 600);
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col ${isExiting ? 'animate-page-exit' : 'animate-page-enter'}`}>
      <div className="flex-grow w-full overflow-y-auto">
        <div className="p-4 pt-8 md:p-12 md:pt-24 text-center flex flex-col items-center">
          <h1 
            className="font-cursive text-[32px] font-bold opacity-0 animate-fade-in"
            style={{ 
              color: '#9C010C', 
              textShadow: '0 2px 8px rgba(255,0,50,0.3)',
              animationDelay: '0.2s',
            }}
          >
            Our Beautiful Moments
          </h1>
          
          <div className="flex flex-col items-center gap-4 mt-6">
            {/* Row 1 */}
            <div className="flex justify-center gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {galleryItems.slice(0, 2).map(item => (
                <GalleryImage key={item.id} item={item} onClick={() => openModal(item.src)} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex justify-center gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              {galleryItems.slice(2, 4).map(item => (
                <GalleryImage key={item.id} item={item} onClick={() => openModal(item.src)} />
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.9s' }}>
              {galleryItems.slice(4, 5).map(item => (
                <GalleryImage key={item.id} item={item} onClick={() => openModal(item.src)} />
              ))}
            </div>
          </div>

          <div className="mt-7 opacity-0 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <CtaButton onClick={() => handleNavigate('/reasons')} className="mb-8">
              Why I Love You
              </CtaButton>
          </div>

        </div>
      </div>
      <PageFooter />

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-page-enter" onClick={() => setModalImage(null)} style={{ backdropFilter: 'blur(8px)'}}>
          <div className="relative p-2 rounded-3xl" style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)'}}>
            <img src={modalImage} alt="Full view" className="max-w-[90vw] max-h-[80vh] rounded-2xl object-contain"/>
            <button onClick={() => setModalImage(null)} className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/20 text-white text-2xl font-bold flex items-center justify-center" style={{textShadow: '0 0 5px #ff7f9e'}}>
              &times;
            </button>
          </div>
          {showHeart && (
             <div className="absolute text-5xl animate-heart-burst">❤️</div>
          )}
           <style>{`
                @keyframes heart-burst {
                    0% { transform: scale(0); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                .animate-heart-burst {
                    animation: heart-burst 0.6s ease-out forwards;
                }
            `}</style>
        </div>
      )}
    </div>
  );
};

export default Page3Gallery;
