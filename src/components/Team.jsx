import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Users, Sparkles } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';
import Reveal from './Reveal';

const Team = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Shafqat Ullah',
      role: 'Full Stack Developer & Lead',
      image: './Images/shafqat_update.png',
      bio: 'Full Stack Developer with 2+ years of experience building high-performance web applications. I lead development teams efficiently, ensure clean scalable code, and manage end-to-end client deliverables.',
      github: 'https://github.com/Shafqat-Ullah',
      linkedin: 'https://www.linkedin.com/in/shafqat-ullah15305/',
      email: 'mailto:shafqatullah15305@gmail.com'
    },
    {
      id: 2,
      name: 'Tousif Ahmad',
      role: 'Full Stack Developer',
      image: './Images/Tousif_Ahmad.jpg',
      bio: 'Full-stack developer specializing in React, Node.js, and MongoDB APIs. Passionate about creating responsive UI components and robust server logic.',
      github: 'https://github.com/Tousif-Ahmad',
      linkedin: 'https://www.linkedin.com/in/tousif-ahmad/',
      email: 'mailto:tousifahmdkhn@gmail.com'
    },
    {
      id: 3,
      name: 'Mehran Khan',
      role: 'Project Manager',
      image: './Images/Mehran_khan.jpg',
      bio: 'Experienced project manager with expertise in agile workflows, sprint planning, client communications, and ensuring projects finish strictly on schedule.',
      github: 'https://github.com/mehrankhan18',
      linkedin: 'https://www.linkedin.com/in/mehran-khan-3750b1366/',
      email: 'mailto:mehrankhan1852@gmail.com'
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-play slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeMember = teamMembers[currentIndex];

  return (
    <section id="team" className={`py-24 transition-colors duration-300 relative overflow-hidden ${
      isDark ? 'bg-night-bg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-widest border border-primary/20 mb-4">
            <Users className="w-4 h-4" /> Team Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Our Development <span className="gradient-text">Team</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Meet the talented engineers & project managers working together to execute your web applications flawlessly.
          </p>
        </div>
        </Reveal>

        {/* Interactive Team Image Slider Carousel */}
        <Reveal>
        <div className="relative max-w-4xl mx-auto">
          
          {/* Slider Container */}
          <div className={`relative rounded-3xl p-6 sm:p-12 border overflow-hidden transition-all duration-500 shadow-2xl ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xl'
          }`}>
            
            {/* Slide Item */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in">
              
              {/* Member Image Avatar */}
              <div className="relative shrink-0">
                <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl">
                  <img
                    src={getImagePath(activeMember.image)}
                    alt={activeMember.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                    }}
                    className="w-full h-full object-cover rounded-full border-4 border-slate-950 shadow-inner"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" /> Core Team Member
                </div>
              </div>

              {/* Member Details */}
              <div className="text-center md:text-left flex-1">
                <span className="text-xs font-black uppercase tracking-widest text-primary mb-1 block">
                  {activeMember.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text">
                  {activeMember.name}
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  "{activeMember.bio}"
                </p>

                {/* Member Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href={activeMember.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110 ${
                      isDark ? 'bg-slate-800 hover:bg-primary text-slate-300 hover:text-black' : 'bg-white border hover:bg-primary text-slate-700 hover:text-black shadow-sm'
                    }`}
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110 ${
                      isDark ? 'bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white' : 'bg-white border hover:bg-blue-600 text-slate-700 hover:text-white shadow-sm'
                    }`}
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href={activeMember.email}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110 ${
                      isDark ? 'bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white' : 'bg-white border hover:bg-red-500 text-slate-700 hover:text-white shadow-sm'
                    }`}
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center shadow-xl transition-all hover:scale-110 ${
              isDark ? 'bg-slate-900 border-slate-700 text-white hover:bg-primary hover:text-black' : 'bg-white border-slate-300 text-slate-900 hover:bg-primary hover:text-black'
            }`}
            aria-label="Previous Team Member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center shadow-xl transition-all hover:scale-110 ${
              isDark ? 'bg-slate-900 border-slate-700 text-white hover:bg-primary hover:text-black' : 'bg-white border-slate-300 text-slate-900 hover:bg-primary hover:text-black'
            }`}
            aria-label="Next Team Member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {teamMembers.map((member, idx) => (
              <button
                key={member.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                    : isDark ? 'w-3 bg-slate-800 hover:bg-slate-700' : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Team;
