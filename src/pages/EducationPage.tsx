import React from 'react';
import Education from '../components/Education';

const EducationPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Education</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey in Computer Science and Electrical Engineering
          </p>
        </div>
      </div>
      <Education />
    </div>
  );
};

export default EducationPage;
