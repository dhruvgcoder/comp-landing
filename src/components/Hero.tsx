import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import WarningPopup from './WarningPopup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-start space-y-8">
          <div className="flex items-center space-x-4">
            <Wrench size={40} className="text-black" />
            <h2 className="text-2xl font-medium">Computer Saviour</h2>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">
            APPLE PRODUCT
            <br />
            REPAIR EXPERTS
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl">
            Professional Apple device repair service in C-Scheme, Jaipur. 
            Expert diagnostics and repairs by certified technicians.
          </p>
          
          <div className="flex space-x-6">
            <button
              className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              onClick={handlePopupOpen}
            >
              Book Repair
            </button>
            <button
              className="px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
              onClick={handlePopupOpen}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Warning Popup */}
      {showPopup && <WarningPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default Hero;