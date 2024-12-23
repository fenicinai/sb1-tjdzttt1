// Constants for simulation
export const MASS_VALUES = [1, 2, 3]; // kg
export const VELOCITY_VALUES = [5, 10, 15]; // m/s

// Calculate actual kinetic energy using 1/2 * m * v^2
export function calculateKineticEnergy(massIndex: number, velocityIndex: number): number {
  const mass = MASS_VALUES[massIndex - 1];
  const velocity = VELOCITY_VALUES[velocityIndex - 1];
  return 0.5 * mass * Math.pow(velocity, 2);
}

export function getDamageLevel(ke: number) {
  if (ke <= 12.5) return 'scratched';
  if (ke <= 25) return 'dented';
  if (ke <= 50) return 'cracked';
  return 'destroyed';
}