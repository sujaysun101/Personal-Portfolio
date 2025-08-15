import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Computer Engineering student at NYU with a passion for full-stack development, 
                UI/UX design, and machine learning. With experience across multiple internships and 
                research positions, I've developed expertise in building AI-powered applications and 
                leading technical teams.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently working as a UI/UX Intern at Placera, 
                I've contributed to various projects ranging from interactive data visualization tools to 
                AI-powered customer service applications. I'm also the founder of Sundar Tech Services, 
                providing comprehensive tech solutions across NYC.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="glass rounded-lg p-6 glass-hover transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                </div>
                <p className="text-gray-300">
                  Building scalable web applications with modern frameworks and best practices.
                </p>
              </div>
              
              <div className="glass rounded-lg p-6 glass-hover transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Database className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Data Engineering</h3>
                </div>
                <p className="text-gray-300">
                  Designing efficient database systems and data processing pipelines.
                </p>
              </div>
              
              <div className="glass rounded-lg p-6 glass-hover transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Cpu className="text-green-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Machine Learning</h3>
                </div>
                <p className="text-gray-300">
                  Exploring AI/ML algorithms and their practical applications in software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;