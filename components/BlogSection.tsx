
import React from 'react';

const posts = [
  {
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how generative models are reshaping the way large organizations interact with data.',
    date: 'Oct 24, 2023',
    author: 'Sarah Jenkins',
    image: 'https://picsum.photos/seed/blog1/600/400'
  },
  {
    title: 'Mastering Microservices with Go and gRPC',
    excerpt: 'A deep dive into building highly performant and scalable service-to-service communication.',
    date: 'Oct 18, 2023',
    author: 'Mark Davids',
    image: 'https://picsum.photos/seed/blog2/600/400'
  },
  {
    title: 'Why UI/UX is the Most Important Factor in Retention',
    excerpt: 'Psychological triggers and design patterns that keep users engaged in your mobile app.',
    date: 'Oct 12, 2023',
    author: 'Elena Rossi',
    image: 'https://picsum.photos/seed/blog3/600/400'
  }
];

const BlogSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Blog & Insights</h4>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Thoughts from the engineering frontlines.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100">
                <img src={p.image} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center space-x-3 mb-4 text-xs font-bold uppercase tracking-widest text-indigo-600">
                <span>{p.date}</span>
                <span className="w-1 h-1 bg-indigo-300 rounded-full"></span>
                <span>By {p.author}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                {p.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.excerpt}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center space-x-2 border-2 border-slate-200 px-8 py-3 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <span>Read All Articles</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
