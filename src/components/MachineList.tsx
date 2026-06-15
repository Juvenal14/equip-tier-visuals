import React from 'react';
import { machines } from '../data/machines';
import { MachineCard } from './MachineCard';
import { Machine } from '../types/machine';
import { toast } from 'sonner';

export const MachineList: React.FC = () => {
  const handleRent = (machine: Machine) => {
    toast.success(`Rental initiated: ${machine.name}`, {
      description: `Contract for ${machine.hashrate} starting at $${machine.price}/mo`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
      {machines.map((machine) => (
        <MachineCard 
          key={machine.id} 
          machine={machine} 
          onRent={handleRent} 
        />
      ))}
    </div>
  );
};
