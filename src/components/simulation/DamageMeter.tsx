import React from 'react';
import { getDamageLevel } from '../../utils/physics';

interface DamageMeterProps {
  kineticEnergy: number;
}

export function DamageMeter({ kineticEnergy }: DamageMeterProps) {
  const maxKE = 337.5; // Maximum possible KE
  const percentage = (kineticEnergy / maxKE) * 100;
  const damageLevel = getDamageLevel(kineticEnergy);
  
  const getColor = () => {
    switch (damageLevel) {
      case 'scratched': return 'bg-green-500';
      case 'dented': return 'bg-yellow-500';
      case 'cracked': return 'bg-orange-500';
      case 'destroyed': return 'bg-red-500';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-sm font-medium text-gray-700 mb-2">Damage Level</div>
      <div className="relative h-8">
        <div className="absolute top-0 left-0 w-full bg-gray-200 rounded-full h-full">
          <div
            className={`h-full transition-all duration-300 ${getColor()} rounded-full`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
          {kineticEnergy > 0 ? `${percentage.toFixed(0)}%` : ''}
        </div>
      </div>
    </div>
  );
}