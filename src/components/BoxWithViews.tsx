import React from 'react';
import { Box3D } from './Box3D';

export function BoxWithViews() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-white text-sm mb-2">Top View</div>
      <Box3D perspective="top" />
      <div className="flex gap-8 items-center mt-4">
        <div className="flex flex-col items-center">
          <div className="text-white text-sm mb-2">Left View</div>
          <Box3D perspective="left" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white text-sm mb-2">Front View</div>
          <Box3D perspective="front" />
        </div>
      </div>
    </div>
  );
}