
import React from 'react';

const industries = [
  { name: 'Fintech', icon: '🏦', color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Healthtech', icon: '🏥', color: 'bg-red-50 text-red-600' },
  { name: 'E-commerce', icon: '🛒', color: 'bg-blue-50 text-blue-600' },
  { name: 'Edtech', icon: '🎓', color: 'bg-amber-50 text-amber-600' },
  { name: 'Logistics', icon: '🚚', color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Real Estate', icon: '🏠', color: 'bg-purple-50 text-purple-600' },
];

const IndustriesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Industries</h4>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Domain expertise across every sector.</h2>
            <p className="text-slate-600 mb-8">We don't just build code; we understand your industry's unique regulatory, technical, and consumer landscape.</p>
            <a href="#contact" className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              <span>View Case Studies</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
