import React from 'react';
import Education from '../components/Education';
import PageHero from '../components/PageHero';

const EducationPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Education" subtitle="My academic journey in Computer Science and Electrical Engineering" />
      <div className="container mx-auto px-6 pb-24">
        <Education />
      </div>
    </div>
  );
};

export default EducationPage;
