import React from 'react';
import { useTheme } from '../context/ThemeContext';
import WhatsAppIcon from './WhatsAppIcon';
import { Code2, ArrowUp, Heart, Coffee } from 'lucide-react';

const Footer = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 transition-colors duration-300 border-t ${
      isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-black font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">Shafqat<span className="text-primary">.dev</span></span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Senior Full Stack Developer. Converting ideas into high-performing, fast & reliable full-stack web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#team" className="hover:text-primary transition">Team</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Shafqat-Ullah"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary hover:text-black text-white flex items-center justify-center transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shafqat-ullah15305/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.me/923255635495"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 text-white flex items-center justify-center transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Shafqat Ullah. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500 inline" />
            <span>for clients worldwide.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-800 text-white hover:bg-primary hover:text-black transition shadow-md flex items-center justify-center"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
