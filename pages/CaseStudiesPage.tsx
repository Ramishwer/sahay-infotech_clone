
import React, { useEffect, useState } from 'react';

const categories = [
  'All',
  'Expedition',
  'Clothing',
  'Gaming',
  'Warehouse',
  'Social & Networking',
  'Automobile',
  'Food',
  'Transportation',
  'Healthcare Industry'
];

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  label: string;
  desc: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    category: 'Expedition',
    label: 'High-Altitude Navigation',
    title: 'Satellite-Synced Survival Intelligence for Remote Explorers',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
    desc: 'We developed an offline-first mapping engine for a leading mountaineering group that functions in extreme sub-zero temperatures with zero cellular connectivity. The system uses low-power satellite pings to transmit telemetry and SOS alerts.',
    metrics: [
      { value: '100%', label: 'Signal Uptime' },
      { value: '250+', label: 'Rescues Facilitated' }
    ]
  },
  {
    category: 'Clothing',
    label: 'Luxury Retail Tech',
    title: 'Virtual Fitting Room: Reducing Returns for Global Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    desc: 'Integrating AR Core and computer vision, we built a virtual try-on experience for a luxury apparel brand. The AI precisely maps body measurements to garment geometry, allowing customers to visualize fit before purchasing.',
    metrics: [
      { value: '35%', label: 'Return Reduction' },
      { value: '2.4x', label: 'Cart Conversion' }
    ]
  },
  {
    category: 'Gaming',
    label: 'Infrastructure Scaling',
    title: 'Supporting 100k Concurrent Users in a Real-Time MMO',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    desc: 'A prominent gaming studio faced server crashes during global launches. We re-engineered their backend using a distributed actor model in Go, achieving sub-50ms synchronization across three continents simultaneously.',
    metrics: [
      { value: '99.99%', label: 'Launch Uptime' },
      { value: '<50ms', label: 'Network Latency' }
    ]
  },
  {
    category: 'Warehouse',
    label: 'Computer Vision',
    title: 'Automating Inventory with AI-Powered Visual Auditing',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    desc: 'Manual inventory counts were costing a logistics giant millions in errors. Our custom vision system identifies package labels and physical damage in real-time as items move through the sorting facility on high-speed belts.',
    metrics: [
      { value: '99.8%', label: 'Audit Accuracy' },
      { value: '70%', label: 'Labor Efficiency' }
    ]
  },
  {
    category: 'Social & Networking',
    label: 'Enterprise Collaboration',
    title: 'Encrypted Networking for Sensitive Professional Data',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    desc: 'We built a bespoke professional network for the legal sector that prioritizes end-to-end encryption. The platform features secure document signing, court-verified identity management, and encrypted video conferencing.',
    metrics: [
      { value: 'Zero', label: 'Data Leaks' },
      { value: '50k+', label: 'Verified Partners' }
    ]
  },
  {
    category: 'Automobile',
    label: 'Predictive Maintenance',
    title: 'Predicting Vehicle Failure Before the Check-Engine Light',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    desc: 'For a commercial trucking fleet, we integrated OBD-II data with a machine learning engine. The system predicts mechanical failures up to 2 weeks in advance, allowing for scheduled maintenance rather than emergency repairs.',
    metrics: [
      { value: '45%', label: 'Downtime Saved' },
      { value: '1.2M', label: 'Fuel Saved ($)' }
    ]
  },
  {
    category: 'Food',
    label: 'Agrotech Solutions',
    title: 'Farm-to-Table Supply Chain Transparency with Blockchain',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    desc: 'Consumers demand traceability. We implemented a blockchain ledger that tracks organic produce from the specific field of origin to the retail shelf, ensuring authenticity and reducing food waste through better logistics.',
    metrics: [
      { value: '100%', label: 'Traceability' },
      { value: '18%', label: 'Waste Reduction' }
    ]
  },
  {
    category: 'Transportation',
    label: 'Smart City Transit',
    title: 'Optimizing Urban Bus Routes with Real-Time Rider Data',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    desc: 'A metropolitan transport authority struggled with inefficient scheduling. Our AI platform analyzes rider density and traffic flow to adjust routes dynamically every 15 minutes, drastically improving public transit reliability.',
    metrics: [
      { value: '22%', label: 'Avg. Wait Time ↓' },
      { value: '14%', label: 'CO2 Reduction' }
    ]
  },
  {
    category: 'Healthcare Industry',
    label: 'Remote Patient Care',
    title: 'Wearable Integration for Post-Operative Cardiac Recovery',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80',
    desc: 'Reducing hospital re-admissions is critical. We built a platform that streams real-time ECG and vitals from wearables to a centralized clinical dashboard, alerting cardiologists to anomalies within seconds.',
    metrics: [
      { value: '40%', label: 'Re-admissions ↓' },
      { value: '94%', label: 'Doctor Satisfaction' }
    ]
  }
];

const CaseStudiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h4>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">In-depth Industry Solutions</h1>
          <p className="text-xl text-slate-600">
            Sahay Infotech presents the following case studies that exemplify the type of solutions and services we are providing across our customer base.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-32 max-w-6xl mx-auto min-h-[500px]">
          {filteredStudies.length > 0 ? (
            filteredStudies.map((study, idx) => (
              <div 
                key={`${study.title}-${idx}`} 
                className={`flex flex-col lg:items-center gap-12 lg:gap-20 animate-fade-in ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-indigo-100 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="rounded-[2rem] shadow-2xl w-full h-[450px] object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{study.label}</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">{study.title}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {study.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    {study.metrics.map((metric, midx) => (
                      <div key={midx} className="border-l-4 border-indigo-600 pl-6 py-2">
                        <p className="text-3xl font-bold text-indigo-600">{metric.value}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-3 group shadow-xl shadow-slate-200">
                    <span>Read Full Case Study</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-slate-400">
              <p>No case studies found for this category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 lg:p-20 text-center border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interested in similar results for your business?</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Our strategic consultants are ready to dive into your technical challenges and architect a path to measurable success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
              Schedule a Consultation
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 font-bold px-10 py-4 rounded-xl hover:bg-slate-50 transition-all">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
