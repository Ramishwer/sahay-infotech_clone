
import React from 'react';

const MissionPage: React.FC = () => {
  const values = [
    { title: 'Excellence', desc: 'We never settle for "good enough". We strive for architectural perfection.' },
    { title: 'Integrity', desc: 'Transparency is our default mode. We are honest about timelines and costs.' },
    { title: 'Innovation', desc: 'We stay at the bleeding edge of AI and cloud technology.' },
    { title: 'User-First', desc: 'Technology is a tool; the human experience is the goal.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Our Core Purpose</h1>
          <p className="text-xl text-slate-600">Building a more intelligent and connected world through code.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">To accelerate the global transition to digital-first business models by providing world-class engineering teams and innovative software solutions.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">To be the world's most trusted partner for complex software engineering, known for turning radical ideas into transformative digital products.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
