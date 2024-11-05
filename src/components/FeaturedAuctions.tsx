import React from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedAuctions() {
  const auctions = [
    {
      id: 1,
      title: "Premium Basmati Rice",
      video: "https://player.vimeo.com/external/538792547.sd.mp4?s=7f7f1d8f4a5f37d75832798e8a451ce2b51a7d52&profile_id=165&oauth2_token_id=57447761",
      currentBid: 2500,
      timeLeft: "2h 15m",
      seller: "Punjab Organic Farms"
    },
    {
      id: 2,
      title: "Kashmir Apples",
      video: "https://player.vimeo.com/external/371843516.sd.mp4?s=c0de8d3a8bf00f3f92147bce89b41a2c86b8a75d&profile_id=165&oauth2_token_id=57447761",
      currentBid: 1200,
      timeLeft: "4h 30m",
      seller: "Kashmir Valley Orchards"
    },
    {
      id: 3,
      title: "Organic Wheat",
      video: "https://player.vimeo.com/external/496797025.sd.mp4?s=f25f2bc45a8299b8c4ec699ecd73eadb7f81c40f&profile_id=165&oauth2_token_id=57447761",
      currentBid: 3500,
      timeLeft: "1h 45m",
      seller: "MP Wheat Co-op"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Auctions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative h-48">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={auction.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{auction.title}</h3>
              <p className="text-gray-600 mb-4">by {auction.seller}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-green-600">
                  <IndianRupee className="h-5 w-5 mr-1" />
                  <span className="font-semibold">{auction.currentBid}/quintal</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{auction.timeLeft}</span>
                </div>
              </div>
              <Link 
                to={`/auctions/${auction.id}`}
                className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-block text-center"
              >
                Place Bid
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}