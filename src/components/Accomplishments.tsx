import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const Accomplishments: React.FC = () => {
  const accomplishments = [
    {
      icon: Award,
      title: "Ronald Reagan Presidential Leadership Medal",
      description: "Earned the Ronald Reagan Leadership Medal, awarded to one graduating student per high school who best exemplifies the characteristics of drive, humility, and service before self.",
      date: "Apr 2023"
    },
    {
      icon: Trophy,
      title: "1st Place in Data Analysis",
      description: "Presented a series of housing market recommendations to investors that eventually led to our team winning 1st place at the NYS Future Business Leaders of America State Leadership Conference (FBLA SLC). Presented at the National Leadership Conference (NLC) in Chicago.",
      date: "Apr 2022"
    },
    {
      icon: Trophy,
      title: "1st Place in Coding and Programming",
      description: "Presented a desktop application that allows users to participate and submit responses to randomly generated quizzes about the FBLA organization, which eventually led to my placement of 1st at the New York State Future Business Leaders of America State Leadership Conference (FBLA SLC). Presented at the National Leadership Conference (NLC) in a virtual format.",
      date: "Apr 2021"
    },
    {
      icon: Star,
      title: "US Congressional Award Gold Medal",
      description: "Received the highest honor awarded to civilian youth for over 400 hours of community service, 200 hours of personal development, 200 hours of physical fitness activities, and a four day independently planned and executed expedition.",
      date: "Jul 2021"
    },
    {
      icon: Star,
      title: "Microsoft's New England Research and Development (NERD)",
      description: "Presented “DiamondFinders” to Microsoft’s New England Research and Development (NERD) Team, a project that proposes using existing infrastructure to connect underrepresented tech talent to jobs in the greater Boston area.",
      date: "Jul 2021"
    },
    {
      icon: Award,
      title: "University at Buffalo Dean's List",
      description: "Named to the University at Buffalo Undergraduate Dean's List for academic excellence with high GPA achievement.",
      date: "Dec 2023"
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