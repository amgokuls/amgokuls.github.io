import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, memo, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext.tsx";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar.tsx"));
const Hero = lazy(() => import("./components/Hero.tsx"));
const Stacks = lazy(() => import("./components/Stacks.tsx"));
const About = lazy(() => import("./components/about.tsx"));
const Services = lazy(() => import("./components/Servies.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const Projects = lazy(() => import("./components/Project.tsx"));
const ProjectBlog = lazy(() => import("./components/ProjectBlog.tsx"));
const Qualification = lazy(() => import("./components/qualification.tsx"));
const Footer = lazy(() => import("./components/Footer.tsx"));
const Scrolltotop = lazy(() => import("./components/Scrolltotop.tsx"));

// Loading component for Suspense fallback
const Loading = () => <div className="loading">Loading...</div>;

// Memoized MainContent component to prevent unnecessary re-renders
const MainContent = memo(() => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Qualification />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Stacks />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </div>
      <div className="animate-section">
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Scrolltotop />
      </Suspense>
    </>
  );
});

MainContent.displayName = "MainContent";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route 
                path="/blog/:projectId" 
                element={
                  <Suspense fallback={<Loading />}>
                    <ProjectBlog />
                  </Suspense>
                } 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
