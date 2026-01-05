
import React, { useEffect } from 'react';

const MarketingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Digital Marketing</h1>
          <p className="text-xl text-slate-600">Amplifying your brand's voice for sustainable growth.</p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A great product is only successful if people know about it, and our digital marketing services are engineered to amplify your brand's voice and drive sustainable growth in a competitive landscape. We take a data-driven approach to marketing, combining SEO, PPC, content strategy, and social media management to create a holistic growth engine for your business. Our SEO specialists focus on technical optimization and high-quality backlink building to improve your long-term organic visibility, while our performance marketers manage high-ROI ad campaigns. We believe in the power of storytelling, so our content team creates compelling narratives that educate your audience and position your brand as a thought leader in your specific industry. We also utilize advanced analytics and heatmaps to track user behavior, allowing us to continuously optimize your funnels for maximum conversion and lifetime value. Our social media strategies are designed to build active communities around your brand, fostering loyalty and word-of-mouth referrals that are essential for long-term success. We don't just report on vanity metrics like "likes" or "impressions"; we focus on the KPIs that actually matter to your bottom line, such as cost per acquisition and return on ad spend. By integrating marketing directly with your product roadmap, we ensure that every campaign is perfectly aligned with your business objectives and user needs.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c207?auto=format&fit=crop&w=800&q=80" 
              alt="Digital Marketing" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
