
import React, { useEffect } from 'react';

const UIUXPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">UI/UX & Graphics Designing</h1>
          <p className="text-xl text-slate-600">Harmonizing aesthetic beauty with functional clarity.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Design is not just about how something looks; it is about how it works and how it makes the user feel, which is why our UI/UX and graphics designing services are rooted in deep psychological research. Our design team creates human-centered interfaces that guide users naturally through complex workflows, reducing friction and increasing overall satisfaction and conversion rates. We begin every project with intensive user research and persona mapping to ensure that our design decisions are based on data rather than assumptions. Our graphics team complements this by building cohesive brand identities, including logos, typography systems, and high-fidelity assets that reflect your company’s unique value proposition. We utilize industry-leading tools like Figma and Adobe Creative Suite to create interactive prototypes that allow you to visualize the final product long before a single line of code is written. Our design systems are modular and scalable, ensuring that your brand maintains a consistent look and feel across all digital touchpoints, from web to mobile to marketing collateral. We also focus on motion design and micro-interactions, adding a layer of polish and delight that sets your product apart from the competition in a crowded marketplace. By harmonizing aesthetic beauty with functional clarity, we transform digital interactions into memorable brand experiences that resonate with your target audience.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80" 
              alt="UI/UX Design" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXPage;
