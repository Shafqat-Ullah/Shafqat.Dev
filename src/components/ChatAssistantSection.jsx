import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Bot, Send, User, Sparkles, ShoppingBag, MessageSquare } from 'lucide-react';

const ChatAssistantSection = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Welcome to Shafqat's Client Inquiry Assistant! 👋 Ask any question about web development, packages, timelines, tech stack, or booking to get smart instant answers.",
      time: 'Just now'
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
    scrollToBottom();
  }, [messages, isTyping]);

  const getSmartAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Greetings & Pleasantries
    if (/^(hi|hello|hey|heya|hola|assalam|aOA|salam|greetings|good morning|good evening|good afternoon)/i.test(q)) {
      return "Hello there! 👋 Welcome! How can I assist you with Shafqat's Full Stack Web Development services today?";
    }
    if (/how are you|how do you do|how r u|wassup|whats up|what's up/i.test(q)) {
      return "I'm doing great and ready to help you! 🚀 What kind of web project or feature are you looking to build?";
    }
    if (/who are you|who r u|what is your name|what's your name|who made you/i.test(q)) {
      return "I'm Shafqat's AI Virtual Assistant! 🤖 I'm here to answer all your questions regarding Full Stack web development, packages, pricing, timeline, and booking.";
    }

    // 2. Who is Shafqat / Experience / Qualifications
    if (/shafqat|who is shafqat|about developer|experience|qualification|background|smit|peshawar/i.test(q)) {
      return "Shafqat Ullah is a Senior Full Stack Developer & Lead based in Peshawar, Pakistan with 2+ years of hands-on experience. He specializes in React.js, Node.js, Express, MongoDB, REST APIs, and modern responsive web architectures, having successfully delivered 66+ client platforms.";
    }

    // 3. Services & Tech Stack
    if (/service|services|offer|stack|tech|mern|react|node|express|mongodb|frontend|backend|database|api|feature/i.test(q)) {
      return "Shafqat offers end-to-end Full Stack Web Development: \n• Single Page Landing Pages & Business Showcases\n• MERN Stack Applications (React + Node + Express + MongoDB)\n• Custom Food Ordering & Restaurant Systems\n• RESTful API Architecture & Database Modeling\n• UI/UX Modernization & Bug Fixing";
    }

    // 4. Pricing / Cost / Budget
    if (/price|pricing|cost|budget|rate|fee|charge|package|how much|dollar|\$|cheap/i.test(q)) {
      return "We offer flexible & transparent pricing:\n• Starter Site: $150 – $300 (Fast 2-4 days turnaround)\n• Full-Stack MERN Application: $400 – $800 (Auth, Admin Panel, Database)\n• Custom Restaurant / E-Commerce System: $600 – $1,200+\n• Bug Fixes & API Upgrades: $100 – $250\nClick 'Place Order Now' or contact Shafqat on WhatsApp for an instant custom quote!";
    }

    // 5. Timeline / Delivery speed
    if (/time|timeline|duration|days|fast|quick|express|delivery|deadline|how long|when/i.test(q)) {
      return "Delivery timelines are fast & reliable:\n⚡ Express Delivery: 3 Days\n📅 Standard Landing Pages: 2 – 4 Days\n🚀 Full Stack MERN Apps: 5 – 10 Days\nWe strictly meet all project deadlines guaranteed!";
    }

    // 6. Portfolio / Examples / Past Projects
    if (/portfolio|project|projects|sample|example|work|demo|past|restaurant|burger|ufo|ecommerce|e-commerce|chappal|jewellery|mahleej/i.test(q)) {
      return "Shafqat has built 66+ live web applications! Featured E-Commerce & Web projects include:\n🛍️ Modern E-Commerce Store Platform\n👟 Chappal.pk Footwear E-Commerce Store\n💎 Jewellery & Luxury Goods Store\n👗 MAHLEEJ Fashion & Apparel Boutique\n🛒 Multi-Vendor E-Commerce Web App\n🍔 Fast Food Restaurant Website\nYou can test all live demos in the 'Projects' section above!";
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
      return "You can connect with Shafqat directly:\n📱 WhatsApp: +92 325 5635495\n📧 Email: shafqatullah15305@gmail.com\n📍 Location: Peshawar, Pakistan\nOr click the green order button to send your project scope directly to WhatsApp!";
    }

    // 10. How to order / process
    if (/order|hire|start|begin|book|process|step/i.test(q)) {
      return "Ordering is super easy! Click 'Place Order Now' at the bottom, select your desired project package & details, and click 'Send Order via WhatsApp'. We will confirm your order and start development immediately!";
    }

    // 11. Custom Smart ChatGPT-like response for any other query
    return `That's a great question about "${userQuery}"! Shafqat can build custom tailored web solutions for this. Click 'Place Order Now' or send a direct message on WhatsApp (+92 325 5635495) for an instant detailed consultation!`;
  };

  const handleSend = (textToSend = input) => {
    const query = textToSend.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (textToSend === input) setInput('');
    setIsTyping(true);

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
    <section id="assistant" className={`py-24 transition-colors duration-300 hidden md:block ${
      isDark ? 'bg-night-bg border-t border-slate-800/80' : 'bg-white border-t border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-extrabold text-xs uppercase tracking-widest border border-primary/20 mb-4">
            <Bot className="w-4 h-4" /> AI Client Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Smart <span className="gradient-text">Client Chatbot</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have questions before starting your project? Ask our smart AI Assistant below for instant ChatGPT-style responses!
          </p>
        </div>

        {/* Main Chat Interface Box */}
        <div className={`rounded-3xl border shadow-2xl overflow-hidden flex flex-col h-[520px] ${
          isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
        }`}>
          
          {/* Top Bar */}
          <div className="p-5 bg-gradient-to-r from-primary via-secondary to-accent text-black flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-black border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base leading-tight">Shafqat's Smart Project Assistant</h3>
                <p className="text-xs opacity-90 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Now • Answers instantly
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenOrderModal()}
              className="px-4 py-2 rounded-full bg-white/20 hover:bg-white text-black hover:text-slate-950 font-bold text-xs flex items-center gap-2 backdrop-blur-md transition"
            >
              <ShoppingBag className="w-4 h-4" /> Order Project
            </button>
          </div>

          {/* Messages Container */}
          <div className={`flex-1 p-6 overflow-y-auto space-y-4 ${
            isDark ? 'bg-slate-950/60' : 'bg-slate-50'
          }`}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-primary to-secondary text-black rounded-tr-none'
                    : isDark
                      ? 'bg-slate-800 border border-slate-700 text-slate-100 rounded-tl-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}>
                  <p className="leading-relaxed text-sm sm:text-base whitespace-pre-line">{msg.text}</p>
                  <span className={`text-[10px] block mt-1.5 text-right opacity-70 ${
                    msg.sender === 'user' ? 'text-white' : 'text-slate-400'
                  }`}>
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-sm py-2">
                <Bot className="w-5 h-5 text-primary animate-pulse" />
                <span>Assistant is crafting an answer...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Question Chips */}
          <div className={`p-3 border-t overflow-x-auto flex gap-2 no-scrollbar ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition border ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-primary hover:text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-primary hover:text-black'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className={`p-4 border-t flex items-center gap-3 ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <input
              type="text"
              placeholder="Ask any question about timeline, pricing, services..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className={`flex-1 px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
              }`}
            />
            
            <button
              onClick={() => handleSend()}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-black font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2 shrink-0"
            >
              <Send className="w-4 h-4" /> Ask
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChatAssistantSection;
