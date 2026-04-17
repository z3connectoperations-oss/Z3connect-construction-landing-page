"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      company: formData.get("company"),
      address: formData.get("address"),
      message: formData.get("message"),
    };

    try {
      if (!db) {
        throw new Error("Database service is not initialized. Please refresh and try again.");
      }

      // Write to Firestore Collection "contacts"
      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: new Date().toISOString(),
        status: "new",
      });
      
      setStatus("success");
      // @ts-ignore - native reset method
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-slate-50 dark:bg-slate-900 font-inter antialiased flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-950 p-6 sm:p-10 md:p-12 rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to transform your business? Fill out the form below and our expert team will reach out to you shortly.
          </p>
        </div>

        {status === "success" && (
          <div className="mb-8 bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-300 p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-3xl md:text-4xl" data-icon="check_circle">check_circle</span>
            <span className="font-semibold text-sm md:text-lg">Thank you! Your information has been securely received. Someone from our team will reach out soon.</span>
          </div>
        )}
        
        {status === "error" && (
          <div className="mb-8 bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-300 p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-3xl md:text-4xl" data-icon="error">error</span>
            <span className="font-semibold text-sm md:text-base">{errorMessage}</span>
          </div>
        )}

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm md:text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm md:text-base"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email / Gmail ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@gmail.com"
                className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm md:text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                Company Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm md:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
              Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="123 Business Avenue, Tech City"
              className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm md:text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
               How can we help you? <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your requirements..."
              className="px-4 py-3 md:py-3.5 rounded-lg md:rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none text-sm md:text-base"
            ></textarea>
          </div>

          <div className="pt-2 md:pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 md:py-4 rounded-lg md:rounded-xl transition-all shadow-xl hover:shadow-orange-500/30 active:scale-[0.98] text-base md:text-lg disabled:opacity-75 disabled:active:scale-100 flex justify-center items-center gap-2"
            >
              {status === "loading" ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
