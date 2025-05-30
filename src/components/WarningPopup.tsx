import React from 'react';
import { X } from 'lucide-react';

interface WarningPopupProps {
  onClose: () => void;
}

const WarningPopup: React.FC<WarningPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white text-black rounded-lg shadow-lg w-96 p-6">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">We are under development</h2>
        <p className="text-gray-700 mb-6">
          Our website is currently under maintainance. Please try again later.
        </p>
        <button
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WarningPopup;