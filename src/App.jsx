import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import ToolsPage from './pages/ToolsPage';
import BusinessToolsPage from './pages/BusinessToolsPage';
import ContactPage from './pages/ContactPage';
import TermsOfService from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/business-tools" element={<BusinessToolsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/toc" element={<TermsOfService/>}/>
          <Route path='/pp' element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
