
import React, { useState } from 'react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How do you handle intellectual property?", a: "The client retains 100% ownership of the source code and IP from day one. This is clearly outlined in our agreements." },
    { q: "What tech stacks do you specialize in?", a: "We are experts in React, Node.js, Go, Python, and cloud-native architectures (AWS/GCP). We also have a dedicated AI division for advanced integration." },
    { q: "How do we communicate during development?", a: "We use Slack for daily comms, Jira for task tracking, and weekly Zoom syncs to ensure everyone is aligned." },
    { q: "Can you help with legacy system modernization?", a: "Yes. We specialize in gradual refactoring and migration, ensuring your business stays operational while we modernize the core." },
    { q: "What is your typical project timeline?", a: "A standard MVP typically takes 8-12 weeks, depending on the complexity of the feature set and integration requirements." },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 text-center">Frequently Asked <span className="text-indigo-600">Questions</span></h1>
          <p className="text-lg text-slate-600 mb-16 text-center">Everything you need to know about working with Sahay Infotech.</p>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <svg className={`w-5 h-5 text-indigo-600 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-indigo-600 rounded-3xl text-white text-center">
             <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
             <p className="mb-8 text-indigo-100">Our strategy team is happy to walk you through our process in detail.</p>
             <a href="#contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
