import React from 'react';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero title="Contact Me" subtitle="Let's connect! I'm always open to discussing new opportunities and collaborations" />
      <div className="container mx-auto px-6 pb-24">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
