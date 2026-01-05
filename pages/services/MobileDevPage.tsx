
import React, { useEffect } from 'react';

const MobileDevPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Mobile App Development</h1>
          <p className="text-xl text-slate-600">Intuitive experiences for iOS and Android.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Mobile technology has fundamentally changed how consumers interact with businesses, and our mobile app development services are designed to help you capture this massive market opportunity. We build native and cross-platform mobile applications that prioritize performance, security, and intuitive user interfaces for both the iOS and Android ecosystems. Our developers are experts in Swift and Kotlin for native builds, as well as React Native and Flutter for high-efficiency cross-platform solutions that reduce time-to-market. We understand that a successful mobile app requires more than just code; it requires a deep understanding of mobile user behavior and the specific constraints of handheld devices. Our process includes intensive prototyping, user testing, and performance optimization to ensure that your app remains responsive and battery-efficient even under heavy use. We also integrate advanced features such as push notifications, biometric authentication, and offline synchronization to provide a premium experience that keeps users coming back. Security is paramount in mobile environments, so we implement strict data encryption and secure API communication to safeguard user information at all times. Whether you are building a consumer-facing social platform or an internal enterprise tool for field agents, our mobile solutions are engineered to deliver excellence on every screen.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
              alt="Mobile App Development" 
              className="rounded-3xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevPage;
