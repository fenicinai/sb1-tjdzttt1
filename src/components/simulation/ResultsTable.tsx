import React from 'react';

interface Result {
  mass: number;
  velocity: number;
  kineticEnergy: number;
  damageType: string;
}

interface ResultsTableProps {
  results: Result[];
  onClearData: () => void;
}

export function ResultsTable({ results, onClearData }: ResultsTableProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Collision Results</h3>
        <button
          onClick={onClearData}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
        >
          Clear Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mass (kg)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Velocity (m/s)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kinetic Energy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Damage Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((result, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.mass}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.velocity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.kineticEnergy.toFixed(1)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                    result.damageType === 'scratched' ? 'bg-green-100 text-green-800' :
                    result.damageType === 'dented' ? 'bg-yellow-100 text-yellow-800' :
                    result.damageType === 'cracked' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.damageType}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}