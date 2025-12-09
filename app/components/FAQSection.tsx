'use client';

import { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "Is it really just you or will you have some cheap overseas labor do everything?",
      answer: "It’s just me. The way you can tell is that I will have intimate knowledge of everything going on in your accounts every time we talk. I like to do Zoom calls so we can go over the account together."
    },
    {
      question: "Am I going to 20x my revenue like the screenshot at the top of this page shows?",
      answer: "That was a rare case where a lot of things came together perfectly. However doubling the ROI of your ads and improving the conversion rate on your site by 30% is realistic for 95% of all companies."
    },
    {
      question: "Your website is awesome, who built it?",
      answer: "Me!"
    },
    {
      question: "How much can you grow my sales?",
      answer: "In order to get an accurate projection we need at least 30 minutes to talk about your business and review your existing ad accounts. But even with 30 minutes it is just a projection. Neither of us will know for sure until we start doing the work."
    },
    {
      question: "How should I contact you?",
      answer: "Fill out the form on the contact page."
    },
    {
      question: "If you are so great then why have I not heard of you before?",
      answer: "I have no interest in being a public figure. All the famous marketing gurus seem like grifters to me."
    },
    {
      question: "Why are my Google Ads performing worse than they used to?",
      answer: "Google has not had any serious competition for almost 20 years and in that time they have focused more on extracting $$ from advertisers than helping advertisers succeed."
    },
    {
      question: "Why are my Facebook Ads performing worse than they used to?",
      answer: "Apple pushed privacy changes in 2022 that wrecked a lot of Facebook’s ad targeting capabilities. Also, as more big companies plow money into Facebook ads the price has gone up for everybody."
    },
    {
      question: "When you say no contracts do you really mean that?",
      answer: "Yes"
    },
    {
      question: "What’s the catch?",
      answer: "If your business expands to the point where you need a full team doing your digital marketing then you will have to find another solution. That is what happened with the company from the screenshot at the top of this page. At $10M a month in sales they were overdue for moving to in house talent focused only on their business."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  const FAQItem = ({ faq, index }: { faq: { question: string, answer: string }, index: number }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-fit">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full text-left px-6 py-4 flex justify-between items-start gap-4 focus:outline-none hover:bg-gray-50"
      >
        <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 flex-shrink-0 mt-1 ${
            openIndex === index ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-lg text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
    </div>
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          FAQ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {leftFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightFaqs.map((faq, i) => (
              <FAQItem key={i + midPoint} faq={faq} index={i + midPoint} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
