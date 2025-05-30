import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ConstructionAnimation: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative h-32 w-full max-w-sm mx-auto my-12">
      {/* Construction zone illustration */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Animated elements */}
        <div className="relative">
          {/* Construction platform */}
          <div className={`h-2 w-48 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          
          {/* Animated dots representing activity */}
          <div className="absolute -top-10 left-0 flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '600ms' }}></div>
          </div>
          
          {/* Code block representation */}
          <div className={`absolute -top-24 left-16 h-16 w-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded p-2 shadow-lg transform rotate-6 animate-pulse-slow`}>
            <div className={`h-1 w-14 mb-1 rounded ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
            <div className={`h-1 w-10 mb-1 rounded ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
            <div className={`h-1 w-16 mb-1 rounded ${isDarkMode ? 'bg-green-500' : 'bg-green-400'}`}></div>
            <div className={`h-1 w-8 rounded ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`}></div>
          </div>
          
          {/* Gear animation */}
          <div className="absolute -top-20 right-10">
            <div className={`h-8 w-8 rounded-full border-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-400'} animate-spin-slow`}>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
              <div className={`absolute top-1/2 right-0 transform translate-y-1/2 translate-x-1/2 h-1 w-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-3 w-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
              <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 h-1 w-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionAnimation;