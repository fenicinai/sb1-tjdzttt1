import React from 'react';

export function Box3D() {
  return (
    <div className="relative w-full aspect-square">
      {/* Container with perspective */}
      <div 
        className="relative w-full h-full"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 bg-blue-500"
          style={{
            transform: 'rotateX(15deg) rotateY(45deg) translateZ(20px)',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Shading effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </div>

        {/* Top face */}
        <div 
          className="absolute inset-0 bg-blue-600 origin-bottom"
          style={{
            transform: 'rotateX(-75deg) translateY(-50%) translateZ(20px)',
            boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
        </div>

        {/* Right face */}
        <div 
          className="absolute inset-0 bg-blue-700 origin-left"
          style={{
            transform: 'rotateY(75deg) translateX(50%) translateZ(20px)',
            boxShadow: 'inset -2px 0 5px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}