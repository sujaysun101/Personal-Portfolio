import React from 'react';
import { Code, Layers, Settings, Cpu, Star } from 'lucide-react';
import { skillLogos } from '../utils/skillLogos';

const Skills: React.FC = () => {
  // skillLogos imported

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      colorOuter: "bg-blue-900/30 border-blue-400/30 hover:bg-blue-900/40 hover:border-blue-300/50",
      colorInner: "bg-blue-600/30 hover:bg-blue-500/40 border border-blue-300/30",
  skills: ["Python", "Java", "MATLAB", "HTML", "CSS", "JavaScript", "TypeScript", "C++", "SQL"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      colorOuter: "bg-purple-900/30 border-purple-400/30 hover:bg-purple-900/40 hover:border-purple-300/50",
      colorInner: "bg-purple-600/30 hover:bg-purple-500/40 border border-purple-300/30",
      skills: ["TensorFlow", "PyTorch", "Django", "React JS/TS", "TKinter"]
    },
    {
      title: "Technologies",
      icon: Settings,
      colorOuter: "bg-green-900/30 border-green-400/30 hover:bg-green-900/40 hover:border-green-300/50",
      colorInner: "bg-green-600/30 hover:bg-green-500/40 border border-green-300/30",
      skills: ["Figma", "Firebase", "Supabase", "VS Code", "GitHub Copilot", "PostgreSQL"]
    },
    {
      title: "Hardware",
      icon: Cpu,
      colorOuter: "bg-red-900/30 border-red-400/30 hover:bg-red-900/40 hover:border-red-300/50",
      colorInner: "bg-red-600/30 hover:bg-red-500/40 border border-red-300/30",
      skills: ["Bandsaw Cutting", "Soldering", "Circuitry"]
    },
    {
      title: "Other Skills",
      icon: Star,
      colorOuter: "bg-yellow-900/30 border-yellow-400/30 hover:bg-yellow-900/40 hover:border-yellow-300/50",
      colorInner: "bg-yellow-600/30 hover:bg-yellow-500/40 border border-yellow-300/30",
  skills: ["Git", "Jupyter", "CAD", "Prompt Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Skills & Technologies
          </h2>
          
          {(() => {
            const top = skillCategories.slice(0,3);
            const bottom = skillCategories.slice(3);

            const renderCard = (category: typeof skillCategories[number], index: number) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title + index} className={`rounded-lg p-6 border transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${category.colorOuter}`}>
                  <div className="flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white/80 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  {/* badges laid out in responsive 3-column grid to avoid long single-line wraps */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex">
                        <span className={`skill-badge w-full px-3 py-2 rounded-full text-sm text-gray-100 cursor-default backdrop-blur-sm transition-all duration-200 flex items-center gap-2 ${category.colorInner}`}>
                          {skillLogos[skill]?.src ? (
                            <img
                              src={skillLogos[skill]!.src}
                              alt={skill}
                              title={skill}
                              className={`object-contain ${['GitHub Copilot','Bandsaw Cutting','Soldering','Circuitry','Prompt Engineering'].includes(skill) ? 'w-5 h-5' : 'w-4 h-4'} ${skill === 'Jupyter' ? 'scale-[2] origin-center' : ''} ${skill === 'CAD' ? 'scale-[160%] origin-center' : ''}`}
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget;
                                const info = skillLogos[skill];
                                if (info?.fallback && !target.dataset.fallbackTried) {
                                  target.dataset.fallbackTried = 'true';
                                  target.src = info.fallback;
                                  return;
                                }
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.fallback-label')) {
                                  const span = document.createElement('span');
                                  span.className = 'fallback-label w-4 h-4 flex items-center justify-center text-[10px] font-semibold';
                                  span.textContent = info?.label || skill[0];
                                  parent.insertBefore(span, parent.firstChild);
                                }
                              }}
                            />
                          ) : (
                            <span className="w-4 h-4 flex items-center justify-center text-[10px] font-semibold">{skillLogos[skill]?.label || '•'}</span>
                          )}
                          <span className="text-gray-900 dark:text-white">{skill}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            };

            return (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {top.map((c,i) => renderCard(c,i))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto">
                  {bottom.map((c,i) => renderCard(c,i))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default Skills;