import React from "react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-surface-container-high rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-on-background mb-6">
            Ready to take control of your sites?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            100% free consultation. See it in action with your own project data. Limited demo slots available this week.
          </p>
          <button className="tectonic-gradient text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all">
            Schedule Your Custom Walkthrough
          </button>
          <p className="mt-6 text-sm font-bold text-secondary uppercase tracking-widest">
            No Hidden Fees • GST Compliant • Setup in 24 Hours
          </p>
        </div>
        {/* Abstract Design Elements */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
