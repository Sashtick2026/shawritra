
import React, { useMemo, useState, useEffect } from 'react';

const HeartIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const LoveUniverseBackground: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                setMousePos({ x: event.touches[0].clientX, y: event.touches[0].clientY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const parallaxX = (mousePos.x - window.innerWidth / 2) / 60;
    const parallaxY = (mousePos.y - window.innerHeight / 2) / 60;
    const particleParallaxStyle = {
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: 'transform 0.3s ease-out'
    };

    const hearts = useMemo(() => {
        const heartColors = ['#ff7f9e', '#ff99aa', '#ffc0cb'];
        return Array.from({ length: 20 }).map((_, i) => {
            const size = Math.floor(Math.random() * 3); // 0, 1, 2
            const sizes = ['14px', '22px', '32px'];
            const style = {
                width: sizes[size],
                height: sizes[size],
                left: `${Math.random() * 100}%`,
                top: '110%',
                color: heartColors[Math.floor(Math.random() * heartColors.length)],
                animation: `float-heart ${10 + Math.random() * 10}s ${Math.random() * 15}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))'
            };
            return <HeartIcon key={`h-${i}`} className="absolute" style={style} />;
        });
    }, []);

    const particles = useMemo(() => {
        const particleColors = ['#fffaf0', '#ffe6f0'];
        return Array.from({ length: 50 }).map((_, i) => {
            const size = `${2 + Math.random() * 5}px`;
            const style = {
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: '110%',
                backgroundColor: particleColors[Math.floor(Math.random() * particleColors.length)],
                filter: `blur(${Math.random() * 4 + 4}px)`,
                animation: `float-particle ${8 + Math.random() * 12}s ${Math.random() * 10}s linear infinite`,
            };
            return <div key={`p-${i}`} className="absolute rounded-full" style={style} />;
        });
    }, []);

    const ribbons = useMemo(() => {
        return Array.from({ length: 2 }).map((_, i) => (
            <div
                key={`r-${i}`}
                className="absolute h-1 w-full top-1/3 opacity-0"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: `sweep-ribbon ${8 + i * 4}s ${i * 5}s ease-in-out infinite`,
                }}
            />
        ));
    }, []);

    const bursts = useMemo(() => {
        return Array.from({ length: 3 }).map((_, i) => (
            <HeartIcon
                key={`b-${i}`}
                className="absolute text-pink-300 text-5xl opacity-0"
                style={{
                    top: `${20 + Math.random() * 40}%`,
                    left: `${20 + Math.random() * 60}%`,
                    filter: 'blur(3px)',
                    animation: `heart-burst-effect 4s ${i * 7 + Math.random() * 5}s ease-out infinite`,
                }}
            />
        ));
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none love-universe-bg">
            {hearts}
            <div style={particleParallaxStyle} className="absolute inset-0">
              {particles}
            </div>
            {ribbons}
            {bursts}
        </div>
    );
};

export default LoveUniverseBackground;
