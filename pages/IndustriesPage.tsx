
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const industryData = [
  {
    name: 'Finance',
    icon: '🏦',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    desc: 'Our solutions streamline financial operations, ensuring efficiency and security in managing transactions and data. We build secure, compliant, and high-performance banking platforms that incorporate military-grade encryption and multi-factor authentication. Our Fintech team specializes in real-time payment processing and decentralized finance protocols that bridge the gap with modern user expectations. We focus on low-latency execution and high availability, ensuring that your customers can manage their assets safely 24/7 without interruption. By leveraging AI for fraud detection, we provide financial institutions with a competitive edge in an increasingly automated market.'
  },
  {
    name: 'Logistics',
    icon: '🚚',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    desc: 'From inventory management to supply chain optimization, our software enhances logistical processes for smoother operations. Our tools track inventory, manage fleet operations, and reduce delivery overheads through integrated real-time GPS tracking. We implement AI-driven route optimization to maximize efficiency across global networks and help navigate international shipping complexities. Automated customs documentation and warehouse management systems ensure that your operational workflows remain fast and transparent. Our platforms are designed to be intuitive for field staff while providing powerful oversight tools for logistics managers.'
  },
  {
    name: 'Education',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80',
    desc: 'We provide innovative tools for educational institutions, facilitating seamless learning experiences and administrative efficiency. Our edtech solutions offer virtual classrooms, student management portals, and interactive learning modules for modern hybrid environments. We help schools transition to digital-first models with technical stability, supporting diverse media formats for educators and students. Detailed analytics on student progress allow for personalized instruction, ensuring that technology empowers rather than hinders learning. We focus on extreme accessibility and ease of use to ensure that educational resources are available to everyone, everywhere.'
  },
  {
    name: 'Taxi Services',
    icon: '🚕',
    image: 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&w=800&q=80',
    desc: 'Our solutions are tailored to improve ride-hailing services, offering reliability to both passengers and drivers alike. We connect users through intuitive mobile applications that feature real-time location services and secure payment gateways. Sophisticated dispatch algorithms ensure rapid response times and system stability even during peak demand periods. Our software provides comprehensive admin dashboards for fleet oversight, driver performance monitoring, and earnings tracking. We focus on creating a frictionless experience that prioritizes safety, speed, and customer satisfaction on every journey.'
  },
  {
    name: 'Hospitality',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    desc: 'We offer solutions that help hotels and hospitality businesses manage bookings, streamline check-ins, and personalize guest experiences. Our property management systems synchronize data across multiple booking channels to prevent overbooking and maximize occupancy. We help resorts provide a personalized journey through integrated loyalty programs and mobile concierge services for travelers. Our solutions prioritize operational efficiency, allowing staff to focus on guest service while automation handles the core paperwork. From initial booking to final check-out, we create a digital infrastructure that elevates the standard of modern hospitality.'
  },
  {
    name: 'Entertainment',
    icon: '🎬',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    desc: 'We offer specialized solutions for this industry, supporting content management, distribution, and audience engagement across platforms. Our dynamic distribution tools support high-quality streaming and media management for global audiences on any device. We integrate sophisticated Digital Rights Management and targeted advertising to maximize revenue potential for media companies. Our solutions prioritize low-latency streaming and high-definition quality to meet the expectations of modern digital consumers. We provide detailed audience analytics that help creators understand engagement patterns and optimize their content strategies.'
  },
  {
    name: 'Pharmaceuticals',
    icon: '🧪',
    image: 'https://images.unsplash.com/photo-1579165466541-74e2beeac73a?auto=format&fit=crop&w=800&q=80',
    desc: 'We offer tools for companies to manage research data and regulatory compliance, aiding in the development of medications. Our secure environments for research collaboration adhere to strict international data privacy and security standards like GxP. We help companies track the lifecycle of medications from laboratory development to final distribution to various healthcare providers. Automated reporting and data visualization tools assist in complex decision-making during clinical trials and market analysis. Our mission is to provide the technical foundation for safer, faster, and more efficient pharmaceutical innovation globally.'
  },
  {
    name: 'Govt. Sector',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
    desc: 'Our software helps govt. with citizen services, administrative tasks, and data management, fostering efficiency and transparency. We modernize legacy systems to offer secure online applications and digital record-keeping for local and national agencies. Our platforms are designed with extreme accessibility and high-security protocols to protect public information and maintain trust. We focus on reducing bureaucratic friction and improving the efficiency of resource allocation through data-driven insights. By digitizing citizen interactions, we help government bodies deliver faster, more transparent services to the public.'
  },
  {
    name: 'Healthcare',
    icon: '⚕️',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    desc: 'Our solutions assist in managing patient records securely, optimizing scheduling, and improving hospital operational efficiency. We build electronic health records and clinical dashboards that improve patient outcomes through real-time data monitoring. Our software integrates with diagnostic equipment and ensures full compliance with HIPAA and other international medical data standards. We prioritize patient confidentiality while providing doctors with automated alerts for potential health risks and diagnostic aid. Our goal is to provide medical professionals with the tools they need to focus on healing rather than administrative tasks.'
  },
  {
    name: 'E-Commerce',
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    desc: 'From e-commerce platforms to IMS, our software empowers retailers to enhance customer experiences and streamline sales processes. We build headless commerce architectures that allow for seamless sales across web, mobile, and various social media platforms. Our solutions include advanced search functionality, personalized recommendations, and secure global payment integrations for every merchant. We help brands manage complex logistical chains and customer relationships through centralized, easy-to-use administrative interfaces. By integrating marketing with product data, we ensure every campaign is perfectly aligned with your business objectives.'
  },
  {
    name: 'Real Estate',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    desc: 'Our software assists real estate professionals in managing property listings, client relationships, and facilitating transactions. We help agents and developers showcase properties with high-definition media and interactive virtual tours on any digital device. Our software automates the leasing and sales processes, tracking leads from initial inquiry through to final contract signing. We provide detailed market analytics and reporting tools to help professionals stay ahead of shifting real-world property trends. Our goal is to facilitate smoother transactions and better relationship management for everyone in the property sector.'
  }
];

const IndustriesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Industries We Empower</h1>
          <p className="text-xl text-slate-600">We deliver deep domain expertise across a wide spectrum of sectors, ensuring technical success through specialized knowledge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {industryData.map((industry, idx) => (
            <div key={idx} className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                  {industry.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {industry.desc}
                </p>
                <Link to="/contact" className="mt-auto text-indigo-600 font-bold text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Explore Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Don’t see your industry?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Don’t worry, we’re here to help. Sahay Infotech has a cross-functional team of experts ready to tackle any technical challenge you encounter. We specialize in building custom solutions regardless of your vertical.
            </p>
            <Link to="/contact" className="inline-block bg-indigo-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-indigo-900/50 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
