import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CEOLetterPage } from './pages/CEOLetterPage';
import { PacerPage } from './pages/PacerPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ceo-letter" element={<CEOLetterPage />} />
          <Route path="/pacer" element={<PacerPage />} />
        </Routes>
      </Router>
      <Toaster 
        position="top-center" 
        richColors 
        expand={true}
        duration={2000}
        closeButton
        style={{
          zIndex: 99999,
        }}
      />
    </LanguageProvider>
  );
}