
import React from 'react';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h4>
            <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to build something <span className="text-indigo-400">extraordinary?</span></h2>
            <p className="text-slate-400 text-lg mb-12">Whether you have a specific project in mind or just want to explore what's possible, our team is here to help you navigate the future.</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-slate-400">hello@sahayinfotech.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Global Headquarters</h4>
                  <p className="text-slate-400">Industrial Area Phase I, Chandigarh, 160002, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex space-x-4">
               {['twitter', 'linkedin', 'github'].map((social) => (
                 <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                   <span className="sr-only">{social}</span>
                   <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                 </a>
               ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="bg-slate-800 p-8 lg:p-12 rounded-[2rem] border border-slate-700 shadow-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Work Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:border-indigo-500 outline-none transition-colors appearance-none">
                  <option>Software Development</option>
                  <option>AI Implementation</option>
                  <option>Dedicated Team</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-900/50 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                Send Message
              </button>
              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">Typically responds within 4 working hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
