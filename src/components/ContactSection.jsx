import React, { useState } from 'react';
import './ContactSection.css';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, ShieldCheck, AlertCircle 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { categoriesData } from '../data/productsData';
import { equipmentList } from '../data/equipmentData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    itemType: 'all',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details of your requirement';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Ayush Enterprises,\n\nI am contacting you from your website.\nName: ${formData.fullName || 'Interested Client'}\nRequirement: ${formData.itemType}\nMessage: ${formData.message || 'Please provide quotation.'}`
    );
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#062B59]/5 text-[#062B59] text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B59] tracking-tight">
            Let's Build Something Stronger Together.
          </h2>
          <p className="text-slate-500 text-xs sm:text-base mt-2">
            Get instant quotations, technical guidance and delivery schedules for your project sites.
          </p>
        </div>

        {/* MOBILE QUICK ACTION BAR (Screens < lg) */}
        <div className="lg:hidden grid grid-cols-2 gap-2.5 mb-6">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#002653] hover:bg-[#062B59] text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FFA500]" />
            <span>Call Sales Desk</span>
          </a>
          <button
            type="button"
            onClick={openWhatsAppDirect}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Quote</span>
          </button>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Main Brand Card */}
            <div className="bg-[#002653] text-white rounded-2xl p-5 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[#FFA500] font-bold text-xs uppercase tracking-widest block mb-1">
                  Registered Partnership
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                  {companyInfo.name}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {companyInfo.tagline} Your verified supply partner for heavy scaffolding, Mivan formwork accessories, couplers, covers and equipment.
                </p>

                {/* Verified GST Badge */}
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/15 flex items-center space-x-3 mb-5 sm:mb-6">
                  <ShieldCheck className="w-5 h-5 text-[#FFA500] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-300 block">GSTIN Registration</span>
                    <span className="font-bold text-white tracking-wider">{companyInfo.gstin}</span>
                  </div>
                </div>

                {/* Contact List */}
                <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFA500]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] sm:text-[11px] font-semibold uppercase">Phone Support</div>
                      <a href={`tel:${companyInfo.phone}`} className="font-bold text-white hover:text-[#FFA500] transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFA500]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] sm:text-[11px] font-semibold uppercase">Email Enquiries</div>
                      <a href={`mailto:${companyInfo.email}`} className="font-bold text-white hover:text-[#FFA500] transition-colors truncate block">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFA500]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] sm:text-[11px] font-semibold uppercase">Principal Place of Business</div>
                      <div className="text-slate-200 font-medium leading-relaxed text-xs sm:text-sm">
                        {companyInfo.address.full}
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFA500]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] sm:text-[11px] font-semibold uppercase">Working Hours</div>
                      <div className="text-slate-200 font-medium">
                        {companyInfo.workingHours}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp Action */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/15">
                  <button
                    onClick={openWhatsAppDirect}
                    className="w-full flex items-center justify-center py-3 px-4 bg-[#FFA500] hover:bg-[#FF9100] text-[#002653] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Quick WhatsApp Enquiry</span>
                  </button>
                </div>

              </div>

              {/* Decorative background circle */}
              <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-slate-200">
              
              <h3 className="text-lg sm:text-xl font-bold text-[#062B59] mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6">
                Fill in your project requirement details and our engineering team will get back to you within 2 working hours.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 mb-1">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto mb-5 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry has been received. Our sales engineer will review your requirement and share the quotation.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={openWhatsAppDirect}
                      className="px-5 py-2.5 bg-[#FFA500] text-[#002653] font-bold text-xs rounded-lg hover:bg-[#FF9100] shadow-sm cursor-pointer"
                    >
                      Connect on WhatsApp Now
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', itemType: 'all', message: '' });
                      }}
                      className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#062B59] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                        errors.fullName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#062B59]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#062B59] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#062B59]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#062B59] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                          errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#062B59]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Select Product / Equipment */}
                  <div>
                    <label className="block text-xs font-bold text-[#062B59] uppercase tracking-wider mb-1.5">
                      Select Product / Equipment Requirement
                    </label>
                    <select
                      value={formData.itemType}
                      onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#062B59] text-slate-700"
                    >
                      <option value="all">General Construction Supplies Enquiry</option>
                      <optgroup label="Materials & Accessories">
                        {categoriesData.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Heavy Machinery & Equipment">
                        {equipmentList.map(e => (
                          <option key={e.id} value={`Equipment: ${e.name}`}>{e.name} ({e.badge})</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#062B59] uppercase tracking-wider mb-1.5">
                      Message / Requirement Details *
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention quantity, site location, required delivery date or technical queries..."
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                        errors.message ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#062B59]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Enquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#002653] hover:bg-[#062B59] active:bg-[#001736] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group"
                    >
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4 ml-2 text-[#FFA500] transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
