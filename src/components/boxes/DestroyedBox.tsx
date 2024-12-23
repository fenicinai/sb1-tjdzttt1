import React from 'react';

export function DestroyedBox() {
  return (
    <div className="relative w-full aspect-square">
      {/* Scattered pieces */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-500"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
            zIndex: Math.floor(Math.random() * 10),
          }}
        >
          {/* Piece detail */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute inset-0 border-t border-l border-white/10" />
        </div>
      ))}

      {/* Debris and smaller fragments */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`debris-${i}`}
          className="absolute bg-blue-400 rounded-full"
          style={{
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        />
      ))}

      {/* Shadow underneath */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full bg-black/20"
        style={{ filter: 'blur(4px)' }}
      />
    </div>
  );
}