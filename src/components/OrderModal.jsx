import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, ShoppingBag, CheckCircle2, Mail, User, Phone, Briefcase, DollarSign, Clock, FileText, Lock, Sparkles } from 'lucide-react';

// Authentic WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const OrderModal = ({ isOpen, onClose, initialPackage = '' }) => {
  const { isDark } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    serviceType: 'Full-Stack MERN Application',
    budget: '$400 - $800',
    timeline: '1 Week',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({ ...prev, serviceType: initialPackage }));
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "923255635495";
    
    const messageText = 
`🎯 NEW PROJECT ORDER REQUEST

👤 Client Name: ${formData.name || 'Not specified'}
📞 Contact Info: ${formData.emailOrPhone || 'Not specified'}
💼 Service/Package: ${formData.serviceType}
💰 Budget Range: ${formData.budget}
⏱️ Desired Timeline: ${formData.timeline}

📝 Project Details:
${formData.description || 'No additional details provided.'}

Sent via Shafqat.dev Portfolio`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 300);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Project Order Request: ${formData.serviceType}`);
    const body = encodeURIComponent(
`Hello Shafqat,

I would like to place an order for a web development project.

Client Name: ${formData.name}
Contact: ${formData.emailOrPhone}
Service: ${formData.serviceType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Requirements:
${formData.description}
`
    );

    window.open(`mailto:shafqatullah15305@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-xl my-auto max-h-[92vh] flex flex-col rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
        isDark ? 'bg-slate-900 border-slate-700/80 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="p-5 sm:p-7 shrink-0 bg-gradient-to-r from-primary via-secondary to-accent text-black relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/30 text-white flex items-center justify-center hover:bg-slate-950/60 transition-all border border-white/20"
            aria-label="Close Order Form"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2 pr-8">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-inner shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight">Place Your Project Order</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 mt-1">
                <Sparkles className="w-3 h-3" /> Direct Developer Booking
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-100 opacity-95 mt-2 leading-relaxed">
            Fill in your requirements below to connect directly with Shafqat on WhatsApp for instant quote & timeline!
          </p>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-6 sm:p-8 text-center overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4 border border-emerald-500/40 animate-pulse">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black mb-2">Order Dispatched to WhatsApp!</h4>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Opening official WhatsApp chat with Shafqat. If chat didn't open automatically, click the button below:
            </p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" /> Open Official WhatsApp Chat
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-white underline mt-2 font-semibold"
              >
                Edit Order Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-7 space-y-4 sm:space-y-5 overflow-y-auto flex-1 min-h-0">
            
            {/* Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <User className="w-3.5 h-3.5 text-primary" /> Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Simone / Alex"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                    isDark ? 'bg-slate-800/90 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> Email or WhatsApp # *
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  required
                  placeholder="e.g. +92 325 5635495"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                    isDark ? 'bg-slate-800/90 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <Briefcase className="w-3.5 h-3.5 text-secondary" /> Selected Service / Project Type
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                  isDark ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <option value="Full-Stack MERN Application">Full-Stack MERN Application ($400 – $800)</option>
                <option value="Starter Web App">Starter Landing Page / Single Page Site ($150 – $300)</option>
                <option value="Restaurant & E-Commerce Site">Custom Restaurant / E-Commerce Site ($600 – $1200+)</option>
                <option value="Bug Fix / Feature Upgrade">Bug Fix / Feature Upgrade / API Integration ($100 – $250)</option>
                <option value="Custom Quote Request">Custom Enterprise Solution</option>
              </select>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Estimated Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                    isDark ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="$150 - $300">$150 – $300 (Starter)</option>
                  <option value="$400 - $800">$400 – $800 (Standard)</option>
                  <option value="$900 - $1500">$900 – $1,500 (Advanced)</option>
                  <option value="$1500+">$1,500+ (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Target Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                    isDark ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="Express 3 Days">Express Delivery (3 Days)</option>
                  <option value="1 Week">1 Week</option>
                  <option value="2 Weeks">2 Weeks</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <FileText className="w-3.5 h-3.5 text-indigo-400" /> Project Details / Requirements
              </label>
              <textarea
                name="description"
                rows="3"
                placeholder="Describe your vision, features needed, or attach website reference links..."
                value={formData.description}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-500 ${
                  isDark ? 'bg-slate-800/90 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
              ></textarea>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 border border-emerald-300/40"
              >
                <WhatsAppIcon className="w-5 h-5 text-slate-950" /> Send Order via WhatsApp
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className={`px-5 py-4 rounded-2xl border font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 ${
                  isDark 
                    ? 'border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700' 
                    : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4 text-primary" /> Via Email
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Fast response within 1 hour • Direct developer chat</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default OrderModal;
