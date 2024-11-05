import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About AgriBid</h1>
        <p className="text-xl text-gray-600">Empowering Indian farmers through technology</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6">
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
          <p className="text-gray-600">Verified farmers and buyers ensuring secure transactions</p>
        </div>
        <div className="text-center p-6">
          <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
          <p className="text-gray-600">Thousands of farmers and buyers across India</p>
        </div>
        <div className="text-center p-6">
          <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
          <p className="text-gray-600">Better returns for farmers through competitive bidding</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            AgriBid is committed to revolutionizing agricultural trade in India by providing a transparent
            and efficient platform for farmers to sell their produce directly to buyers. We aim to
            eliminate intermediaries and ensure better prices for farmers while maintaining quality
            standards for buyers.
          </p>
          <p className="text-gray-600">
            Our platform supports the Digital India initiative and promotes sustainable farming practices
            across the country. We work closely with farmer producer organizations (FPOs) and agricultural
            experts to provide the best possible service to our community.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://player.vimeo.com/external/552670419.sd.mp4?s=1c6547d6e89c46a502d0c9686b36d56c5c4d4b47&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}