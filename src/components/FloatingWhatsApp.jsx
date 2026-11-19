import React, { useState } from 'react';
import './FloatingWhatsApp.css';
import { X, Send, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (msg) => {
    const finalMsg = encodeURIComponent(msg || "Hello Ayush Enterprises, I have a quick requirement inquiry.");
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${finalMsg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] sm:w-80 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#002653] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Ayush Enterprises</h4>
                <div className="flex items-center text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  Online | Sales & Quotations
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-xs text-slate-600 space-y-3">
            <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200">
              👋 Hi there! Need quick pricing, stock availability, or equipment hire details? Message us directly on WhatsApp.
            </div>

            {/* Quick buttons */}
            <div className="space-y-1.5">
              <button
                onClick={() => sendWhatsApp("Hello, please share your product catalogue with latest pricing.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700 transition-colors"
              >
                📄 Request Latest Price List
              </button>
              <button
                onClick={() => sendWhatsApp("Hello, I need an immediate quotation for shuttering and scaffolding accessories.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700 transition-colors"
              >
                🏗️ Scaffolding & Formwork Quote
              </button>
              <button
                onClick={() => sendWhatsApp("Hello, I would like to inquire about equipment and machinery rental/deployment.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700 transition-colors"
              >
                🚜 Heavy Machinery & Crane Inquiry
              </button>
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center space-x-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp(customMsg)}
              />
              <button
                onClick={() => sendWhatsApp(customMsg)}
                className="p-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] text-white shadow-2xl flex items-center justify-center transform hover:scale-108 transition-all duration-300 focus:outline-none cursor-pointer group relative"
        aria-label="Open WhatsApp Support"
      >
        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFA500] border-2 border-white rounded-full"></span>
      </button>

    </div>
  );
}
