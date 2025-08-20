import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real-Time Election Predictor/Analyzer | ElectThemNOW!",
      description: "Building ElectThemNOW!, a real-time U.S. election polling aggregation and visualization platform delivering transparent, interactive insights across presidential, congressional, and local races. Automated daily polling updates with open-source aggregation methods, ensuring credibility and reproducibility through publicly available poll metadata. Enhanced election analysis and forecasting by integrating historical comparisons, live race status, and toss-up identifications into a user-friendly interactive map.",
      tech: ["React TS", "FastAPI", "Docker"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Resume Tailor Extension | SuitUp",
      description: "Designing an AI-driven platform that streamlines the job search by detecting postings, analyzing descriptions, and tailoring resumes with real-time feedback. Built a Chrome extension, web dashboard, and FastAPI backend to enable resume optimization, intelligent auto-fill, and automated submissions across major job boards. Integrated Google Drive/Docs for seamless document management and implemented a modern, Gemini-inspired UI for intuitive user workflows. Enhanced job-seeking efficiency through real-time AI analysis, transparent application tracking, and end-to-end automation.",
      tech: ["ShadCN UI", "Clerk Auth", "Google Cloud", "FastAPI", "Chrome Extension", "AI"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "MoneySimp - Personal Finance Tracker",
      description: "AI-powered finance tracker with manual expense tracking, bill scanning using OCR, budget settings, monthly insights with charts, and AI-generated personal finance tips with chatbot integration.",
      tech: ["React TS", "Firebase", "Genkit", "OCR", "AI Integration"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Beautify - AI Skin Analysis Tool",
      description: "AI-powered skin analysis application that provides personalized skincare recommendations and analysis using computer vision and machine learning techniques.",
      tech: ["React TS", "Ant Design UI", "Supabase", "GitHub Copilot", "AI/ML"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "VSCoDefender - Security Monitor Extension",
      description: "Visual Studio Code extension for security monitoring and code analysis, helping developers identify potential security vulnerabilities in their codebase.",
      tech: ["VS Code API", "TypeScript", "Security Analysis", "Extension Development"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Interactive Greenland Glacier Map",
      description: "Research project at UB's GHub developing an interactive map showcasing glacier data across Greenland with search engine and filter tools for data visualization and download.",
      tech: ["Python", "Pandas", "GeoPandas", "Matplotlib", "IPyWidgets", "Data Science"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "RenaissanceML - GAN Art Generator",
      description: "Generative Adversarial Network (GAN) model that generates abstract and realistic depictions of ancient 16th and 17th-century European art using deep learning.",
      tech: ["Python", "TensorFlow", "GAN", "Computer Vision", "Deep Learning"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Modified Russian Roulette Device",
      description: "NYU ITP 'Stupid' Hackathon project - a wearable device that emits electrical shocks and sound effects, showcasing creative hardware design and circuit implementation.",
      tech: ["Circuit Design", "Hardware", "Arduino", "Wearable Tech"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/159213/arduino-electronics-pins-159213.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass rounded-lg overflow-hidden glass-hover transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
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

export default Projects;