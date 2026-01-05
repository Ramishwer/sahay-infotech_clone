
import React from 'react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke solutions tailored to your unique business logic and complex operational needs.',
    icon: '🚀'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Integrating LLMs, predictive analytics, and computer vision to give your products an edge.',
    icon: '🧠'
  },
  {
    title: 'Mobile App Engineering',
    description: 'High-performance native and cross-platform mobile experiences for iOS and Android.',
    icon: '📱'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Architecting scalable cloud infrastructure and CI/CD pipelines for 99.9% uptime.',
    icon: '☁️'
  },
  {
    title: 'UI/UX Design',
    description: 'Human-centered design systems that prioritize user psychology and aesthetic excellence.',
    icon: '🎨'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems and migrating workflows to digital-first architectures.',
    icon: '⚡'
  }
];

const ServicesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Cutting-edge solutions for the digital age</h2>
          <p className="text-slate-600 text-lg">We combine technical depth with creative strategy to deliver software that doesn't just work, but wins.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all group">
              <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
              <a href="#contact" className="text-indigo-600 font-bold flex items-center space-x-2 hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
