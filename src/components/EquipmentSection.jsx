import React, { useState, useEffect } from 'react';

import './EquipmentSection.css';

import { 

  ArrowRight, 

  ArrowDown, 

  CheckCircle2, 

  X, 

  ChevronRight, 

  ChevronDown, 

  ChevronUp, 

  HardHat, 

  Phone, 

  FileText, 

  ShieldCheck, 

  Sparkles,

  ExternalLink

} from 'lucide-react';

import { companyInfo } from '../data/companyData';

// 7 Complete Equipment Specification Items matching reference screenshot exactly

export const equipmentSpecsTable = [

  {

    sno: 1,

    id: "tower-crane",

    name: "Tower Crane (Luffing / Jib Crane)",

    shortName: "Tower Crane",

    primaryFunction: "Material lifting at height",

    capacityReach: "50–70 m radius, 8–16 T capacity",

    thumb: "/assets/equipment/thumb_tower_crane.jpg",

    fullImage: "/assets/equipment/tower-crane.jpg",

    badge: "High-Rise Heavy Lifting Crane",

    description: "Designed for high-rise commercial and residential tower construction. Offers high hook height, wide working radius, precision hoisting speed control, and wind-safety cutoff.",

    features: [

      "50–70 m heavy radius lifting coverage",

      "Ergonomic cabin with 360° unobstructed site visibility",

      "Precision VFD variable-frequency hoisting control",

      "Anemometer automatic high-wind shutdown limiter"

    ],

    details: [

      { label: "Jib Radius / Reach", value: "50 – 70 m" },

      { label: "Max Lifting Capacity", value: "8 – 16 Tonnes" },

      { label: "Tip Load @ Max Radius", value: "1.8 – 3.2 Tonnes" },

      { label: "Freestanding Height", value: "Up to 60 m (Extendable 200m+)" }

    ]

  },

  {

    sno: 2,

    id: "concrete-pump",

    name: "Concrete Boom / Placer & Mobile Pump Truck",

    shortName: "Concrete Pump Truck",

    primaryFunction: "Pump concrete to upper floors",

    capacityReach: "40–60 m reach, 100–120 m³/hr",

    thumb: "/assets/equipment/thumb_concrete_pump.jpg",

    fullImage: "/assets/equipment/concrete-pump-truck.jpg",

    badge: "High-Pressure Concrete Placing Boom",

    description: "Multi-stage articulating hydraulic placing boom mounted on heavy truck chassis for rapid high-rise vertical and horizontal concrete delivery.",

    features: [

      "40–60 m 5-stage articulating placing boom",

      "100–120 m³/hr continuous high-volume pumping",

      "Dual hydraulic X-style outriggers for slope stability",

      "Wireless proportional remote boom controller"

    ],

    details: [

      { label: "Vertical Boom Reach", value: "40 – 60 m" },

      { label: "Pumping Output", value: "100 – 120 m³/hr" },

      { label: "Concrete Pressure", value: "Up to 85–110 Bar" },

      { label: "Pipeline Diameter", value: "125 mm" }

    ]

  },

  {

    sno: 3,

    id: "climbing-formwork",

    name: "Climbing Formwork System",

    shortName: "Climbing Formwork",

    primaryFunction: "Auto-climb core & shear walls",

    capacityReach: "3–5 m per lift",

    thumb: "/assets/equipment/thumb_climbing_formwork.jpg",

    fullImage: "/assets/equipment/climbing-formwork.jpg",

    badge: "Hydraulic Self-Climbing System (ACS)",

    features: [

      "Hydraulic cylinder synchronized auto-climbing mechanism",

      "Integrated multi-level fully enclosed working platforms",

      "Weather-shielded perimeter mesh enclosing active storeys",

      "Rapid floor cycle time of 3–5 days per lift"

    ],

    details: [

      { label: "Lift Height per Cycle", value: "3 – 5 m" },

      { label: "Climbing Speed", value: "Approx. 1 m in 3 mins" },

      { label: "Hydraulic System", value: "Multi-cylinder synchronized" },

      { label: "Fall Protection", value: "100% enclosed perimeter mesh" }

    ]

  },

  {

    sno: 4,

    id: "material-hoist",

    name: "Material Hoist (Rack and Pinion)",

    shortName: "Material Hoist",

    primaryFunction: "Transport people & materials",

    capacityReach: "1–2 T capacity, 50–200 m height",

    thumb: "/assets/equipment/thumb_material_hoist.jpg",

    fullImage: "/assets/equipment/material-hoist.jpg",

    badge: "Passenger & Cargo Rack-and-Pinion Hoist",

    description: "High-speed rack-and-pinion vertical builder's elevator for transporting personnel, tiles, blocks, cement and equipment to upper levels safely.",

    features: [

      "Centrifugal progressive fail-safe emergency arrestor brake",

      "Interlocked sliding cage doors and floor landing gates",

      "Modular hot-dip galvanized mast tower sections",

      "Overload sensor and emergency manual descent mechanism"

    ],

    details: [

      { label: "Payload Capacity", value: "1 – 2 Tonnes (12–20 Persons)" },

      { label: "Lifting Speed", value: "36 – 54 m/min" },

      { label: "Max Mast Height", value: "50 – 200 m" },

      { label: "Drive Unit", value: "Dual high-torque electric motors" }

    ]

  },

  {

    sno: 5,

    id: "telehandler",

    name: "Telescopic Handler (Telehandler)",

    shortName: "Telehandler",

    primaryFunction: "Lift & place materials",

    capacityReach: "3–5 T, 6–17 m reach",

    thumb: "/assets/equipment/thumb_telehandler_excavator.jpg",

    fullImage: "/assets/equipment/jcb-telehandler.jpg",

    badge: "Rough-Terrain Telescopic Lift & Reach",

    description: "All-terrain telescopic handler combining the lifting capability of a crane with the maneuverability of a rough-terrain forklift.",

    features: [

      "6–17 m 3-stage heavy duty telescopic box boom",

      "4-wheel drive rough-terrain capability with 3 steer modes",

      "Quick-attach pallet forks, crane jibs & bucket coupling",

      "Hydraulic chassis frame leveling on uneven soil"

    ],

    details: [

      { label: "Max Lifting Capacity", value: "3 – 5 Tonnes" },

      { label: "Max Boom Reach", value: "6 – 17 m" },

      { label: "Engine Power", value: "75 – 100 HP" },

      { label: "Steering Modes", value: "Front-wheel, 4-wheel & Crab" }

    ]

  },

  {

    sno: 6,

    id: "mini-excavator",

    name: "Mini-Excavator",

    shortName: "Mini-Excavator",

    primaryFunction: "Excavation & site works",

    capacityReach: "0.5 – 1.2 m³ bucket",

    thumb: "/assets/equipment/thumb_telehandler_excavator.jpg",

    fullImage: "/assets/equipment/mini-excavator.jpg",

    badge: "Compact & Heavy Earthmoving Power",

    description: "Versatile tracked earthmover for precision basement digging, footing trenches, foundation pits, pipe laying and site grading.",

    features: [

      "High bucket tear-out digging force for dense soils",

      "Rubber/steel tracks with zero tail swing options",

      "Fuel-efficient low emission turbo diesel engine",

      "Auxiliary hydraulic piping for breakers & augers"

    ],

    details: [

      { label: "Bucket Capacity", value: "0.5 – 1.2 m³" },

      { label: "Operating Weight", value: "3.5 – 14 Tonnes" },

      { label: "Digging Depth", value: "3.2 – 5.5 m" },

      { label: "Engine Power", value: "35 – 85 HP" }

    ]

  },

  {

    sno: 7,

    id: "flatbed-truck",

    name: "Flatbed Delivery Truck",

    shortName: "Flatbed Delivery Truck",

    primaryFunction: "Material transportation",

    capacityReach: "10–20 T payload",

    thumb: "/assets/equipment/flatbed_truck_crop.jpg",

    fullImage: "/assets/equipment/flatbed_truck_crop.jpg",

    badge: "Heavy Site Logistics & Shuttering Carrier",

    description: "Heavy duty logistics flatbed carrier for transporting shuttering panels, scaffolding pipes, couplers, rebar bundles and prefabricated steel directly to site.",

    features: [

      "Drop-side flatbed platform for 360° crane & forklift loading",

      "Heavy rated chassis suspension for rugged approach roads",

      "Integrated ratcheting tie-downs for bundle stabilization",

      "High payload capacity for rapid equipment turnaround"

    ],

    details: [

      { label: "Payload Capacity", value: "10 – 20 Tonnes" },

      { label: "Bed Length", value: "6.0 – 9.5 m" },

      { label: "Axle Layout", value: "Multi-axle heavy chassis" },

      { label: "Loading Access", value: "360° crane & forklift accessible" }

    ]

  }

];

