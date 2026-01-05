
import React, { useEffect } from 'react';

const WebsiteDevPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Website Development</h1>
          <p className="text-xl text-slate-600">High-performance web platforms for the modern era.</p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              In today's digital-first economy, your website is often the first point of contact between your brand and potential customers, making it a critical component of your overall business strategy. We specialize in building high-conversion, performance-optimized web platforms that go beyond simple aesthetics to deliver meaningful user engagement and technical reliability. Our web development stack includes cutting-edge technologies like React, Next.js, and Tailwind CSS, enabling us to create lightning-fast interfaces that provide a seamless experience across all devices. We focus heavily on core web vitals and SEO-best practices, ensuring that your site not only looks stunning but also ranks highly on search engines to drive organic traffic. From complex e-commerce engines with multi-currency support to interactive portals with real-time data visualization, our team has the expertise to handle any web-based challenge. We believe in building "future-proof" websites, which means using modular components and headless CMS integrations that allow your marketing team to manage content effortlessly without needing technical intervention. Accessibility is also a core tenet of our design philosophy, ensuring that your web presence is usable by everyone, including those with disabilities, in compliance with international standards. By combining artistic design with rigorous engineering, we create web experiences that captivate users and drive tangible business results.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Website Development" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevPage;
