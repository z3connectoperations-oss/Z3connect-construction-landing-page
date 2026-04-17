import React from "react";
import FaqWidget from "@/components/FaqWidget";
import logo from "@/assets/z3connect_logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 dark:bg-slate-950 w-full rounded-t-[2.5rem] mt-12 tonal-shift-bg flex flex-col items-center text-center gap-8 px-6 md:px-8 py-12 md:py-16 mb-24 md:mb-0 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <a href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
            Z3CONNECT
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a className="text-sm md:text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/#privacy">Privacy Policy</a>
          <a className="text-sm md:text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/#terms">Terms of Service</a>
          <a className="text-sm md:text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/#security">Security</a>
          <a className="text-sm md:text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/#contact">Contact</a>
        </div>
        <p className="text-xs md:text-sm leading-relaxed font-inter text-slate-500 dark:text-slate-400">© 2024 Z3connect CMS. GST & RERA Compliant.</p>
      </footer>

      {/* Mobile Bottom NavBar (Visible on mobile only) */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl z-40 shadow-2xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 flex justify-around items-center py-3 px-2">
        <div className="flex flex-col items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl px-4 py-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" data-icon="home">home</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-4 py-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" data-icon="construction">construction</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-0.5">Features</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-4 py-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" data-icon="chat">chat</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-0.5">Support</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-4 py-1.5 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" data-icon="translate">translate</span>
          <span className="text-[9px] font-bold uppercase tracking-widest mt-0.5">IN/EN</span>
        </div>
      </nav>

      <FaqWidget />
    </>
  );
}
