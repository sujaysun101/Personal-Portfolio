import React, { useEffect, useRef, useState } from 'react';
import './ExperienceTimeline.css';
import { renderTechBadge } from '../utils/techMeta';

type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  skills?: string[];
};

const experiences: ExperienceItem[] = [
  {
    date: 'Jul 2025 - Present',
    role: 'UI/UX Intern',
    company: 'Placera',
    location: 'New York, NY',
    bullets: [
      'Designed and prototyped Figma interfaces for the Admin Panel (Dashboard, Analytics, Data Management), improving usability for internal users.',
      'Translated prototypes into production-ready components integrated with Lovable and Supabase, streamlining development workflows.',
      'Optimized layouts and interactions based on accessibility standards, reducing navigation complexity and improving overall user experience.'
    ],
  skills: ['Figma', 'React', 'Typescript', 'Supabase', 'Lovable', 'GitHub Copilot']
  },
  {
    date: 'May 2025 - Present',
    role: 'Software Engineer Intern',
    company: 'Global Key Solutions',
    location: 'New York, NY',
    bullets: [
      'Built and maintained automated data extraction pipelines to deliver structured, reliable data for customers.',
      'Managed relational databases, improving data integrity and enabling faster, more consistent query performance.',
      'Debugged and fixed backend services, reducing system downtime and strengthening application stability.',
      'Partnered with cross-functional teams to enhance backend features, with a focus on data quality assurance and scalability.'
    ],
  skills: ['Python', 'React', 'PostgreSQL', 'Django', 'GitHub Copilot']
  },
  {
    date: 'Apr 2025 - May 2025',
    role: 'UI/UX Intern',
    company: 'Twinning.AI',
    location: 'New York, NY',
    bullets: [
      "Contributed to the development of the company’s AI application website.",
      'Designed and implemented the UI using React JS and HTML to enhance functionality and creativity.'
    ],
  skills: ['Figma', 'React', 'Javascript', 'Cursor']
  },
  {
    date: 'Mar 2025 - Present',
    role: 'Freelancer',
    company: 'Sundar Tech Services',
    location: 'New York, NY',
    bullets: [
      'Deliver comprehensive tech solutions to clients across NYC, specializing in software troubleshooting, computer literacy training, and device setup.',
      'Assist individuals in optimizing their technology use through hands-on guidance and personalized support.'
    ],
    skills: ['Tech Support', 'Training']
  },
  {
    date: 'Jan 2025 - Apr 2025',
    role: 'Director of UI/UX Design',
    company: 'Corey Copani LLC',
    location: 'New York, NY',
    bullets: [
      'Developed and maintained AI-powered customer service applications, automating client–customer interactions.',
      'Engineered the front-end framework with Django and HTML/CSS/JS, while supporting the design and training of core ML models.',
      'Directed weekly UI/UX team meetings, delegating tasks, aligning project goals, and tracking deliverables to ensure timely releases.'
    ],
  skills: ['Python', 'Django', 'HTML', 'CSS', 'Javascript', 'TensorFlow']
  },
  {
    date: 'Sep 2024 - Dec 2024',
    role: 'Publicity Director',
    company: 'NYU Vertically Integrated Projects (VIP)',
    location: 'New York, NY',
    bullets: [
      "Directed publicity efforts for Hack3D’s annual hackathon, expanding outreach through flyer campaigns, targeted email marketing, and weekly progress reporting.",
      'Coordinated and facilitated weekly team meetings, aligning efforts across design and marketing to maximize event visibility.'
    ],
    skills: ['Marketing', 'Graphic Design']
  },
  {
    date: 'Feb 2024 - Aug 2024',
    role: 'Research Assistant',
    company: 'GHub (University at Buffalo)',
    location: 'Buffalo, NY',
    bullets: [
      'Developed an interactive map showcasing glacier data across Greenland.',
      'Engineered a search engine and filter tool to retrieve specific glacier data by name and date range, allowing users to visualize and download relevant datasets.',
      'Built using Python’s Pandas, GeoPandas, Matplotlib, IPyWidgets, and other Data Science libraries.'
    ],
  skills: ['Python', 'GeoPandas', 'Numpy', 'Matplotlib', 'IPyWidgets', 'Jupyter']
  }
];

const ExperienceTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean[]>(() => experiences.map(() => false));

  useEffect(() => {
    const items = () => Array.from(timelineRef.current?.querySelectorAll<HTMLDivElement>('.timeline-item') || []);

    const updateSpinePosition = () => {
      if (!timelineRef.current || !spineRef.current) return;
      const containerRect = timelineRef.current.getBoundingClientRect();
      const desiredOffset = 120; // px from container left
      timelineRef.current.style.setProperty('--timeline-spine', `${desiredOffset}px`);
      const left = Math.round(containerRect.left + desiredOffset);
      spineRef.current.style.left = `${left}px`;
    };

    const computeAndSet = () => {
      const itemEls = items();
      const viewportBottom = window.innerHeight;
      const next = experiences.map(() => false);
      itemEls.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        next[idx] = r.bottom <= viewportBottom;
      });
      setInView(next);
    };

    const onScroll = () => window.requestAnimationFrame(() => computeAndSet());
    const onResize = () => {
      updateSpinePosition();
      computeAndSet();
    };

    updateSpinePosition();
    computeAndSet();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="experience-timeline-root">
      {/* single static spine */}
      <div ref={spineRef} className="timeline-spine-fixed" aria-hidden />

      <div className="timeline-container" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${inView[index] ? 'in-view fade-slide-down' : 'fade-slide-up'}`}>
            <div className="timeline-content transparent">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company} • {exp.location}</h4>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {exp.skills && exp.skills.length > 0 && (
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => renderTechBadge(skill, `${skill}-${i}`, 'group'))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
