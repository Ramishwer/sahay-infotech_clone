
import React, { useEffect, useState } from 'react';

const categories = [
  'All',
  'Food',
  'Transportation',
  'Social & Networking',
  'Automobile',
  'Gaming',
  'Warehouse',
  'Expedition',
  'Clothing',
  'Healthcare'
];

const projects = [
  {
    title: 'BistroDirect Ecosystem',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    desc: 'A comprehensive farm-to-table delivery platform with real-time tracking and automated vendor settlements.'
  },
  {
    title: 'SwiftRoute Mobility',
    category: 'Transportation',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    desc: 'An intelligent urban transit optimizer using live traffic data to reduce fleet idle time by 30%.'
  },
  {
    title: 'LinkUp Enterprise',
    category: 'Social & Networking',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    desc: 'A high-security professional networking tool featuring encrypted messaging and AI-driven skill matching.'
  },
  {
    title: 'AutoSense AI',
    category: 'Automobile',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    desc: 'Predictive maintenance system for commercial fleets, integrating OBD-II data with cloud-based diagnostics.'
  },
  {
    title: 'Nebula Game Engine',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    desc: 'A massively scalable backend engine supporting 100k+ concurrent players with sub-50ms synchronization.'
  },
  {
    title: 'StockStream Vision',
    category: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    desc: 'Computer vision inventory tracking system that identifies and logs shipments automatically upon arrival.'
  },
  {
    title: 'PeakFinder Mapping',
    category: 'Expedition',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
    desc: 'Satellite-synced mapping tool for high-altitude expeditions, featuring offline survival guides and SOS beacons.'
  },
  {
    title: 'VogueFlow Commerce',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    desc: 'Custom headless commerce platform for luxury fashion brands with AR-based virtual try-on features.'
  },
  {
    title: 'Healio Health Suite',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80',
    desc: 'An integrated ecosystem for remote patient monitoring, connecting wearable sensors to clinical dashboards.'
  },
  {
    title: 'Omni Retail OS',
    category: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    desc: 'Centralized inventory and sales management across web, mobile, and physical retail locations.'
  }
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Our Showcase</h4>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Expertise Across Industries</h1>
          <p className="text-xl text-slate-600">A curated look at the transformative digital products we've engineered for global leaders.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, idx) => (
              <div 
                key={`${p.title}-${idx}`} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group animate-fade-in"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <button className="text-indigo-600 font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>View Project Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-slate-500 text-lg">No projects found in this category yet. Stay tuned!</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-10">
            Let's build your next digital success story together. Our engineering teams are ready to transform your vision into reality.
          </p>
          <a href="#contact" className="inline-block bg-white text-indigo-600 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
