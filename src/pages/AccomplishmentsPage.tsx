import React from 'react';
import Accomplishments from '../components/Accomplishments';

const AccomplishmentsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Accomplishments</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Awards, certifications, and achievements throughout my academic and professional journey
          </p>
        </div>
      </div>
      <Accomplishments />
    </div>
  );
};

export default AccomplishmentsPage;
