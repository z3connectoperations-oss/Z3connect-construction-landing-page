import React from "react";
import FaqWidget from "@/components/FaqWidget";
import logo from "@/assets/z3connect_logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 dark:bg-slate-950 w-full rounded-t-[2.5rem] mt-12 tonal-shift-bg flex flex-col items-center text-center gap-8 px-8 py-16 mb-20 md:mb-0">
        <div className="flex items-center gap-2">
          <a href="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
            Z3CONNECT
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-opacity" href="/#privacy">Privacy Policy</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-opacity" href="/#terms">Terms of Service</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-opacity" href="/#security">Security</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-opacity" href="/#contact">Contact</a>
        </div>
        <p className="text-sm leading-relaxed font-inter text-slate-500 dark:text-slate-400">© 2024 Z3connect CMS. GST & RERA Compliant.</p>
      </footer>

      {/* Mobile Bottom NavBar (Visible on mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-40 shadow-2xl rounded-t-3xl pt-2 pb-6 px-4 flex justify-around items-center no-border">
        <div className="flex flex-col items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl px-3 py-1 active:scale-90 transition-transform">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-orange-500 active:scale-90 transition-transform">
          <span className="material-symbols-outlined" data-icon="construction">construction</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Features</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-orange-500 active:scale-90 transition-transform">
          <span className="material-symbols-outlined" data-icon="chat">chat</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Support</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-orange-500 active:scale-90 transition-transform">
          <span className="material-symbols-outlined" data-icon="translate">translate</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">Language</span>
        </div>
      </nav>

      <FaqWidget />
    </>
  );
}
