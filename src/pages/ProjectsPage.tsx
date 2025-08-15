import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Software development and engineering projects showcasing my technical abilities
          </p>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
