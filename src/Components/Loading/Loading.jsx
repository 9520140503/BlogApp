
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loading;
