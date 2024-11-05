import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sprout, ShoppingBasket, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuctions from './components/FeaturedAuctions';
import Categories from './components/Categories';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Auctions from './components/Auctions';
import SellProducts from './components/SellProducts';
import About from './components/About';

function App() {
  const features = [
    {
      icon: <Sprout className="w-6 h-6 text-green-600" />,
      title: "Direct from Kisans",
      description: "Connect directly with local farmers across India for fresh produce"
    },
    {
      icon: <ShoppingBasket className="w-6 h-6 text-green-600" />,
      title: "Live Auctions",
      description: "Bid in real-time on premium quality agricultural products"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Verified Sellers",
      description: "All farmers are verified through KYC for quality assurance"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        {feature.icon}
                        <h3 className="ml-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <FeaturedAuctions />
                <Categories />
              </div>
            </>
          } />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/sell" element={<SellProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;