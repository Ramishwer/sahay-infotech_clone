
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Empowering Businesses with AI-Driven Software</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Next Frontier</span> of Innovation
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl">
            We build scalable, secure, and intelligent digital products that solve complex business challenges. From startups to enterprises, we are your strategic technology partner.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
            <a href="#contact" className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
              Book a Strategy Call
            </a>
            <a href="#portfolio" className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all">
              View Our Work
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 justify-center lg:justify-start text-slate-400">
            <span className="text-xs font-bold uppercase tracking-widest">Trusted By</span>
            <div className="flex space-x-6 opacity-60">
              <span className="font-bold text-xl grayscale">CLOUDBASE</span>
              <span className="font-bold text-xl grayscale">FINTECH.IO</span>
              <span className="font-bold text-xl grayscale">HEALTHLINK</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="relative z-10 animate-float">
            <img 
              src="https://picsum.photos/seed/tech/800/600" 
              alt="Sahay Infotech Dashboard" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">98%</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Delivery Accuracy</p>
                  <p className="text-xs text-slate-500">Agile sprints maintained</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">500+ Engineers</p>
                  <p className="text-xs text-slate-500">Globally distributed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
