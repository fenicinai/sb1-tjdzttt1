import React from 'react';

export function Box2D() {
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
        
        {/* Inner shadow for depth */}
        <div className="absolute inset-2 bg-gradient-to-br from-blue-400/20 to-blue-600/20" />
      </div>
    </div>
  );
}