import React, { useEffect, useRef } from 'react';
import './ExperienceTimeline.css';

const experiences = [
  {
    date: "May 2024 - Present",
    title: "AI/ML Research Intern",
    company: "University at Buffalo",
    description: "Led the development of an interactive Greenland glacier map, enabling data visualization and download for climate research. Integrated search and filter tools using Python, Pandas, and GeoPandas."
  },
  {
    date: "Sep 2023 - Dec 2023",
    title: "IT Support Specialist",
    company: "NYU",
    description: "Provided technical support to students and faculty, resolving hardware and software issues. Managed and maintained computer labs and classroom technology."
  },
  {
    date: "Jun 2023 - Aug 2023",
    title: "Software Engineer Intern",
    company: "Tech Innovations Inc.",
    description: "Contributed to the development of a new feature for the company's flagship product. Worked in an agile environment, participating in daily stand-ups and sprint planning."
  }
];

const ExperienceTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">{exp.date}</div>
            <h3 className="timeline-title">{exp.title}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
