
import React from 'react';

const CompanySection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 text-center lg:text-left">Our Company</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 text-center lg:text-left leading-tight">
              A decade of building the <br/> world's most innovative software.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">To accelerate digital transformation through high-quality, ethically-built software that drives tangible business growth.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">To be the global benchmark for technical excellence and human-centric software engineering.</p>
              </div>
            </div>
            <div className="mt-10 p-8 bg-indigo-600 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
              <div className="relative z-10">
                <p className="text-4xl font-extrabold mb-2">10+</p>
                <p className="text-indigo-100 font-medium">Years of Excellence in Software Engineering</p>
                <hr className="my-6 border-indigo-500" />
                <div className="flex justify-between text-center">
                  <div>
                    <p className="text-2xl font-bold">250+</p>
                    <p className="text-xs uppercase tracking-widest text-indigo-200">Products Shipped</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-xs uppercase tracking-widest text-indigo-200">Countries Served</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">120M</p>
                    <p className="text-xs uppercase tracking-widest text-indigo-200">Lines of Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/office1/400/500" className="rounded-2xl shadow-lg mt-12" alt="Office 1" />
               <img src="https://picsum.photos/seed/office2/400/500" className="rounded-2xl shadow-lg" alt="Office 2" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
