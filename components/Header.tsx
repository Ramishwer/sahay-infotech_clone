
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyLinks = [
    { name: 'About', href: '/company/about' },
    { name: 'Mission, Vision and Values', href: '/company/mission' },
    { name: 'Why Choose Us', href: '/company/why-us' },
    { name: 'FAQ', href: '/company/faq' },
  ];

  const serviceLinks = [
    { name: 'Software Development', href: '/services/software-dev' },
    { name: 'Website Development', href: '/services/website-dev' },
    { name: 'Mobile App Development', href: '/services/mobile-dev' },
    { name: 'Blockchain Development', href: '/services/blockchain-dev' },
    { name: 'UI/UX & Graphics Designing', href: '/services/ui-ux' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const navLinks = [
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Upper Header / Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-6 border-b border-slate-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] md:text-xs font-bold uppercase tracking-widest">
          <div className="mb-2 md:mb-0 text-indigo-400">
            Connect to Create: <span className="text-white">Turn ideas into profit with our transformative software solutions!</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@sahayinfotech.com" className="flex items-center space-x-2 hover:text-indigo-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>hello@sahayinfotech.com</span>
            </a>
            <a href="tel:+918288969648" className="flex items-center space-x-2 hover:text-indigo-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+91 8288 969 648</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-white/80 backdrop-blur-md lg:bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">S</div>
            <span className={`text-xl font-extrabold tracking-tight text-slate-900`}>
              SAHAY<span className="text-indigo-600">INFOTECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider">Home</Link>
            
            {/* Company Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCompanyDropdownOpen(true)}
              onMouseLeave={() => setIsCompanyDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider outline-none">
                <span>Company</span>
                <svg className={`w-4 h-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 mt-2 border border-slate-100 transition-all duration-200 origin-top-left ${isCompanyDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="space-y-1">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider outline-none">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-4 mt-2 border border-slate-100 transition-all duration-200 origin-top-left ${isServicesDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/#ai-architect"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('ai-architect')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col space-y-4 animate-fade-in-down overflow-y-auto max-h-[80vh]">
            <Link to="/" onClick={handleNavClick} className="text-lg font-medium text-slate-700">Home</Link>
            
            <div className="border-l-2 border-indigo-100 pl-4 space-y-3 py-2">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Company</p>
              {companyLinks.map((link) => (
                <Link key={link.name} to={link.href} className="block text-slate-700 font-medium" onClick={handleNavClick}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-l-2 border-indigo-100 pl-4 space-y-3 py-2">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Services</p>
              {serviceLinks.map((link) => (
                <Link key={link.name} to={link.href} className="block text-slate-700 font-medium" onClick={handleNavClick}>
                  {link.name}
                </Link>
              ))}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-slate-700"
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
