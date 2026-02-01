'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does a typical kitchen or bathroom remodel take?',
      answer:
        'Most kitchen remodels take 4-8 weeks, while bathroom remodels typically take 2-4 weeks. Timeline depends on the scope of work, material availability, and any structural changes. We provide detailed timelines during the planning phase and keep you updated throughout the project.',
    },
    {
      question: 'What is included in your pricing?',
      answer:
        "Our quotes include all labor, materials, permits, and project management. We provide detailed breakdowns so you know exactly what you're paying for. There are no hidden fees, and we'll discuss any potential changes before proceeding. We're committed to transparent pricing from start to finish.",
    },
    {
      question: 'Do you offer warranties on your work?',
      answer:
        'Yes! All our work comes with comprehensive warranties. We warranty our craftsmanship for 2 years and materials according to manufacturer specifications. We stand behind our work and will address any issues that arise during the warranty period at no additional cost.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        "Absolutely. MetroBuilding is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage. We're happy to provide proof of insurance upon request. Your protection and peace of mind are our priorities.",
    },
    {
      question: 'Do you handle permits and inspections?',
      answer:
        "Yes, we handle all permits and coordinate with local building departments and inspectors. We're familiar with Ohio building codes and ensure all work meets or exceeds local requirements. You won't need to worry about the paperwork - we take care of everything.",
    },
    {
      question: 'Can you work with my existing design or architect?',
      answer:
        'Absolutely! We work seamlessly with architects, designers, and homeowners. Whether you have complete plans or just ideas, we can help bring your vision to life. Our team can also provide design assistance if needed.',
    },
    {
      question: 'What payment schedule do you use?',
      answer:
        'We use a fair, milestone-based payment schedule. Typically, we require a deposit to secure materials, then payments at key project milestones. Final payment is due upon completion and your satisfaction. We never ask for full payment upfront.',
    },
    {
      question: 'Do you offer financing options?',
      answer:
        'We work with several financing partners to help make your project affordable. We can discuss financing options during your consultation to find a solution that fits your budget. Many homeowners use home equity loans or construction loans for larger projects.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-cinematic bg-white overflow-hidden mb-4 layered-depth reveal-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-gray-900 pr-4 text-lg text-cinematic-glow">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#8BC34A] flex-shrink-0 transition-all duration-500 icon-metallic ${
                      openIndex === index ? 'transform rotate-180 scale-110' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
