import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

const FloatingOrderBtn = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40">
      <button
        onClick={() => onOpenOrderModal()}
        className="group relative flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-black font-extrabold text-xs sm:text-sm shadow-2xl shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 ring-2 sm:ring-4 ring-primary/20 backdrop-blur-md"
        title="Place Project Order Now"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-400"></span>
        </span>
        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
        <span className="tracking-wide text-[11px] sm:text-sm">Order Project</span>
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
      </button>
    </div>
  );
};

export default FloatingOrderBtn;
