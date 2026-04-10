import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-[calc(100vh-80px)] px-6 md:px-12 flex flex-col items-center justify-center font-inter antialiased bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl w-full bg-white dark:bg-slate-950 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a question or want to book a demo? Fill out the form below and our team will be with you shortly.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@company.com"
                className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
