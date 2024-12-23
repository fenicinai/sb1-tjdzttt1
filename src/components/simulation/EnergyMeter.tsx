import React from 'react';

interface EnergyMeterProps {
  kineticEnergy: number;
}

export function EnergyMeter({ kineticEnergy }: EnergyMeterProps) {
  const maxKE = 337.5; // Maximum possible KE (3 kg * 15^2 m/s * 0.5)
  const percentage = (kineticEnergy / maxKE) * 100;

  const getColor = () => {
    if (kineticEnergy <= 12.5) return 'bg-green-500';
    if (kineticEnergy <= 25) return 'bg-yellow-500';
    if (kineticEnergy <= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="text-sm font-medium text-gray-700 mb-2">Kinetic Energy</div>
      <div className="relative h-8">
        <div className="absolute top-0 left-0 w-full bg-gray-200 rounded-full h-full">
          <div
            className={`h-full transition-all duration-300 ${getColor()} rounded-full`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-medium">
          {kineticEnergy > 0 ? `${kineticEnergy.toFixed(1)} J` : ''}
        </div>
      </div>
    </div>
  );
}