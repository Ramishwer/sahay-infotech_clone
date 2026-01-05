
import React, { useEffect } from 'react';

const ContactPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">Let's discuss how Sahay Infotech can accelerate your technical vision.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <form className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-indigo-500 outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-indigo-500 outline-none transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Interested Service</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-indigo-500 outline-none transition-colors appearance-none">
                      <option>Software Development</option>
                      <option>AI Solutions</option>
                      <option>Mobile Apps</option>
                      <option>Blockchain</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea rows={6} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-indigo-500 outline-none transition-colors" placeholder="Tell us about your project goals and timeline..."></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Offices</h3>
                <div className="space-y-8">
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">CH</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Chandigarh</h4>
                      <p className="text-sm text-slate-500">Industrial Area Phase I, Chandigarh, 160002, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <p className="text-slate-400 text-sm mb-6">For urgent inquiries, please reach out directly via email or our hotline.</p>
                <div className="space-y-2">
                  <p className="font-bold">Email: <span className="text-indigo-400">hello@sahayinfotech.com</span></p>
                  <p className="font-bold">Phone: <span className="text-indigo-400">+91 8288 969 648</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
