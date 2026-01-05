
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">About Sahay Infotech</h4>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-8">Pioneering the Digital Future with <span className="text-indigo-600">Expert Engineering</span></h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2014, Sahay Infotech began as a small group of visionary engineers. Today, we are a global powerhouse of technical talent, helping enterprises and high-growth startups build robust digital ecosystems.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our culture is built on transparency, technical rigour, and a relentless focus on client success. We believe that great software is the foundation of modern business progress.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-indigo-600">10+</p>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Years of History</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-indigo-600">500+</p>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Engineers Worldwide</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Sahay Infotech Team" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
