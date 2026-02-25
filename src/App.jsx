import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ErrorBoundary from './components/ui/ErrorBoundary';
import AIChat from './components/ui/AIChat';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
      {/* Floating AI Chat — available on all pages */}
      <AIChat />
    </BrowserRouter>
  );
}
