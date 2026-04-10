"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is Z3connect CMS?",
    answer: "Z3connect is a powerful, compliant Content Management System tailored specifically for modern, fast-growing enterprises.",
  },
  {
    question: "How secure is my data?",
    answer: "We employ bank-level encryption and ensure complete compliance with local regulations like GST and RERA. Security is our top priority.",
  },
  {
    question: "Can I integrate third-party tools?",
    answer: "Yes! Z3connect offers seamless API integrations with the most popular CRM, marketing, and HR tools on the market.",
  },
  {
    question: "What is the pricing structure?",
    answer: "Our pricing is flexible and scales dynamically with your business needs. Please reach out or book a demo for a personalized quote.",
  },
];

export default function FaqWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:bottom-28 md:right-10 w-[90vw] md:w-96 max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 font-inter transition-all transform origin-bottom-right">
          <div className="bg-green-500 text-white p-5 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Chat with an Expert</h3>
              <p className="text-green-100 text-sm">Common doubts & answers</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
            >
              <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>
          </div>
          
          <div className="p-4 max-h-[60vh] overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'border-green-500 shadow-sm' : 'border-slate-200 dark:border-slate-800'}`}
                >
                  <button
                    className="w-fulltext-left p-4 bg-slate-50 dark:bg-slate-950 flex justify-between items-center w-full focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm text-left">
                      {faq.question}
                    </span>
                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  
                  {expandedIndex === index && (
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-sm md:text-base text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Persistent WhatsApp Float / Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 focus:outline-none"
      >
        <span className="material-symbols-outlined text-3xl" data-icon={isOpen ? 'close' : 'chat'} data-weight="fill">
          {isOpen ? 'close' : 'chat'}
        </span>
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-white text-on-background px-4 py-2 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap hidden md:block border-l-4 border-green-500 cursor-pointer pointer-events-none">
            Chat with an Expert
          </div>
        )}
      </button>
    </>
  );
}
