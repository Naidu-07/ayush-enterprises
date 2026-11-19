import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import { 
  ShieldCheck, Wrench, Clock, HeartHandshake, 
  ArrowRight, CheckCircle2, Award, Building2, FileCheck, X 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AboutUs({ onExploreCatalogue }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [modalOpen]);

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Quality Products",
      desc: "Rigorous grade inspection & high dimensional tolerance on all accessories."
    },
    {
      icon: Wrench,
      title: "Reliable Solutions",
      desc: "Engineered formwork & scaffolding tailored to complex site demands."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Prompt dispatch with massive warehouse stock ready for immediate delivery."
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      desc: "Transparent commercial terms, prompt support, and post-delivery assistance."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column About Us Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Construction Image with Modern Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/assets/images/hero_slide2_bg.jpg" 
                alt="Ayush Enterprises Construction Site" 
                className="w-full h-64 sm:h-[420px] object-cover object-center transform hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFA500]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#062B59]/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right Side: Company Introduction */}
          <div className="lg:col-span-7">
            
            {/* Small Section Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#062B59]/5 text-[#062B59] text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B59] tracking-tight mb-3 sm:mb-4">
              About Ayush Enterprises
            </h2>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4">
              Ayush Enterprises is committed to providing quality construction materials, reliable equipment and dependable solutions for modern construction projects.
            </p>

            <p className="text-slate-500 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
              We focus on quality, reliability, timely delivery and customer satisfaction. From heavy infrastructure shoring to high-rise Mivan monolithic formwork accessories, our ex-stock availability and technical rigor ensure your project milestones are met safely and efficiently.
            </p>

            {/* Four Highlights with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-start p-3 sm:p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#FFA500]/40 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#062B59] text-[#FFA500] flex items-center justify-center flex-shrink-0 mr-3 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#062B59] mb-0.5">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Authorised Dealership Section: Left Content, Right Image */}
        <div className="mt-12 pt-12 sm:mt-16 sm:pt-16 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Dealership Information */}
          <div className="lg:col-span-7">
            
            {/* Small Section Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#062B59]/5 text-[#062B59] text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>
              <span>Authorised Dealership</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-[#062B59] tracking-tight mb-3 sm:mb-4">
              Authorised Dealer for Shutterring Oil.
            </h3>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4">
              Ayush Enterprises is the official authorised dealer and distributor for <strong className="text-[#062B59]">Venlub Petro Products Pvt Ltd</strong> in Telangana, supplying high-performance shuttering oils and formwork release agents.
            </p>

            <p className="text-slate-500 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
              Engineered specifically for aluminium (Mivan) and conventional steel shuttering systems, Venlub Shuttering Oil delivers clean, effortless form release, superior mirror-like fair-faced concrete finish, and extended service life for formwork panels. We maintain active warehouse inventory for prompt, reliable site dispatch in 210L barrels and bulk quantities.
            </p>

            {/* Four Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-start p-3 sm:p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#FFA500]/40 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#062B59] text-[#FFA500] flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#062B59] mb-0.5">Authorised Distributor</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">Direct manufacturer partnership guaranteeing 100% genuine Venlub products with batch quality certificates.</p>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#FFA500]/40 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#062B59] text-[#FFA500] flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#062B59] mb-0.5">High-Performance Release</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">Advanced chemical formulation preventing concrete adhesion, surface staining, and air pocket voids.</p>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#FFA500]/40 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#062B59] text-[#FFA500] flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#062B59] mb-0.5">Bulk 210L Drum Stock</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">Extensive warehouse stock ready for immediate delivery and same-day dispatch across Telangana sites.</p>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#FFA500]/40 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#062B59] text-[#FFA500] flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#062B59] mb-0.5">Proven on Landmark Sites</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">Supplied to major projects like Vasavi Skyla, Candeur Arbora, and Urbanrise Cloud33.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Venlub Dealership Image with Modern Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 p-4 sm:p-6 flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
              <img 
                src="/assets/images/venlub.png" 
                alt="Venlub Petro Products Authorised Dealership" 
                onError={(e) => { e.currentTarget.src = '/assets/products/venlub-shuttering-oil.png'; }}
                className="w-full max-h-[220px] sm:max-h-[350px] object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-xl"
              />
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFA500]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#062B59]/10 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>

      </div>

      {/* Modal: Company Details & Verification */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[88vh] overflow-y-auto my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#062B59] flex items-center justify-center text-[#FFA500]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#062B59]">{companyInfo.name}</h3>
                <p className="text-xs text-[#FFA500] font-semibold">{companyInfo.tagline}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <p>
                <strong>Ayush Enterprises</strong> is a registered partnership business located in Hyderabad, Telangana, specializing in the wholesale distribution and supply of premium construction accessories, shuttering components, scaffolding couplers, and heavy equipment logistics.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-start">
                  <FileCheck className="w-4 h-4 text-[#FFA500] mr-2 mt-0.5 flex-shrink-0" />
                  <div><strong>Legal Entity:</strong> {companyInfo.legalName}</div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA500] mr-2 mt-0.5 flex-shrink-0" />
                  <div><strong>GSTIN Registration:</strong> {companyInfo.gstin} (Balanagar Ward, Hyderabad)</div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA500] mr-2 mt-0.5 flex-shrink-0" />
                  <div><strong>Registered Office:</strong> {companyInfo.address.full}</div>
                </div>
              </div>
              <p>
                We maintain active inventories of drop forged couplers, standard tie rods, M60 high-performance concrete cover blocks, and Mivan pins & wedges to serve construction sites with same-day and scheduled dispatch across South India.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-[#062B59] text-white font-semibold text-sm rounded-lg hover:bg-[#002653] transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
