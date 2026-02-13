
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-10 py-4 text-lg font-bold tracking-wider text-[#fff6e9] transition-transform duration-100 ease-out transform rounded-full hover:scale-105 hover:brightness-110 active:translate-y-1 active:shadow-[0_4px_15px_rgba(255,94,98,0.25)] ${className}`}
      style={{
        fontFamily: "'Playfair Display', serif",
        backgroundImage: 'linear-gradient(135deg, #ff9966, #ff5e62)',
        boxShadow: '0 6px 0 #c54b4f, 0 10px 30px rgba(255,94,98,0.35)',
        ...style
      }}
    >
      {children}
    </button>
  );
};

export default CtaButton;
