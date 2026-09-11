import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MessageSquare, Send, Bot, X, Sparkles, User, ShoppingBag, PhoneCall, Minimize2, Maximize2, Headphones, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getImagePath } from '../utils/imageUtils';

const Chatbot = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to Shafqat Ullah's Support & AI Assistant. How can I help you with web development, pricing, or project orders today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What services do you offer?",
    "How long does a project take?",
    "How does pricing & ordering work?",
    "Do you offer post-launch support?",
    "Is the website mobile-friendly & fast?",
    "How to contact Shafqat directly?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  const getSmartAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Greetings & Pleasantries
    if (/^(hi|hello|hey|heya|hola|assalam|aOA|salam|greetings|good morning|good evening|good afternoon)/i.test(q)) {
      return "Hello there! 👋 Welcome to Shafqat's Support Assistant! How can I assist you with Full Stack Web Development today?";
    }
    if (/how are you|how do you do|how r u|wassup|whats up|what's up/i.test(q)) {
      return "I'm doing great and ready to support you! 🚀 What web features or projects are you planning?";
    }
    if (/who are you|who r u|what is your name|what's your name|who made you/i.test(q)) {
      return "I'm Shafqat's Virtual Support & AI Assistant! 🤖 I'm here 24/7 to answer questions about packages, tech stack, timelines, and booking.";
    }

    // 2. Who is Shafqat / Experience / Qualifications
    if (/shafqat|who is shafqat|about developer|experience|qualification|background|smit|peshawar/i.test(q)) {
      return "Shafqat Ullah is a Senior Full Stack Developer & Lead based in Peshawar, Pakistan with 2+ years of hands-on experience. He specializes in React.js, Node.js, Express, MongoDB, REST APIs, and modern responsive web architectures, having successfully delivered 66+ live client platforms.";
    }

    // 3. Services & Tech Stack
    if (/service|services|offer|stack|tech|mern|react|node|express|mongodb|frontend|backend|database|api|feature/i.test(q)) {
      return "Shafqat offers end-to-end Full Stack Web Development: \n• Single Page Landing Pages & Business Showcases\n• MERN Stack Applications (React + Node + Express + MongoDB)\n• Custom Food Ordering & Restaurant Systems\n• E-Commerce Stores & Shopping Portals\n• RESTful API Architecture & Database Modeling";
    }

    // 4. Pricing / Cost / Budget
    if (/price|pricing|cost|budget|rate|fee|charge|package|how much|dollar|\$|cheap/i.test(q)) {
      return "We offer flexible & transparent pricing:\n• Starter Site: $150 – $300 (Fast 2-4 days turnaround)\n• Full-Stack MERN Application: $400 – $800 (Auth, Admin Panel, Database)\n• Custom Restaurant / E-Commerce System: $600 – $1,200+\n• Bug Fixes & API Upgrades: $100 – $250\nClick the Order icon or contact Shafqat on WhatsApp (+92 325 5635495) for a quote!";
    }

    // 5. Timeline / Delivery speed
    if (/time|timeline|duration|days|fast|quick|express|delivery|deadline|how long|when/i.test(q)) {
      return "Delivery timelines are fast & reliable:\n⚡ Express Delivery: 3 Days\n📅 Standard Landing Pages: 2 – 4 Days\n🚀 Full Stack MERN Apps: 5 – 10 Days\nWe strictly meet all project deadlines guaranteed!";
    }

    // 6. Portfolio / Examples / Past Projects
    if (/portfolio|project|projects|sample|example|work|demo|past|restaurant|burger|ufo|ecommerce/i.test(q)) {
      return "Shafqat has built 66+ live web applications! Featured projects include:\n🛍️ 12 E-Commerce Shopping Stores\n🍔 13 Restaurant & Food Websites\n🏋️ FlexGym Fitness Club Platform\n🛸 UFO Burger Official Website\n🌐 Digital Dream Web Corporate Portal\nYou can test all live demos in the 'Projects' section!";
    }

    // 7. Revisions & Support / Maintenance
    if (/support|maintenance|bug|fix|guarantee|warranty|revision|after delivery/i.test(q)) {
      return "Yes! 100% Satisfaction & Guarantee is provided. All projects include free post-launch support and bug fixes to ensure your website operates flawlessly without any downtime.";
    }

    // 8. Mobile Responsiveness & SEO
    if (/mobile|responsive|phone|tablet|seo|speed|fast|google|performance/i.test(q)) {
      return "Every website is engineered to be 100% mobile-friendly across all screens (iPhone, Android, Tablets, Laptops) with ultra-fast loading speed and clean SEO structure.";
    }

    // 9. Contact / WhatsApp / Phone / Email
    if (/contact|whatsapp|phone|number|email|call|reach|message|talk|hire/i.test(q)) {
      return "You can connect with Shafqat directly:\n📱 WhatsApp: +92 325 5635495\n📧 Email: shafqatullah15305@gmail.com\n📍 Location: Peshawar, Pakistan\nOr click the order button in the header/modal to start development!";
    }

    // 10. How to order / process
    if (/order|hire|start|begin|book|process|step/i.test(q)) {
      return "Ordering is super easy! Click 'Order Project' in the navigation bar, select your desired project package & details, and click 'Send Order via WhatsApp'. Development starts immediately!";
    }

    // 11. Custom Smart ChatGPT-like response for any other query
    return `That's a great question about "${userQuery}"! Shafqat can build custom tailored web solutions for this. Contact Shafqat directly on WhatsApp (+92 325 5635495) for an instant detailed consultation!`;
  };

  const handleSend = (textToSend = input) => {
    const query = textToSend.trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (textToSend === input) setInput('');
    setIsTyping(true);

    // Smart response delay
    setTimeout(() => {
      const responseText = getSmartAIResponse(query);

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Ultra-Attractive Glowing AI Assistant Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent text-black shadow-2xl shadow-primary/60 hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-primary/30"
            aria-label="Help & Live AI Support Assistant"
            title="Chat with Shafqat AI Assistant"
          >
            {/* Spinning Outer Glow Aura Ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-primary to-accent opacity-75 blur-md animate-pulse pointer-events-none"></span>
            
            {/* Pulsing Green Online Status Indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900 shadow-sm"></span>
            </span>

            {/* Glowing High-Res 3D AI Robot Avatar Logo */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={getImagePath('Images/chatbot-avatar.png')}
                alt="Shafqat AI Robot Assistant"
                className="w-11 h-11 sm:w-13 sm:h-13 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
              />
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-amber-300 animate-bounce" />
            </div>
          </button>
        )}
      </div>

      {/* Floating Responsive Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-[400px] max-w-[calc(100vw-2rem)] rounded-3xl border shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ${
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        } ${isMinimized ? 'h-16' : 'h-[calc(100dvh-6rem)] sm:h-[530px] max-h-[82vh]'}`}>
          
          {/* Header */}
          <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-black flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-black font-bold border border-white/30 shrink-0 p-1">
                <img src={getImagePath('Images/chatbot-avatar.png')} alt="AI Robot Logo" className="w-full h-full object-contain" />
                <Sparkles className="w-3 h-3 text-amber-300 absolute -top-0.5 -right-0.5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div className="min-w-0">
                <div className="font-extrabold text-sm sm:text-base leading-tight truncate">Smart AI Client Assistant</div>
                <div className="text-[10px] sm:text-[11px] opacity-90 flex items-center gap-1 truncate">
                  <span>Shafqat AI Engine • Online 24/7</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-black shrink-0">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition"
                title={isMinimized ? "Expand Chat" : "Minimize Chat"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body content */}
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className={`flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 text-xs sm:text-sm ${
                isDark ? 'bg-slate-950/60' : 'bg-slate-50'
              }`}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 p-1">
                        <img src={getImagePath('Images/chatbot-avatar.png')} alt="AI Bot Avatar" className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div className={`max-w-[85%] sm:max-w-[82%] rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-black rounded-tr-none'
                        : isDark
                          ? 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-none'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                    }`}>
                      <p className="leading-relaxed text-xs sm:text-sm whitespace-pre-line break-words">{msg.text}</p>
                      <span className={`text-[9px] sm:text-[10px] block mt-1 text-right opacity-60 ${
                        msg.sender === 'user' ? 'text-white' : 'text-slate-400'
                      }`}>
                        {msg.time}
                      </span>
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                    <Bot className="w-4 h-4 text-primary animate-pulse" />
                    <span>Support Assistant is typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className={`p-2.5 border-t overflow-x-auto flex gap-2 no-scrollbar ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition border ${
                      isDark 
                        ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-primary hover:text-white' 
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-primary hover:text-black'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className={`p-2.5 sm:p-3 border-t flex items-center gap-2 ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <input
                  type="text"
                  placeholder="Ask for support or project details..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className={`flex-1 min-w-0 px-3.5 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                    isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
                
                <a
                  href="https://wa.me/923255635495"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition shadow-md shrink-0 flex items-center justify-center"
                  title="Direct WhatsApp Chat"
                >
                  <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                </a>

                <button
                  onClick={() => handleSend()}
                  className="p-2 sm:p-2.5 rounded-xl bg-primary hover:bg-secondary text-black font-bold transition shadow-md shrink-0"
                  title="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

        </div>
      )}
    </>
  );
};

export default Chatbot;
