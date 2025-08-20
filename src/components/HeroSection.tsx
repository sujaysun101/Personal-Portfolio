import React from 'react';
import { Download, Mail } from 'lucide-react';
import backGroundImage from '../assets/images/hero-background.png';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Soft spotlight to improve legibility without hiding stars */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.5),transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="floating text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Available for Opportunities</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
              Sujay Sundar
            </h1>
            
            <h2 className="text-lg lg:text-2xl text-gray-300 mb-8 font-light">
              Electrical and Computer Engineering Student @ NYU
            </h2>
            
            <p className="text-base lg:text-lg text-gray-400 mb-12 leading-relaxed">
              Passionate full-stack developer and UI/UX designer with experience in machine learning, 
              web development, and research. Currently pursuing Computer Engineering at NYU with a 
              strong background in building AI-powered applications and leading technical teams.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-6 py-3 cosmic-gradient text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                Download Resume
              </button>
              <a href="/contact" className="px-6 py-3 glass rounded-lg text-white font-medium glass-hover transition-all duration-300 border border-white/20 flex items-center justify-center">
                <Mail className="mr-2" size={18} />
                Get In Touch
              </a>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-lg p-4 backdrop-blur-lg border border-white/20 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">20+</div>
                <div className="text-gray-400 text-xs">Skills</div>
              </div>
              <div className="glass rounded-lg p-4 backdrop-blur-lg border border-white/20 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">10+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="glass rounded-lg p-4 backdrop-blur-lg border border-white/20 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-gray-400 text-xs">Years of Experience</div>
              </div>
            </div>
          </div>

      <div className="hidden md:block" />
        </div>
      </div>
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0 z-10" />
    </section>
  );
};

export default HeroSection;
