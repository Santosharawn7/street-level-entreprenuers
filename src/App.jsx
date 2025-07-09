import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import SmallBusinessBlog from './pages/BlogPost_1';
import BusinessMistakesBlog from './pages/BlogPost_2';
import MartketingConceptBlog from './pages/BlogPost_3';
import BusinessBackOnTrackBlog from './pages/BlogPost_4';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header className="!sticky top-0 z-50" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/community-tools" element={<ToolsPage />} />
            <Route path="/business-tools" element={<BusinessToolsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/toc" element={<TermsOfService/>}/>
            <Route path='/pp' element={<PrivacyPolicy/>}/>
            <Route path='/post/help-i-want-to-start-a-business-where-do-i-begin' element={<SmallBusinessBlog/>}/>
            <Route path="/post/the-most-common-mistakes-when-starting-your-small-business" element={<BusinessMistakesBlog/>}/>
            <Route path="/post/understanding-the-marketing-concept-at-the-street-level-1" element={<MartketingConceptBlog/>}/>
            <Route path="/post/how-to-get-your-business-back-on-track" element={<BusinessBackOnTrackBlog/>}/>   
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;