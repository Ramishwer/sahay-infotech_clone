
import React from 'react';

const WhyUsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">The Sahay Advantage</h4>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-8">Why top brands trust <span className="text-indigo-600">Sahay Infotech</span></h1>
            
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Rigour</h3>
                  <p className="text-slate-600">We don't just write code; we architect systems. Our peer-review processes and automated testing standards are industry-leading.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Talent</h3>
                  <p className="text-slate-600">We hire only the top talent worldwide. When you work with us, you get a team that is fully committed to your mission.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Rapid Deployment</h3>
                  <p className="text-slate-600">Our battle-tested Agile frameworks allow us to deliver MVPs in weeks, not months, without compromising on quality.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
              alt="Strategic Workshop" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
