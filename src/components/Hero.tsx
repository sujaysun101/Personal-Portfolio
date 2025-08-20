import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="floating">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Student & Software Engineer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate about creating innovative solutions through code. 
            Currently pursuing Computer Science with a focus on full-stack development 
            and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 cosmic-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 glass rounded-lg text-white font-medium glass-hover transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white opacity-60" size={32} />
      </div>
    </section>
  );
};

export default Hero;