import React from 'react';

export function CardboardBox() {
  return (
    <div className="relative w-48 h-48">
      {/* Front face */}
      <div 
        className="absolute inset-0 bg-[#D4B895] rounded-sm"
        style={{
          transform: 'perspective(800px) rotateX(10deg) rotateY(-10deg)',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Texture lines for cardboard effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-black/10 to-transparent" />
        </div>
        
        {/* Top flap shadow */}
        <div 
          className="absolute top-0 left-0 right-0 h-4 bg-black/10"
        />
      </div>
      
      {/* Top face */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 bg-[#C4A885] origin-bottom"
        style={{
          transform: 'perspective(800px) rotateX(-70deg) translateY(-50%)',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      />
      
      {/* Side face */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-12 bg-[#B99B78] origin-left"
        style={{
          transform: 'perspective(800px) rotateY(70deg) translateX(50%)',
          boxShadow: 'inset -2px 0 4px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
}