import { useEffect, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Starfield from './components/Starfield';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

// Pages
import Home from './pages/Home';
import EducationPage from './pages/EducationPage';
import CourseworkPage from './pages/CourseworkPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import AccomplishmentsPage from './pages/AccomplishmentsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import TestimonialsPage from './pages/TestimonialsPage';

// Theme context
type Theme = 'light' | 'dark';
const ThemeContext = createContext<{theme: Theme; toggle: () => void}>({theme: 'dark', toggle: () => {}});
export const useTheme = () => useContext(ThemeContext);

// Component to handle route-based effects & layout
const AppContent = () => {
  const location = useLocation();
  const { theme } = useTheme();

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
    <div className={`min-h-screen relative ${theme === 'dark' ? 'text-white bg-black' : 'text-gray-900 bg-white'} transition-colors duration-300`}>      
      {theme === 'dark' && <Starfield />}
      <Navigation />

  {/* Theme toggle removed as requested */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/coursework" element={<CourseworkPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/accomplishments" element={<AccomplishmentsPage />} />
  <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

  <Footer />
  <ChatbotWidget />
  {/* Site-wide bottom visual fill to prevent seams on any page */}
  <div className="page-bottom-fill" aria-hidden />
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('pref-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('pref-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      <Router>
        <AppContent />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
