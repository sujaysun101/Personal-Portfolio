import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { renderTechBadge } from '../utils/techMeta';

const Projects: React.FC = () => {

  const projects = [
    {
      title: "Real-Time Election Predictor/Analyzer | ElectThemNOW!",
  description: "Real-time U.S. election polling aggregator that normalizes new polls and updates an interactive map with trends, history, and toss‑up highlights.",
      date: "Jan 2025",
      tech: ["React TS", "FastAPI", "Docker"],
  github: "https://github.com/sujaysun101/ElectThemNOW-",
      demo: "#",
  image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800",
      stackGroups: [
        {
          label: 'Frontend',
          tech: ['React TS','TypeScript','TailwindCSS','D3.js','Mapbox GL','React-Leaflet','OpenStreetMap','Framer Motion']
        },
        {
          label: 'Backend',
          tech: ['FastAPI','Python','PostgreSQL']
        },
        {
          label: 'Scraper',
          tech: ['Pandas','numpy','BeautifulSoup','Requests','Selenium']
        },
        {
          label: 'DevOps / Infrastructure',
          tech: ['Docker','Docker Compose','GitHub Actions']
        },
        {
          label: 'Other',
          tech: ['MIT License']
        }
      ]
    },
    {
      title: "Resume Tailor Extension | SuitUp",
  description: "Chrome extension + dashboard that parses job posts, surfaces role-specific signals, and suggests targeted resume edits. FastAPI + semantic analysis speed high-quality applications while keeping user control.",
      date: "Feb 2025",
      tech: ["ShadCN UI", "Clerk Auth", "Google Cloud", "FastAPI", "Chrome Extension", "AI"],
  github: "https://github.com/sujaysun101/SuitUp",
      demo: "#",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
      ,stackGroups: [
        { label: 'Frontend', tech: ['React TS','TypeScript','Vite','TailwindCSS','Radix UI','Clerk Auth'] },
        { label: 'Extension', tech: ['Chrome Extension','Chrome Extension APIs','React TS','TypeScript','Vite'] },
        { label: 'AI / Backend', tech: ['FastAPI','Python','REST API','OpenAI API','Google OAuth','CORS'] },
        { label: 'Cloud & Integration', tech: ['Google Cloud','ngrok','Netlify','Vercel'] }
      ]
    },
    {
  title: "AI-Powered Personal Finance Tracker | MoneySimp",
      description: "AI-powered finance tracker with manual expense tracking, bill scanning using OCR, budget settings, monthly insights with charts, and AI-generated personal finance tips with chatbot integration.",
  date: "Mar 2025",
      tech: ["React TS", "Firebase", "Genkit", "OCR", "AI Integration"],
    github: "https://github.com/sujaysun101/MoneySimp",
    demo: "https://moneysimp.vercel.app/",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
  title: "AI Skin Ananlysis Tool | Beautify",
      description: "AI-powered skin analysis application that provides personalized skincare recommendations and analysis using computer vision and machine learning techniques.",
  date: "Apr 2025",
      tech: ["React TS", "Ant Design UI", "Supabase", "GitHub Copilot", "AI/ML"],
	  github: "https://github.com/sujaysun101/Beautify",
      demo: "#",
      image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800",
      stackGroups: [
        { label: 'Core Frontend', tech: ['React TS','Vite','JavaScript','Ant Design UI','React Router','Context API','CSS'] },
        { label: 'Auth & Backend', tech: ['Supabase Auth','Google OAuth','Supabase'] },
        { label: 'Database', tech: ['PostgreSQL','Supabase'] },
        { label: 'Build & Tooling', tech: ['ESBuild','Babel','npm'] }
      ]
    },
    {
      title: "VSCoDefender - Security Monitor Extension",
      description: "Visual Studio Code extension for security monitoring and code analysis, helping developers identify potential security vulnerabilities in their codebase.",
  date: "May 2025",
      tech: ["VS Code API", "TypeScript", "Security Analysis", "Extension Development"],
      github: "https://github.com/sujaysun101/VSCoDefender",
      demo: "#",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      stackGroups: [
        { label: 'Language', tech: ['TypeScript'] },
        { label: 'Runtime', tech: ['Node.js'] },
        { label: 'Editor Platform', tech: ['VS Code API'] },
        { label: 'Detection Core', tech: ['Regex Patterns','Context Filters'] },
        { label: 'Build & Tooling', tech: ['npm','Webpack'] },
        { label: 'Linting', tech: ['ESLint'] },
        { label: 'CI & Automation', tech: ['GitHub Actions','Git Hooks'] }
      ]
    },
    {
      title: "Interactive Greenland Glacier Map",
      description: "Research project at UB's GHub developing an interactive map showcasing glacier data across Greenland with search engine and filter tools for data visualization and download.",
  date: "Jun 2025",
      tech: ["Python", "Pandas", "GeoPandas", "Matplotlib", "IPyWidgets", "Data Science"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  // Removed RenaissanceML and Modified Russian Roulette projects per request
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
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xl font-semibold text-white pr-2">
                      {project.title}
                    </h3>
                    {project.date && (
                      <span className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">{project.date}</span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {!project.stackGroups && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => renderTechBadge(tech, techIndex))}
                    </div>
                  )}

                  {project.stackGroups && (
          <div className="space-y-4 mb-6">
                      {project.stackGroups.map((group: any, gi: number) => (
            <div key={gi} className="bg-gray-800/30 hover:bg-gray-700/50 border border-white/10 hover:border-white/20 rounded-lg p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.015]">
                          <div className="text-xs uppercase tracking-wide text-gray-400 mb-2 font-semibold">{group.label}</div>
                          <div className="flex flex-wrap gap-2">
                            {group.tech.map((t: string, ti: number) => renderTechBadge(t, `${gi}-${ti}`, 'group'))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                    {project.title.includes('MoneySimp') ? (
                      <a
                        href={project.demo}
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    ) : (
                      <span className="flex items-center text-gray-500 cursor-not-allowed select-none">
                        <ExternalLink className="mr-2" size={16} />
                        Demo Coming Soon...
                      </span>
                    )}
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