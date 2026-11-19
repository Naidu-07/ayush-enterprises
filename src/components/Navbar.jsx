
import React, { useState, useEffect } from "react";
import "./Navbar.css";

import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  FileText,
  CheckCircle,
  MessageCircle,
  Home,
  Package,
  Truck,
  Building2,
  Users,
  Phone,
  Sparkles,
} from "lucide-react";

import { companyInfo } from "../data/companyData";
import { categoriesData } from "../data/productsData";
import { equipmentList } from "../data/equipmentData";

export default function Navbar({
  activeSection = "home",
  onNavigate,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [aboutDropdownOpen, setAboutDropdownOpen] =
    useState(false);

  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState(false);

  const [equipmentDropdownOpen, setEquipmentDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
    setEquipmentDropdownOpen(false);
  };

  const handleLinkClick = (sectionId, e) => {
    if (e) e.preventDefault();

    closeMenus();

    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Ayush Enterprises, I would like to enquire about construction materials & equipment."
    );

    const number = String(
      companyInfo.whatsappNumber || ""
    ).replace(/\D/g, "");

    if (!number) return;

    window.open(
      `https://wa.me/${number}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLinkClass = (section) =>
    `navbar-nav-link ${
      activeSection === section ? "active" : ""
    }`;

  const mobileLinkClass = (section) =>
    `navbar-mobile-link ${
      activeSection === section ? "active" : ""
    }`;

  return (
    <header
      className={`navbar-header ${
        isScrolled ? "is-scrolled" : "is-top"
      }`}
    >
      <div className="navbar-main-container">
        <div className="navbar-inner">

          {/* BRAND LOGO */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleLinkClick("home", e)}
            aria-label="Ayush Enterprises Home"
          >
            <img
              src="/assets/images/logo.png"
              alt="Ayush Enterprises - Build Better. Build Stronger."
              className="navbar-brand-logo"
            />
          </a>

          {/* VERTICAL SEPARATOR */}
          <div className="navbar-brand-divider" />

          {/* DESKTOP NAVIGATION */}
          <nav
            className="navbar-desktop-nav"
            aria-label="Main navigation"
          >

            {/* HOME */}
            <a
              href="#home"
              className={navLinkClass("home")}
              onClick={(e) => handleLinkClick("home", e)}
            >
              Home
              {activeSection === "home" && (
                <span className="navbar-active-indicator" />
              )}
            </a>

            {/* ABOUT US */}
            <div
              className="navbar-dropdown-wrapper"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className={navLinkClass("about")}
                onClick={(e) => handleLinkClick("about", e)}
              >
                About Us
                <ChevronDown
                  size={17}
                  strokeWidth={2.5}
                  className={
                    aboutDropdownOpen ? "rotate-icon" : ""
                  }
                />

                {activeSection === "about" && (
                  <span className="navbar-active-indicator" />
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="navbar-dropdown-panel">
                  <div className="navbar-dropdown-menu">

                    <a
                      href="#about"
                      className="navbar-dropdown-item"
                      onClick={(e) =>
                        handleLinkClick("about", e)
                      }
                    >
                      <CheckCircle
                        size={18}
                        className="navbar-dropdown-icon"
                      />

                      <div>
                        <strong>Company Overview</strong>
                        <small>
                          Quality, Reliability & Trust
                        </small>
                      </div>
                    </a>

                    <a
                      href="#about"
                      className="navbar-dropdown-item"
                      onClick={(e) =>
                        handleLinkClick("about", e)
                      }
                    >
                      <ShieldCheck
                        size={18}
                        className="navbar-dropdown-icon"
                      />

                      <div>
                        <strong>Quality Commitment</strong>
                        <small>
                          Standardized testing & checks
                        </small>
                      </div>
                    </a>

                    <a
                      href="#contact"
                      className="navbar-dropdown-item"
                      onClick={(e) =>
                        handleLinkClick("contact", e)
                      }
                    >
                      <FileText
                        size={18}
                        className="navbar-dropdown-icon"
                      />

                      <div>
                        <strong>GST Registered Entity</strong>
                        <small>
                          GSTIN: {companyInfo.gstin}
                        </small>
                      </div>
                    </a>

                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div
              className="navbar-dropdown-wrapper"
              onMouseEnter={() =>
                setProductsDropdownOpen(true)
              }
              onMouseLeave={() =>
                setProductsDropdownOpen(false)
              }
            >
              <button
                type="button"
                className={navLinkClass("products")}
                onClick={(e) =>
                  handleLinkClick("products", e)
                }
              >
                Products
                <ChevronDown
                  size={17}
                  strokeWidth={2.5}
                  className={
                    productsDropdownOpen ? "rotate-icon" : ""
                  }
                />

                {activeSection === "products" && (
                  <span className="navbar-active-indicator" />
                )}
              </button>

              {productsDropdownOpen && (
                <div className="navbar-dropdown-panel navbar-products-panel">
                  <div className="navbar-dropdown-menu">

                    <div className="navbar-dropdown-heading">
                      Product Categories
                    </div>

                    {categoriesData.map((category) => (
                      <a
                        key={category.id}
                        href="#products"
                        className="navbar-category-link"
                        onClick={(e) =>
                          handleLinkClick("products", e)
                        }
                      >
                        {category.name}
                      </a>
                    ))}

                    <div className="navbar-dropdown-footer">
                      <a
                        href="#products"
                        onClick={(e) =>
                          handleLinkClick("products", e)
                        }
                      >
                        View Complete 120+ Catalogue
                        <ArrowRight size={15} />
                      </a>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* EQUIPMENT */}
            <div
              className="navbar-dropdown-wrapper"
              onMouseEnter={() =>
                setEquipmentDropdownOpen(true)
              }
              onMouseLeave={() =>
                setEquipmentDropdownOpen(false)
              }
            >
              <button
                type="button"
                className={navLinkClass("equipment")}
                onClick={(e) =>
                  handleLinkClick("equipment", e)
                }
              >
                Equipment
                <ChevronDown
                  size={17}
                  strokeWidth={2.5}
                  className={
                    equipmentDropdownOpen ? "rotate-icon" : ""
                  }
                />

                {activeSection === "equipment" && (
                  <span className="navbar-active-indicator" />
                )}
              </button>

              {equipmentDropdownOpen && (
                <div className="navbar-dropdown-panel navbar-equipment-panel">
                  <div className="navbar-dropdown-menu">

                    <div className="navbar-dropdown-heading">
                      Heavy Machinery
                    </div>

                    {equipmentList.slice(0, 6).map((item) => (
                      <a
                        key={item.id}
                        href="#equipment"
                        className="navbar-equipment-link"
                        onClick={(e) =>
                          handleLinkClick("equipment", e)
                        }
                      >
                        <span className="navbar-equipment-dot" />
                        {item.name}
                      </a>
                    ))}

                    <div className="navbar-dropdown-footer">
                      <a
                        href="#equipment"
                        onClick={(e) =>
                          handleLinkClick("equipment", e)
                        }
                      >
                        Interactive Site Dashboard
                        <ArrowRight size={15} />
                      </a>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* PROJECTS */}
            <a
              href="#projects"
              className={navLinkClass("projects")}
              onClick={(e) =>
                handleLinkClick("projects", e)
              }
            >
              Projects

              {activeSection === "projects" && (
                <span className="navbar-active-indicator" />
              )}
            </a>

            {/* CUSTOMERS */}
            <a
              href="#customers"
              className={navLinkClass("customers")}
              onClick={(e) =>
                handleLinkClick("customers", e)
              }
            >
              Customers

              {activeSection === "customers" && (
                <span className="navbar-active-indicator" />
              )}
            </a>

            {/* CONTACT US */}
            <a
              href="#contact"
              className={navLinkClass("contact")}
              onClick={(e) =>
                handleLinkClick("contact", e)
              }
            >
              Contact Us

              {activeSection === "contact" && (
                <span className="navbar-active-indicator" />
              )}
            </a>

          </nav>

          {/* WHATSAPP BUTTON */}
          <button
            type="button"
            className="navbar-whatsapp-btn"
            onClick={openWhatsApp}
          >
            <MessageCircle
              size={22}
              strokeWidth={2.2}
            />
            <span>WhatsApp Enquiry</span>
          </button>

          {/* MOBILE MENU TOGGLE */}
          <div className="navbar-mobile-controls">

            <a
              href={`tel:${companyInfo.phone}`}
              className="navbar-mobile-phone-btn"
              aria-label="Call Sales"
            >
              <Phone size={18} />
            </a>

            <button
              type="button"
              className="navbar-mobile-whatsapp"
              onClick={openWhatsApp}
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle size={20} />
            </button>

            <button
              type="button"
              className="navbar-menu-toggle"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* MODERN MOBILE SLIDE-OVER DRAWER */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay" onClick={closeMenus}>
          <nav
            className="navbar-mobile-drawer"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="navbar-drawer-header">
              <div className="navbar-drawer-brand">
                <img
                  src="/assets/images/logo.png"
                  alt="Ayush Enterprises"
                  className="navbar-drawer-logo"
                />
                <span className="navbar-drawer-tagline">
                  Complete Construction Solutions
                </span>
              </div>
              <button
                type="button"
                className="navbar-drawer-close"
                onClick={closeMenus}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links with Icons & Badges */}
            <div className="navbar-drawer-links">
              <a
                href="#home"
                className={mobileLinkClass("home")}
                onClick={(e) => handleLinkClick("home", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Home size={18} className="navbar-drawer-icon" />
                  <span>Home</span>
                </div>
              </a>

              <a
                href="#about"
                className={mobileLinkClass("about")}
                onClick={(e) => handleLinkClick("about", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <ShieldCheck size={18} className="navbar-drawer-icon" />
                  <span>About Us</span>
                </div>
              </a>

              <a
                href="#products"
                className={mobileLinkClass("products")}
                onClick={(e) => handleLinkClick("products", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Package size={18} className="navbar-drawer-icon" />
                  <span>Products Catalogue</span>
                </div>
                <span className="navbar-drawer-pill">120+ Items</span>
              </a>

              <a
                href="#equipment"
                className={mobileLinkClass("equipment")}
                onClick={(e) => handleLinkClick("equipment", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Truck size={18} className="navbar-drawer-icon" />
                  <span>Equipment & Machinery</span>
                </div>
                <span className="navbar-drawer-pill navbar-drawer-pill-orange">Heavy Fleet</span>
              </a>

              <a
                href="#projects"
                className={mobileLinkClass("projects")}
                onClick={(e) => handleLinkClick("projects", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Building2 size={18} className="navbar-drawer-icon" />
                  <span>Landmark Projects</span>
                </div>
              </a>

              <a
                href="#customers"
                className={mobileLinkClass("customers")}
                onClick={(e) => handleLinkClick("customers", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Users size={18} className="navbar-drawer-icon" />
                  <span>Our Customers</span>
                </div>
                <span className="navbar-drawer-pill">12+ Builders</span>
              </a>

              <a
                href="#contact"
                className={mobileLinkClass("contact")}
                onClick={(e) => handleLinkClick("contact", e)}
              >
                <div className="navbar-drawer-link-inner">
                  <Phone size={18} className="navbar-drawer-icon" />
                  <span>Contact Us</span>
                </div>
              </a>
            </div>

            {/* Quick Actions in Drawer */}
            <div className="navbar-drawer-footer">
              <button
                type="button"
                className="navbar-drawer-whatsapp-btn"
                onClick={() => {
                  closeMenus();
                  openWhatsApp();
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Quick Enquiry</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="navbar-drawer-phone-btn"
                onClick={closeMenus}
              >
                <Phone size={16} />
                <span>Call Sales: {companyInfo.phone}</span>
              </a>

              {/* Verified Trust Badge */}
              <div className="navbar-drawer-trust-box">
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={14} className="text-[#FFA500]" />
                  <span className="text-[11px] font-bold text-slate-700">
                    GSTIN: {companyInfo.gstin}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Balanagar, Hyderabad, Telangana
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* MOBILE BOTTOM APP NAVIGATION BAR (Screens < 768px) */}
      <nav 
        className="navbar-mobile-bottom-bar md:hidden"
        aria-label="Mobile quick navigation"
      >
        <button
          type="button"
          onClick={(e) => handleLinkClick("home", e)}
          className={`mobile-bottom-tab ${activeSection === "home" ? "active" : ""}`}
        >
          <Home size={18} />
          <span>Home</span>
          {activeSection === "home" && <span className="bottom-active-dot" />}
        </button>

        <button
          type="button"
          onClick={(e) => handleLinkClick("products", e)}
          className={`mobile-bottom-tab ${activeSection === "products" ? "active" : ""}`}
        >
          <div className="relative">
            <Package size={18} />
            <span className="bottom-badge-chip">120+</span>
          </div>
          <span>Products</span>
          {activeSection === "products" && <span className="bottom-active-dot" />}
        </button>

        <button
          type="button"
          onClick={(e) => handleLinkClick("equipment", e)}
          className={`mobile-bottom-tab ${activeSection === "equipment" ? "active" : ""}`}
        >
          <Truck size={18} />
          <span>Equipment</span>
          {activeSection === "equipment" && <span className="bottom-active-dot" />}
        </button>

        <button
          type="button"
          onClick={(e) => handleLinkClick("projects", e)}
          className={`mobile-bottom-tab ${activeSection === "projects" ? "active" : ""}`}
        >
          <Building2 size={18} />
          <span>Projects</span>
          {activeSection === "projects" && <span className="bottom-active-dot" />}
        </button>

        <button
          type="button"
          onClick={openWhatsApp}
          className="mobile-bottom-tab mobile-bottom-whatsapp-tab"
          aria-label="WhatsApp enquiry"
        >
          <div className="relative">
            <MessageCircle size={19} />
            <span className="bottom-online-dot" />
          </div>
          <span>WhatsApp</span>
        </button>
      </nav>
    </header>
  );
}
