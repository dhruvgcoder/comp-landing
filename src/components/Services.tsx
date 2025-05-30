import React from 'react';
import { Smartphone, Laptop, Watch, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'iPhone Repair',
      description: 'Screen replacement, battery service, and more',
      features: ['Screen Repairs', 'Battery Replacement', 'Camera Fixes', 'Water Damage']
    },
    {
      icon: Laptop,
      title: 'MacBook Service',
      description: 'Hardware upgrades, repairs, and maintenance',
      features: ['Logic Board Repair', 'SSD Upgrade', 'Screen Replacement', 'Keyboard Fix']
    },
    {
      icon: Watch,
      title: 'Apple Watch',
      description: 'Screen and battery replacement services',
      features: ['Screen Repairs', 'Battery Service', 'Button Fixes', 'Water Damage']
    },
    {
      icon: Headphones,
      title: 'AirPods Service',
      description: 'Cleaning and repair for all AirPods models',
      features: ['Deep Cleaning', 'Case Repair', 'Battery Service', 'Audio Fixes']
    }
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-lg 
                       transition-all duration-300 ease-in-out
                       bg-neutral-900 hover:bg-white
                       border border-neutral-800 hover:border-black
                       transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <service.icon 
                size={32} 
                className="mb-4 text-white group-hover:text-black transition-colors duration-300" 
              />
              <h3 className="text-xl font-medium mb-2 text-white group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Features list that appears on hover */}
              <ul className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services