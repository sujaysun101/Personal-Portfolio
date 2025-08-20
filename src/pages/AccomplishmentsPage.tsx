import React from 'react';
import Accomplishments from '../components/Accomplishments';
import PageHero from '../components/PageHero';

const AccomplishmentsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Accomplishments" subtitle="Awards, certifications, and achievements throughout my academic and professional journey" />
      <div className="container mx-auto px-6 pb-24">
        <Accomplishments />
      </div>
    </div>
  );
};

export default AccomplishmentsPage;
