import React from 'react';
import Skills from '../components/Skills';

const SkillsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Technical Skills</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Programming languages, frameworks, and technologies I work with
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default SkillsPage;
