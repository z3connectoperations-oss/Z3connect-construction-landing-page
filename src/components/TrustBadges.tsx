import React from "react";

export default function TrustBadges() {
  return (
    <section className="bg-surface-container-low py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="verified">verified</span>
          <span className="font-bold uppercase tracking-widest text-xs">GST Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="gavel">gavel</span>
          <span className="font-bold uppercase tracking-widest text-xs">RERA Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="security">security</span>
          <span className="font-bold uppercase tracking-widest text-xs">100% Data Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="cloud_off">cloud_off</span>
          <span className="font-bold uppercase tracking-widest text-xs">Offline Enabled</span>
        </div>
      </div>
    </section>
  );
}
