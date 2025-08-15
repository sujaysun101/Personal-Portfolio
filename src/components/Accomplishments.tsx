import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const Accomplishments: React.FC = () => {
  const accomplishments = [
    {
      icon: Award,
      title: "Ronald Reagan Presidential Leadership Medal",
      description: "Received the prestigious Ronald Reagan Presidential Leadership Medal for exceptional leadership and community service contributions.",
      date: "2023"
    },
    {
      icon: Trophy,
      title: "FBLA New York State Competitive Events Winner",
      description: "Won multiple competitive events at the Future Business Leaders of America New York State level competitions.",
      date: "2022-2023"
    },
    {
      icon: Star,
      title: "Congressional Award Gold Medal",
      description: "Achieved the highest level of the Congressional Award for volunteer public service, personal development, physical fitness, and expedition/exploration.",
      date: "2023"
    },
    {
      icon: Award,
      title: "University at Buffalo Dean's List",
      description: "Named to the University at Buffalo Undergraduate Dean's List for academic excellence with high GPA achievement.",
      date: "December 2023"
    },
    {
      icon: Trophy,
      title: "Path to Nobel Prize Feature",
      description: "Featured researcher recognition for outstanding contributions in machine learning and computer vision research.",
      date: "2024"
    },
    {
      icon: Star,
      title: "Roboflow Community Recognition",  
      description: "Acknowledged for contributions to the computer vision community through innovative projects and technical expertise.",
      date: "2024"
    },
    {
      icon: Award,
      title: "NYU 'Stupid' Hackathon Participant",
      description: "Participated in NYU ITP's creative 'Stupid' Hackathon, developing innovative wearable technology projects and showcasing creative engineering solutions.",
      date: "2024"
    },
    {
      icon: Trophy,
      title: "Multiple Internship Leadership Roles",
      description: "Successfully completed leadership positions at BlackRock, NYC Department of Health, GHub, and various tech organizations.",
      date: "2022-2025"
    }
  ];

  return (
    <section id="accomplishments" className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Accomplishments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {accomplishments.map((accomplishment, index) => (
              <div key={index} className="glass rounded-lg p-6 glass-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center">
                      <accomplishment.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {accomplishment.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {accomplishment.date}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {accomplishment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;