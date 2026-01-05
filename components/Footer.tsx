
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        {/* Top Section: Branding & Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 border-b border-slate-900 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">S</div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                SAHAY<span className="text-indigo-600">INFOTECH</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Head Office: Industrial Area Phase I, Chandigarh, 160002, India
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300 font-medium">
              <span className="flex items-center space-x-2">
                <span className="text-indigo-500 font-bold">P:</span>
                <span>8288 969 648</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="text-indigo-500 font-bold">|</span>
                <span className="text-indigo-500 font-bold">M:</span>
                <a href="mailto:info@minterminds.com" className="hover:text-indigo-400 transition-colors">info@minterminds.com</a>
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link 
              to="/contact" 
              className="inline-block bg-indigo-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-indigo-900/40 hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
              Contact Now
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-indigo-600 pl-4">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/software-dev" className="text-slate-400 hover:text-indigo-400 transition-colors">Software Development</Link></li>
              <li><Link to="/services/website-dev" className="text-slate-400 hover:text-indigo-400 transition-colors">Website Development</Link></li>
              <li><Link to="/services/mobile-dev" className="text-slate-400 hover:text-indigo-400 transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/blockchain-dev" className="text-slate-400 hover:text-indigo-400 transition-colors">Blockchain Development</Link></li>
              <li><Link to="/services/digital-marketing" className="text-slate-400 hover:text-indigo-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/ui-ux" className="text-slate-400 hover:text-indigo-400 transition-colors">UI/UX</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-indigo-600 pl-4">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/company/mission" className="text-slate-400 hover:text-indigo-400 transition-colors">Mission and Vision</Link></li>
              <li><Link to="/industries" className="text-slate-400 hover:text-indigo-400 transition-colors">Industries We Serve</Link></li>
              <li><Link to="/company/about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-indigo-400 transition-colors">Blogs</Link></li>
              <li><Link to="/company/why-us" className="text-slate-400 hover:text-indigo-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Training</Link></li>
              <li><Link to="/company/faq" className="text-slate-400 hover:text-indigo-400 transition-colors">FAQ’s</Link></li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-indigo-600 pl-4">Case Studies</h4>
            <ul className="space-y-4">
              <li><Link to="/case-studies" className="text-slate-400 hover:text-indigo-400 transition-colors">Transportation with Seamless Mobility</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-indigo-400 transition-colors">On-Demand Delivery Solution</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-indigo-400 transition-colors">Healthcare Data Management</Link></li>
              <li><Link to="/case-studies" className="text-indigo-500 font-bold hover:underline">View All</Link></li>
            </ul>
          </div>

          {/* Company Policies */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-indigo-600 pl-4">Company Policies</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms & Conditions</a></li>
              <li className="pt-4">
                <Link to="/contact" className="text-indigo-500 font-extrabold text-xl hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sahay Infotech. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
