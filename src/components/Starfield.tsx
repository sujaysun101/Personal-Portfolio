import React, { useEffect, useRef } from 'react';

/*
  Enhanced starfield: drifting particles that move diagonally to emulate subtle parallax motion.
  Each star gets randomized starting position, size, drift speed (animation duration), and slight offset.
*/
const Starfield: React.FC = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starfieldRef.current) return;
    const container = starfieldRef.current;
    const starTotal = 160; // slightly denser field

    for (let i = 0; i < starTotal; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const startX = Math.random() * 100; // vw percentage
      const startY = Math.random() * 100; // vh percentage
      const size = Math.random() * 2 + 1; // 1px - 3px
      const driftDuration = 12 + Math.random() * 18; // 12s - 30s
      const delay = Math.random() * driftDuration; // stagger

      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${driftDuration}s, 4s`;
      star.style.animationDelay = `${delay}s, ${Math.random() * 4}s`;

      container.appendChild(star);
    }

    return () => { container.innerHTML = ''; };
  }, []);

  return <div ref={starfieldRef} className="starfield" aria-hidden="true" />;
};

export default Starfield;