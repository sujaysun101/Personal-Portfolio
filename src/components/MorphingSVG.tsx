import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Note: MorphSVGPlugin is a premium plugin from Club GreenSock.
// You will need to have the plugin files in your project for this to work.
// You can get it from https://greensock.com/club/
// Once you have the file, you can uncomment the following line and place the file in the correct path.
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Once MorphSVGPlugin is imported, register it with GSAP
// gsap.registerPlugin(MorphSVGPlugin);

const MorphingSVG: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  const squarePath = "M10,10 L90,10 L90,90 L10,90 Z";
  const circlePath = "M50,10 C22.386,10 10,32.386 10,60 C10,87.614 32.386,110 60,110 C87.614,110 110,87.614 110,60 C110,32.386 87.614,10 60,10 Z";


  const animateToCircle = () => {
    if (pathRef.current) {
      // Check if MorphSVGPlugin is registered
      if (gsap.plugins.morphSVG) {
        gsap.to(pathRef.current, { morphSVG: circlePath, duration: 1, ease: 'power2.inOut' });
      } else {
        console.error("MorphSVGPlugin is not registered. Please make sure you have a valid Club GreenSock membership and the plugin is correctly installed.");
        alert("MorphSVGPlugin is not available. This is a premium feature.");
      }
    }
  };

  const animateToSquare = () => {
    if (pathRef.current) {
      if (gsap.plugins.morphSVG) {
        gsap.to(pathRef.current, { morphSVG: squarePath, duration: 1, ease: 'power2.inOut' });
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-xl font-bold mb-2">GSAP SVG Morphing</h3>
      <p className="mb-4">
        This is an example of SVG morphing. Note that this requires the premium <strong>MorphSVGPlugin</strong> from Club GreenSock.
      </p>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <path ref={pathRef} d={squarePath} fill="lightblue" />
      </svg>
      <div className="mt-4">
        <button onClick={animateToCircle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Morph to Circle
        </button>
        <button onClick={animateToSquare} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Morph to Square
        </button>
      </div>
       <p className="mt-4 text-sm text-gray-500">
        If the animation is not working, please check the console for errors. You need a Club GreenSock membership to use MorphSVGPlugin.
      </p>
    </div>
  );
};

export default MorphingSVG;
