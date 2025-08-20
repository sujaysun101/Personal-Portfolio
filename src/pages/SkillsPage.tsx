import React from 'react';
import Skills from '../components/Skills';
import PageHero from '../components/PageHero';

const SkillsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Technical Skills" subtitle="Programming languages, frameworks, and technologies I work with" />
      <div className="container mx-auto px-6 pb-24">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
