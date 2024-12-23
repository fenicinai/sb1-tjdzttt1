import React from 'react';
import { Play, Square, RotateCcw } from 'lucide-react';
import { MASS_VALUES, VELOCITY_VALUES } from '../../utils/physics';

interface SimulationControlsProps {
  mass: number;
  velocity: number;
  onMassChange: (mass: number) => void;
  onVelocityChange: (velocity: number) => void;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function SimulationControls({
  mass,
  velocity,
  onMassChange,
  onVelocityChange,
  onStart,
  onStop,
  onReset,
  isRunning,
}: SimulationControlsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mass (kg)</label>
          <div className="flex gap-2">
            {MASS_VALUES.map((value, index) => (
              <button
                key={value}
                onClick={() => onMassChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  mass === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Velocity (m/s)</label>
          <div className="flex gap-2">
            {VELOCITY_VALUES.map((value, index) => (
              <button
                key={value}
                onClick={() => onVelocityChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  velocity === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onStart}
          disabled={isRunning}
          className={`flex items-center gap-2 px-6 py-3 rounded ${
            isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          <Play size={20} />
          Start
        </button>
        
        <button
          onClick={onStop}
          disabled={!isRunning}
          className={`flex items-center gap-2 px-6 py-3 rounded ${
            !isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600'
          } text-white`}
        >
          <Square size={20} />
          Stop
        </button>
        
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          <RotateCcw size={20} />
          Reset
        </button>
      </div>
    </div>
  );
}