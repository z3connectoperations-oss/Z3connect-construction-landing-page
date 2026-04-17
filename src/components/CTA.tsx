import React from "react";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-surface-container-high rounded-2xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden border border-white">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-on-background mb-6 leading-tight">
            Ready to take control of your sites?
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            100% free consultation. See it in action with your own project data. Limited demo slots available this week.
          </p>
          <button className="tectonic-gradient text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl text-lg md:text-xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
            Schedule Your Custom Walkthrough
          </button>
          <p className="mt-8 text-[10px] md:text-sm font-bold text-secondary uppercase tracking-widest flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>No Hidden Fees</span>
            <span className="opacity-30">•</span>
            <span>GST Compliant</span>
            <span className="opacity-30">•</span>
            <span>Setup in 24 Hours</span>
          </p>
        </div>
        {/* Abstract Design Elements */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
