import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Mail, Phone, Copy, Check, MessageSquare, ShoppingBag, Sparkles, CheckCircle2, Clock, ShieldCheck, User, ClipboardList } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

const Contact = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();
  const [copiedType, setCopiedType] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', service: 'Landing Page / Business Website', message: '' });
  const [formError, setFormError] = useState('');
  const [formSent, setFormSent] = useState(false);

  const serviceOptions = [
    'Landing Page / Business Website',
    'Full-Stack MERN Application',
    'Restaurant / E-Commerce System',
    'Bug Fix & Website Maintenance',
    'Other / Custom Quote'
  ];

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setFormError('Please describe your project briefly.');
      return;
    }

    const text = `Hello Shafqat! 👋\n\nNew Project Enquiry:\n\n👤 Name: ${form.name.trim()}\n📧 Email: ${form.email.trim()}\n🛠 Service: ${form.service}\n\n📝 Project Details:\n${form.message.trim()}`;

    window.open(`https://wa.me/923255635495?text=${encodeURIComponent(text)}`, '_blank');

    setForm({ name: '', email: '', service: 'Landing Page / Business Website', message: '' });
    setFormError('');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const openWhatsAppDirect = () => {
    const whatsappNumber = "923255635495";
    const messageText = encodeURIComponent("Hello Shafqat! I would like to inquire about starting a new web development project.");
    window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, '_blank');
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg/90 border-t border-slate-800/80' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/20 mb-4">
            <ShoppingBag className="w-4 h-4" /> Place Order & Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get In Touch & <span className="gradient-text">Place Your Order</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Ready to build your web application? Launch our instant Order Wizard or connect directly on WhatsApp & Email.
          </p>
        </div>
        </Reveal>

        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-extrabold mb-4">Direct Contact Details</h3>
            
            {/* Location Card */}
            <div className={`p-6 rounded-2xl border flex items-start gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Location</h4>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Shaikh Zayed Islamic Centre, University of Peshawar (UOP), KPK, Pakistan
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className={`p-6 rounded-2xl border flex items-start justify-between gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-4 truncate">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <h4 className="font-bold text-base mb-1">Email</h4>
                  <p className={`text-sm truncate ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    shafqatullah15305@gmail.com
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy('shafqatullah15305@gmail.com', 'email')}
                className={`p-2.5 rounded-lg border text-xs font-bold shrink-0 transition ${
                  copiedType === 'email' ? 'bg-emerald-500 text-white' : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`p-6 rounded-2xl border flex items-start justify-between gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">Phone / WhatsApp</h4>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    +92 325 5635495
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy('+923255635495', 'phone')}
                className={`p-2.5 rounded-lg border text-xs font-bold shrink-0 transition ${
                  copiedType === 'phone' ? 'bg-emerald-500 text-white' : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Place Project Order Card Column */}
          <div className="lg:col-span-6">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              {/* Top Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-black shadow-lg">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">Place Project Order</h3>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5" /> Instant Booking & Fast Turnaround
                  </span>
                </div>
              </div>

              <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Launch our interactive Order Wizard to select your service package, set budget tiers, specify target deadlines, and submit directly!
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 mb-8">
                {[
                  'Express 3-Day Turnaround Available',
                  '100% Satisfaction & Money-Back Guarantee',
                  'Free Post-Launch Support & Bug Warranty',
                  'Full Source Code & Admin Panel Delivered'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenOrderModal()}
                  className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-black font-extrabold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Place Order Now</span>
                  <Sparkles className="w-4 h-4 opacity-80" />
                </button>

                <button
                  onClick={openWhatsAppDirect}
                  className="py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

            </div>
          </div>

        </div>
        </Reveal>

        {/* Quick Enquiry Form */}
        <Reveal>
        <div className={`mt-12 p-5 sm:p-8 lg:p-10 rounded-3xl border shadow-2xl relative overflow-hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/30 to-transparent rounded-br-full pointer-events-none"></div>

          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 mb-2 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-secondary to-primary text-white shadow-lg shrink-0">
              <ClipboardList className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold gradient-text">Quick Project Enquiry</h3>
              <p className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" /> Submits directly to WhatsApp — no waiting!
              </p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className={`text-xs font-bold uppercase tracking-wider mb-1.5 block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Ahmed Ali"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${
                    isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={`text-xs font-bold uppercase tracking-wider mb-1.5 block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Your Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="e.g. ahmed@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${
                    isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Service */}
            <div className="md:col-span-2">
              <label className={`text-xs font-bold uppercase tracking-wider mb-1.5 block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Service Needed
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className={`text-xs font-bold uppercase tracking-wider mb-1.5 block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Project Details
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  rows="4"
                  placeholder="Briefly describe your project, goals, and preferred deadline..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${
                    isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                ></textarea>
              </div>
            </div>

            {/* Error / Success */}
            {formError && (
              <p className="md:col-span-2 text-sm font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-2.5">
                {formError}
              </p>
            )}
            {formSent && (
              <p className="md:col-span-2 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-2.5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Enquiry ready in WhatsApp! Send it and Shafqat will get back to you shortly.
              </p>
            )}

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 whitespace-nowrap group"
              >
                <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                </span>
                <span>Send Enquiry via WhatsApp</span>
              </button>
              <p className={`text-center text-xs mt-3 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Your details go directly to Shafqat's WhatsApp — no forms database, maximum privacy.
              </p>
            </div>
          </form>
        </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
