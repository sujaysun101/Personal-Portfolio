import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Left Section Background */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-black/95">
          {/* Animated geometric shapes for left side */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-delay-2s"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-delay-4s"></div>
          </div>
          
          {/* Professional background pattern for left */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 hero-bg-pattern"></div>
          </div>
        </div>
        
        {/* Right Section Background with Professional Image */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-gray-800/90 via-gray-900/85 to-black/95">
          {/* Professional Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-lg">
              {/* Professional Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Professional silhouette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Professional styling elements */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
                
                {/* Content overlay indicating professional image */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-4 border-white/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/80">S</div>
                  </div>
                  <div className="text-white/60 text-sm font-medium">Professional Portrait</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform -translate-x-0.5"></div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 relative z-20 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
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
              <button className="px-6 py-3 glass rounded-lg text-white font-medium glass-hover transition-all duration-300 border border-white/20 flex items-center justify-center">
                <Mail className="mr-2" size={18} />
                Get In Touch
              </button>
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

          {/* Right Content - Image area is handled by background */}
          <div className="hidden md:block">
            {/* This space is for the image which is now in the background */}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="text-white opacity-60" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-30"></div>
    </section>
  );
};

export default HeroSection;
