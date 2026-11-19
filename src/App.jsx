import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductsSection from './components/ProductsSection';
import EquipmentSection from './components/EquipmentSection';
import ProjectsSection from './components/ProjectsSection';
import CustomersSection from './components/CustomersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'equipment', 'projects', 'customers', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] font-sans text-slate-800">
      
      {/* Top Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onExploreProducts={() => scrollToSection('products')} 
          onContactUs={() => scrollToSection('contact')} 
        />

        {/* About Us Section */}
        <AboutUs 
          onExploreCatalogue={() => scrollToSection('products')} 
        />

        {/* Products Section */}
        <ProductsSection />

        {/* Equipment & Machinery Section */}
        <EquipmentSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Our Customers Section */}
        <CustomersSection />

        {/* Contact Us Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
