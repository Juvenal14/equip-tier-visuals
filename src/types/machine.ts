export type MachineTier = 'Basic' | 'Pro' | 'Enterprise' | 'Ultra';

export interface Machine {
  id: string;
  name: string;
  price: number;
  hashrate: string;
  power: string;
  efficiency: string;
  imageUrl: string;
  tier: MachineTier;
  profitPerDay: number;
  stock: number;
}
