import React from 'react';
import './CustomersSection.css';
import { Award, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { customersData, customerStats } from '../data/customersData';
import { companyInfo } from '../data/companyData';

export default function CustomersSection() {
  const row1 = customersData.slice(0, 6);
  const row2 = customersData.slice(6, 12);

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello Ayush Enterprises, I am contacting you regarding material supply for an upcoming construction project in Telangana.');
    const number = String(companyInfo.whatsappNumber || '').replace(/\D/g, '');
    if (number) window.open(`https://wa.me/${number}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const renderClient = (client, idx, row) => (
    <a
      key={`${row}-${client.id}-${idx}`}
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${client.name} official website`}
      className="w-72 sm:w-84 flex-shrink-0 bg-[#062B59] hover:bg-[#0B3C77] border border-[#164A83] hover:border-[#FFA500] rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group block cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3 mb-3.5">
        {client.logo ? (
          <div className="h-11 px-3 py-1 bg-white rounded-xl flex items-center justify-center shadow-sm max-w-[175px] group-hover:scale-105 transition-transform">
            <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" loading="lazy" />
          </div>
        ) : (
          <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-md border border-white/20 group-hover:scale-105 transition-transform" style={{ backgroundColor: client.themeColor }}>
            {client.initials}
          </div>
        )}
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FFA500] group-hover:text-white transition-colors bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
          Visit <ExternalLink className="w-3 h-3" />
        </span>
      </div>
      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFA500] transition-colors leading-snug line-clamp-1">{client.name}</h3>
      <p className="text-xs text-slate-200 mt-1 line-clamp-1 font-medium">{client.type}</p>
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[11px]">
        <span className="flex items-center gap-1 text-slate-200"><MapPin className="w-3 h-3 text-[#FFA500]" />{client.location}</span>
        <span className="text-[10px] text-emerald-200 font-bold bg-emerald-400/15 px-2 py-0.5 rounded-full border border-emerald-300/25">Verified Partner</span>
      </div>
    </a>
  );

  return (
    <section id="customers" className="relative py-20 lg:py-28 bg-white text-[#062B59] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B4B88] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#FFA500]" />
            <span>Our Valued Clientele</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B59] tracking-tight leading-tight">
            Trusted by Telangana's Foremost <span className="text-[#E89300]">Builders &amp; Developers</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Supplying premium Mivan formwork accessories, scaffolding systems, Venlub shuttering oil, and certified safety hardware to leading high-rise projects across Hyderabad and Telangana.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden space-y-5 customers-marquee-container">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-20 pointer-events-none customers-fade-left" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-20 pointer-events-none customers-fade-right" />
        <div className="customers-marquee-track flex gap-5">
          {[...row1, ...row1].map((client, idx) => renderClient(client, idx, 'row1'))}
        </div>
        <div className="customers-marquee-track-reverse flex gap-5">
          {[...row2, ...row2].map((client, idx) => renderClient(client, idx, 'row2'))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-[#F7FAFE] border border-blue-100 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-100">
            {customerStats.map((stat, i) => (
              <div key={i} className={i > 0 ? 'pt-4 md:pt-0' : ''}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B59] tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#062B59]">Supplying an Upcoming High-Rise or Commercial Project?</h4>
              <p className="text-xs text-slate-600 mt-0.5">Get project pricing, bulk dispatch schedules, and dedicated account support across Telangana.</p>
            </div>
            <button onClick={openWhatsApp} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-xs shadow-md transition-all cursor-pointer flex-shrink-0">
              <MessageCircle className="w-4 h-4" /><span>Connect With Supply Desk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
