"use client"
import React from 'react';

const Bio = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-wrap gap-4 max-w-full">
        <button className="bg-yellow-500 text-white py-3 px-6 rounded-l-full hover:bg-yellow-600 transition-colors duration-300 flex-shrink-0">
          Resume
        </button>
        <button className="bg-green-500 text-white py-3 px-6 rounded-none hover:bg-green-600 transition-colors duration-300 flex-shrink-0">
          Research
        </button>
        <button className="bg-red-500 text-white py-3 px-6 rounded-none hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
          Outreach
        </button>
        <button className="bg-orange-500 text-white py-3 px-6 rounded-r-full hover:bg-orange-600 transition-colors duration-300 flex-shrink-0">
          Personal
        </button>
      </div>
    </div>
  );
};

export default Bio;
