import React from 'react';
import { Machine } from '../types/machine';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Zap, Cpu, Activity, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MachineCardProps {
  machine: Machine;
  onRent: (machine: Machine) => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, onRent }) => {
  const isUltra = machine.tier === 'Ultra';
  const isEnterprise = machine.tier === 'Enterprise';
  const isPro = machine.tier === 'Pro';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative group",
        isUltra && "col-span-1 md:col-span-2"
      )}
    >
      <Card className={cn(
        "overflow-hidden border-2 transition-all duration-300 bg-card/50 backdrop-blur-sm",
        isUltra ? "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]" : 
        isEnterprise ? "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]" :
        isPro ? "border-blue-500" : "border-border/50"
      )}>
        {/* Tier Badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge className={cn(
            "font-bold uppercase tracking-wider",
            isUltra ? "bg-amber-500 text-black hover:bg-amber-600" :
            isEnterprise ? "bg-purple-600 text-white" :
            isPro ? "bg-blue-600 text-white" : "bg-zinc-700 text-zinc-100"
          )}>
            {machine.tier}
          </Badge>
        </div>

        <div className={cn(
          "flex flex-col",
          isUltra ? "md:flex-row" : "flex-col"
        )}>
          {/* Image Section */}
          <div className={cn(
            "relative overflow-hidden",
            isUltra ? "w-full md:w-2/5 aspect-square" : "w-full aspect-video"
          )}>
            <img 
              src={machine.imageUrl} 
              alt={machine.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            
            {/* Structural Differentiation: Profit Overlay for High Tiers */}
            {(isUltra || isEnterprise) && (
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">
                  +${machine.profitPerDay.toFixed(2)} / day
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={cn(
            "p-5 flex flex-col justify-between flex-1",
            isUltra && "md:p-8"
          )}>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className={cn(
                  "font-bold text-foreground",
                  isUltra ? "text-2xl" : "text-lg"
                )}>
                  {machine.name}
                </h3>
              </div>

              {/* Hashrate/Stats Grid - Structural Difference */}
              <div className={cn(
                "grid gap-3 mb-6",
                isUltra ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"
              )}>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-tighter">Hashrate</span>
                    <span className="text-sm font-bold">{machine.hashrate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-tighter">Power</span>
                    <span className="text-sm font-bold">{machine.power}</span>
                  </div>
                </div>
                
                {/* Extra Stats for High Tiers */}
                {(isUltra || isEnterprise) && (
                  <>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-tighter">Efficiency</span>
                        <span className="text-sm font-bold">{machine.efficiency}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-primary/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-tighter">Stock</span>
                        <span className="text-sm font-bold">{machine.stock} units</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Rental Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-primary">${machine.price.toFixed(2)}</span>
                  <span className="text-xs text-muted-foreground">/ month</span>
                </div>
              </div>
              
              <Button 
                onClick={() => onRent(machine)}
                className={cn(
                  "font-bold px-6 h-11 transition-all duration-300 active:scale-95",
                  isUltra ? "bg-amber-500 text-black hover:bg-amber-600 shadow-lg shadow-amber-500/20" :
                  isEnterprise ? "bg-purple-600 hover:bg-purple-700" :
                  "bg-primary hover:bg-primary/90"
                )}
              >
                Rent Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
