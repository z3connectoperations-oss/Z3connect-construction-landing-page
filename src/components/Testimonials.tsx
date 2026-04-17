import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-primary text-white py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Built by Z3connect. Tested for Indian Sites.</h2>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base">
            Trusted by 200+ Developers and Contractors across Maharashtra, Gujarat, and Karnataka.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-primary-container/40 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-t-4 border-secondary">
            <p className="text-base md:text-lg italic mb-6 text-slate-100">
              "We tried foreign CMS software, but they failed because my site supervisors couldn't use them. Z3connect is so simple, we started on day one."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base">AK</div>
              <div>
                <p className="font-bold text-sm md:text-base">Anil Kulkarni</p>
                <p className="text-[10px] md:text-xs text-slate-400">Project Manager, Apex Infra</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-container/40 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-t-4 border-secondary">
            <p className="text-base md:text-lg italic mb-6 text-slate-100">
              "The GST automation alone saved us nearly ₹12 Lakhs in lost ITC last quarter. The system pays for itself."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base">SM</div>
              <div>
                <p className="font-bold text-sm md:text-base">Sanjay Mehta</p>
                <p className="text-[10px] md:text-xs text-slate-400">Director, Mehta Builders</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-container/40 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border-t-4 border-secondary">
            <p className="text-base md:text-lg italic mb-6 text-slate-100">
              "Offline sync is a lifesaver for our highway projects. My team records data in the middle of nowhere and it syncs when they reach camp."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base">RP</div>
              <div>
                <p className="font-bold text-sm md:text-base">Rajesh Patil</p>
                <p className="text-[10px] md:text-xs text-slate-400">Site Engineer, Patil Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
