import { MachineList } from './components/MachineList';
import { Toaster } from './components/ui/sonner';
import { Wallet, LayoutDashboard, History, Settings, Bell, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-primary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[30%] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex flex-col">
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Mining Fleet
            </h1>
            <p className="text-slate-400 text-sm mt-1">Rent professional hashpower instantly</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-11 px-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-sm tracking-tight">0.1245 BTC</span>
            </div>
          </div>
        </header>

        {/* Categories / Filter placeholder matching screenshot style */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {['All Machines', 'ASIC', 'GPU', 'Liquid Cooling', 'Enterprise'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap border transition-all ${
                i === 0 
                ? 'bg-primary text-black border-primary' 
                : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Machine List Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Active Contracts</h2>
            <button className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          <MachineList />
        </section>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent">
        <div className="max-w-md mx-auto h-16 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-around px-2 shadow-2xl">
          <button className="flex flex-col items-center gap-1 text-primary">
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-[10px] font-bold">Market</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
            <Wallet className="w-6 h-6" />
            <span className="text-[10px] font-bold">Wallet</span>
          </button>
          <div className="relative -top-6">
            <button className="w-14 h-14 rounded-2xl bg-primary text-black flex items-center justify-center shadow-[0_8px_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform active:scale-95">
              <Zap className="w-7 h-7 fill-current" />
            </button>
          </div>
          <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
            <History className="w-6 h-6" />
            <span className="text-[10px] font-bold">Activity</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
            <Settings className="w-6 h-6" />
            <span className="text-[10px] font-bold">System</span>
          </button>
        </div>
      </nav>

      <Toaster position="top-center" theme="dark" closeButton />
    </div>
  );
}

export default App;
