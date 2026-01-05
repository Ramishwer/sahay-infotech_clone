
import React, { useState } from 'react';
import { getProjectArchitecture } from '../services/geminiService';
import { AIResponse } from '../types';

const AIArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getProjectArchitecture(prompt);
      setResult(data);
    } catch (e: any) {
      setError(e.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/2">
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Gemini AI Project Architect</h4>
          <h2 className="text-4xl font-bold text-white mb-6">Describe your idea, we'll architect the solution instantly.</h2>
          <p className="text-slate-400 text-lg mb-10">
            Using Google's most advanced AI models, we analyze your requirements and generate a technical roadmap, suggested stack, and complexity assessment in seconds.
          </p>
          
          <div className="bg-slate-800 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 border border-slate-700 shadow-2xl">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Build a secure telehealth platform for mental health with real-time video..."
              className="bg-transparent text-white p-4 flex-grow outline-none placeholder:text-slate-500"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span>Architect Now</span>
                </>
              )}
            </button>
          </div>
          
          {error && <p className="mt-4 text-red-400 text-sm flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            <span>{error}</span>
          </p>}
        </div>

        <div className="lg:w-1/2 w-full">
          {result ? (
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl animate-fade-in">
              <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <h3 className="text-2xl font-bold text-white">Solution Blueprint</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  result.complexity === 'High' ? 'bg-red-900/40 text-red-400' : 
                  result.complexity === 'Medium' ? 'bg-yellow-900/40 text-yellow-400' : 'bg-green-900/40 text-green-400'
                }`}>
                  {result.complexity} Complexity
                </span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-indigo-400 text-xs font-bold uppercase mb-3">Roadmap & Phases</h4>
                  <ul className="space-y-2">
                    {result.roadmap.map((step, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start space-x-3 text-sm">
                        <span className="bg-slate-700 text-indigo-400 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">{idx + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-indigo-400 text-xs font-bold uppercase mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-xs font-medium">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-indigo-400 text-xs font-bold uppercase mb-3">MVP Timeline</h4>
                    <p className="text-white font-bold">{result.estimation}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '#contact'}
                className="w-full mt-8 bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Request Full Proposal
              </button>
            </div>
          ) : (
            <div className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-3xl h-[400px] flex flex-col items-center justify-center text-slate-500 text-center p-8">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <p className="text-sm">Submit your project description to generate <br/> a custom architecture report.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIArchitect;
