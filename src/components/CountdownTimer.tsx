import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Set launch date to 30 days from now for demo
  const calculateTimeLeft = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const difference = +launchDate - +new Date();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }
  };
  
  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className={`flex justify-center items-center h-16 md:h-20 w-16 md:w-20 text-2xl md:text-3xl font-bold rounded-lg ${
        isDarkMode 
          ? 'bg-gray-800 text-white shadow-lg shadow-purple-900/10' 
          : 'bg-white text-gray-800 shadow-md'
      }`}>
        {value.toString().padStart(2, '0')}
      </div>
      <span className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{label}</span>
    </div>
  );
  
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <h2 className={`text-xl text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Launching In
      </h2>
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;