import React from "react";

export default function ProblemSection() {
  return (
    <section className="px-6 py-24 bg-white" id="problem">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-on-background mb-8 leading-tight">
            Your site and your office are speaking two different languages.
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Traditional management fails because it assumes high-speed internet and tech-savvy labor. The result? Chaos.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-error-container text-error rounded-full p-1">
                <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
              </div>
              <div>
                <p className="font-bold">WhatsApp Chaos</p>
                <p className="text-sm text-on-surface-variant">Critical bills lost in "Good Morning" message threads.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-error-container text-error rounded-full p-1">
                <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
              </div>
              <div>
                <p className="font-bold">Ghost Attendance</p>
                <p className="text-sm text-on-surface-variant">Paying for 50 workers when only 35 showed up.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-error-container text-error rounded-full p-1">
                <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
              </div>
              <div>
                <p className="font-bold">GST Delays</p>
                <p className="text-sm text-on-surface-variant">Lost input tax credits due to late paper registers.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-surface-container-low rounded-[3rem] p-8 shadow-inner">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-error mb-4">
            <p className="text-xs font-black text-error mb-2 uppercase tracking-tighter">Site Mess</p>
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
              <div className="min-w-[120px] h-24 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] text-center p-2 italic text-slate-400">
                Photo of messy bill
              </div>
              <div className="min-w-[120px] h-24 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] text-center p-2 italic text-slate-400">
                Audio note: "Send sand"
              </div>
              <div className="min-w-[120px] h-24 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] text-center p-2 italic text-slate-400">
                Blurred attendance sheet
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <span className="material-symbols-outlined text-slate-300 text-4xl" data-icon="arrow_downward">arrow_downward</span>
          </div>
          <div className="bg-primary text-white rounded-2xl shadow-xl p-6 border-l-8 border-secondary">
            <p className="text-xs font-black text-secondary mb-2 uppercase tracking-tighter">Z3connect Flow</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm py-2 border-b border-white/10">
                <span>Verified Invoice</span>
                <span className="text-green-400">✔ AUTO-GST</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-white/10">
                <span>Biometric Sync</span>
                <span className="text-green-400">✔ 100% ACCURATE</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span>BOQ Status</span>
                <span className="text-green-400">✔ WITHIN MARGIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
