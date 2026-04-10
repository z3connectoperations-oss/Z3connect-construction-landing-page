import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-primary text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Built by Z3connect. Tested for Indian Sites.</h2>
          <p className="text-on-primary-container max-w-2xl">
            Trusted by 200+ Developers and Contractors across Maharashtra, Gujarat, and Karnataka.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-container p-8 rounded-[2rem] border-t-4 border-secondary">
            <p className="text-lg italic mb-6 text-on-primary-container">
              "We tried foreign CMS software, but they failed because my site supervisors couldn't use them. Z3connect is so simple, we started on day one."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold">AK</div>
              <div>
                <p className="font-bold">Anil Kulkarni</p>
                <p className="text-xs text-on-primary-container">Project Manager, Apex Infra</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-container p-8 rounded-[2rem] border-t-4 border-secondary">
            <p className="text-lg italic mb-6 text-on-primary-container">
              "The GST automation alone saved us nearly ₹12 Lakhs in lost ITC last quarter. The system pays for itself."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold">SM</div>
              <div>
                <p className="font-bold">Sanjay Mehta</p>
                <p className="text-xs text-on-primary-container">Director, Mehta Builders</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-container p-8 rounded-[2rem] border-t-4 border-secondary">
            <p className="text-lg italic mb-6 text-on-primary-container">
              "Offline sync is a lifesaver for our highway projects. My team records data in the middle of nowhere and it syncs when they reach camp."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold">RP</div>
              <div>
                <p className="font-bold">Rajesh Patil</p>
                <p className="text-xs text-on-primary-container">Site Engineer, Patil Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
