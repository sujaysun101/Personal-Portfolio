import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Starfield from './components/Starfield';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import EducationPage from './pages/EducationPage';
import CourseworkPage from './pages/CourseworkPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import AccomplishmentsPage from './pages/AccomplishmentsPage';
import ContactPage from './pages/ContactPage';

// Component to handle route-based effects
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Function to observe sections
    const observeSections = () => {
      // First, reset all sections
      const sections = document.querySelectorAll('.section-fade');
      sections.forEach((section) => {
        section.classList.remove('visible');
        observer.unobserve(section);
      });
      
      // Then re-observe them
      setTimeout(() => {
        const newSections = document.querySelectorAll('.section-fade');
        newSections.forEach((section) => observer.observe(section));
      }, 50);
    };

    // Re-observe sections when route changes
    observeSections();

    return () => observer.disconnect();
  }, [location.pathname]); // Re-run when pathname changes

  return (
    <div className="min-h-screen text-white relative">
      <Starfield />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/coursework" element={<CourseworkPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/accomplishments" element={<AccomplishmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
