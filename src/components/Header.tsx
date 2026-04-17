import React from "react";
import logo from "@/assets/z3connect_logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm h-16 flex items-center justify-between px-4 md:px-8 font-inter antialiased">
      <div className="flex items-center">
        <a href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
          Z3CONNECT
        </a>
      </div>
      <a href="/#contact" className="bg-primary-container text-on-primary text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl hover:bg-slate-800 transition-all active:scale-95 duration-200">
        Book a Demo
      </a>
    </header>
  );
}
