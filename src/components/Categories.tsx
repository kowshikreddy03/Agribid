import React from 'react';
import { Wheat, Apple, Leaf, Coffee } from 'lucide-react';

export default function Categories() {
  const categories = [
    { icon: <Wheat className="h-6 w-6" />, name: "Grains", count: 150 },
    { icon: <Apple className="h-6 w-6" />, name: "Fruits", count: 89 },
    { icon: <Leaf className="h-6 w-6" />, name: "Vegetables", count: 120 },
    { icon: <Coffee className="h-6 w-6" />, name: "Others", count: 45 }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-green-100 rounded-full text-green-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-gray-500">{category.count} items</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}