import React from 'react';
import Projects from '../components/Projects';
import PageHero from '../components/PageHero';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Projects" subtitle="Software development and engineering projects showcasing my technical abilities" />
      <div className="container mx-auto px-6 pb-24">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
