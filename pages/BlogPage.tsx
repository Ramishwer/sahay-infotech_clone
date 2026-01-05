
import React, { useEffect } from 'react';

const posts = [
  {
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how generative models are reshaping the way large organizations interact with data and automate complex workflows.',
    date: 'Oct 24, 2023',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mastering Microservices with Go and gRPC',
    excerpt: 'A deep dive into building highly performant and scalable service-to-service communication for modern distributed systems.',
    date: 'Oct 18, 2023',
    author: 'Mark Davids',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Why UI/UX is the Most Important Factor in Retention',
    excerpt: 'Psychological triggers and design patterns that keep users engaged in your mobile app and reduce churn rates significantly.',
    date: 'Oct 12, 2023',
    author: 'Elena Rossi',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Securing Decentralized Applications: A Web3 Primer',
    excerpt: 'Best practices for auditing smart contracts and protecting user assets in the rapidly evolving landscape of decentralized finance.',
    date: 'Oct 05, 2023',
    author: 'James Wu',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cloud Optimization: Reducing Costs by 30%',
    excerpt: 'Proven strategies for right-sizing your cloud infrastructure and leveraging serverless computing to minimize operational overhead.',
    date: 'Sep 28, 2023',
    author: 'David Chen',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Ethics of AI Development',
    excerpt: 'Navigating the complex landscape of bias, privacy, and accountability in the age of increasingly autonomous software systems.',
    date: 'Sep 21, 2023',
    author: 'Dr. Linda Mayer',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80'
  }
];

const BlogPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Sahay Insights</h1>
          <p className="text-xl text-slate-600">Deep dives into the technology and strategy driving the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="h-56 overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center space-x-3 text-xs font-bold uppercase text-indigo-600 mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">{post.excerpt}</p>
              <span className="mt-auto text-sm font-bold text-slate-900 underline underline-offset-4 group-hover:text-indigo-600 transition-colors">Read Article</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
