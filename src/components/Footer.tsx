import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black text-white relative">
      {/* Separator Line */}
      <div className="absolute top-[-1px] w-full h-px bg-gray-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © 2025 Computer Saviour. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">
              Developed by Dhruv G.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;