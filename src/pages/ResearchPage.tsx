import React from 'react';
import { BookOpen, Calendar, Users } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const researchProjects = [
    {
      title: "Interactive Greenland Glacier Map",
      status: "Ongoing",
      duration: "Jan 2025 - Present",
      advisor: "GHub Research Team",
      description: "Research project at UB's GHub developing an interactive map showcasing glacier data across Greenland with search engine and filter tools for data visualization and download. Building user-friendly interfaces for climate research data exploration.",
      technologies: ["Python", "Pandas", "GeoPandas", "Matplotlib", "IPyWidgets", "Data Visualization"],
      publications: ["Research Documentation (In Progress)"]
    },
    {
      title: "RenaissanceML - GAN Art Generator",
      status: "Completed",
      duration: "2023 - 2024",
      advisor: "NYIT Research Faculty",
      description: "Generative Adversarial Network (GAN) model that generates abstract and realistic depictions of ancient 16th and 17th-century European art using deep learning techniques. Focus on historical art style transfer and creative AI applications.",
      technologies: ["Python", "TensorFlow", "GANs", "Computer Vision", "Deep Learning", "Art Generation"],
      publications: ["Path to Nobel Prize Feature", "Roboflow Community Recognition"]
    }
  ];

  const publications = [
    {
      title: "Path to Nobel Prize Feature",
      authors: "Sujay Sun",
      venue: "Path to Nobel Prize Publication",
      year: "2024",
      type: "Featured Research"
    },
    {
      title: "Roboflow Community Recognition",
      authors: "Sujay Sun",
      venue: "Roboflow Community Platform",
      year: "2024",
      type: "Community Recognition"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Research</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic research in Computer Science and Electrical Engineering
          </p>
        </div>

        {/* Research Interests */}
        <div className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Machine Learning & AI</h3>
              <p className="text-gray-400">GANs, computer vision, and AI applications in creative domains</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Data Science</h3>
              <p className="text-gray-400">Climate data analysis, visualization, and interactive mapping</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Full-Stack Development</h3>
              <p className="text-gray-400">Web applications, mobile apps, and user interface design</p>
            </div>
          </div>
        </div>

        {/* Current Research Projects */}
        <div className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Projects</h2>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="glass rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Ongoing' 
                          ? 'bg-green-900/30 text-green-400 border border-green-400/30' 
                          : 'bg-blue-900/30 text-blue-400 border border-blue-400/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Advisor: {project.advisor}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Publications</h4>
                    <div className="space-y-2">
                      {project.publications.map((pub, pubIndex) => (
                        <div key={pubIndex} className="flex items-center gap-2 text-gray-300">
                          <BookOpen className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{pub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="section-fade">
          <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div key={index} className="glass rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                    <p className="text-gray-400 mb-2">{pub.authors}</p>
                    <p className="text-purple-400 font-medium">{pub.venue}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {pub.year}
                    </span>
                    <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
