
import React from 'react';

const projects = [
  {
    title: 'Vortex Crypto Wallet',
    category: 'Fintech / Blockchain',
    image: 'https://picsum.photos/seed/crypto/800/600',
  },
  {
    title: 'Healio Health Suite',
    category: 'Healthcare / IoT',
    image: 'https://picsum.photos/seed/health/800/600',
  },
  {
    title: 'Omni Retail OS',
    category: 'E-commerce / Cloud',
    image: 'https://picsum.photos/seed/retail/800/600',
  },
  {
    title: 'SafeDrive AI',
    category: 'Automotive / AI',
    image: 'https://picsum.photos/seed/car/800/600',
  },
];

const PortfolioSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h4>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Solutions delivered with precision and flair.</h2>
          </div>
          <a href="#" className="hidden lg:flex items-center space-x-2 text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1">
            <span>Explore All Work</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 relative">
                <img src={p.image} alt={p.title} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 w-full border border-white/30">
                     <p className="text-white text-sm font-medium">View Detailed Case Study →</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
