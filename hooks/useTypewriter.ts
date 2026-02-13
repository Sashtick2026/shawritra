
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, start: boolean = true) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return displayText;
};
