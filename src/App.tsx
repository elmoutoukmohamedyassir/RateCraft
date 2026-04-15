import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect }     from 'react';
import { Layout }        from './components/Layout';

// Pages
import Home                  from './pages/Home';
import CalculatorPage        from './pages/Calculator';
import ProjectCalculatorPage from './pages/ProjectCalculator';
import About                 from './pages/About';
import Contact               from './pages/Contact';
import Privacy               from './pages/Privacy';
import Terms                 from './pages/Terms';
import Disclaimer            from './pages/Disclaimer';
import BlogIndex             from './pages/BlogIndex';
import BlogPost              from './pages/BlogPost';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/"                   element={<Home />}                  />
            <Route path="/calculator"          element={<CalculatorPage />}        />
            <Route path="/project-calculator"  element={<ProjectCalculatorPage />} />
            <Route path="/about"               element={<About />}                 />
            <Route path="/contact"             element={<Contact />}               />
            <Route path="/privacy"             element={<Privacy />}               />
            <Route path="/terms"               element={<Terms />}                 />
            <Route path="/disclaimer"          element={<Disclaimer />}            />
            <Route path="/blog"                element={<BlogIndex />}             />
            <Route path="/blog/:id"            element={<BlogPost />}              />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}