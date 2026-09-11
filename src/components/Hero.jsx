import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import WhatsAppIcon from './WhatsAppIcon';
import { getImagePath } from '../utils/imageUtils';
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const useCountUp = (target, duration = 1600) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = null;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setValue(Math.floor(progress * target));
              if (progress < 1) {
                rafId = requestAnimationFrame(tick);
              }
            };
            rafId = requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return [value, ref];
};

const Hero = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const [yearsValue, yearsRef] = useCountUp(2);
  const [projectsValue, projectsRef] = useCountUp(66);
  const [satisfactionValue, satisfactionRef] = useCountUp(100);

  return (
    <section id="home" className="relative overflow-hidden bg-black">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10 opacity-30"></div>

      {/* Cover Banner - Full Width (100%) */}
      <div className="relative w-full overflow-hidden">
        <img
          src={getImagePath('Images/cover.jpeg')}
          alt="Cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

        {/* Profile Image - On Cover, Left Side (LinkedIn Style) */}
        <div className="absolute top-[20px] left-[10px] sm:top-[80px] sm:bottom-auto sm:translate-y-0 sm:left-[100px] z-10">
          <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full sm:bg-gradient-to-tr sm:from-primary sm:via-secondary sm:to-accent sm:p-[4px]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-black">
              <img
                src={getImagePath('Images/shafqat_update.png')}
                alt="Shafqat Ullah - Senior Full Stack MERN Developer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Info - Centered Below Photo */}
        <div className="text-center pt-16 sm:pt-24 md:pt-28 lg:pt-36 pb-10 sm:pb-14">
          
          {/* Availability Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-sm mb-4 max-w-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-200">Available for Freelance & Custom Web Orders</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="gradient-text">Shafqat Ullah</span>
          </h1>

          {/* Title */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-base sm:text-lg font-bold text-slate-300">Senior</span>
            <span className="px-3 py-1 rounded-lg bg-primary/15 text-primary border border-primary/25 text-sm sm:text-base font-bold">
              Full Stack Developer
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-300">& Software Engineer</span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            I craft high-performance, fast, modern web applications & scalable APIs with React, Node.js, Express, and MongoDB. Transforming ideas into revenue-generating web solutions for businesses around the globe.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={() => onOpenOrderModal()}
              className="btn-shine px-6 py-3 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-black font-bold text-sm shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Place Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              className="px-5 py-3 rounded-full font-semibold text-sm border border-slate-700 text-slate-200 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <a href="https://github.com/Shafqat-Ullah" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/shafqat-ullah15305/" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://wa.me/923255635495" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a href="mailto:shafqatullah15305@gmail.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110"
              aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-2xl">
            <div className="text-center flex flex-col items-center justify-center gap-1 p-2 sm:p-3">
              <div ref={yearsRef} className="text-2xl sm:text-3xl font-extrabold gradient-text leading-none">{yearsValue}+</div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-300">Years Experience</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-1 p-2 sm:p-3 border-l border-white/10">
              <div ref={projectsRef} className="text-2xl sm:text-3xl font-extrabold text-primary leading-none">{projectsValue}+</div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-300">Completed Projects</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-1 p-2 sm:p-3 md:border-l border-white/10">
              <div ref={satisfactionRef} className="text-2xl sm:text-3xl font-extrabold text-secondary leading-none">{satisfactionValue}%</div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-300">Client Satisfaction</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-1 p-2 sm:p-3 border-l border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-accent leading-none">24/7</div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-300">Support & Delivery</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;