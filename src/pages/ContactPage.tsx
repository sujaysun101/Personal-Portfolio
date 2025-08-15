import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Contact Me</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities and collaborations
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
