
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import IndustriesSection from './components/IndustriesSection';
import AIArchitect from './components/AIArchitect';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import CompanySection from './components/CompanySection';
import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';

// Company Pages
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import WhyUsPage from './pages/WhyUsPage';
import FAQPage from './pages/FAQPage';

// Service Pages
import SoftwareDevPage from './pages/services/SoftwareDevPage';
import WebsiteDevPage from './pages/services/WebsiteDevPage';
import MobileDevPage from './pages/services/MobileDevPage';
import BlockchainDevPage from './pages/services/BlockchainDevPage';
import UIUXPage from './pages/services/UIUXPage';
import MarketingPage from './pages/services/MarketingPage';

// New Main Navigation Pages
import IndustriesPage from './pages/IndustriesPage';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CompanySection id="company" />
                <ServicesSection id="services" />
                <IndustriesSection id="industries" />
                <PortfolioSection id="portfolio" />
                <div id="ai-architect" className="bg-slate-900 py-24">
                  <AIArchitect />
                </div>
                <CaseStudiesSection id="case-studies" />
                <BlogSection id="blog" />
                <ContactSection id="contact" />
              </>
            } />
            <Route path="/company/about" element={<AboutPage />} />
            <Route path="/company/mission" element={<MissionPage />} />
            <Route path="/company/why-us" element={<WhyUsPage />} />
            <Route path="/company/faq" element={<FAQPage />} />
            
            {/* Service Routes */}
            <Route path="/services/software-dev" element={<SoftwareDevPage />} />
            <Route path="/services/website-dev" element={<WebsiteDevPage />} />
            <Route path="/services/mobile-dev" element={<MobileDevPage />} />
            <Route path="/services/blockchain-dev" element={<BlockchainDevPage />} />
            <Route path="/services/ui-ux" element={<UIUXPage />} />
            <Route path="/services/digital-marketing" element={<MarketingPage />} />

            {/* Main Navigation Routes */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