// The 5 Equipment Cards in the right sidebar (and mobile screen 2)

export const rightSidebarCards = [

  {

    id: "tower-crane",

    name: "Tower Crane",

    image: "/assets/equipment/thumb_tower_crane.jpg",

    snoRef: 1

  },

  {

    id: "climbing-formwork",

    name: "Climbing Formwork",

    image: "/assets/equipment/thumb_climbing_formwork.jpg",

    snoRef: 3

  },

  {

    id: "material-hoist",

    name: "Material Hoist",

    image: "/assets/equipment/thumb_material_hoist.jpg",

    snoRef: 4

  },

  {

    id: "concrete-pump",

    name: "Concrete Pump Truck",

    image: "/assets/equipment/thumb_concrete_pump.jpg",

    snoRef: 2

  },

  {

    id: "telehandler-excavator",

    name: "Telehandler & Excavator",

    image: "/assets/equipment/thumb_telehandler_excavator.jpg",

    snoRef: 5

  }

];

export default function EquipmentSection() {

  const [equipmentSpecs, setEquipmentSpecs] = useState(equipmentSpecsTable);

  const [sidebarCards, setSidebarCards] = useState(rightSidebarCards);

  const [selectedItem, setSelectedItem] = useState(null);

  const [hoveredSno, setHoveredSno] = useState(null);

  const [expandedMobileSno, setExpandedMobileSno] = useState(null);

  const [showFullTableMobile, setShowFullTableMobile] = useState(false);

  useEffect(() => {

    if (selectedItem) {

      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {

        if (e.key === 'Escape') setSelectedItem(null);

      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {

        document.body.style.overflow = 'unset';

        window.removeEventListener('keydown', handleKeyDown);

      };

    }

  }, [selectedItem]);

  // WhatsApp Enquiry trigger

  const handleWhatsAppEnquiry = (item) => {

    const rawNumber = companyInfo.whatsappNumber ? companyInfo.whatsappNumber.replace(/**\D**/g, '') : '919876543210';

    const message = item 

      ? `Hello Ayush Enterprises, I would like to enquire about renting / deploying: *${item.name}* (Capacity: ${item.capacityReach}) for our project.`

      : `Hello Ayush Enterprises, I would like to enquire about high-rise construction equipment & machinery solutions.`;

    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`, '_blank');

  };

  const openItemBySno = (sno) => {

    const found = equipmentSpecs.find(item => item.sno === sno);

    if (found) setSelectedItem(found);

  };

  const scrollToMobileCards = () => {

    const el = document.getElementById('equipment-catalog-view');

    if (el) {

      el.scrollIntoView({ behavior: 'smooth' });

    }

  };

  return (

    <section 

      id="equipment" 

      className="relative py-14 sm:py-20 lg:py-24 bg-white text-slate-800 overflow-hidden scroll-mt-16 border-b border-slate-200/80"

    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* SECTION HEADER */}

        <div className="text-center mb-10 sm:mb-14">

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-3">

            <span className="w-8 sm:w-16 h-px bg-slate-300"></span>

            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#002653] uppercase">

              Our Equipment & Machinery

            </span>

            <span className="w-8 sm:w-16 h-px bg-slate-300"></span>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002653] tracking-tight leading-tight">

            Build with the <span className="text-[#FFA500]">Right Equipment</span>

          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-500 max-w-2xl sm:max-w-3xl mx-auto font-normal leading-relaxed">

            Advanced machinery and smart construction solutions for greater strength, safety and efficiency.

          </p>

        </div>

        {/* DESKTOP LAYOUT (LARGE SCREENS: lg & up) */}

        <div className="hidden lg:block space-y-6">

          {/* ROW 1: Construction Site Canvas + OUR EQUIPMENT Sidebar */}

          <div className="grid grid-cols-12 gap-5 items-stretch">

            {/* Left 9 Cols: Construction Site Canvas */}

            <div className="col-span-9 bg-slate-50 rounded-2xl border border-slate-200/90 p-2 sm:p-2.5 shadow-sm relative overflow-hidden flex flex-col justify-center">

              <div className="equipment-canvas-container select-none relative">

                <img 

                  src="/assets/equipment/site_hero_desktop.png" 

                  alt="Ayush Enterprises Construction Site Equipment & Machinery"

                  className="equipment-site-image rounded-xl"

                />

              </div>

            </div>

            {/* Right 3 Cols: OUR EQUIPMENT Container with 5 Cards */}

            <div className="col-span-3 bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col justify-between">

              <div className="mb-2">

                <h3 className="text-[#002653] font-extrabold text-sm uppercase tracking-wider">

                  Our Equipment

                </h3>

                <div className="w-10 h-0.5 bg-[#FFA500] mt-1.5 rounded-full"></div>

              </div>

              {/* 5 Equipment Cards */}

              <div className="flex-1 flex flex-col justify-between space-y-2 py-1">

                {sidebarCards.map((card) => {

                  const isHovered = hoveredSno === card.snoRef;

                  return (

                    <div

                      key={card.id}

                      onClick={() => openItemBySno(card.snoRef)}

                      onMouseEnter={() => setHoveredSno(card.snoRef)}

                      onMouseLeave={() => setHoveredSno(null)}

                      className={`group relative flex items-center justify-between p-2 rounded-xl border transition-all duration-200 cursor-pointer ${

                        isHovered 

                          ? 'bg-slate-50 border-[#FFA500] shadow-sm translate-x-1' 

                          : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'

                      }`}

                    >

                      <div className="flex items-center space-x-2.5 min-w-0 pr-2">

                        <div className="w-14 h-11 rounded-lg overflow-hidden bg-white border border-slate-200 flex-shrink-0">

                          <img 

                            src={card.image} 

                            alt={card.name} 

                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                          />

                        </div>

                        <span className="text-xs font-bold text-[#002653] leading-tight truncate group-hover:text-[#FFA500] transition-colors">

                          {card.name}

                        </span>

                      </div>

                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${

                        isHovered 

                          ? 'border-[#FFA500] bg-[#FFA500] text-[#002653]' 

                          : 'border-slate-300 text-slate-400 group-hover:border-[#FFA500] group-hover:text-[#FFA500]'

                      }`}>

                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

          {/* ROW 2: Specifications Table (Left 7 Cols) + Key Features Box (Right 5 Cols) */}

          <div className="grid grid-cols-12 gap-5 items-stretch">

            {/* Left 7 Cols: Complete Equipment Specification Summary Table */}

            <div className="col-span-7 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm flex flex-col justify-between">

              <div className="flex items-center space-x-2 mb-3">

                <span className="text-[#FFA500] font-black text-lg select-none">/</span>

                <h3 className="text-[#002653] font-extrabold text-sm tracking-wide">

                  Equipment Specification Summary

                </h3>

              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <table className="w-full text-left text-xs border-collapse">

                  <thead>

                    <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200">

                      <th className="py-2.5 px-3 w-12 text-center text-[#002653]">S.No</th>

                      <th className="py-2.5 px-3 border-l border-slate-200">Equipment Name</th>

                      <th className="py-2.5 px-3 border-l border-slate-200">Primary Function</th>

                      <th className="py-2.5 px-3 border-l border-slate-200">Typical Capacity / Reach</th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {equipmentSpecs.map((row) => {

                      const isHovered = hoveredSno === row.sno;

                      return (

                        <tr 

                          key={row.sno}

                          onClick={() => setSelectedItem(row)}

                          onMouseEnter={() => setHoveredSno(row.sno)}

                          onMouseLeave={() => setHoveredSno(null)}

                          className={`cursor-pointer transition-colors duration-150 ${

                            isHovered 

                              ? 'bg-amber-50/70 text-[#002653]' 

                              : 'hover:bg-slate-50 text-slate-600'

                          }`}

                        >

                          <td className="py-2.5 px-3 text-center font-bold text-[#FFA500]">

                            {row.sno}

                          </td>

                          <td className="py-2.5 px-3 border-l border-slate-100 font-bold text-[#002653] truncate max-w-[170px]">

                            {row.name}

                          </td>

                          <td className="py-2.5 px-3 border-l border-slate-100 text-slate-500 text-[11px]">

                            {row.primaryFunction}

                          </td>

                          <td className="py-2.5 px-3 border-l border-slate-100 text-slate-500 text-[11px]">

                            {row.capacityReach}

                          </td>

                        </tr>

                      );

                    })}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Right 5 Cols: Key Features & Building the Future with Excellence Card */}

            <div className="col-span-5 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">

              <div className="grid grid-cols-12 gap-4 items-center">

                {/* Left 6 Cols: Key Features */}

                <div className="col-span-6 space-y-3">

                  <div className="flex items-center space-x-2">

                    <div className="w-6 h-6 rounded-full bg-[#FFA500] text-[#002653] flex items-center justify-center font-black text-xs shadow-xs">

                      <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />

                    </div>

                    <h4 className="text-[#002653] font-extrabold text-sm tracking-wide">

                      Key Features

                    </h4>

                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">

                    <li className="flex items-start space-x-2">

                      <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                      <span className="leading-tight font-medium">Optimized Equipment for High-Rise Construction</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                      <span className="leading-tight font-medium">Enhanced Productivity & Safety</span>

                    </li>

                    <li className="flex items-start space-x-2">

                      <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                      <span className="leading-tight font-medium">Efficient Vertical & Horizontal Material Flow</span>

                    </li>

                  </ul>

                </div>

                {/* Right 6 Cols: Building the Future with Excellence + Button */}

                <div className="col-span-6 flex flex-col items-center justify-center text-center pl-2 border-l border-slate-200">

                  <div className="mb-2 text-[#FFA500]">

                    <svg viewBox="0 0 64 64" className="w-11 h-11 mx-auto text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

                      <path d="M12 34 C12 20 20 12 32 12 C44 12 52 20 52 34" stroke="#FFA500" strokeWidth="3" fill="none" />

                      <path d="M32 12 L32 34" stroke="#FFA500" strokeWidth="2.5" />

                      <path d="M22 16 C22 24 24 34 24 34" stroke="#FFA500" strokeWidth="2" />

                      <path d="M42 16 C42 24 40 34 40 34" stroke="#FFA500" strokeWidth="2" />

                      <path d="M8 34 L56 34 C58 34 58 38 54 39 L10 39 C6 38 6 34 8 34 Z" fill="#FFA500" fillOpacity="0.2" stroke="#FFA500" strokeWidth="2.5" />

                      <path d="M14 46 C24 52 40 52 50 46" stroke="#FFA500" strokeWidth="3" />

                    </svg>

                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-[#002653] leading-tight">

                    Building the Future<br />

                    <span className="text-[#FFA500] font-black">with Excellence</span>

                  </h4>

                  <div className="relative w-36 h-2 my-1">

                    <svg viewBox="0 0 160 16" className="w-full h-full">

                      <path d="M 8 13 Q 80 2 152 13" fill="none" stroke="#FFA500" strokeWidth="2.5" strokeLinecap="round" />

                    </svg>

                  </div>

                  <button

                    onClick={() => handleWhatsAppEnquiry(null)}

                    className="mt-2.5 px-5 py-2 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-xs rounded-full shadow-xs flex items-center space-x-1.5 transition-all transform hover:scale-105 cursor-pointer"

                  >

                    <span>Our Equipment</span>

                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MOBILE VIEW */}

        <div className="lg:hidden space-y-5">

          {/* SCREEN 1: Mobile Header & Quick Tab Strip */}

          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">

            <div className="flex items-center justify-between mb-3">

              <div>

                <span className="text-[10px] font-bold text-[#FFA500] uppercase tracking-wider block">

                  Equipment Fleet

                </span>

                <h3 className="text-base font-extrabold text-[#002653]">

                  Heavy Machinery & Cranes

                </h3>

              </div>

              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#002653]/5 text-[#002653] border border-[#002653]/10">

                {equipmentSpecs.length} Machines

              </span>

            </div>

            {/* Modern Mobile Equipment Cards Feed */}

            <div className="space-y-3">

              {equipmentSpecs.map((item) => (

                <div 

                  key={item.id}

                  className="bg-slate-50/70 rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:border-[#FFA500]/50 transition-all"

                >

                  <div className="flex items-center p-2.5 sm:p-3 gap-2.5 sm:gap-3">

                    <div 

                      onClick={() => setSelectedItem(item)}

                      className="w-20 sm:w-24 h-18 sm:h-20 rounded-lg overflow-hidden bg-white border border-slate-200 flex-shrink-0 cursor-pointer relative"

                    >

                      <img 

                        src={item.thumb || item.fullImage} 

                        alt={item.name} 

                        className="w-full h-full object-cover"

                      />

                      <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded-md bg-[#002653] text-[#FFA500] font-black text-[9px]">

                        #{item.sno}

                      </span>

                    </div>

                    <div className="min-w-0 flex-1">

                      <span className="text-[9px] font-bold text-[#FFA500] uppercase tracking-wider block truncate">

                        {item.badge}

                      </span>

                      <h4 

                        onClick={() => setSelectedItem(item)}

                        className="text-xs sm:text-sm font-bold text-[#002653] leading-snug cursor-pointer line-clamp-1 hover:text-[#FFA500]"

                      >

                        {item.name}

                      </h4>

                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">

                        {item.primaryFunction}

                      </p>

                      <div className="mt-1 text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded-md inline-block max-w-full truncate border border-slate-200/60">

                        Cap: {item.capacityReach}

                      </div>

                    </div>

                  </div>

                  {/* Bottom Action Bar */}

                  <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3 pt-0 grid grid-cols-2 gap-2">

                    <button

                      type="button"

                      onClick={() => setSelectedItem(item)}

                      className="w-full py-1.5 px-2 bg-white hover:bg-slate-100 text-[#002653] border border-slate-200 font-semibold text-[11px] rounded-lg transition-colors cursor-pointer text-center"

                    >

                      View Specs

                    </button>

                    
<a
  href="tel:+919848834377"
  className="w-full py-1.5 px-2 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-[11px] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
>
  <Phone className="w-3 h-3" />
  <span>Hire / Rent</span>
</a>


                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* SCREEN 2: Site Blueprint View */}

          <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-sm overflow-hidden">

            <div className="flex items-center justify-between mb-2">

              <span className="text-xs font-bold text-[#002653] uppercase tracking-wider">

                Interactive Site Deployment

              </span>

              <span className="text-[10px] text-slate-400">High-Rise Model</span>

            </div>

            <div className="equipment-canvas-container select-none">

              <img 

                src="/assets/equipment/site_hero_desktop.png" 

                alt="Construction Site High-Rise Equipment"

                className="equipment-site-image rounded-xl"

              />

            </div>

          </div>

          {/* SCREEN 3: Equipment Specification Summary & Key Features */}

          <div className="space-y-5">

            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">

              <div className="flex items-center space-x-2 mb-3">

                <span className="text-[#FFA500] font-black text-lg select-none">/</span>

                <h3 className="text-[#002653] font-extrabold text-sm sm:text-base tracking-wide">

                  Equipment Specification Summary

                </h3>

              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <table className="w-full text-left text-xs border-collapse">

                  <thead>

                    <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200">

                      <th className="py-2.5 px-3 w-12 text-center text-[#002653]">S.No</th>

                      <th className="py-2.5 px-3">Equipment Name</th>

                      <th className="py-2.5 px-3 text-right">Details</th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {equipmentSpecs.map((row) => {

                      const isExpanded = expandedMobileSno === row.sno;

                      return (

                        <React.Fragment key={row.sno}>

                          <tr 

                            onClick={() => setExpandedMobileSno(isExpanded ? null : row.sno)}

                            className="active:bg-slate-50 cursor-pointer text-slate-700"

                          >

                            <td className="py-3 px-3 text-center font-bold text-[#FFA500]">

                              {row.sno}

                            </td>

                            <td className="py-3 px-3 font-semibold text-[#002653] leading-snug">

                              {row.name}

                            </td>

                            <td className="py-3 px-3 text-right text-[#FFA500]">

                              <button 

                                className="p-1 rounded-md hover:bg-slate-100 text-[#FFA500]"

                                aria-label="Toggle details"

                              >

                                {isExpanded ? (

                                  <ChevronUp className="w-4 h-4 inline" />

                                ) : (

                                  <ChevronDown className="w-4 h-4 inline" />

                                )}

                              </button>

                            </td>

                          </tr>

                          {isExpanded && (

                            <tr className="bg-slate-50/80 text-xs">

                              <td colSpan={3} className="p-3 border-t border-slate-200">

                                <div className="space-y-2">

                                  <div className="flex justify-between items-start">

                                    <div>

                                      <span className="text-[10px] uppercase font-bold text-[#FFA500]">Primary Function</span>

                                      <p className="text-slate-700 font-medium">{row.primaryFunction}</p>

                                    </div>

                                    <button

                                      onClick={(e) => {

                                        e.stopPropagation();

                                        setSelectedItem(row);

                                      }}

                                      className="px-2.5 py-1 bg-[#FFA500] text-[#002653] font-bold text-[10px] rounded-md shadow-xs flex items-center space-x-1"

                                    >

                                      <span>Full Specs</span>

                                      <ArrowRight className="w-3 h-3" />

                                    </button>

                                  </div>

                                  <div>

                                    <span className="text-[10px] uppercase font-bold text-[#FFA500]">Capacity / Reach</span>

                                    <p className="text-slate-700 font-medium">{row.capacityReach}</p>

                                  </div>

                                </div>

                              </td>

                            </tr>

                          )}

                        </React.Fragment>

                      );

                    })}

                  </tbody>

                </table>

              </div>

              <div className="mt-3 text-center">

                <button

                  onClick={() => setShowFullTableMobile(!showFullTableMobile)}

                  className="text-xs text-[#FFA500] hover:underline font-semibold inline-flex items-center space-x-1 cursor-pointer"

                >

                  <span>{showFullTableMobile ? "Hide Full Specs Table" : "Swipeable Complete Table View"}</span>

                  <ExternalLink className="w-3 h-3" />

                </button>

              </div>

              {showFullTableMobile && (

                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 text-xs">

                  <table className="min-w-[550px] w-full text-left">

                    <thead>

                      <tr className="border-b border-slate-200 text-slate-500 text-[10px]">

                        <th className="py-1 px-2 text-[#002653]">S.No</th>

                        <th className="py-1 px-2">Equipment Name</th>

                        <th className="py-1 px-2">Primary Function</th>

                        <th className="py-1 px-2">Typical Capacity / Reach</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-100 text-slate-700">

                      {equipmentSpecs.map((r) => (

                        <tr key={r.sno} onClick={() => setSelectedItem(r)} className="cursor-pointer active:bg-slate-50">

                          <td className="py-1.5 px-2 font-bold text-[#FFA500]">{r.sno}</td>

                          <td className="py-1.5 px-2 font-semibold text-[#002653]">{r.name}</td>

                          <td className="py-1.5 px-2 text-[11px] text-slate-600">{r.primaryFunction}</td>

                          <td className="py-1.5 px-2 text-[11px] text-slate-600">{r.capacityReach}</td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              )}

            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm space-y-4">

              <div className="flex items-center space-x-2">

                <div className="w-6 h-6 rounded-full bg-[#FFA500] text-[#002653] flex items-center justify-center font-black text-xs shadow-xs">

                  <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />

                </div>

                <h4 className="text-[#002653] font-extrabold text-sm sm:text-base tracking-wide">

                  Key Features

                </h4>

              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">

                <li className="flex items-start space-x-2.5">

                  <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                  <span className="leading-snug font-medium">Optimized Equipment for High-Rise Construction</span>

                </li>

                <li className="flex items-start space-x-2.5">

                  <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                  <span className="leading-snug font-medium">Enhanced Productivity & Safety</span>

                </li>

                <li className="flex items-start space-x-2.5">

                  <CheckCircle2 className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-0.5 fill-[#FFA500]/20" />

                  <span className="leading-snug font-medium">Efficient Vertical & Horizontal Material Flow</span>

                </li>

              </ul>

              <div className="pt-2">

                <button

                  onClick={() => handleWhatsAppEnquiry(null)}

                  className="w-full py-3 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-sm rounded-full shadow-md flex items-center justify-center space-x-2 transition-transform transform active:scale-95 cursor-pointer"

                >

                  <span>Explore Our Equipment</span>

                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* EQUIPMENT DETAILS MODAL */}

      {selectedItem && (

        <div 

          className="fixed inset-0 z-[2000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 overflow-y-auto"

          onClick={() => setSelectedItem(null)}

        >

          <div 

            className="bg-white text-slate-800 rounded-2xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 my-auto animate-in zoom-in-95 duration-200"

            onClick={(e) => e.stopPropagation()}

          >

            {/* Modal Header */}

            <div className="bg-slate-50 p-4 sm:p-5 flex items-center justify-between border-b border-slate-200">

              <div className="flex items-center space-x-3">

                <div className="w-10 h-10 rounded-xl bg-[#FFA500] text-[#002653] flex items-center justify-center font-bold text-base flex-shrink-0 shadow-xs">

                  {selectedItem.sno}

                </div>

                <div>

                  <h3 className="font-extrabold text-base sm:text-lg text-[#002653] leading-tight">

                    {selectedItem.name}

                  </h3>

                  <p className="text-xs text-[#FFA500] font-bold mt-0.5">

                    {selectedItem.badge}

                  </p>

                </div>

              </div>

              <button

                onClick={() => setSelectedItem(null)}

                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"

                aria-label="Close dialog"

              >

                <X className="w-4 h-4" />

              </button>

            </div>

            {/* Modal Body */}

            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">

                  <span className="text-[10px] font-bold text-[#FFA500] uppercase tracking-wider block">

                    Primary Function

                  </span>

                  <p className="text-xs sm:text-sm font-bold text-[#002653] mt-1">

                    {selectedItem.primaryFunction}

                  </p>

                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">

                  <span className="text-[10px] font-bold text-[#FFA500] uppercase tracking-wider block">

                    Typical Capacity / Reach

                  </span>

                  <p className="text-xs sm:text-sm font-bold text-[#002653] mt-1">

                    {selectedItem.capacityReach}

                  </p>

                </div>

              </div>

              {selectedItem.features && (

                <div>

                  <h4 className="text-xs font-bold text-[#002653] uppercase tracking-wider mb-2 flex items-center space-x-1.5">

                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFA500]" />

                    <span>Key Engineering Features</span>

                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">

                    {selectedItem.features.map((feat, idx) => (

                      <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">

                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA500] flex-shrink-0 mt-0.5" />

                        <span className="leading-snug">{feat}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              )}

              {selectedItem.details && (

                <div>

                  <h4 className="text-xs font-bold text-[#002653] uppercase tracking-wider mb-2 flex items-center space-x-1.5">

                    <FileText className="w-3.5 h-3.5 text-[#FFA500]" />

                    <span>Technical Parameters</span>

                  </h4>

                  <div className="grid grid-cols-2 gap-2 text-xs">

                    {selectedItem.details.map((detail, idx) => (

                      <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">

                        <span className="text-[10px] text-slate-400 font-medium block">{detail.label}</span>

                        <span className="font-bold text-[#002653] text-xs block mt-0.5">{detail.value}</span>

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

            {/* Modal Footer */}

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">

              <span className="text-[11px] text-slate-500 text-center sm:text-left">

                Equipment available for hire, project deployment & supply.

              </span>

              <div className="flex items-center space-x-2 w-full sm:w-auto">

                <button

                  onClick={() => setSelectedItem(null)}

                  className="w-1/2 sm:w-auto px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer"

                >

                  Close

                </button>

                <button

                  onClick={() => handleWhatsAppEnquiry(selectedItem)}

                  className="w-1/2 sm:w-auto px-5 py-2 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] text-xs font-bold rounded-xl shadow-xs flex items-center justify-center space-x-1.5 transition-transform transform active:scale-95 cursor-pointer"

                >

                  <Phone className="w-3.5 h-3.5" />

                  <span>Enquire Now</span>

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}
