import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code2, Server, Wrench, CheckCircle, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const AnimatedBar = ({ percentage, gradient }) => {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-3 rounded-full overflow-hidden p-0.5 bg-slate-200 dark:bg-slate-800">
      <div
        ref={ref}
        className={`h-full rounded-full ${gradient} ${animated ? 'bar-fill' : ''}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  const technicalSkills = [
    { name: 'React.js & Next.js', percentage: 90, level: 'Expert' },
    { name: 'JavaScript (ES6+)', percentage: 92, level: 'Expert' },
    { name: 'HTML5 & CSS3 / SASS', percentage: 95, level: 'Master' },
    { name: 'Node.js & Express.js', percentage: 85, level: 'Advanced' },
    { name: 'MongoDB & Mongoose', percentage: 85, level: 'Advanced' },
    { name: 'TailwindCSS / Bootstrap', percentage: 95, level: 'Master' },
  ];

  const professionalSkills = [
    { name: 'Problem Solving & Debugging', percentage: 95, level: 'Master' },
    { name: 'Client Communication', percentage: 90, level: 'Expert' },
    { name: 'Teamwork & Leadership', percentage: 88, level: 'Advanced' },
    { name: 'Project Delivery & Timelines', percentage: 95, level: 'Master' },
    { name: 'UI/UX Sensitivity', percentage: 85, level: 'Advanced' },
  ];

  const techBadges = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', category: 'frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500', category: 'frontend' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', category: 'frontend' },
    { name: 'React.js', icon: 'fab fa-react', color: 'text-cyan-400', category: 'frontend' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', category: 'backend' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-emerald-400', category: 'backend' },
    { name: 'Express.js', icon: 'fas fa-server', color: 'text-slate-300', category: 'backend' },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: 'text-orange-600', category: 'tools' },
    { name: 'npm', icon: 'fab fa-npm', color: 'text-red-500', category: 'tools' },
    { name: 'TailwindCSS', icon: 'fas fa-wind', color: 'text-teal-400', category: 'frontend' },
    { name: 'Sass', icon: 'fab fa-sass', color: 'text-pink-500', category: 'frontend' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400', category: 'tools' },
    { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-400', category: 'tools' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-amber-300', category: 'tools' },
  ];

  const filteredTech = activeTab === 'all' 
    ? techBadges 
    : techBadges.filter(item => item.category === activeTab);

  return (
    <section id="skills" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-widest border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4" /> Expertise Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            My Tech <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Mastery of modern web technologies ensuring scalable, bug-free, and maintainable software products.
          </p>
        </div>
        </Reveal>

        {/* Progress Bars Section */}
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Technical Skills */}
          <div className={`p-8 rounded-3xl border card-hover ${
            isDark ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-slate-50 border-slate-200 shadow-md'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Technical Capabilities</h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm sm:text-base flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">{skill.level}</span>
                      <span className="font-bold text-sm text-primary">{skill.percentage}%</span>
                    </div>
                  </div>

                  <AnimatedBar percentage={skill.percentage} gradient="bg-gradient-to-r from-primary via-secondary to-accent" />
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className={`p-8 rounded-3xl border card-hover ${
            isDark ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-slate-50 border-slate-200 shadow-md'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Professional Competencies</h3>
            </div>

            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm sm:text-base flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary/10 text-secondary font-bold">{skill.level}</span>
                      <span className="font-bold text-sm text-secondary">{skill.percentage}%</span>
                    </div>
                  </div>

                  <AnimatedBar percentage={skill.percentage} gradient="bg-gradient-to-r from-secondary via-accent to-primary" />
                </div>
              ))}
            </div>
          </div>

        </div>
        </Reveal>

        {/* Tools & Technologies Grid */}
        <Reveal>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-center sm:text-left">
              Tools & <span className="gradient-text">Technologies</span>
            </h3>

            {/* Filter Tabs */}
            <div className={`flex items-center p-1 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              {['all', 'frontend', 'backend', 'tools'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-primary text-black shadow-md'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {filteredTech.map((tech, index) => (
              <div
                key={index}
                className={`group p-5 rounded-2xl border text-center flex flex-col items-center justify-center gap-3 card-hover transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800/90 hover:bg-slate-800'
                    : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <i className={`${tech.icon} text-4xl ${tech.color} transition-transform group-hover:scale-110`}></i>
                <span className="text-xs font-extrabold tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Skills;