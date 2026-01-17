import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import KnowledgePage from './pages/KnowledgePage';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './imports/Footer';

function AppContent() {
  const { language } = useLanguage();
  
  return (
    <div className={`relative min-h-screen overflow-x-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
      <Routes>
        {/* Admin Panel - no navbar/footer */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Regular pages - with navbar/footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/knowledge" element={<KnowledgePage />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}