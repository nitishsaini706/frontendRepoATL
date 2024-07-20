import React from 'react';

const Icon: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900">
      <div className="flex  text-gray-400">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8,6 16,12 8,18" fill="currentColor" />
        </svg>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Icon;
