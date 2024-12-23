import React from 'react';

export function ScratchedBox() {
  return (
    <div className="relative w-full aspect-square">
      {/* Main box */}
      <div className="absolute inset-0 bg-blue-500 rounded-md shadow-md">
        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-blue-400 rounded-t-md" />
        
        {/* Right edge shadow */}
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-blue-600 rounded-r-md" />
        
        {/* Bottom edge shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 rounded-b-md" />
        
        {/* Scratch marks - concentrated on the right side */}
        <div className="absolute right-0 inset-y-0 w-1/3">
          <div className="absolute transform -rotate-30 h-[1px] w-12 bg-white/40 top-8 right-6" />
          <div className="absolute transform rotate-15 h-[1px] w-10 bg-white/40 top-12 right-4" />
          <div className="absolute transform -rotate-45 h-[1px] w-8 bg-white/40 top-16 right-8" />
          <div className="absolute transform rotate-20 h-[1px] w-14 bg-white/40 top-20 right-6" />
          <div className="absolute transform -rotate-15 h-[1px] w-10 bg-white/40 top-24 right-4" />
        </div>
      </div>
    </div>
  );
}