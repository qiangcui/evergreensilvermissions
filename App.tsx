import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionSection from './components/MissionSection';
import Programs from './components/Programs';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import New Detailed Pages
import MissionPage from './components/MissionPage';
import ProgramsPage from './components/ProgramsPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

import { LanguageProvider } from './context/LanguageContext';

// The "Home" page keeps the original single-page scrolling experience
const HomePage = () => (
  <>
    <Hero />
    <MissionSection />
    <Programs />
    <Donate />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter basename="/evergreensilvermissions">
      <LanguageProvider>
        <div className="min-h-screen bg-silver-50 font-sans text-silver-800 antialiased selection:bg-evergreen-200 selection:text-evergreen-900 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;