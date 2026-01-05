
import React from 'react';

const CaseStudiesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">Case Studies</h4>
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">In-depth looks at how we solve problems.</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-10 items-center bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
               <div className="md:w-1/2">
                 <img src="https://picsum.photos/seed/case1/600/400" className="rounded-2xl shadow-lg w-full" alt="Case Study 1" />
               </div>
               <div className="md:w-1/2">
                 <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">Enterprise SaaS</span>
                 <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-4">Scaling a Logistics Platform to 10M Monthly Active Users</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">How we re-architected a monolithic logistics platform into a distributed microservices ecosystem using Kubernetes and Go.</p>
                 <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">300%</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Performance Boost</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">45%</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Cost Reduction</p>
                    </div>
                 </div>
                 <button className="mt-8 text-slate-900 font-bold underline underline-offset-4 hover:text-indigo-600 transition-colors">Read Full Case Study</button>
               </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-10 items-center bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
               <div className="md:w-1/2">
                 <img src="https://picsum.photos/seed/case2/600/400" className="rounded-2xl shadow-lg w-full" alt="Case Study 2" />
               </div>
               <div className="md:w-1/2">
                 <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">AI & Data</span>
                 <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-4">Implementing Predictive AI for Global Supply Chain</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">Integrating real-time sensor data and machine learning to predict shipping delays with 94% accuracy for a Fortune 500 company.</p>
                 <div className="flex items-center space-x-6">
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">94%</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Accuracy rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">24/7</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Monitoring</p>
                    </div>
                 </div>
                 <button className="mt-8 text-slate-900 font-bold underline underline-offset-4 hover:text-indigo-600 transition-colors">Read Full Case Study</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
