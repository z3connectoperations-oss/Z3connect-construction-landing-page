import React from "react";

export default function FeaturesGrid() {
  return (
    <section className="px-6 py-12 md:py-24 bg-surface-container-low" id="features">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-on-background mb-4">
          Smart for the Office. Dead-Simple for the Site.
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
          We built features that actually work in the dust and heat of an Indian construction site.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-[2rem] hover:translate-y-[-4px] transition-transform duration-300 border border-slate-100">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 text-green-600 rounded-lg md:rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-xl md:text-2xl" data-icon="chat_bubble">chat_bubble</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3">WhatsApp AI Sync</h3>
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Staff can simply text "50 bags cement received" and our AI automatically updates your accounts ledger.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-[2rem] hover:translate-y-[-4px] transition-transform duration-300 border border-slate-100">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-xl md:text-2xl" data-icon="cloud_off">cloud_off</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3">Offline-First Sync</h3>
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Basement with no signal? No problem. Data saves locally and syncs automatically when the supervisor reaches 4G.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-[2rem] hover:translate-y-[-4px] transition-transform duration-300 border border-slate-100">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 text-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-xl md:text-2xl" data-icon="receipt_long">receipt_long</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3">GST & RERA Ready</h3>
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Auto-generate RERA reports and GST-ready invoices. Never miss a tax credit or a compliance deadline again.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-[2rem] hover:translate-y-[-4px] transition-transform duration-300 border border-slate-100">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 text-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-xl md:text-2xl" data-icon="sell">sell</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3">Flat Pricing Model</h3>
          <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
            No "per-user" billing. One flat monthly fee for unlimited projects and unlimited site staff. Scale without worry.
          </p>
        </div>
      </div>
    </section>
  );
}
