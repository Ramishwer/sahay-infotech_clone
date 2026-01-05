
import React, { useEffect } from 'react';

const SoftwareDevPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Software Development</h1>
          <p className="text-xl text-slate-600">Building the backbone of modern enterprise efficiency.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Custom software development is the backbone of modern enterprise efficiency, providing tailored solutions that address specific business challenges that off-the-shelf products simply cannot resolve. At Sahay Infotech, our engineering teams dive deep into your operational workflows to identify bottlenecks and opportunities for automation, ensuring that the final product is not just a tool, but a strategic asset. We utilize high-performance languages like Go, Rust, and Python to build scalable backends that can handle massive data loads while maintaining sub-millisecond latency for critical operations. Our development methodology is rooted in Agile principles, allowing for continuous integration and delivery cycles that keep you informed and involved at every stage of the lifecycle. By focusing on modular architecture and clean code standards, we ensure that your custom software is easily maintainable and ready for future scaling as your business grows. Whether it is a complex ERP system or a high-speed trading algorithm, our commitment to technical excellence ensures a robust, secure, and highly efficient solution. We also prioritize security from day one, implementing rigorous encryption and identity management protocols to protect your sensitive corporate data from evolving cyber threats.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80" 
              alt="Software Development" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevPage;
