import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 Computer Saviour. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Developed by Dhruv G.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer