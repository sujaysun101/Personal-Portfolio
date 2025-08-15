import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "New York University",
      period: "Sep 2024 - Present",
      gpa: "2.963/4.0",
      description: "Currently pursuing Computer Engineering with a focus on software development, hardware design, and system integration."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "SUNY University at Buffalo",
      period: "Aug 2023 - May 2024",
      gpa: "3.687/4.0",
      description: "Named to University at Buffalo Undergraduate Dean's List (Dec 2023). Worked as a Research Assistant."
    }
  ];

  return (
    <section id="education" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass rounded-lg p-8 glass-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <GraduationCap className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="mr-2" size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg text-gray-200 mb-1">{edu.school}</h4>
                  <p className="text-gray-400">GPA: {edu.gpa}</p>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;