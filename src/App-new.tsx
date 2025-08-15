import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
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

    // Re-observe sections when route changes
    const observeSections = () => {
      const sections = document.querySelectorAll('.section-fade');
      sections.forEach((section) => observer.observe(section));
    };

    // Initial observation
    setTimeout(observeSections, 100);

    // Re-observe when content changes (route changes)
    const handleRouteChange = () => {
      setTimeout(observeSections, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
