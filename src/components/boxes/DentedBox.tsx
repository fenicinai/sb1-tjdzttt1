import React from 'react';

export function DentedBox() {
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
        
        {/* Dent effect - moved to right side */}
        <div className="absolute right-4 top-1/2 w-14 h-14 -translate-y-1/2">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}