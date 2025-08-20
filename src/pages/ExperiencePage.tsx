import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';
import PageHero from '../components/PageHero';

const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Work Experience" subtitle="My professional journey and roles." />
      <div className="container mx-auto px-6 pb-24">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default ExperiencePage;
