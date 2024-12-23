import React from 'react';

export function CrackedBox() {
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
        
        {/* Crack pattern */}
        <div className="absolute inset-0">
          {/* Main crack */}
          <div className="absolute h-full w-[2px] bg-white/30 left-1/2 top-0 transform -rotate-12" />
          
          {/* Branching cracks */}
          <div className="absolute w-12 h-[2px] bg-white/30 top-1/3 left-1/3 rotate-45" />
          <div className="absolute w-16 h-[2px] bg-white/30 top-1/2 left-1/4 -rotate-30" />
          <div className="absolute w-10 h-[2px] bg-white/30 bottom-1/3 right-1/3 rotate-15" />
          
          {/* Shadow around cracks */}
          <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-gradient-to-br from-black to-transparent" />
        </div>
      </div>
    </div>
  );
}