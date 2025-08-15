import React, { useEffect, useRef } from 'react';

const Starfield: React.FC = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starfieldRef.current) return;

      const starCount = 100;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        starfieldRef.current.appendChild(star);
      }
    };

    createStars();
  }, []);

  return <div ref={starfieldRef} className="starfield"></div>;
};

export default Starfield;