import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Check, X, CheckCircle2 } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';
import Reveal from './Reveal';

const defaultReviews = [
  {
    id: 1,
    name: 'Simone',
    role: 'Restaurant Owner (Italy)',
    image: './Images/client1.png',
    rating: 5,
    comment: 'Shafqat delivered an outstanding website for my restaurant. The design is modern, the menu functionality is flawless, and he was professional throughout the entire process. Highly recommended!',
    status: 'approved'
  },
  {
    id: 2,
    name: 'Nayan Petrime',
    role: 'Restaurant Business Owner',
    image: './Images/client2.png',
    rating: 5,
    comment: 'Working with Shafqat was a pleasure. He understood my vision perfectly and delivered a website that exceeded my expectations. His attention to detail and communication skills are exceptional.',
    status: 'approved'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Tech Startup Founder (USA)',
    image: './Images/client3_new.png',
    rating: 5,
    comment: 'Shafqat transformed our online presence with a stunning website. He was responsive, professional, and delivered on time. The site has significantly increased our customer engagement and conversions.',
    status: 'approved'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing Director',
    image: './Images/client_4.jpg',
    rating: 5,
    comment: 'Exceptional work! Shafqat created a beautiful, functional website that perfectly represents our brand. His technical expertise and creative approach made the entire process smooth and enjoyable.',
    status: 'approved'
  }
];

