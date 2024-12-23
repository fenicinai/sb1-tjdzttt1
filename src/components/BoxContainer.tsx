import React from 'react';
import { Box3D } from './Box3D';

export function BoxContainer() {
  return (
    <div className="bg-gray-700/50 p-6 rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        {/* Top view */}
        <div className="col-span-2">
          <div className="text-gray-300 text-sm mb-2 text-center">Top View</div>
          <div className="h-32 w-32 mx-auto">
            <Box3D perspective="top" className="w-full h-full" />
          </div>
        </div>
        
        {/* Side view */}
        <div>
          <div className="text-gray-300 text-sm mb-2 text-center">Side View</div>
          <div className="h-32 w-32 mx-auto">
            <Box3D perspective="side" className="w-full h-full" />
          </div>
        </div>
        
        {/* Front view */}
        <div>
          <div className="text-gray-300 text-sm mb-2 text-center">Front View</div>
          <div className="h-32 w-32 mx-auto">
            <Box3D perspective="front" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}