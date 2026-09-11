import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ShoppingBag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const FAQ = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you specialize in?",
      answer: "I specialize in MERN Stack Web Development (React.js, Node.js, Express.js, MongoDB), full-stack web applications, custom food ordering & restaurant portals, RESTful API architecture, database optimization, and high-converting modern frontend UIs."
    },
    {
      question: "How long does it take to complete and deliver a project?",
      answer: "Simple landing pages and showcase websites are delivered in 2 to 4 days. Full-Stack MERN web applications or custom restaurant platforms take 5 to 10 days, depending on project complexity. Express delivery (3 days) is also available for urgent client needs."
    },
    {
      question: "What information do I need to provide before starting?",
      answer: "Just share your project concept, target audience, preferred reference designs, and any content (logo, text, or images) you have. I handle the technical setup from scratch including database architecture, UI design, API endpoints, and hosting deployment."
    },
    {
      question: "Will my website be mobile-responsive and SEO optimized?",
      answer: "Yes, 100%! Every website and web app I build is crafted to be fully mobile-responsive across all screen sizes (phones, tablets, laptops) with optimized page speed, clean semantics, and built-in SEO best practices."
    },
    {
      question: "Do you offer post-delivery maintenance and bug support?",
      answer: "Yes! All development packages include free post-launch support and bug fixing to guarantee your application runs smoothly without unexpected downtime or performance issues."
    },
    {
      question: "Can you fix bugs or add new features to my existing project?",
      answer: "Absolutely! Whether you need a UI overhaul, backend API refactoring, payment gateway integration, database schema upgrades, or bug resolution, I can seamlessly work on your existing codebase."
    },
    {
      question: "How can I place an order or get a custom price quote?",
      answer: "You can click any 'Place Order Now' button on this portfolio to submit your requirements directly or reach out via WhatsApp (+92 325 5635495). We will review your goals and provide an instant transparent project proposal."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg border-t border-slate-800/80' : 'bg-white border-t border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-widest border border-primary/20 mb-4">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Clear answers to common questions clients ask before placing a project order or hiring me.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? 'bg-slate-900 border-primary/50 shadow-xl'
                      : 'bg-slate-50 border-primary/40 shadow-md'
                    : isDark
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg sm:text-xl transition-colors"
                >
                  <span className={`flex items-center gap-3 ${isOpen ? 'text-primary' : isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-primary text-black rotate-180' : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 text-sm sm:text-base leading-relaxed border-t pt-4 ${
                    isDark ? 'border-slate-800/80 text-slate-300' : 'border-slate-200/80 text-slate-600'
                  }`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className={`p-8 rounded-3xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl ${
          isDark 
            ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-700' 
            : 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-200'
        }`}>
          <div className="text-left">
            <h4 className="text-xl font-bold mb-1">Have more questions or custom requirements?</h4>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Feel free to reach out directly. I respond to all client inquiries within an hour!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-black font-extrabold text-sm shadow-lg shadow-primary/25 hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Place Order Now
            </button>
            <a
              href="https://wa.me/923255635495"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" /> Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