const Reviews = () => {
  const { isDark } = useTheme();
  const [approvedReviews, setApprovedReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Modals & Panels
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Load reviews from localStorage on mount and purge any "hi" test review
  useEffect(() => {
    // Purge old keys if present
    localStorage.removeItem('shafqat_portfolio_reviews');

    const savedApproved = localStorage.getItem('shafqat_portfolio_approved_reviews');
    const savedPending = localStorage.getItem('shafqat_portfolio_pending_reviews');

    if (savedApproved) {
      try {
        const parsed = JSON.parse(savedApproved);
        const filtered = parsed.filter(r => 
          r.name?.toLowerCase().trim() !== 'hi' && 
          r.comment?.toLowerCase().trim() !== 'hi'
        );
        const finalApproved = filtered.length > 0 ? filtered : defaultReviews;
        setApprovedReviews(finalApproved);
        localStorage.setItem('shafqat_portfolio_approved_reviews', JSON.stringify(finalApproved));
      } catch (e) {
        setApprovedReviews(defaultReviews);
      }
    } else {
      setApprovedReviews(defaultReviews);
      localStorage.setItem('shafqat_portfolio_approved_reviews', JSON.stringify(defaultReviews));
    }

    if (savedPending) {
      try {
        const parsedP = JSON.parse(savedPending);
        const filteredP = parsedP.filter(r => 
          r.name?.toLowerCase().trim() !== 'hi' && 
          r.comment?.toLowerCase().trim() !== 'hi'
        );
        setPendingReviews(filteredP);
        localStorage.setItem('shafqat_portfolio_pending_reviews', JSON.stringify(filteredP));
      } catch (e) {
        setPendingReviews([]);
      }
    }
  }, []);

  // Save changes helper
  const saveApprovedToStorage = (newList) => {
    setApprovedReviews(newList);
    localStorage.setItem('shafqat_portfolio_approved_reviews', JSON.stringify(newList));
  };

  const savePendingToStorage = (newList) => {
    setPendingReviews(newList);
    localStorage.setItem('shafqat_portfolio_pending_reviews', JSON.stringify(newList));
  };

  // Auto carousel rotation
  useEffect(() => {
    if (approvedReviews.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % approvedReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [approvedReviews.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + approvedReviews.length) % approvedReviews.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % approvedReviews.length);
  };

  // Admin approves pending review
  const handleApproveReview = (reviewToApprove) => {
    const approvedObj = { ...reviewToApprove, status: 'approved' };
    const updatedApproved = [approvedObj, ...approvedReviews];
    const updatedPending = pendingReviews.filter(r => r.id !== reviewToApprove.id);

    saveApprovedToStorage(updatedApproved);
    savePendingToStorage(updatedPending);
    setCurrentIndex(0);
  };

  // Admin rejects/deletes pending review
  const handleRejectReview = (reviewId) => {
    const updatedPending = pendingReviews.filter(r => r.id !== reviewId);
    savePendingToStorage(updatedPending);
  };

  const activeReview = approvedReviews[currentIndex] || defaultReviews[0];

  return (
    <section id="reviews" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg/90 border-t border-slate-800/80' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Client <span className="gradient-text">Reviews & Feedback</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Read real feedback from business owners and founders who entrusted their web projects to me.
          </p>

          {/* Admin Moderation Panel Badge Link */}
          {pendingReviews.length > 0 && (
            <button
              onClick={() => setShowAdminModal(true)}
              className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/50 bg-amber-500/20 text-amber-400 text-xs font-bold transition-all shadow-sm animate-pulse"
              title="Shafqat's Review Approval Panel"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Review Moderation Panel ({pendingReviews.length} Pending)</span>
            </button>
          )}
        </div>
        </Reveal>

        {/* Carousel Showcase */}
        {approvedReviews.length > 0 && (
          <Reveal>
          <div className="relative max-w-4xl mx-auto">
            
            {/* Main Active Review Card */}
            <div className={`p-8 sm:p-12 rounded-3xl border relative transition-all duration-500 shadow-2xl ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                {/* Client Photo */}
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shrink-0 shadow-lg">
                  <img
                    src={getImagePath(activeReview.image)}
                    alt={activeReview.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                    }}
                    className="w-full h-full object-cover object-center rounded-full border-2 border-slate-900"
                  />
                </div>

                {/* Name & Stars */}
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold">{activeReview.name}</h3>
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-2">{activeReview.role}</p>

                  {/* Stars */}
                  <div className="flex justify-center sm:justify-start gap-1">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className={`text-base sm:text-lg italic leading-relaxed ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                "{activeReview.comment}"
              </p>
            </div>

            {/* Nav Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2 max-w-[200px] overflow-x-auto no-scrollbar py-1">
                {approvedReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 rounded-full transition-all duration-300 shrink-0 ${
                      currentIndex === idx ? 'w-8 bg-primary' : 'w-3 bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                    isDark ? 'bg-slate-800 border-slate-700 hover:bg-primary hover:text-black text-white' : 'bg-white border-slate-300 hover:bg-primary hover:text-black text-slate-800'
                  }`}
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                    isDark ? 'bg-slate-800 border-slate-700 hover:bg-primary hover:text-black text-white' : 'bg-white border-slate-300 hover:bg-primary hover:text-black text-slate-800'
                  }`}
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>
          </Reveal>
        )}

      </div>

      {/* Admin Review Moderation Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col ${
            isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/40 mb-6 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">Review Moderation Panel</h3>
                  <p className="text-xs text-slate-400">Approve or reject client submitted reviews</p>
                </div>
              </div>

              <button
                onClick={() => setShowAdminModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Pending List */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {pendingReviews.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3 opacity-80" />
                  <h4 className="text-lg font-bold">No Pending Reviews!</h4>
                  <p className="text-xs text-slate-400">All submitted client reviews have been processed.</p>
                </div>
              ) : (
                pendingReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base">{rev.name}</span>
                        <span className="text-xs text-slate-400">({rev.role})</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-extrabold text-[10px]">
                          ⭐ {rev.rating}/5
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Email: {rev.email} • Submitted: {rev.date}</p>
                      <p className="text-sm italic text-slate-200 mt-2">"{rev.comment}"</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        onClick={() => handleApproveReview(rev)}
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md"
                      >
                        <Check className="w-4 h-4" /> Approve & Publish
                      </button>

                      <button
                        onClick={() => handleRejectReview(rev.id)}
                        className="px-3 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white font-bold text-xs flex items-center gap-1 border border-rose-500/30"
                      >
                        <X className="w-4 h-4" /> Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-700/40 mt-4 flex items-center justify-between text-xs text-slate-400 shrink-0">
              <span>Total Active Published Reviews: {approvedReviews.length}</span>
              <button
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold"
              >
                Close Moderation Panel
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Reviews;
