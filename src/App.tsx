import React from 'react';
import { CollisionSimulation } from './components/simulation/CollisionSimulation';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Box Collision Simulation
        </h1>
        <CollisionSimulation />
      </div>
    </div>
  );
}

export default App;