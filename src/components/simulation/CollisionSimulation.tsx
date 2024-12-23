import React, { useState, useRef } from 'react';
import { Box2D } from '../Box2D';
import { ScratchedBox } from '../boxes/ScratchedBox';
import { DentedBox } from '../boxes/DentedBox';
import { CrackedBox } from '../boxes/CrackedBox';
import { DestroyedBox } from '../boxes/DestroyedBox';
import { SimulationControls } from './SimulationControls';
import { EnergyMeter } from './EnergyMeter';
import { DamageMeter } from './DamageMeter';
import { ResultsTable } from './ResultsTable';
import { calculateKineticEnergy, getDamageLevel, VELOCITY_VALUES, MASS_VALUES } from '../../utils/physics';

interface CollisionResult {
  mass: number;
  velocity: number;
  kineticEnergy: number;
  damageType: string;
}

export function CollisionSimulation() {
  const [mass, setMass] = useState(1);
  const [velocity, setVelocity] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [boxState, setBoxState] = useState('normal');
  const [position, setPosition] = useState(0);
  const [collisionResults, setCollisionResults] = useState<CollisionResult[]>([]);
  const [currentKE, setCurrentKE] = useState(0);
  const animationRef = useRef<number>();
  
  const kineticEnergy = calculateKineticEnergy(mass, velocity);
  
  const getDamagedBox = () => {
    const damage = getDamageLevel(currentKE);
    switch (damage) {
      case 'scratched': return <ScratchedBox />;
      case 'dented': return <DentedBox />;
      case 'cracked': return <CrackedBox />;
      case 'destroyed': return <DestroyedBox />;
      default: return <Box2D />;
    }
  };

  const startSimulation = () => {
    setIsRunning(true);
    setPosition(0);
    setBoxState('normal');
    setCurrentKE(0);
    
    const animate = () => {
      setPosition(prev => {
        const nextPos = prev + VELOCITY_VALUES[velocity - 1] / 10;
        if (nextPos >= 85) {
          setBoxState('damaged');
          setIsRunning(false);
          setCurrentKE(kineticEnergy);
          
          // Update results, replacing existing entry if mass-velocity combination exists
          setCollisionResults(prev => {
            const newResult = {
              mass: MASS_VALUES[mass - 1],
              velocity: VELOCITY_VALUES[velocity - 1],
              kineticEnergy,
              damageType: getDamageLevel(kineticEnergy)
            };
            
            const existingIndex = prev.findIndex(
              result => result.mass === newResult.mass && result.velocity === newResult.velocity
            );
            
            if (existingIndex !== -1) {
              const newResults = [...prev];
              newResults[existingIndex] = newResult;
              return newResults;
            }
            
            return [...prev, newResult];
          });
          
          return 85;
        }
        return nextPos;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopSimulation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsRunning(false);
  };

  const resetSimulation = () => {
    stopSimulation();
    setPosition(0);
    setBoxState('normal');
    setCurrentKE(0);
    setMass(1);
    setVelocity(1);
  };

  const clearData = () => {
    setCollisionResults([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl">
      <div className="mb-8">
        <SimulationControls
          mass={mass}
          velocity={velocity}
          onMassChange={setMass}
          onVelocityChange={setVelocity}
          onStart={startSimulation}
          onStop={stopSimulation}
          onReset={resetSimulation}
          isRunning={isRunning}
        />
      </div>

      <div className="relative h-64 bg-white rounded-lg shadow-inner mb-6">
        {/* Wall */}
        <div className="absolute right-0 top-0 h-full w-4 bg-gray-300" />
        
        {/* Box */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-24"
          style={{ left: `${position}%` }}
        >
          {boxState === 'normal' ? <Box2D /> : getDamagedBox()}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <EnergyMeter kineticEnergy={currentKE} />
        <DamageMeter kineticEnergy={currentKE} />
      </div>

      <ResultsTable results={collisionResults} onClearData={clearData} />
    </div>
  );
}