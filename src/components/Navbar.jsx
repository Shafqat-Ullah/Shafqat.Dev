import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ShoppingBag, Sparkles, Code2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar = ({ onOpenOrderModal }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'reviews', 'assistant', 'team', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Assistant', href: '#assistant', id: 'assistant' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? `translate-y-0 ${isDark
          ? 'bg-night-bg/85 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.06] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.8)] py-3'
          : 'bg-day-bg/85 backdrop-blur-xl backdrop-saturate-150 border-b border-day-border shadow-md py-3'}`
        : '-translate-y-full bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent flex items-center justify-center text-black shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight gradient-text">
                Shafqat<span className="text-primary font-black">.dev</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Available for hire
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? isDark
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-primary-dark bg-primary/10 font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons & Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Day/Night Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-amber-400 hover:bg-slate-700/80 hover:text-amber-300 shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
              }`}
              title={isDark ? "Switch to Day (Light) Mode" : "Switch to Night (Dark) Mode"}
            >
              {isDark ? (
                <>
                  <Sun className="w-5 h-5 animate-spin-slow" />
                  <span className="text-xs font-semibold pr-1 hidden xl:inline">Day</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span className="text-xs font-semibold pr-1 hidden xl:inline">Night</span>
                </>
              )}
            </button>

            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/923255635495"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-1.5 text-xs font-bold ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 shadow-md'
                  : 'bg-white border-slate-200 text-emerald-600 hover:bg-emerald-500 hover:text-white shadow-sm'
              }`}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:text-current" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Quick Order Button */}
            <button
              onClick={() => onOpenOrderModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-black font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Order Project</span>
              <Sparkles className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDark ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-3 px-4 pt-3 pb-6 border-b transition-all duration-300 ${
          isDark ? 'bg-slate-900/95 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.filter((link) => link.id !== 'assistant').map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg font-medium transition ${
                  activeSection === link.id
                    ? 'bg-primary/10 text-primary font-bold'
                    : isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-700/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Place Project Order Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
