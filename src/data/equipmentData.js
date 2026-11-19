export const equipmentList = [
  {
    id: "excavator",
    name: "Excavator",
    category: "Earthmoving Machinery",
    badge: "Heavy Duty Earthmoving Machine",
    tagline: "For digging and earthmoving with high precision.",
    image: "/assets/equipment/excavator.jpg",
    hotspot: { x: 19, y: 63 },
    glowRegion: { x: 10, y: 52, width: 20, height: 16 },
    features: [
      "High digging force & heavy bucket tear-out",
      "Fuel efficient turbo-diesel engine",
      "Versatile applications with quick hydraulic couplers",
      "Operator friendly air-conditioned ergonomic controls"
    ],
    specifications: [
      { label: "Operating Weight", value: "21 – 24 Tonnes" },
      { label: "Bucket Capacity", value: "1.0 – 1.4 m³" },
      { label: "Engine Power", value: "110 – 150 HP" },
      { label: "Max Digging Depth", value: "6.5 – 7.2 m" },
      { label: "Hydraulic Flow", value: "2 x 220 L/min" }
    ],
    applications: [
      "Deep basement excavation & trenching",
      "Site clearing & heavy earth leveling",
      "Foundation footing preparation",
      "Demolition & rock breaking"
    ]
  },
  {
    id: "tower-crane",
    name: "Tower Crane",
    category: "Lifting Machinery",
    badge: "Luffing / Top-Slewing Jib Crane",
    tagline: "Material lifting at height with exceptional safety.",
    image: "/assets/equipment/tower-crane.jpg",
    hotspot: { x: 51, y: 26 },
    glowRegion: { x: 38, y: 15, width: 30, height: 20 },
    features: [
      "Precision frequency-inverter hoisting control",
      "Ergonomic cabin with 360° unobstructed site visibility",
      "Counter jib ballast & fail-safe hook block limiters",
      "Wind anemometer and automated load moment indicator"
    ],
    specifications: [
      { label: "Jib Reach / Radius", value: "50 – 70 m" },
      { label: "Max Lifting Capacity", value: "8 – 16 Tonnes" },
      { label: "Tip Load at Max Radius", value: "1.8 – 3.2 Tonnes" },
      { label: "Freestanding Height", value: "Up to 60 m (Extendable to 200m+)" },
      { label: "Hoisting Speed", value: "Up to 100 m/min" }
    ],
    applications: [
      "Vertical transport of rebar & steel beams",
      "Formwork shuttering panel lifting & positioning",
      "Concrete bucket delivery to upper floors",
      "Precast element placement"
    ]
  },
  {
    id: "concrete-pump-truck",
    name: "Concrete Pump Truck",
    category: "Concrete Machinery",
    badge: "Concrete Boom / Placer & Mobile Pump Truck",
    tagline: "Pump concrete to upper floors with speed & reach.",
    image: "/assets/equipment/concrete-pump-truck.jpg",
    hotspot: { x: 63, y: 55 },
    glowRegion: { x: 52, y: 40, width: 22, height: 25 },
    features: [
      "Multi-section articulation boom for tight residential angles",
      "High output twin-cylinder hydraulic pumping system",
      "Proportional wireless remote boom controller",
      "Automated X-style outrigger stability monitoring"
    ],
    specifications: [
      { label: "Vertical Boom Reach", value: "40 – 60 m" },
      { label: "Pumping Output", value: "100 – 120 m³/hr" },
      { label: "Pumping Pressure", value: "85 – 110 Bar" },
      { label: "Pipeline Diameter", value: "125 mm" },
      { label: "Chassis Axles", value: "4-Axle / 8x4 Heavy Truck" }
    ],
    applications: [
      "High-rise monolithic slab & beam concreting",
      "Mass concrete foundation raft pours",
      "Retaining walls & bridge deck placement",
      "Fast cycling commercial projects"
    ]
  },
  {
    id: "mixer-truck",
    name: "Mixer Truck",
    category: "Concrete Transport",
    badge: "Heavy Duty Transit Mixer Truck",
    tagline: "Reliable continuous concrete mixing & on-site transit.",
    image: "/assets/equipment/mixer-truck.jpg",
    hotspot: { x: 71, y: 66 },
    glowRegion: { x: 67, y: 56, width: 14, height: 16 },
    features: [
      "High-tensile wear-resistant spiral blade geometry",
      "Dependable hydraulic drum motor drive & reducer",
      "Pressurized on-board water washdown system",
      "Heavy duty all-terrain commercial truck chassis"
    ],
    specifications: [
      { label: "Mixing Capacity", value: "6 – 10 m³" },
      { label: "Drum Rotation Speed", value: "0 – 16 rpm" },
      { label: "Water Tank Capacity", value: "450 – 600 Litres" },
      { label: "Engine Power", value: "280 – 380 HP" },
      { label: "Discharge Speed", value: "> 1.5 m³/min" }
    ],
    applications: [
      "Transit of ready-mix concrete from batching plant",
      "Uniform slump maintenance during transit",
      "Direct discharge to pump hopper or crane bucket"
    ]
  },
  {
    id: "telehandler",
    name: "Telehandler",
    category: "Material Handling",
    badge: "Telescopic Handler (Lift & Place)",
    tagline: "Lift & place materials with long horizontal reach.",
    image: "/assets/equipment/jcb-telehandler.jpg",
    hotspot: { x: 9, y: 66 },
    glowRegion: { x: 3, y: 56, width: 15, height: 16 },
    features: [
      "3-stage heavy duty telescopic box boom",
      "4-wheel drive and selectable 3-mode steering (crab, 4WS, 2WS)",
      "Hydraulic leveling frame for uneven construction terrain",
      "Quick-attach tool carriage for pallet forks, bucket and jibs"
    ],
    specifications: [
      { label: "Max Lifting Capacity", value: "3 – 5 Tonnes" },
      { label: "Max Reach / Height", value: "6 – 17 m" },
      { label: "Capacity at Max Reach", value: "1.2 – 1.8 Tonnes" },
      { label: "Engine Power", value: "75 – 100 HP" },
      { label: "Travel Speed", value: "Up to 32 km/h" }
    ],
    applications: [
      "Unloading palletized blocks, bricks and tiles from delivery trucks",
      "Direct lifting into second/third floor window openings",
      "Placement of scaffolding bundles on uneven ground"
    ]
  },
  {
    id: "material-hoist",
    name: "Material Hoist",
    category: "Vertical Transport",
    badge: "Passenger & Material Rack-and-Pinion Hoist",
    tagline: "Safe and efficient vertical transport for people and loads.",
    image: "/assets/equipment/material-hoist.jpg",
    hotspot: { x: 32, y: 47 },
    glowRegion: { x: 30, y: 35, width: 6, height: 28 },
    features: [
      "Centrifugal progressive fail-safe emergency brake",
      "Interlocked sliding cage doors and floor landing gates",
      "Robust hot-dip galvanized mast tower sections",
      "Overload sensor and emergency descent system"
    ],
    specifications: [
      { label: "Payload Capacity", value: "1 – 2 Tonnes (12–20 Persons)" },
      { label: "Lifting Speed", value: "36 – 54 m/min" },
      { label: "Max Mast Height", value: "50 – 200 m" },
      { label: "Motor Power", value: "2 x 11 kW" },
      { label: "Cage Dimensions", value: "3.2 x 1.5 x 2.2 m" }
    ],
    applications: [
      "Fast transport of workforce to upper building storeys",
      "Movement of ceramic tiles, cement bags and internal fixtures",
      "Reduced worker fatigue and boosted daily productivity"
    ]
  },
  {
    id: "forklift",
    name: "Forklift",
    category: "Site Material Handling",
    badge: "Rough Terrain Yard Forklift",
    tagline: "Ground level pallet movement & equipment staging.",
    image: "/assets/equipment/mini-excavator.jpg",
    hotspot: { x: 43, y: 56 },
    glowRegion: { x: 40, y: 50, width: 8, height: 12 },
    features: [
      "High ground clearance pneumatic deep-tread tires",
      "Clear-view duplex mast with hydraulic side-shifter",
      "Reinforced overhead guard canopy with LED worklights",
      "Tight turning radius for congested site yards"
    ],
    specifications: [
      { label: "Rated Capacity", value: "3.0 – 5.0 Tonnes" },
      { label: "Standard Lift Height", value: "3.5 – 5.0 m" },
      { label: "Fork Length", value: "1200 mm standard" },
      { label: "Turning Radius", value: "2.8 m" }
    ],
    applications: [
      "Storage yard loading & unloading",
      "Transport of coupler drums and rebar accessories",
      "Staging materials near tower cranes and hoists"
    ]
  }
];

export const equipmentSummary = [
  { id: "tower-crane", title: "Tower Cranes", subtitle: "For High-Rise Projects", icon: "Construction" },
  { id: "excavator", title: "Excavators", subtitle: "For Precise Earthwork", icon: "Tractor" },
  { id: "concrete-pump-truck", title: "Concrete Pumps", subtitle: "For Strong Foundations", icon: "Truck" },
  { id: "telehandler", title: "Telehandlers", subtitle: "For Multi-Tasking", icon: "Forklift" },
  { id: "mixer-truck", title: "Mixer Trucks", subtitle: "For On-Site Concrete", icon: "Container" }
];
