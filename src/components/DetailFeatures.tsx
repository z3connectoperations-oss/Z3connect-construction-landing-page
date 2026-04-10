import React from "react";

export default function DetailFeatures() {
  return (
    <section className="py-24 space-y-32">
      {/* Feature 1 */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img
            className="rounded-[3rem] shadow-2xl"
            alt="Close-up of a high-resolution tablet displaying architectural drawings and budget graphs at a construction site"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOJPtBd8ziHMHtLIAOdA_ID9GzsigkzBNeBU2b5sOrIoxOSIM0O34eRpNdzMQNEdOnd1sBP4x9PDTTKxzFXVv6Fq7uZLUliz8LP-2oO4XvZswnWC5pNT11q8N0jcOZLGESB-fUA96CkyUDK9zV7PUcRI0VMa9vo40tioc4XQRNLwrR3tkG61rz4glUURbWU2qd1UEYFL-BQSrF_BRHFnJTR_T7bCZTDrISZcGjCh4qVCCFrXFxjIKZpzkj2SRpjn0lro7Eb_ugw_Sr"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="label-sm text-secondary font-black mb-4 block">COST CONTROL</span>
          <h3 className="text-4xl font-black mb-6">Automated BOQ & Cost Tracking</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Compare actual site spends against your original Bill of Quantities (BOQ) in real-time. Get instant alerts before your project hits a cost overrun.
          </p>
          <div className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl">
            <span className="material-symbols-outlined text-secondary" data-icon="trending_down">trending_down</span>
            <p className="text-sm font-bold">Reduce material wastage by 18% on average.</p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-1">
          <span className="label-sm text-secondary font-black mb-4 block">LABOR MANAGEMENT</span>
          <h3 className="text-4xl font-black mb-6">GPS + Biometric Attendance</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Eliminate proxy attendance. Site staff check-in via face-scan or GPS-tagged selfies. Directly integrated with payroll for one-click salary processing.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-green-500" data-icon="check_circle">check_circle</span>
              Multi-language interface for labor supervisors
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-green-500" data-icon="check_circle">check_circle</span>
              Real-time daily labor strength reports
            </li>
          </ul>
        </div>
        <div className="order-2">
          <img
            className="rounded-[3rem] shadow-2xl"
            alt="Worker using a mobile phone biometric scan at a construction site entry gate with clear morning light"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1lIVBHqPt4yQqpWGXGRHDWgBaSExp3vYNCzlEZ8jeLZ1R_BN2N2MimfKdmlvPbPGXuJOMFwB890GNm5whJjdXEMnlcV7NoIrCdyZB-TtJXh2CdOMQojvSisFFeftxRCcmwm8l8kq-7-lQ1OpiHWFI4aRT6Q3v9tPyBdDd0DgUUuEaFdrmDa5BdDHYhFhjChKGHZJy8Tdy-yjHWGNW4ZBh1hE8JOZVX9CLVJ2dB8MpFSjqlnQXf4ONd0zyA5yLJYr9BlDLtDe-JfM8"
          />
        </div>
      </div>
    </section>
  );
}
