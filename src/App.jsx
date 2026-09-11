import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ChatAssistantSection from './components/ChatAssistantSection';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingOrderBtn from './components/FloatingOrderBtn';

const Chatbot = lazy(() => import('./components/Chatbot'));
const OrderModal = lazy(() => import('./components/OrderModal'));

function AppContent() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  // Always open on the Home page on fresh load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const handleOpenOrderModal = (pkgName = '') => {
    setSelectedPackage(pkgName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedPackage('');
  };

  return (
    <div className="min-h-screen font-sans bg-noise text-day-text dark:text-night-text selection:bg-primary selection:text-black transition-colors duration-300 overflow-x-hidden relative">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenOrderModal={handleOpenOrderModal} />
        <About onOpenOrderModal={handleOpenOrderModal} />
        <Skills />
        <Projects onOpenOrderModal={handleOpenOrderModal} />
        <Services onOpenOrderModal={handleOpenOrderModal} />
        <Reviews />
        <ChatAssistantSection onOpenOrderModal={handleOpenOrderModal} />
        <Team />
        <Contact onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Floating Interactive Help & Support AI Chatbot */}
      <Suspense fallback={null}>
        <Chatbot onOpenOrderModal={handleOpenOrderModal} />
      </Suspense>

      {/* Instant Order Modal */}
      <Suspense fallback={null}>
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={handleCloseOrderModal}
          initialPackage={selectedPackage}
        />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
