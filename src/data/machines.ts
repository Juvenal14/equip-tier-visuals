import { Machine } from '../types/machine';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Antminer S19j',
    price: 45.00,
    hashrate: '90 TH/s',
    power: '3100W',
    efficiency: '34.5 J/TH',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bee83223-5a2c-4e72-ac46-8b2d07f85d08/asic-miner-basic-5f98251f-1781507325119.webp',
    tier: 'Basic',
    profitPerDay: 1.25,
    stock: 12
  },
  {
    id: '2',
    name: 'GPU Rig RTX 3080',
    price: 120.00,
    hashrate: '600 MH/s',
    power: '1500W',
    efficiency: '2.5 J/MH',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bee83223-5a2c-4e72-ac46-8b2d07f85d08/gpu-rig-pro-b0791c74-1781507324983.webp',
    tier: 'Pro',
    profitPerDay: 3.50,
    stock: 5
  },
  {
    id: '3',
    name: 'Enterprise Rack V3',
    price: 350.00,
    hashrate: '520 TH/s',
    power: '12500W',
    efficiency: '24 J/TH',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bee83223-5a2c-4e72-ac46-8b2d07f85d08/server-rack-enterprise-ac0f51d6-1781507327870.webp',
    tier: 'Enterprise',
    profitPerDay: 12.80,
    stock: 2
  },
  {
    id: '4',
    name: 'Liquid Ultra 9000',
    price: 750.00,
    hashrate: '1.2 PH/s',
    power: '22000W',
    efficiency: '18 J/TH',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bee83223-5a2c-4e72-ac46-8b2d07f85d08/liquid-cooled-ultra-73c37eb5-1781507324314.webp',
    tier: 'Ultra',
    profitPerDay: 28.50,
    stock: 1
  }
];
