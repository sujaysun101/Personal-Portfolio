import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer message - bottom right */}
  <footer className="fixed bottom-2 right-8 z-60 text-gray-400 text-xs flex items-center pointer-events-none select-none">
        <span>Made with</span>
        <Heart className="mx-1 text-red-400" size={14} />
        <span>and lots of coffee</span>
      </footer>
    </>
  );
};

export default Footer;