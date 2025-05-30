import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Newsletter: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className={`w-full max-w-lg mx-auto px-6 py-12 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Subscribe to our newsletter to get notified when we launch
        </p>
      </div>

      {isSubmitted ? (
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'} text-center`}>
          <p className="text-green-500 font-medium">Thanks for subscribing!</p>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            We'll notify you when our site is ready.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full p-4 pr-12 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700 focus:border-purple-500' 
                  : 'bg-white border border-gray-300 focus:border-purple-500 shadow-sm'
              } outline-none transition-all duration-300`}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-2 rounded-md transition-all duration-300"
              aria-label="Subscribe"
            >
              <Send size={20} />
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Newsletter;