"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto w-full">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-lg transition-colors ${isOpen ? 'border-accent bg-white shadow-sm' : 'border-border-light hover:border-slate-300 active:border-slate-300'}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-primary">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : ''}`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
