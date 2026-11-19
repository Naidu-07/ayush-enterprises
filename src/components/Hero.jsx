import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreProducts, onContactUs }) {
  return (
    <section 
      id="home"
      className="hero-section relative w-full overflow-hidden bg-[#001733] select-none"
    >
      {/* Container with natural image aspect ratio on desktop, comfortable height on mobile */}
      <div className="relative w-full aspect-auto sm:aspect-[1024/440] min-h-[420px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] max-h-[700px] flex items-center">
        
        {/* Exact Original Image 2 - Zero compression, zero resampling, 100% native clarity */}
        <img 
          src="/assets/images/hero_bg.png" 
          alt="Ayush Enterprises - Complete Construction Solutions" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="hero-dark-overlay" />

        {/* Hero Content Overlay - Pure crisp typography */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col justify-center">
          <div className="max-w-xl sm:max-w-2xl text-left">
            
            {/* Orange Dash + Badge */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2.5 sm:mb-3">
              <span className="w-6 sm:w-10 h-0.5 sm:h-1 bg-[#FFA500] rounded-full inline-block"></span>
              <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase drop-shadow-md">
                COMPLETE CONSTRUCTION SOLUTIONS
              </span>
            </div>

            {/* Main Title: Build Better. Build Stronger. */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none mb-3 sm:mb-4">
              <span className="text-white block drop-shadow-lg">Build Better.</span>
              <span className="text-[#FFA500] block mt-0.5 sm:mt-1 drop-shadow-lg">Build Stronger.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-xs sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-6 sm:mb-7 max-w-lg drop-shadow-md">
              <span className="block">Quality Materials. Reliable Equipment.</span>
              <span className="block text-slate-100">For Your Stronger Tomorrow.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Explore Products Button */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Contact Us Button */}
              <button
                type="button"
                onClick={onContactUs}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent hover:bg-white/10 active:bg-white/20 text-white font-semibold text-sm md:text-base rounded-full border border-white/80 transition-all duration-200 cursor-pointer group shadow-md"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 mt-5 sm:mt-6 pt-4 border-t border-white/15 sm:border-0 sm:pt-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[10px] sm:text-xs font-semibold text-slate-200 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]"></span>
                GST Registered
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[10px] sm:text-xs font-semibold text-slate-200 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]"></span>
                120+ Products In Stock
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[10px] sm:text-xs font-semibold text-slate-200 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500]"></span>
                Telangana Dispatch
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
