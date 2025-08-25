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
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an Electrical and Computer Engineering student at NYU who loves building delightful,
                human-centered software. My work blends full-stack development, UI/UX design, and applied
                machine learning — I enjoy taking ideas from whiteboard to production and making complex
                systems feel simple and useful.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Over the past few years I've interned across product and research teams where I shipped
                AI-powered features, interactive data visualizations, and scalable backend services. Right
                now I'm a UI/UX Intern at Placera and I also run Sundar Tech Services, where I help small
                teams and local businesses build modern web apps.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Outside of work I explore creative uses of machine learning, mentor students, and enjoy
                contributing to open-source projects. I'm always open to collaborating on interesting
                products — feel free to reach out if you'd like to build something together.
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
  {/* Newsletter widget moved to homepage and popup component */}
    </section>
  );
};

export default About;