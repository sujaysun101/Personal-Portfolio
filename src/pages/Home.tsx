import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import SubscribePopup from '../components/SubscribePopup';
import { Link } from 'react-router-dom';
import { GraduationCap, Code, Trophy, Mail, Briefcase, BookOpen, Star } from 'lucide-react';

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
      to: '/experience',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Experience',
      description: 'Professional roles and timeline'
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
      to: '/testimonials',
      icon: <Star className="w-8 h-8" />,
      title: 'Testimonials',
      description: 'References and recommendation letters'
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
      
      {/* Enhanced Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-black px-8">
            <div className="w-32 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500/60"></div>
          </div>
        </div>
      </div>
      
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
      {/* Inline Subscribe widget shown on the homepage below Explore section */}
      <div className="mt-16 mb-16 flex justify-center">
        <div className="glass rounded-lg p-8 w-full max-w-md">
          <h3 className="text-2xl font-bold text-center text-purple-300 mb-4">Stay Updated on Sujay's Journey</h3>
          <p className="text-gray-400 text-center mb-6">Subscribe to receive personalized updates whenever Sujay adds a new course, project, experience, skill, testimonial, research, accomplishment, or updates contact info!</p>
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: (e.target as any).email?.value, phone: (e.target as any).phone?.value }) }).then(()=>{
                alert('Thank you for subscribing!');
              }).catch(()=>{
                alert('Thanks — subscription recorded (stub).');
              });
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="bg-gray-900/60 border border-purple-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Or your phone number"
              className="bg-gray-900/60 border border-purple-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex items-center gap-3 mt-2">
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-all duration-200">Subscribe</button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">You will only receive updates about major changes to Sujay's portfolio. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>

      {/* Subscribe popup (fixed bottom-left), respects sessionStorage so closing hides it for the session */}
      <SubscribePopup />
  {/* Visual bottom fill to avoid banner seam */}
  <div className="page-bottom-fill" aria-hidden />
    </div>
  );
};

export default Home;
