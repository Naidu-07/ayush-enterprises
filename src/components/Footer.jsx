import React from 'react';
import './Footer.css';
import { 
  Phone, Mail, MapPin, ArrowRight, ShieldCheck, 
  MessageSquare, ExternalLink 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { categoriesData } from '../data/productsData';

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Equipment', id: 'equipment' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact Us', id: 'contact' }
  ];

  const handleLink = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001A3A] text-slate-300 relative border-t-2 border-[#FFA500]">
      {/* Main Footer Container with mobile safe padding for bottom app bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COLUMN 1: AE Logo, Branding & Intro */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* White background logo container for clean crisp logo display */}
            <div className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <img 
                src="/assets/images/logo.png" 
                alt="AYUSH ENTERPRISES Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Ayush Enterprises is committed to providing quality construction materials, reliable equipment and dependable solutions for modern construction projects.
            </p>

            {/* GST Verification */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#FFA500]" />
                <span className="text-slate-300">GSTIN: <strong className="text-white">{companyInfo.gstin}</strong></span>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="pt-2">
              <a
                href={companyInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-[#FFA500] hover:text-white transition-colors"
              >
                <span>Connect with Sales on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLink(link.id, e)}
                    className="hover:text-[#FFA500] transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500] opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categoriesData.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleLink('products', e)}
                    className="hover:text-[#FFA500] transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA500] opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                    <span className="truncate">{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {companyInfo.address.full}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFA500] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-[#FFA500] transition-colors font-medium">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFA500] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-[#FFA500] transition-colors font-medium">
                  {companyInfo.phone2}
                </a>
              </div>

              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FFA500] flex-shrink-0" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyInfo.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFA500] transition-colors font-medium"
                >
                  {companyInfo.email}
                </a>
              </div>


              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#FFA500] flex-shrink-0" />
                <a 
                  href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFA500] transition-colors font-medium"
                >
                  WhatsApp: {companyInfo.whatsappDisplay}
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            Copyright © 2026 <strong className="text-white font-semibold">{companyInfo.name}</strong>. All Rights Reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#about" onClick={(e) => handleLink('about', e)} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#about" onClick={(e) => handleLink('about', e)} className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Hyderabad, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
