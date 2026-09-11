import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Award, Code2, Rocket, HeartHandshake, CheckCircle, Terminal, Coffee, Sparkles, Briefcase, Calendar, MapPin, Mail, Phone, User, GraduationCap } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';
import Reveal from './Reveal';

const About = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const timelineItems = [
    {
      role: 'Senior Full Stack Developer & Team Lead',
      company: 'SMIT Peshawar',
      period: '2024 – Present',
      description: 'Lead and develop modern web applications using React, Node.js, and MongoDB. Optimize performance, build automation tools for students, and manage full-stack project workflows.',
      tags: ['React', 'Node.js', 'MongoDB', 'UI/UX']
    },
    {
      role: 'Full Stack MERN Developer',
      company: 'Freelance & Client Projects',
      period: '2022 – Present',
      description: 'Built 66+ full-stack web platforms using React, Express, Node.js, and MongoDB. Integrated secure APIs, database models, payment channels, and delivered responsive designs.',
      tags: ['MERN', 'REST APIs', 'TailwindCSS', 'Firebase']
    },
    {
      role: 'Junior Web Developer',
      company: 'Self-Learning & Practice',
      period: '2021 – 2022',
      description: 'Created responsive frontend sites using HTML, CSS, JavaScript, and React. Focused on UI/UX optimization and modern front-end tooling.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Git']
    }
  ];

  const educationItems = [
    {
      degree: 'BSc Computer Science (In Progress)',
      school: 'University of Peshawar',
      period: '2022 – Present',
      description: 'Pursuing a Bachelor of Science in Computer Science, focusing on data structures, algorithms, databases, and core software engineering fundamentals.',
      tags: ['Data Structures', 'Algorithms', 'DBMS', 'Software Engineering']
    },
    {
      degree: 'Professional Software Development Training',
      school: 'Saylani Mass IT Training (SMIT) Peshawar',
      period: '2022 – 2024',
      description: 'Completed hands-on professional training in modern web technologies including the complete MERN stack, REST APIs, and agile project delivery.',
      tags: ['MERN Stack', 'REST APIs', 'JavaScript', 'Git']
    }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg/60 border-t border-slate-800/80' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Dedicated Full Stack Developer passionate about producing clean, high-impact web code that turns site visitors into loyal clients.
          </p>
        </div>
        </Reveal>

        {/* Profile Details Grid */}
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-30"></div>
              <img
                src={getImagePath('Images/shafqatdev2.png')}
                alt="Shafqat Ullah - Senior Full Stack MERN Developer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80';
                }}
                className="relative w-full h-full object-cover rounded-3xl border-4 border-slate-800/80 shadow-2xl card-hover"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Who am I?
            </h3>
            <p className={`text-base sm:text-lg mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm a passionate Full Stack Developer with 2+ years of hands-on experience designing and launching high-performance web applications. I specialize in full-stack JavaScript architectures—React for interactive frontends, Node/Express for scalable backend microservices, and MongoDB for flexible data management.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Full Name</div>
                <div className="font-bold text-base flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>Shafqat Ullah</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Email Address</div>
                <div className="font-bold text-sm sm:text-base flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">shafqatullah15305@gmail.com</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Direct Phone / WhatsApp</div>
                <div className="font-bold text-base flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+92 325 5635495</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Location</div>
                <div className="font-bold text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Peshawar, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenOrderModal()}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
              >
                Order Custom Web App
              </button>
            </div>

          </div>

        </div>
        </Reveal>

        {/* Experience Timeline Section */}
        <Reveal>
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              My Work <span className="gradient-text">Experience</span>
            </h3>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Proven track record of delivering end-to-end development solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12"></div>
                  
                  {/* Timeline Badge Dot */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-slate-900 border-2 border-primary items-center justify-center text-primary shadow-lg z-10">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-5/12 p-6 rounded-2xl border card-hover ${
                    isDark 
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200 shadow-xl' 
                      : 'bg-white border-slate-200 text-slate-800 shadow-md'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs border border-primary/20">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">{item.company}</span>
                    </div>

                    <h4 className="text-lg font-bold mb-2 gradient-text">{item.role}</h4>
                    <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>

        {/* Education Timeline Section */}
        <Reveal>
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              My <span className="gradient-text">Education</span>
            </h3>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Academic background & professional training that shaped my engineering mindset.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2"></div>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12"></div>

                  <div className="hidden md:flex w-10 h-10 rounded-full bg-slate-900 border-2 border-secondary items-center justify-center text-secondary shadow-lg z-10">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className={`w-full md:w-5/12 p-6 rounded-2xl border card-hover ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200 shadow-xl'
                      : 'bg-white border-slate-200 text-slate-800 shadow-md'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-xs border border-secondary/20">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">{item.school}</span>
                    </div>

                    <h4 className="text-lg font-bold mb-2">{item.degree}</h4>
                    <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
