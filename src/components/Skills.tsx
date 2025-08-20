import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "MATLAB", "HTML", "CSS", "JavaScript/TypeScript", "C++", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["TensorFlow", "PyTorch", "Django", "React JS/TS", "TKinter"]
    },
    {
      title: "Technologies",
      skills: ["Figma", "Firebase", "Supabase", "VS Code", "GitHub Copilot", "PostgreSQL"]
    },
    {
      title: "Hardware",
      skills: ["Bandsaw Cutting", "Soldering", "Circuitry"]
    },
    {
      title: "Other Skills",
      skills: ["Git", "Product Management", "CAD", "LLM Prompting"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge px-3 py-2 glass rounded-full text-sm text-gray-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;