import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, Zap, Rocket, ShoppingBag, Utensils, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const Services = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const servicePackages = [
    {
      id: 'starter',
      name: 'Starter Web App',
      icon: Zap,
      tagline: 'Perfect for landing pages, portfolio sites & quick business showcase.',
      price: '$150 - $300',
      popular: false,
      features: [
        '100% Responsive React / HTML5 Design',
        'Custom Ultra-Modern UI Aesthetics',
        'WhatsApp Direct Order / Contact Integration',
        'SEO Optimized & Fast Page Speeds',
        'Free Bug Support & 3 Days Turnaround',
      ],
      ctaText: 'Order Starter Plan',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'fullstack',
      name: 'Full-Stack MERN Application',
      icon: Rocket,
      tagline: 'Complete web application with frontend, backend API, & MongoDB database.',
      price: '$400 - $800',
      popular: true,
      features: [
        'React.js Dynamic Dashboard & UI',
        'Node.js & Express.js REST API Backend',
        'MongoDB Database Setup & Schema Modeling',
        'User Auth, JWT & Admin Control Panel',
        'Payment Gateway / Order API Integrations',
        '1 Year Free Maintenance & 24/7 Priority Support',
      ],
      ctaText: 'Order Full-Stack Plan',
      accentColor: 'from-primary via-secondary to-accent'
    },
    {
      id: 'restaurant',
      name: 'Restaurant & E-Commerce Site',
      icon: Utensils,
      tagline: 'Custom food ordering platform like UFO Burger / Burger Bachelor.',
      price: '$600 - $1200+',
      popular: false,
      features: [
        'Interactive Category Food Menu & Search',
        'Cart System & Direct WhatsApp Order Alert',
        'Admin Menu Manager & Price Modifier',
        'Google Maps Location & Delivery Tracker',
        'Social Media & Reviews Integration',
        'Fast 7-Day Complete Turnaround',
      ],
      ctaText: 'Order Restaurant System',
      accentColor: 'from-amber-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-night-bg' : 'bg-white'
    }`}>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/20 mb-4">
            <Sparkles className="w-4 h-4" /> Service Tiers & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Hire Me & <span className="gradient-text">Place Your Order</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Choose the perfect package for your project or request a custom quote. Get your website delivered fast with 100% satisfaction guaranteed!
          </p>
        </div>
        </Reveal>

        {/* Pricing Cards Grid */}
        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {servicePackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 card-hover ${
                  pkg.popular
                    ? isDark
                      ? 'bg-slate-900 border-primary/60 shadow-2xl shadow-primary/20 ring-2 ring-primary/40'
                      : 'bg-white border-primary shadow-2xl ring-2 ring-primary/30'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-800'
                      : 'bg-slate-50 border-slate-200 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3.5 sm:px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap z-10 shrink-0">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.accentColor} text-white flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Fast Delivery
                      </p>
                    </div>
                  </div>

                  <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8 p-4 rounded-2xl bg-slate-950/20 border border-slate-700/30 text-center">
                    <span className="text-xs text-slate-400 font-semibold block uppercase">Estimated Investment</span>
                    <span className="text-2xl sm:text-3xl font-extrabold gradient-text">{pkg.price}</span>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => onOpenOrderModal(pkg.name)}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary via-secondary to-accent text-black shadow-primary/30 hover:scale-105'
                      : isDark
                        ? 'bg-slate-800 text-white hover:bg-primary hover:text-black'
                        : 'bg-slate-900 text-white hover:bg-primary hover:text-black'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </button>

              </div>
            );
          })}
        </div>
        </Reveal>

        {/* Guarantee Banner */}
        <Reveal>
        <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold">100% Satisfaction & Money-Back Guarantee</h4>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Have custom requirements or a specific budget in mind? Let's discuss and create a custom package tailored for you!
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal('Custom Quote Request')}
            className="px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-sm whitespace-nowrap hover:bg-emerald-400 shadow-lg transition-transform hover:scale-105"
          >
            Request Custom Quote
          </button>
        </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Services;
