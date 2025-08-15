import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import { Link } from 'react-router-dom';
import { GraduationCap, Code, Trophy, Mail, Briefcase, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  // Re-trigger animations when component mounts
  useEffect(() => {
    const sections = document.querySelectorAll('.section-fade');
    sections.forEach((section) => {
      section.classList.remove('visible');
      setTimeout(() => {
        section.classList.add('visible');
      }, 100);
    });
  }, []);

  const quickLinks = [
    {
      to: '/education',
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education',
      description: 'Academic background and coursework'
    },
    {
      to: '/coursework',
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Coursework',
      description: 'Detailed academic curriculum and grades'
    },
    {
      to: '/skills',
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Skills',
      description: 'Programming languages and technologies'
    },
    {
      to: '/projects',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Projects',
      description: 'Software development and engineering projects'
    },
    {
      to: '/research',
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Research',
      description: 'Academic research and publications'
    },
    {
      to: '/accomplishments',
      icon: <Trophy className="w-8 h-8" />,
      title: 'Accomplishments',
      description: 'Awards, certifications, and achievements'
    },
    {
      to: '/contact',
      icon: <Mail className="w-8 h-8" />,
      title: 'Contact',
      description: 'Get in touch for opportunities'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <About />
      
      {/* Quick Navigation Section */}
      <section className="section-fade py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Explore My Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover more about my academic journey, technical expertise, and professional accomplishments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group glass rounded-xl p-8 hover:scale-105 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
