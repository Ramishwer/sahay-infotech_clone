
import React, { useEffect } from 'react';

const BlockchainDevPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Blockchain Development</h1>
          <p className="text-xl text-indigo-300">Unprecedented transparency and decentralized security.</p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Blockchain technology offers unprecedented transparency and security, and our development team is at the forefront of implementing decentralized solutions that solve real-world business problems. We specialize in smart contract development, decentralized applications (dApps), and private blockchain networks tailored for supply chain, finance, and identity management sectors. Our engineers are proficient in Solidity, Rust, and Substrate, allowing us to build on popular networks like Ethereum, Solana, and Polkadot, or create custom Layer-2 solutions for specific needs. We focus on creating secure, audited code that minimizes gas costs while maximizing execution speed and reliability in a trustless environment. Beyond just writing smart contracts, we help businesses understand how tokenomics and decentralized governance can be leveraged to create new value propositions and community-driven ecosystems. Our blockchain solutions are designed with interoperability in mind, ensuring that your decentralized assets can interact seamlessly with the broader Web3 landscape. We also provide comprehensive security auditing services to identify and mitigate vulnerabilities before they can be exploited, protecting your investment and your users. By bridging the gap between traditional enterprise systems and the new world of decentralized finance, we empower your business to lead in the next era of digital innovation.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" 
              alt="Blockchain Development" 
              className="rounded-3xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDevPage;
