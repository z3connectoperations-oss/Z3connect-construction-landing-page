import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-slate-50 dark:bg-slate-900">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
