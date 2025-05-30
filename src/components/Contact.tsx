import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={24} />
                <p>C-Scheme, Jaipur, Rajasthan</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} />
                <p>+91 9351xxxxx</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={24} />
                <p>contact@computersaviour.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-medium mb-6">About Us</h3>
            <p className="text-gray-400">
              Computer Saviour is owned by Hemant Gupta, 
              providing expert Apple product repair services in Jaipur since 2012.
            </p>
            <p className="text-gray-400">
              We specialize in all Apple devices with certified technicians and 
              genuine parts for reliable repairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact