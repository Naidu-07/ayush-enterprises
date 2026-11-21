export const categoriesData = [
  {
    id: "mivan-formwork",
    name: "Mivan Formwork Accessories",
    icon: "Box",
    subcategories: [
      "Pin and Wedge Systems",
      "Aluminum Components",
      "Wall Tie System",
      "Tools and Fasteners",
      "Alignment and Clamping",
      "Shuttering Oil & Release Agents"
    ]
  },
  {
    id: "plywood-shuttering",
    name: "Plywood Shuttering Accessories",
    icon: "Layers",
    subcategories: [
      "Tie Rod & Accessories System",
      "Water Barrier System",
      "Clamping & Supporting System"
    ]
  },
  {
    id: "scaffolding-accessories",
    name: "Scaffolding & Accessories",
    icon: "Grid",
    subcategories: [
      "Cup Lock System",
      "Props and Accessories",
      "Supporting Jacks",
      "Connectors and Accessories"
    ]
  },
  {
    id: "scaffolding-couplers",
    name: "Scaffolding Couplers",
    icon: "Link2",
    subcategories: [
      "Drop Forged Couplers",
      "Pressed Steel Couplers",
      "Specialty Couplers & Clamps"
    ]
  },
  {
    id: "covers-spacers",
    name: "Covers & Spacers",
    icon: "Shield",
    subcategories: [
      "M60 Grade Concrete Cover Blocks",
      "M30 Grade Concrete Cover Blocks",
      "PVC Cover Blocks & Circular Spacers"
    ]
  },
  {
    id: "construction-consumables",
    name: "Construction Consumables",
    icon: "Package",
    subcategories: [
      "Foam & Polyethylene Protection",
      "Testing & Safety Hardware",
      "Rebar Protection & Couplers"
    ]
  },
  {
    id: "tile-protection",
    name: "Tile Protection & Accessories",
    icon: "Sparkles",
    subcategories: [
      "Floor Protection Sheets",
      "Tile Levelling & Spacing Systems"
    ]
  },
  {
    id: "safety-equipments",
    name: "Safety Equipments",
    icon: "HardHat",
    subcategories: [
      "Hand Protection",
      "Foot Protection",
      "High-Visibility Apparel",
      "Head Protection"
    ]
  }
];

export const productsData = [
  // CATEGORY 1: PLYWOOD SHUTTERING ACCESSORIES
  {
    id: "16mm-tie-rod",
    name: "16mm Tie Rod",
    category: "Plywood Shuttering Accessories",
    subCategory: "Tie Rod & Accessories System",
    type: "Accessories",
    image: "/assets/products/16mm-tie-rod.jpg",
    description: "High strength cold-rolled tie rod for wall shuttering and column formwork holding pressure.",
    applications: ["Wall Formwork", "Column Shuttering", "Shear Wall Construction", "Retaining Walls"],
    specifications: {
      "Diameter": "16 mm",
      "Material Grade": "High-tensile Grade 8.8 / 10.9 steel",
      "Thread Pitch": "10 mm coarse thread",
      "Breaking Load": "Over 140 kN"
    }
  },
  {
    id: "anchor-nut-2-wings",
    name: "Anchor Nut – 2 Wings",
    category: "Plywood Shuttering Accessories",
    subCategory: "Tie Rod & Accessories System",
    type: "Accessories",
    image: "/assets/products/anchor-nut-2-wings.jpg",
    description: "Reliable ductile iron anchor nut with 2 ergonomic wings for easy tightening on 16mm tie rods.",
    applications: ["Formwork Tie System", "Heavy Shuttering Tightening", "Wall Forms"],
    specifications: {
      "Diameter": "Suit 16 mm / 20 mm Tie Rod",
      "Base Plate Dia": "90 mm – 110 mm",
      "Material": "Ductile Cast Iron QT450-10",
      "Finish": "Galvanized / Natural Passivated"
    }
  },
  {
    id: "anchor-nut-3-wings",
    name: "Anchor Nut – 3 Wings",
    category: "Plywood Shuttering Accessories",
    subCategory: "Tie Rod & Accessories System",
    type: "Accessories",
    image: "/assets/products/anchor-nut-3-wings.jpg",
    description: "Heavy duty ductile iron anchor nut with 3 wings providing balanced load distribution and quick release.",
    applications: ["Heavy Formwork", "Civil Infrastructure", "High Lateral Concrete Pressure"],
    specifications: {
      "Base Diameter": "110 mm / 120 mm",
      "Suit Rod": "16 mm Threaded Tie Rod",
      "Material": "High Strength Ductile Iron",
      "Load Capacity": "Up to 150 kN"
    }
  },
  {
    id: "wing-nut",
    name: "Wing Nut",
    category: "Plywood Shuttering Accessories",
    subCategory: "Tie Rod & Accessories System",
    type: "Accessories",
    image: "/assets/products/wing-nut.jpg",
    description: "Strong wing nut for secure fastening against waller plates in timber and plywood shuttering.",
    applications: ["Waller Plate Fixing", "Column Shuttering", "General Shuttering Support"],
    specifications: {
      "Thread": "16 mm standard pitch",
      "Wing Span": "95 mm – 100 mm",
      "Material": "Forged Carbon Steel / Cast Iron",
      "Coating": "Zinc Plated Yellow / White"
    }
  },
  {
    id: "waller-plate",
    name: "Waller Plate",
    category: "Plywood Shuttering Accessories",
    subCategory: "Tie Rod & Accessories System",
    type: "Accessories",
    image: "/assets/products/waller-plate.jpg",
    description: "Pressed steel square plate with central hole designed to distribute tie rod clamping loads over walers.",
    applications: ["Timber Waler Clamping", "Steel Soldier Backing", "Load Dispersion"],
    specifications: {
      "Size": "120 x 120 mm / 100 x 100 mm",
      "Thickness": "6 mm / 8 mm / 10 mm",
      "Hole Diameter": "18 mm – 22 mm",
      "Material": "Structural Mild Steel IS 2062"
    }
  },
  {
    id: "scaffolding-water-stopper",
    name: "Scaffolding Water Stopper",
    category: "Plywood Shuttering Accessories",
    subCategory: "Water Barrier System",
    type: "Accessories",
    image: "/assets/products/scaffolding-water-stopper.jpg",
    description: "Cast iron central water barrier connector that prevents water seepage through tie rod sleeves in retaining walls.",
    applications: ["Water Tanks", "Basement Retaining Walls", "Sewage Treatment Plants", "Dams"],
    specifications: {
      "Center Disc Dia": "65 mm – 80 mm",
      "Length": "110 mm – 120 mm",
      "Internal Thread": "16 mm coarse",
      "Material": "Ductile Cast Iron"
    }
  },
  {
    id: "pvc-cone",
    name: "PVC Cone",
    category: "Plywood Shuttering Accessories",
    subCategory: "Water Barrier System",
    type: "Consumables",
    image: "/assets/products/pvc-cone.jpg",
    description: "Durable chamfered PVC cone fitted at the ends of PVC sleeve pipes to ensure precise formwork spacing and clean surface finish.",
    applications: ["Tie Rod Hole Formation", "Waterproof Wall Grouting", "Architectural Concrete"],
    specifications: {
      "Inner Dia": "22 mm (fits standard 22mm ID PVC pipe)",
      "Flange Outer Dia": "40 mm",
      "Material": "Virgin High-Density PVC",
      "Color": "Black / White / Grey"
    }
  },
  {
    id: "pvc-end-cap",
    name: "PVC End Cap",
    category: "Plywood Shuttering Accessories",
    subCategory: "Water Barrier System",
    type: "Consumables",
    image: "/assets/products/pvc-end-cap.jpg",
    description: "Precision-molded PVC plug used to seal tie rod holes after shuttering removal, preventing slurry and water ingress.",
    applications: ["Hole Sealing", "Post-Pour Grouting Preparation", "Waterproofing"],
    specifications: {
      "Outer Diameter": "20 mm / 22 mm / 25 mm",
      "Depth": "20 mm",
      "Material": "Elastic UV-resistant PVC",
      "Fit": "Press-fit snug lock"
    }
  },
  {
    id: "pvc-pipe",
    name: "PVC Pipe",
    category: "Plywood Shuttering Accessories",
    subCategory: "Water Barrier System",
    type: "Consumables",
    image: "/assets/products/pvc-pipe.jpg",
    description: "Rigid smooth-bore PVC spacer conduit sleeve allowing easy removal and recovery of reusable tie rods after concrete pour.",
    applications: ["Tie Rod Sleeving", "Through-Wall Form Spacing", "Concrete Protection"],
    specifications: {
      "Internal Diameter": "22 mm",
      "Outer Diameter": "25 mm",
      "Length": "Standard 2m / 3m or Cut-to-size",
      "Material": "Rigid Unplasticized PVC (UPVC)"
    }
  },
  {
    id: "shuttering-clamps",
    name: "Shuttering Clamps",
    category: "Plywood Shuttering Accessories",
    subCategory: "Clamping & Supporting System",
    type: "Formwork",
    image: "/assets/products/shuttering-clamps.jpg",
    description: "Heavy forged and fabricated Shikanja / column clamps designed for rapid external locking of timber and ply column forms.",
    applications: ["Column Shuttering", "Beam Side Forms", "Corner Form Clamping"],
    specifications: {
      "Arm Length": "600 mm – 1200 mm",
      "Material": "Forged Mild Steel bar",
      "Locking": "Wedge / Bolt tightener",
      "Adjustment": "Universal sliding adjustment"
    }
  },
  {
    id: "gogu-machine",
    name: "Gogu Machine",
    category: "Plywood Shuttering Accessories",
    subCategory: "Clamping & Supporting System",
    type: "Formwork",
    image: "/assets/products/gogu-machine.jpg",
    description: "Specialized mechanical cam tensioner tool for quick clamping and pre-tensioning of wire / rod ties in plywood shuttering.",
    applications: ["Tension Wire Clamping", "Quick Formwork Assembly", "Beam Locking"],
    specifications: {
      "Lever Handle": "Hardened ergonomic steel",
      "Cam Action": "High mechanical advantage eccentric cam",
      "Capacity": "Wires / rods 6 mm to 12 mm",
      "Finish": "Powder coated black"
    }
  },
  {
    id: "gogu-nut",
    name: "Gogu Nut",
    category: "Plywood Shuttering Accessories",
    subCategory: "Clamping & Supporting System",
    type: "Accessories",
    image: "/assets/products/gogu-nut.jpg",
    description: "Cast steel wedge locking nut with set screw used in combination with Gogu clamping system for rigid shuttering holding.",
    applications: ["Shuttering Tie Gripping", "Slab Edge Form Clamping", "Rapid Stripping"],
    specifications: {
      "Material": "High-grade forged steel / SG iron",
      "Set Screw Thread": "Metric coarse M12 / M14",
      "Bore": "Smooth hardened bore",
      "Finish": "Zinc chromate"
    }
  },

  // CATEGORY 2: MIVAN FORMWORK ACCESSORIES
  {
    id: "mivan-pin",
    name: "Pin",
    category: "Mivan Formwork Accessories",
    subCategory: "Pin and Wedge Systems",
    type: "Formwork",
    image: "/assets/products/pin.png",
    description: "Heat-treated high tensile steel connecting pin for interlocking adjacent aluminum formwork panel flanges securely.",
    applications: ["Aluminum Panel Jointing", "Mivan Wall & Deck Connecting", "Rapid Assembly"],
    specifications: {
      "Head Diameter": "16 mm",
      "Shank Length": "45 mm – 65 mm",
      "Material": "Heat-treated carbon steel (40Cr)",
      "Hardness": "HRC 28–32"
    }
  },
  {
    id: "mivan-wedge",
    name: "Wedge",
    category: "Mivan Formwork Accessories",
    subCategory: "Pin and Wedge Systems",
    type: "Formwork",
    image: "/assets/products/wedge.jpeg",
    description: "Precision-tapered curved and straight wedges designed to lock Mivan pins firmly into panel holes with single hammer strike.",
    applications: ["Panel Pin Locking", "Mivan Form Tightening", "Form Stripping"],
    specifications: {
      "Taper Angle": "Engineered self-locking slope",
      "Thickness": "4 mm – 6 mm",
      "Material": "Drop forged / stamped alloy steel",
      "Finish": "Natural oiled / Zinc plated"
    }
  },
  {
    id: "mivan-long-pin",
    name: "Long Pin",
    category: "Mivan Formwork Accessories",
    subCategory: "Pin and Wedge Systems",
    type: "Formwork",
    image: "/assets/products/long-pin.png",
    description: "Extended shank pin used when joining multiple aluminum formwork profiles, rocker channels, or beam connections.",
    applications: ["Multi-flange Connection", "Corner Profile Assembly", "Beam Bottom Locking"],
    specifications: {
      "Length": "90 mm – 150 mm",
      "Shank Dia": "16 mm",
      "Slot Length": "Matches standard Mivan wedge",
      "Tensile Strength": "Over 650 MPa"
    }
  },
  {
    id: "bks-patti",
    name: "BKS Patti",
    category: "Mivan Formwork Accessories",
    subCategory: "Aluminum Components",
    type: "Formwork",
    image: "/assets/products/bks-patti.jpg",
    description: "Structural aluminum angle section used for beam kicker support and slab edge alignment in monolithic Mivan casting.",
    applications: ["Beam Kicker Support", "Slab Edge Alignment", "Floor Level Transition"],
    specifications: {
      "Profile": "Custom extruded angle profile",
      "Alloy": "6061-T6 Aluminum alloy",
      "Standard Lengths": "1.2m, 2.4m, 3.0m",
      "Features": "Pre-punched standard hole pitch"
    }
  },
  {
    id: "aluminium-rail-patti",
    name: "Aluminium Rail Patti",
    category: "Mivan Formwork Accessories",
    subCategory: "Aluminum Components",
    type: "Formwork",
    image: "/assets/products/aluminium-rail-patti.jpg",
    description: "High-grade extruded aluminum rail channel providing horizontal straightness and stiffening across multiple panel rows.",
    applications: ["Horizontal Stiffening", "Waler Replacement", "Wall Panel Alignment"],
    specifications: {
      "Cross-section": "C-Channel / Box section",
      "Material": "Alloy 6061 / 6082-T6",
      "Weight": "Lightweight for manual lifting",
      "Load Class": "Heavy horizontal concrete load"
    }
  },
  {
    id: "beam-bar",
    name: "Beam Bar",
    category: "Mivan Formwork Accessories",
    subCategory: "Aluminum Components",
    type: "Formwork",
    image: "/assets/products/beam-bar.jpg",
    description: "Heavy duty connecting strut bar for beam side and bottom formwork alignment and bracing in Mivan construction.",
    applications: ["Beam Formwork Support", "Drop Beam Framing", "Internal Wall Bracing"],
    specifications: {
      "Configuration": "Flat bar with slotted pivot holes",
      "Thickness": "6 mm / 8 mm",
      "Material": "High-strength alloy steel / Al-6061",
      "Adjustment": "Incremental pinned holes"
    }
  },
  {
    id: "water-drip-mould",
    name: "Water Drip Mould",
    category: "Mivan Formwork Accessories",
    subCategory: "Aluminum Components",
    type: "Formwork",
    image: "/assets/products/water-drip-mould.jpg",
    description: "Extruded aluminum drip bead profile inserted into slab edges and balconies to cast integrated water drip grooves.",
    applications: ["Balcony Cantilever Edges", "Window Chajjas", "Sunshade Edges"],
    specifications: {
      "Groove Profile": "Trapezoidal / Triangular drip recess",
      "Material": "Smooth extruded aluminum",
      "Length": "2.4m standard",
      "Surface": "Ultra smooth for clean demoulding"
    }
  },
  {
    id: "ms-wall-tie",
    name: "MS Wall Tie",
    category: "Mivan Formwork Accessories",
    subCategory: "Wall Tie System",
    type: "Formwork",
    image: "/assets/products/ms-wall-tie.jpg",
    specificationImage: "/assets/products/ms-wall-tie-specs.jpg",
    description: "Flat high-tensile steel strip with precision punch holes that ties opposite Mivan wall panels at exact wall thickness.",
    applications: ["Shear Wall Form Holding", "Wall Thickness Control", "High-Rise Monolithic Casting"],
    specifications: {
      "Wall Thickness": "100 mm, 125 mm, 150 mm, 160 mm, 200 mm",
      "Thickness": "2.0 mm – 3.0 mm",
      "Breaking Strength": "Exceeds 45 kN",
      "Material": "Cold rolled carbon steel strip"
    }
  },
  {
    id: "polytube-cover",
    name: "Polytube Cover",
    category: "Mivan Formwork Accessories",
    subCategory: "Wall Tie System",
    type: "Consumables",
    image: "/assets/products/polytube-cover.jpg",
    description: "Flexible continuous polytubing roll used to sleeve flat wall ties, allowing the steel tie to be withdrawn effortlessly.",
    applications: ["Flat Wall Tie Protection", "Easy Tie Extraction", "Water-tight Wall Finishing"],
    specifications: {
      "Roll Length": "100 m / 200 m rolls",
      "Width": "Matches 35 mm / 40 mm flat ties",
      "Material": "Tough low-density virgin polyethylene",
      "Puncture Resistance": "High tear strength"
    }
  },
  {
    id: "pvc-sleeve",
    name: "PVC Sleeve",
    category: "Mivan Formwork Accessories",
    subCategory: "Wall Tie System",
    type: "Consumables",
    image: "/assets/products/pvc-sleeve.jpg",
    description: "Rectangular and oval section rigid PVC conduit sleeve manufactured specifically for Mivan wall ties.",
    applications: ["Wall Tie Reusability", "Precise Spacer Sleeving", "Post-Pour Tie Recovery"],
    specifications: {
      "Profile": "Flat rectangular profile (approx 35x5 mm)",
      "Standard Lengths": "100 mm, 150 mm, 160 mm, 200 mm",
      "Material": "Rigid PVC",
      "Wall Thickness": "1.2 mm"
    }
  },
  {
    id: "mivan-grease",
    name: "Mivan Grease",
    category: "Mivan Formwork Accessories",
    subCategory: "Wall Tie System",
    type: "Consumables",
    image: "/assets/products/mivan-grease.jpg",
    description: "High-temperature water-resistant lubricating grease for pins, wedges, turnbuckles and sliding Mivan shuttering joints.",
    applications: ["Pin & Wedge Lubrication", "Turnbuckle Threads", "Panel Flange Joints"],
    specifications: {
      "Grade": "Lithium base EP-2 grease",
      "Dropping Point": "Above 180°C",
      "Water Washout": "Negligible",
      "Packaging": "5 kg, 18 kg, 180 kg"
    }
  },
  {
    id: "pp-corrugated-sheet",
    name: "PP Corrugated Sheet",
    category: "Mivan Formwork Accessories",
    subCategory: "Wall Tie System",
    type: "Consumables",
    image: "/assets/products/pp-corrugated-sheet.jpeg",
    description: "Polypropylene hollow flute corrugated sheet for surface protection, column boxing and partition form lining.",
    applications: ["Panel Face Protection", "Corner Flute Packing", "Floor & Wall Guarding"],
    specifications: {
      "Thickness": "2 mm, 3 mm, 4 mm, 5 mm",
      "Sheet Size": "6x4 ft / 8x4 ft",
      "Colors": "Blue, White, Yellow, Grey",
      "Features": "Waterproof, reusable, impact resistant"
    }
  },
  {
    id: "tie-puller",
    name: "Tie Puller",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/tie-puller.png",
    description: "Ergonomic leverage puller tool designed to extract flat wall ties from cured concrete walls swiftly without wall damage.",
    applications: ["Demoulding Flat Ties", "Post-Pour Form Stripping", "Fast Construction Cycles"],
    specifications: {
      "Handle Length": "750 mm – 900 mm",
      "Jaw Gripper": "Hardened knurled steel jaws",
      "Leverage": "High ratio compound pivot",
      "Finish": "Zinc plated / Powder coated"
    }
  },

{
  id: "shikanja",
  name: "Shikanja",
  category: "Mivan Formwork Accessories",
  subCategory: "Tools and Fasteners",
  type: "Formwork",
  image: "/assets/products/shikanja.png",
  description: "Heavy-duty steel Shikanja used for holding, securing, and aligning shuttering panels during concrete construction. Designed with a long flat steel body and hooked ends to provide firm support and stability during formwork assembly.",
  applications: [
    "Shuttering Panel Clamping",
    "Formwork Alignment",
    "Mivan Formwork Assembly",
    "Concrete Wall Shuttering",
    "Panel Holding and Securing"
  ],
  specifications: {
    "Type": "Shikanja Formwork Clamp",
    "Material": "Heavy-Duty Steel",
    "Design": "Long Flat Bar with Hooked Ends",
    "Finish": "Black Steel Finish",
    "Sizes": "Various Sizes Available",
    "Application": "Formwork and Shuttering Systems"
  }
},


{
  id: "dywidag-pin",
  name: "Dywidag Pin",
  category: "Mivan Formwork Accessories",
  subCategory: "Tools and Fasteners",
  type: "Formwork",
  image: "/assets/products/dywidag-pin.png",
  description: "Heavy-duty threaded fastening accessory used for securing, aligning, and tightening Mivan aluminium formwork panels during concrete construction.",
  applications: [
    "Mivan Formwork Assembly",
    "Aluminium Panel Connections",
    "Wall Shuttering",
    "Panel Alignment",
    "Formwork Tightening"
  ],
  specifications: {
    "Type": "Threaded Formwork Pin",
    "Material": "Heavy-Duty Steel",
    "Finish": "Protective Coated",
    "Length": "250 mm (verify available sizes)",
    "Components": "Threaded Rod, Angled Pin and Fastening Bracket"
  }
},

  {
    id: "panel-puller",
    name: "Panel Puller",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/panel-puller.jpg",
    description: "Pry tool designed with a hooked claw tip to release tightly locked aluminum panels from cured concrete faces safely.",
    applications: ["Mivan Panel Stripping", "Corner Panel Disengagement", "Slab Panel Drop"],
    specifications: {
      "Length": "800 mm",
      "Tip": "Curved pry claw shaped for aluminum flange",
      "Material": "Forged alloy tool steel",
      "Grip": "Rubberized anti-slip grip"
    }
  },
  {
    id: "hole-berri",
    name: "Hole Berri",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/hole-berri.png",
    description: "Reaming and punch alignment tool used to clear slurry and align pin holes between misaligned panel flanges on site.",
    applications: ["Pin Hole Alignment", "Concrete Slurry Clearance", "Panel Erection"],
    specifications: {
      "Type": "Angled tapered point reamer",
      "Shaft": "Solid hexagonal / round spring steel",
      "Length": "250 mm – 350 mm",
      "Heat Treatment": "Induction hardened point"
    }
  },
  {
    id: "turn-buckle",
    name: "Turn Buckle",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/turn-buckle.jpg",
    description: "Forged double-eye / hook threaded turnbuckle used on diagonal push-pull props for micro-plumb adjustment of walls.",
    applications: ["Wall Plumb Alignment", "Diagonal Form Bracing", "Fine Screw Adjustment"],
    specifications: {
      "Thread Size": "M16 / M20 / M24",
      "Body Length": "200 mm – 300 mm",
      "Working Load": "25 kN – 50 kN",
      "Material": "Drop forged carbon steel C1045"
    }
  },
  {
    id: "rocker-bolt",
    name: "Rocker Bolt",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/rocker-bolt.jpg",
    description: "High tensile hex head bolt used with embedded rocker anchors to secure the base kicker profile tightly to the floor slab.",
    applications: ["Base Kicker Anchoring", "Floor Slab Alignment", "Rocker Channel Attachment"],
    specifications: {
      "Bolt Size": "M12 x 45 mm / M16 x 50 mm",
      "Grade": "8.8 High Tensile Steel",
      "Thread": "ISO Metric pitch",
      "Coating": "Electrolytic zinc galvanization"
    }
  },
  {
    id: "kicker-nut-bolt-washer",
    name: "Kicker Nut Bolt & Washer",
    category: "Mivan Formwork Accessories",
    subCategory: "Tools and Fasteners",
    type: "Formwork",
    image: "/assets/products/kicker-nut-bolt-washer.jpg",
    description: "Complete fastener set consisting of high tensile bolt, flanged heavy nut and oversized washer for kicker assembly.",
    applications: ["Kicker Joint Connection", "Perimeter Wall Start-Up", "Panel Base Anchoring"],
    specifications: {
      "Components": "Grade 8.8 Bolt + Heavy Hex Nut + Thick Washer",
      "Size": "M16 x 65 mm / M16 x 75 mm",
      "Washer OD": "45 mm, 4 mm thickness",
      "Corrosion Protection": "Yellow zinc passivated"
    }
  },
  {
    id: "german-clamp",
    name: "German Clamp",
    category: "Mivan Formwork Accessories",
    subCategory: "Alignment and Clamping",
    type: "Formwork",
    image: "/assets/products/german-clamp.png",
    description: "Rapid spring lever clamp used for clamping external waler rails and edge form stiffeners in modern formwork systems.",
    applications: ["External Rail Clamping", "Waler Securing", "High Pressure Edge Formwork"],
    specifications: {
      "Clamping Stroke": "Up to 35 mm",
      "Clamping Force": "12 kN",
      "Material": "Drop forged carbon steel body",
      "Mechanism": "Quick release cam toggle"
    }
  },
  {
    id: "pushpuller",
    name: "Pushpuller",
    category: "Mivan Formwork Accessories",
    subCategory: "Alignment and Clamping",
    type: "Formwork",
    image: "/assets/products/pushpuller.jpg",
    description: "Telescopic push-pull prop strut with swivel foot plates and turnbuckle for precise plumbing and stabilizing of wall forms.",
    applications: ["Wall Verticality Alignment", "Wind Load Stabilization", "Dual-action Push & Pull"],
    specifications: {
      "Adjustment Range": "1.8 m to 3.2 m / 2.5 m to 4.5 m",
      "Tube Outer/Inner": "60 mm / 48 mm",
      "Capacity (Push/Pull)": "20 kN / 15 kN",
      "Base Plates": "Dual pivoting base and head plates"
    }
  },
  {
    id: "venlub-shuttering-oil",
    name: "Venlub Shuttering Oil",
    category: "Mivan Formwork Accessories",
    subCategory: "Shuttering Oil & Release Agents",
    type: "Formwork",
    badge: "Official Distributor & Authorised Dealer for Telangana - Venlub Petro Products Pvt Ltd",
    image: "/assets/products/mivan-oil.png",
    detailImage: '/assets/products/mivan-shuttering-oil-detail.jpg',
    description: "Venlub Petro Products Pvt Ltd Authorised Dealer for Telangana. Premium high-performance formwork release agent specially formulated for aluminum (Mivan) and steel shuttering to deliver non-staining, ultra-smooth fair-faced concrete finish and effortless form release.",
    applications: [
      "Mivan Aluminum Formwork Panels",
      "Steel Plate & Column Shuttering",
      "Plywood & Film-Faced Formwork",
      "Precast Concrete Elements & Slabs"
    ],
    specifications: {
      "Brand": "Venlub (Venlub Petro Products Pvt Ltd)",
      "Dealership Status": "Official Distributors & Authorised Dealers for Telangana",
      "Coverage Rate": "30 to 45 sq. m / litre (Aluminum & Steel forms)",
      "Flash Point": "Above 65°C (Safe storage on-site)",
      "Concrete Finish": "Non-staining fair-faced smooth architectural finish",
      "Available Packing": "210 Litres Barrel"
    }
  },

  // CATEGORY 3: SCAFFOLDING COUPLERS
  {
    id: "swivel-coupler",
    name: "Swivel Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Drop Forged Couplers",
    type: "Couplers",
    image: "/assets/products/swivel-coupler.jpg",
    description: "Versatile dual-clamp coupler that joins two 48.3mm scaffold tubes at any arbitrary diagonal angle for diagonal bracing.",
    applications: ["Diagonal Bracing", "Façade Stabilization", "Complex Curved Scaffolding"],
    specifications: {
      "Tube OD": "48.3 mm x 48.3 mm",
      "Standard Compliance": "EN 74-1 Class B / BS 1139 / IS 2750",
      "Material": "Drop Forged Carbon Steel",
      "Nut Size": "21 mm / 23 mm hex flange nut"
    }
  },
  {
    id: "fixed-coupler",
    name: "Fixed Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Drop Forged Couplers",
    type: "Couplers",
    image: "/assets/products/fixed-coupler.jpg",
    description: "Right-angle coupler designed to lock two scaffold tubes rigidly at a right angle (90 degrees) with high slip resistance.",
    applications: ["Standard to Ledger Connection", "Transom Jointing", "Heavy Load Towers"],
    specifications: {
      "Joint Angle": "Fixed 90°",
      "Slip Resistance": "Exceeds 15 kN (EN 74 Class B)",
      "Failure Load": "Over 25 kN",
      "Finish": "Hot Dip Galvanized / Zinc Plated"
    }
  },
  {
    id: "forged-swivel-coupler",
    name: "Forged Swivel Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Drop Forged Couplers",
    type: "Couplers",
    image: "/assets/products/forged-swivel-coupler.jpg",
    description: "Heavy drop-forged swivel coupler offering superior tensile strength and fatigue life for industrial and high-rise scaffolding.",
    applications: ["Heavy Industrial Scaffolding", "Refinery Scaffolding", "High Wind Facades"],
    specifications: {
      "Manufacturing": "100% Drop Forged body & caps",
      "T-Bolt Grade": "Grade 8.8 Boron Steel",
      "Coating": "Min 45 microns hot dip zinc",
      "Weight": "Approx 1.25 kg"
    }
  },
  {
    id: "forged-fixed-coupler",
    name: "Forged Fixed Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Drop Forged Couplers",
    type: "Couplers",
    image: "/assets/products/forged-fixed-coupler.jpg",
    description: "Premium drop-forged right angle 90° clamp engineered for maximum rigidity under intense cyclic loading.",
    applications: ["Structural Scaffold Framing", "Cantilever Scaffold Platforms", "Heavy Shoring Towers"],
    specifications: {
      "Body": "Drop Forged SAE 1045 steel",
      "Compliance": "EN 74 Class B certified",
      "Tightening Torque": "54 Nm",
      "Bolt": "T-bolt with rolled thread"
    }
  },
  {
    id: "box-coupler",
    name: "Box Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/box-coupler.jpg",
    description: "Heavy fabricated box clamp designed to secure scaffold tubes to rectangular steel hollow sections and square columns.",
    applications: ["Scaffold to Steel Structure Tie-in", "Square Column Clamping", "Facade Tie Anchoring"],
    specifications: {
      "Box Size Range": "50 mm – 100 mm box profiles",
      "Tube Compatibility": "48.3 mm scaffold pipe",
      "Material": "Heavy gauge pressed mild steel",
      "Finish": "Zinc passivated"
    }
  },
  {
    id: "single-clamp",
    name: "Single Clamp",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/single-clamp.jpg",
    description: "Half clamp coupler with eye hook or mounting bracket used for secondary attachments, safety net ropes and toe-board brackets.",
    applications: ["Safety Net Fixing", "Toe Board Bracket Mounting", "Signage & Lighting Attachment"],
    specifications: {
      "Fit": "48.3 mm scaffold pipe",
      "Eye Diameter": "25 mm forged lifting eye",
      "Nut": "Flanged hex nut",
      "Material": "Pressed / Forged carbon steel"
    }
  },
  {
    id: "putlog-coupler",
    name: "Putlog Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Pressed Steel Couplers",
    type: "Couplers",
    image: "/assets/products/putlog-coupler.jpg",
    description: "Single-piece wraparound coupler used to connect intermediate putlog transoms to ledgers for supporting scaffolding boards.",
    applications: ["Putlog Transom Fixing", "Working Platform Support", "Non-loadbearing Transoms"],
    specifications: {
      "Standard": "BS 1139 / EN 74-1 Class A",
      "Design": "Wraparound one-piece blade design",
      "Suitability": "Direct board laying without interference",
      "Weight": "Approx 0.65 kg"
    }
  },
  {
    id: "board-retaining-coupler",
    name: "Board Retaining Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/board-retaining-coupler.jpg",
    description: "Specially contoured clamp that secures timber or steel scaffold boards tightly against transoms to prevent wind uplift.",
    applications: ["Scaffold Board Retention", "Wind Uplift Prevention", "Walkway Safety"],
    specifications: {
      "Board Thickness": "38 mm standard timber / metal jali",
      "Tube Size": "48.3 mm transom",
      "Material": "High yield pressed steel",
      "Locking": "Single T-bolt clamping"
    }
  },
  {
    id: "sleeve-coupler",
    name: "Sleeve Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Pressed Steel Couplers",
    type: "Couplers",
    image: "/assets/products/sleeve-coupler.jpg",
    description: "External wrap sleeve coupler with central steel divider pin used for end-to-end joining of vertical and horizontal scaffold tubes.",
    applications: ["End-to-End Tube Splicing", "Ledger Extension", "Standard Tube Extension"],
    specifications: {
      "Tube OD": "48.3 mm",
      "Length": "200 mm",
      "Standard": "EN 74-1 Class B (Tension & Bending)",
      "Material": "High strength pressed steel 4.5 mm"
    }
  },
  {
    id: "girder-coupler",
    name: "Girder Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/girder-coupler.jpg",
    description: "Beam clamp coupler designed in pairs to anchor scaffold tubes securely to the flanges of steel I-beams and universal columns.",
    applications: ["Suspended Scaffolding", "Industrial Steelwork Tie-ins", "Bridge Underside Access"],
    specifications: {
      "Flange Thickness": "Up to 45 mm flange clamp",
      "Tube OD": "48.3 mm",
      "Load Capacity": "Up to 30 kN in pairs",
      "Material": "Drop forged jaws with high-tensile set screw"
    }
  },
  {
    id: "half-coupler",
    name: "Half Coupler",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/half-coupler.jpg",
    description: "Single semi-clamp with flat welded back or bolt hole for welding onto steel structures or attaching auxiliary components.",
    applications: ["Weld-on Attachments", "Winch Mounts", "Custom Structural Adapters"],
    specifications: {
      "Tube OD": "48.3 mm",
      "Base": "Pre-drilled flat plate or weld-ready edge",
      "Material": "Drop forged weldable mild steel",
      "Bolt": "T-bolt with hex nut"
    }
  },
  {
    id: "rapid-clamp",
    name: "Rapid Clamp",
    category: "Scaffolding Couplers",
    subCategory: "Specialty Couplers & Clamps",
    type: "Couplers",
    image: "/assets/products/rapid-clamp.png",
    description: "Spring-loaded wedge clamp for rapid single-handed assembly on tubular frames and temporary access structures.",
    applications: ["Rapid Shoring Assembly", "Temporary Edge Handrails", "Speed Scaffolding"],
    specifications: {
      "Locking": "Integrated wedge wedge-drive locking",
      "Material": "Cast steel body with hardened wedge",
      "Tube Compatibility": "48.3 mm",
      "Speed": "3x faster than bolted clamps"
    }
  },

  // CATEGORY 4: SCAFFOLDING & ACCESSORIES
  {
    id: "scaffolding-cup-lock",
    name: "Scaffolding Cup Lock",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/scaffolding-cup-lock.jpg",
    description: "The industry-standard node joint system featuring bottom fixed cups and top sliding malleable iron locking cups.",
    applications: ["Modular Façade Scaffolding", "Heavy Slab Shoring", "Bridge Piers Access"],
    specifications: {
      "Node Spacing": "Every 500 mm on standards",
      "Joint Capacity": "Up to 4 horizontal members locked in one action",
      "Material": "Ductile Cast Iron / Forged steel",
      "Standard": "BS EN 12810 / 12811"
    }
  },
  {
    id: "scaffolding-verticals",
    name: "Verticals",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/verticals.jpg",
    description: "Heavy duty tubular standards manufactured from 48.3mm OD high yield steel pipe with cup joints welded at 500mm intervals.",
    applications: ["Vertical Load Bearing", "Tower Construction", "Façade Staging"],
    specifications: {
      "Tube Spec": "48.3 mm OD x 3.2 mm / 4.0 mm WT",
      "Lengths Available": "0.5m, 1.0m, 1.5m, 2.0m, 2.5m, 3.0m",
      "Cup Spacing": "500 mm center to center",
      "Spigot": "Integrated 150 mm internal connecting spigot"
    }
  },
  {
    id: "scaffolding-horizontals",
    name: "Horizontals",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/horizontals.jpg",
    description: "Horizontal ledgers equipped with forged forged blade ends that insert into cups on vertical standards for rigid bracing.",
    applications: ["Scaffold Bay Spacing", "Guardrails", "Slab Support Grid"],
    specifications: {
      "Bay Lengths": "1.0m, 1.2m, 1.5m, 1.8m, 2.0m, 2.5m",
      "Blade Ends": "Drop forged alloy steel blades welded to pipe",
      "Tube Spec": "48.3 mm OD x 3.2 mm WT",
      "Finish": "Hot Dip Galvanized / Painted Blue"
    }
  },
  {
    id: "bottom-cup",
    name: "Bottom Cup",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/bottom-cup.jpg",
    description: "Deep pressed steel cup permanently welded to vertical standards to seat ledger blades with maximum bearing area.",
    applications: ["Cup Lock Standard Fabrication", "Node Point Seating"],
    specifications: {
      "Thickness": "4 mm high yield pressed steel",
      "Diameter": "80 mm outer rim",
      "Weld Quality": "Submerged arc automated fillet weld",
      "Corrosion Protection": "Self-draining water holes"
    }
  },
  {
    id: "top-cup",
    name: "Top Cup",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/top-cup.jpg",
    description: "Malleable iron mobile cup featuring a cam profile and driving lug that rotates and hammer-locks 4 ledgers rigidly.",
    applications: ["Node Joint Tightening", "Vibration-proof Locking"],
    specifications: {
      "Material": "Malleable Cast Iron grade KTH 350-10",
      "Action": "Quarter-turn spiral cam locking",
      "Driving Lug": "Reinforced for sledgehammer impacts",
      "Internal Bore": "Precision cast to slide on 48.3 mm tube"
    }
  },
  {
    id: "ledger-blade",
    name: "Ledger Blade",
    category: "Scaffolding & Accessories",
    subCategory: "Cup Lock System",
    type: "Accessories",
    image: "/assets/products/ledger-blade.jpg",
    description: "High-grade forged connecting ends welded onto the ends of horizontals for interlocking into bottom cups.",
    applications: ["Cup Lock Ledger Ends", "Horizontal Node Jointing"],
    specifications: {
      "Material": "Drop Forged carbon steel C1020",
      "Profile": "Curved tongue matching cup radius",
      "Weldability": "Certified weld preparation bevel",
      "Impact Strength": "High notch toughness"
    }
  },
  {
    id: "prop-jack",
    name: "Prop Jack",
    category: "Scaffolding & Accessories",
    subCategory: "Props and Accessories",
    type: "Formwork",
    image: "/assets/products/prop-jack.jpg",
    description: "Heavy duty adjustable telescopic steel acrow props for slab and beam bottom formwork shoring with infinite screw height tuning.",
    applications: ["Slab Shoring", "Beam Bottom Props", "Temporary Building Propping"],
    specifications: {
      "Sizes Available": "Prop 0 (1.0–1.8m), Prop 1 (1.5–2.7m), Prop 2 (2.0–3.5m), Prop 3 (2.5–4.0m)",
      "Inner/Outer Tubes": "48.3 mm / 60.3 mm high tensile steel",
      "Thread": "Cold rolled square thread for friction-free adjustment",
      "Safe Working Load": "20 kN to 35 kN"
    }
  },
  {
    id: "lt-nut",
    name: "L&T Nut",
    category: "Scaffolding & Accessories",
    subCategory: "Props and Accessories",
    type: "Accessories",
    image: "/assets/products/lt-nut.png",
    description: "Heavy cast iron prop collar nut with dual straight handles designed for fast manual height adjustment of shoring props under load.",
    applications: ["Acrow Prop Adjustment", "Formwork Level Adjustment"],
    specifications: {
      "Thread Type": "Square thread pitch 6 mm / 8 mm",
      "Handles": "Dual solid ergonomic leverage arms",
      "Material": "Malleable cast iron / SG Iron",
      "Finish": "Zinc passivated"
    }
  },
  {
    id: "base-jack",
    name: "Base Jack",
    category: "Scaffolding & Accessories",
    subCategory: "Supporting Jacks",
    type: "Accessories",
    image: "/assets/products/base-jack.jpg",
    description: "Adjustable threaded screw jack with welded heavy base plate to level scaffold standards on sloped or uneven ground.",
    applications: ["Scaffold Base Leveling", "Ground Load Distribution", "Shoring Towers"],
    specifications: {
      "Stem Diameter": "38 mm solid / hollow high strength pipe",
      "Base Plate": "150 x 150 x 6 mm with 4 nail holes",
      "Adjustment Length": "350 mm, 500 mm, 650 mm",
      "Thread Type": "Self-cleaning rolled acme thread"
    }
  },
  {
    id: "u-jack",
    name: "U Jack",
    category: "Scaffolding & Accessories",
    subCategory: "Supporting Jacks",
    type: "Accessories",
    image: "/assets/products/u-jack.jpg",
    description: "Top adjustable screw jack with U-head stirrup channel designed to support timber runners, H20 beams and steel soldiers securely.",
    applications: ["H20 Timber Beam Support", "Steel Channel Bearer Seating", "Slab Falsework"],
    specifications: {
      "U-Head Dimension": "100 mm / 150 mm channel width",
      "Adjustment Range": "Up to 500 mm",
      "Material": "Heavy gauge pressed mild steel channel + solid stem",
      "Load Rating": "Equivalent to standard base jacks"
    }
  },
  {
    id: "prop-sleeve",
    name: "Prop Sleeve",
    category: "Scaffolding & Accessories",
    subCategory: "Props and Accessories",
    type: "Accessories",
    image: "/assets/products/prop-sleeve.jpg",
    description: "Threaded external sleeve welded onto outer prop tubes, featuring a continuous slot for G-pin height locking.",
    applications: ["Adjustable Prop Assembly", "Height Adjustment Locking"],
    specifications: {
      "Length": "200 mm – 250 mm",
      "Slot Width": "16 mm precision cut",
      "Material": "Cold drawn seamless steel pipe",
      "Thread": "Roll threaded external acme profile"
    }
  },
  {
    id: "g-pin",
    name: "G Pin",
    category: "Scaffolding & Accessories",
    subCategory: "Props and Accessories",
    type: "Accessories",
    image: "/assets/products/g-pin.jpg",
    description: "Heat treated forged spring steel G-shaped locking pin used to lock prop inner tube holes to the prop sleeve nut securely.",
    applications: ["Prop Inner/Outer Tube Locking", "Fail-safe Height Retention"],
    specifications: {
      "Pin Diameter": "12 mm / 14 mm",
      "Design": "G-loop handle prevents accidental dislodgement",
      "Material": "High yield spring steel",
      "Finish": "Zinc electroplated"
    }
  },
  {
    id: "cup-nut",
    name: "Cup Nut",
    category: "Scaffolding & Accessories",
    subCategory: "Supporting Jacks",
    type: "Accessories",
    image: "/assets/products/cup-nut.jpg",
    description: "Threaded cast iron collar nut with integral handles for base jacks and screw jacks providing smooth turning under heavy weight.",
    applications: ["Base Jack Adjustment", "U Jack Levelling"],
    specifications: {
      "Thread Size": "To suit 38 mm OD jacks",
      "Handles": "Heavy solid wings for hammer adjustment",
      "Material": "Ductile Iron QT450",
      "Weight": "Approx 0.85 kg"
    }
  },

{
  id: "jack-nut-cup-type",
  name: "Jack Nut Cup Type",
  category: "Scaffolding & Accessories",
  subCategory: "Supporting Jacks",
  type: "Accessories",
  image: "/assets/products/jack-nut-cup-type.png",
  description: "Heavy-duty cup-type jack nut used in adjustable scaffolding base jacks and U-head jacks. Designed with internal threading, a wide circular base, and a side lug for adjusting and securing jack height during construction.",
  applications: [
    "Adjustable Base Jacks",
    "U-Head Jack Assemblies",
    "Scaffolding Height Adjustment",
    "Shuttering Support Systems",
    "Construction Formwork Support"
  ],
  specifications: {
    "Type": "Cup Type Jack Nut",
    "Material": "Cast Iron",
    "Finish": "Natural Cast Iron Finish",
    "Design": "Internally Threaded Cup with Side Lug",
    "Compatibility": "Adjustable Base Jacks and U-Head Jacks",
    "Thread Size": "As Per Jack Rod Specification",
    "Application": "Scaffolding and Shuttering Systems"
  }
},

{
  id: "jack-nut-t-type",
  name: "Jack Nut T-Type",
  category: "Scaffolding & Accessories",
  subCategory: "Jack Accessories",
  type: "Accessories",
  image: "/assets/products/jack-nut-t-type.png",
  description: "Heavy-duty two-wing jack nut designed for adjustable scaffolding base jacks and U-head jacks. Features a centrally threaded body with two extended wings for convenient manual height adjustment and secure positioning of scaffolding support systems.",
  applications: [
    "Adjustable Base Jacks",
    "U-Head Jack Assemblies",
    "Scaffolding Height Adjustment",
    "Shuttering Support Systems",
    "Formwork Leveling",
    "Construction Support Structures"
  ],
  specifications: {
    "Type": "Two Wing Jack Nut",
    "Material": "Cast Metal",
    "Finish": "Silver Grey Metallic Finish",
    "Design": "Internally Threaded Nut with Two Wings",
    "Compatibility": "Adjustable Base Jacks and U-Head Jacks",
    "Thread Size": "As Per Jack Rod Specification",
    "Application": "Scaffolding and Shuttering Systems"
  }
},


  {
    id: "jack-nut",
    name: "Jack Nut",
    category: "Scaffolding & Accessories",
    subCategory: "Supporting Jacks",
    type: "Accessories",
    image: "/assets/products/jack-nut.jpg",
    description: "Precision-machined cast steel nut with dual finger grips for leveling hollow and solid stem scaffolding jacks.",
    applications: ["Leveling Jacks", "Column Formwork Leveling"],
    specifications: {
      "Bore": "Threaded 36 mm / 38 mm",
      "Profile": "Dual-ear ergonomic handle",
      "Finish": "Zinc plated",
      "Durability": "Tested against thread galling"
    }
  },
  {
    id: "spigot-pin",
    name: "Spigot Pin",
    category: "Scaffolding & Accessories",
    subCategory: "Connectors and Accessories",
    type: "Accessories",
    image: "/assets/products/spigot-pin.jpg",
    description: "Solid round steel dowel with cross pin holes used to join two scaffold tubes axially, maintaining vertical alignment.",
    applications: ["Vertical Tube Stacking", "Standard Column Extension"],
    specifications: {
      "Diameter": "38 mm (fits inside 48.3 mm tube)",
      "Length": "150 mm – 200 mm",
      "Cross Hole": "14 mm for locking bolts/pins",
      "Material": "Solid structural carbon steel"
    }
  },
  {
    id: "joint-pin",
    name: "Joint Pin",
    category: "Scaffolding & Accessories",
    subCategory: "Connectors and Accessories",
    type: "Accessories",
    image: "/assets/products/joint-pin.png",
    description: "Expanding internal joint pin with center expansion bolt that wedges inside adjacent scaffold tubes for seamless jointing.",
    applications: ["Internal Tube Alignment", "Flush Ledger Joints"],
    specifications: {
      "Expanding Range": "Expands from 36 mm to 41 mm ID",
      "Standard": "EN 74-1 Class B",
      "Bolt": "Center Allen / Hex drive expansion bolt",
      "Material": "Heat treated alloy steel"
    }
  },
  {
    id: "walkway-jali",
    name: "Walkway Jali",
    category: "Scaffolding & Accessories",
    subCategory: "Connectors and Accessories",
    type: "Accessories",
    image: "/assets/products/walkway-jali.jpg",
    description: "Perforated non-skid galvanized steel plank (metal deck / jali) with safety end hooks for safe worker walkway platforms.",
    applications: ["Scaffold Working Platforms", "Safety Walkways", "Stairway Landings"],
    specifications: {
      "Width": "240 mm / 300 mm",
      "Length": "1.0m, 1.5m, 2.0m, 2.5m",
      "Surface": "Raised anti-slip perforated dimples with drain slots",
      "Capacity": "Heavy duty 3.0 kN/m² distributed load"
    }
  },

  // CATEGORY 5: COVERS & SPACERS
  {
    id: "m60-single-cover-block",
    name: "M60 Grade Single Cover Block",
    category: "Covers & Spacers",
    subCategory: "M60 Grade Concrete Cover Blocks",
    type: "Consumables",
    image: "/assets/products/m60-single-cover-block.jpg",
    description: "Engineered ultra-high density concrete spacer block conforming to M60 design strength for single cover dimension protection.",
    applications: ["Slab Rebar Spacing", "Beam Bottom Reinforcement", "Marine Concrete Structures"],
    specifications: {
      "Compressive Strength": "M60 Grade (≥ 60 N/mm² at 28 days)",
      "Cover Dimensions": "20 mm, 25 mm, 30 mm, 40 mm, 50 mm",
      "Material": "Micro-silica polymer modified high performance concrete",
      "Fire Rating": "Class A1 non-combustible"
    }
  },
  {
    id: "m60-multi-cover-block",
    name: "M60 Grade Multi Cover Block",
    category: "Covers & Spacers",
    subCategory: "M60 Grade Concrete Cover Blocks",
    type: "Consumables",
    image: "/assets/products/m60-multi-cover-block.jpg",
    description: "Versatile four-sided notched M60 concrete spacer block providing 4 different cover clearances (e.g. 20/25/30/35mm) in a single block.",
    applications: ["Universal Column & Beam Spacing", "Variable Slab Thickenings", "Heavy Civil Foundations"],
    specifications: {
      "Cover Sizes": "20/25 mm, 35/40/50 mm, 50/60/75 mm",
      "Grade": "M60 Grade guaranteed",
      "Thermal Expansion": "Matches parent concrete perfectly",
      "Water Absorption": "Less than 2%"
    }
  },
  {
    id: "m60-round-cement-cover-blocks",
    name: "M60 Grade Round Cement Cover Blocks",
    category: "Covers & Spacers",
    subCategory: "M60 Grade Concrete Cover Blocks",
    type: "Consumables",
    image: "/assets/products/m60-round-cement-cover-blocks.jpg",
    description: "Circular disc concrete spacers with center hole used on vertical rebar cages in bored piles and diaphragm walls.",
    applications: ["Bored Piling Cages", "Diaphragm Walls", "Column Vertical Bars"],
    specifications: {
      "Diameter": "75 mm – 150 mm",
      "Center Hole": "Fits 12 mm to 32 mm rebar",
      "Concrete Grade": "M60 self-compacting concrete",
      "Benefit": "Smooth rolling action during cage lowering"
    }
  },
  {
    id: "pvc-cover-blocks",
    name: "PVC Cover Blocks",
    category: "Covers & Spacers",
    subCategory: "PVC Cover Blocks & Circular Spacers",
    type: "Consumables",
    image: "/assets/products/pvc-cover-blocks.jpg",
    description: "Precision injection-molded high impact PVC spacers with clip-on grips for rapid, secure snapping onto rebar meshes.",
    applications: ["Precast Concrete", "Lightweight Slab Meshes", "Retaining Walls"],
    specifications: {
      "Cover Heights": "15 mm, 20 mm, 25 mm, 30 mm",
      "Rebar Clip Range": "Accommodates 8 mm – 16 mm bar",
      "Material": "100% Virgin high density polymer",
      "Stability": "Four-point base prevents tipping"
    }
  },
  {
    id: "wired-cover-blocks",
    name: "Wired Cover Blocks",
    category: "Covers & Spacers",
    subCategory: "M60 Grade Concrete Cover Blocks",
    type: "Consumables",
    image: "/assets/products/wired-cover-blocks.jpg",
    description: "M60 concrete block with embedded galvanized binding wire for firmly tying onto vertical column and wall rebar cages.",
    applications: ["Vertical Column Rebar", "Shear Wall Cages", "Cantilever Beam Sides"],
    specifications: {
      "Binding Wire": "1.2 mm annealed galvanized wire (150 mm length)",
      "Cover": "25 mm, 40 mm, 50 mm, 75 mm",
      "Tensile Pullout": "Wire embedded deep to prevent pull-out under vibration",
      "Strength": "M60 Grade certified"
    }
  },
  {
    id: "cover-blocks-with-clip",
    name: "Cover Blocks with Clip",
    category: "Covers & Spacers",
    subCategory: "PVC Cover Blocks & Circular Spacers",
    type: "Consumables",
    image: "/assets/products/cover-blocks-with-clip.jpg",
    description: "High-density concrete spacer integrated with top spring plastic clip for immediate tool-free snap fit onto rebar.",
    applications: ["High-Rise Columns", "Prefabricated Rebar Cages", "High Vibration Zones"],
    specifications: {
      "Body Material": "M60 micro-concrete base",
      "Clip Material": "Heavy duty nylon / polypropylene clip",
      "Bar Size Range": "8 mm to 25 mm bars",
      "Feature": "Zero risk of slipping during concrete pour"
    }
  },
  {
    id: "m30-all-in-one-cover-blocks",
    name: "M30 Grade All-in-One Cover Blocks",
    category: "Covers & Spacers",
    subCategory: "M30 Grade Concrete Cover Blocks",
    type: "Consumables",
    image: "/assets/products/m30-all-in-one-cover-blocks.jpg",
    description: "Cost-effective M30 grade multi-dimensional concrete spacer block suitable for standard residential building construction.",
    applications: ["Residential Ground Slabs", "Boundary Walls", "Standard RCC Beams"],
    specifications: {
      "Grade": "M30 Compressive Strength",
      "Multiple Covers": "20/25/30 mm combinations",
      "Economical": "Ideal for general builders and contractors",
      "Curing": "Full 28-day water cured"
    }
  },
  {
    id: "pvc-cover-blocks-circular",
    name: "PVC Cover Blocks Circular",
    category: "Covers & Spacers",
    subCategory: "PVC Cover Blocks & Circular Spacers",
    type: "Consumables",
    image: "/assets/products/pvc-cover-blocks-circular.jpg",
    description: "Circular wheel spacer with center clip that snaps onto reinforcement bars, ensuring uniform 360-degree cover in cylindrical columns and piles.",
    applications: ["Round Columns", "Deep Bored Piles", "Drainage Pipes Concrete Casings"],
    specifications: {
      "Radial Cover": "25 mm, 40 mm, 50 mm, 75 mm",
      "Core Gripper": "Self-centering flexible rebar jaws (fits 8–25mm)",
      "Flow Design": "Ribbed wheel structure allows fluid concrete pass-through",
      "Color": "Black UV stabilized"
    }
  },

  // CATEGORY 6: CONSTRUCTION CONSUMABLES
  {
    id: "foam-sheet",
    name: "Foam Sheet",
    category: "Construction Consumables",
    subCategory: "Foam & Polyethylene Protection",
    type: "Consumables",
    image: "/assets/products/foam-sheet.jpg",
    description: "Closed-cell expanded polyethylene (EPE) foam sheet for expansion joint filler, packing protection and vibration damping.",
    applications: ["Expansion Joint Filler", "Slab Edge Insulation", "Architectural Stone & Tile Packing"],
    specifications: {
      "Thickness": "6 mm, 10 mm, 12 mm, 18 mm, 25 mm",
      "Sheet Size": "1m x 2m / Custom",
      "Structure": "Non-crosslinked closed cell EPE",
      "Resilience": "High compression recovery"
    }
  },
  {
    id: "foam-rolls",
    name: "Foam Rolls",
    category: "Construction Consumables",
    subCategory: "Foam & Polyethylene Protection",
    type: "Consumables",
    image: "/assets/products/foam-rolls.jpg",
    description: "Continuous EPE foam roll used for wrapping pipes, perimeter screed acoustic decoupling and surface cushioning.",
    applications: ["Perimeter Joint Decoupling", "Underlayment Cushioning", "Finished Surface Wrapping"],
    specifications: {
      "Thickness": "1 mm to 10 mm",
      "Roll Width": "1.0 m / 1.2 m",
      "Roll Length": "100 m / 250 m",
      "Density": "20–25 kg/m³"
    }
  },
  {
    id: "ldpe-sheet",
    name: "LDPE Sheet / Polythene Sheet",
    category: "Construction Consumables",
    subCategory: "Foam & Polyethylene Protection",
    type: "Consumables",
    image: "/assets/products/ldpe-sheet.jpg",
    description: "High-grade translucent Low Density Polyethylene sheet for slab damp-proofing, vapor barrier and wet concrete curing wrap.",
    applications: ["Damp Proof Membrane (DPM)", "Concrete Curing Wrap", "Temporary Weather Enclosure"],
    specifications: {
      "Thickness": "100 microns, 150 microns, 250 microns (up to 1000 gauge)",
      "Roll Width": "2 m / 3 m / 4 m (unfolds to double width)",
      "Color": "Transparent / Translucent Natural",
      "Tensile Strength": "High puncture & tear resistance"
    }
  },
  {
    id: "cube-moulds",
    name: "Cube Moulds",
    category: "Construction Consumables",
    subCategory: "Testing & Safety Hardware",
    type: "Consumables",
    image: "/assets/products/cube-moulds.jpg",
    description: "Cast iron precision machined 150mm x 150mm concrete test cube moulds conforming to IS 516 / IS 10086 standards.",
    applications: ["Site Concrete Quality Testing", "Laboratory Compressive Strength Tests", "RMC Batch Verification"],
    specifications: {
      "Dimensions": "150 x 150 x 150 mm",
      "Weight": "Approx 8.5 kg – 9.0 kg heavy cast iron",
      "Machining": "Precision ground internal faces with split clamp base",
      "Tolerance": "Within ± 0.2 mm as per Bureau of Indian Standards"
    }
  },
  {
    id: "chicken-mesh",
    name: "Chicken Mesh",
    category: "Construction Consumables",
    subCategory: "Testing & Safety Hardware",
    type: "Consumables",
    image: "/assets/products/chicken-mesh.jpg",
    description: "Galvanized hexagonal wire netting used across beam-column plaster junctions to eliminate stress cracking.",
    applications: ["Plaster Reinforcement", "RCC-Masonry Joint Crack Prevention", "Pipe Lagging"],
    specifications: {
      "Mesh Size": "1/2 inch, 3/4 inch, 1 inch hexagonal weave",
      "Wire Gauge": "22G / 24G hot dip galvanized wire",
      "Roll Width": "0.9 m / 1.0 m",
      "Roll Length": "15 m / 30 m rolls"
    }
  },
  {
    id: "pvc-rungs",
    name: "PVC Rungs",
    category: "Construction Consumables",
    subCategory: "Testing & Safety Hardware",
    type: "Consumables",
    image: "/assets/products/pvc-rungs.jpg",
    description: "Bright orange high-visibility encapsulated footstep rungs with high tensile steel core for manholes and inspection chambers.",
    applications: ["Manhole Access Ladders", "Water Tank Chambers", "Underground Utility Wells"],
    specifications: {
      "Core": "12 mm / 16 mm Tor steel rebar core",
      "Coating": "Heavy virgin Polypropylene / PVC casing",
      "Grip": "Deep non-skid textured tread with side slip guards",
      "Color": "Safety Signal Orange"
    }
  },
  {
    id: "curing-pipe",
    name: "Curing Pipe",
    category: "Construction Consumables",
    subCategory: "Testing & Safety Hardware",
    type: "Consumables",
    image: "/assets/products/curing-pipe.jpg",
    description: "Heavy duty flexible green braided PVC water hose pipe designed for rugged construction site concrete curing and water transfer.",
    applications: ["RCC Slab & Column Curing", "Site Water Supply", "Pumping Discharge"],
    specifications: {
      "Diameter": "1/2 inch, 3/4 inch, 1 inch, 1.25 inch",
      "Construction": "3-ply polyester yarn reinforced braided PVC",
      "Working Pressure": "Up to 10 kg/cm²",
      "Length": "30 m / 50 m / 100 m rolls"
    }
  },
  {
    id: "rebar-couplers",
    name: "Rebar Couplers",
    category: "Construction Consumables",
    subCategory: "Rebar Protection & Couplers",
    type: "Consumables",
    image: "/assets/products/rebar-couplers.jpg",
    description: "Mechanical threaded parallel rebar splicing couplers designed to achieve 100% full tension bar break strength without lap splices.",
    applications: ["Heavy Column Splices", "Diaphragm Walls", "High-Rise Rebar Congestion Relief"],
    specifications: {
      "Bar Diameters": "16 mm, 20 mm, 25 mm, 28 mm, 32 mm, 40 mm",
      "Standard": "IS 16172 / ACI 318 / BS 8110",
      "Tensile Rating": "Type 2 seismic full tension break (>125% yield)",
      "Material": "Carbon steel seamless forgings"
    }
  },
  {
    id: "rebar-caps",
    name: "Rebar Caps",
    category: "Construction Consumables",
    subCategory: "Rebar Protection & Couplers",
    type: "Consumables",
    image: "/assets/products/rebar-caps.jpg",
    description: "Mushroom safety cap fitted on exposed vertical rebar starter bars to prevent serious puncture and impalement injuries.",
    applications: ["Starter Bar Safety", "OSHA Impalement Hazard Protection", "Column Rebar Tips"],
    specifications: {
      "Suitability": "Fits 12 mm to 25 mm rebars",
      "Material": "Tough impact-resistant polypropylene",
      "Color": "Safety High-Visibility Orange / Yellow",
      "Design": "Internal gripping fins"
    }
  },
  {
    id: "free-size-rebar-caps",
    name: "Free Size Rebar Caps",
    category: "Construction Consumables",
    subCategory: "Rebar Protection & Couplers",
    type: "Consumables",
    image: "/assets/products/free-size-rebar-caps.jpg",
    description: "Universal flexible tapered rebar safety cap designed to fit all diameter bars from 8mm up to 36mm with internal steel plate option.",
    applications: ["Universal Starter Bar Safety", "Heavy Civil Infrastructure Sites"],
    specifications: {
      "Universal Range": "8 mm to 36 mm rebar",
      "Top Plate": "Optional internal steel insert for anti-puncture rating",
      "Visibility": "Fluorescent high visibility color",
      "UV Resistance": "Stabilized for outdoor exposure"
    }
  },
  {
    id: "black-ldpe-sheet",
    name: "Black LDPE Sheet",
    category: "Construction Consumables",
    subCategory: "Foam & Polyethylene Protection",
    type: "Consumables",
    image: "/assets/products/black-ldpe-sheet.jpg",
    description: "Heavy duty opaque black polythene film providing UV-block, sub-base water barrier and dust screen protection on site.",
    applications: ["Sub-Base Vapor Barrier", "Ground Floor Water Barrier", "Roof Waterproofing Protection"],
    specifications: {
      "Thickness": "200 to 500 microns",
      "Opacity": "100% Light blocking black",
      "Material": "Virgin and recycled LDPE with carbon black stabilizer",
      "Roll Dimensions": "3m x 50m / 4m x 50m"
    }
  },

  // CATEGORY 7: TILE PROTECTION & ACCESSORIES
  {
    id: "tile-protection-sheet",
    name: "Tile Protection Sheet",
    category: "Tile Protection & Accessories",
    subCategory: "Floor Protection Sheets",
    type: "Consumables",
    image: "/assets/products/tile-protection-sheet.png",
    description: "Multi-layer padded floor protection mat (blue roll) designed to safeguard expensive vitrified tiles, marble and wooden floors during painting and interior work.",
    applications: ["Finished Floor Protection", "Marble & Italian Stone Guard", "Interior Fit-out Work"],
    specifications: {
      "Construction": "High density foam laminated with waterproof woven fabric",
      "Thickness": "1.5 mm, 2.0 mm, 3.0 mm",
      "Roll Size": "1 m x 20 m / 1 m x 50 m",
      "Benefits": "Anti-scratch, waterproof, reusable 3–4 times"
    }
  },
  {
    id: "bubble-guard-sheet",
    name: "Bubble Guard Sheet",
    category: "Tile Protection & Accessories",
    subCategory: "Floor Protection Sheets",
    type: "Consumables",
    image: "/assets/products/bubble-guard-sheet.jpeg",
    description: "Circular honeycomb air-bubble polypropylene board offering high point-load and impact cushioning for luxury flooring.",
    applications: ["High-impact Floor Protection", "Heavy Material Movement Over Tiles", "Glass & Countertop Cover"],
    specifications: {
      "Thickness": "2 mm, 3 mm, 4 mm",
      "Colors": "Yellow, Blue, White, Grey",
      "Weight": "350 GSM to 800 GSM",
      "Impact Resistance": "Withstands falling hammers, ladders and scaffold legs"
    }
  },
  {
    id: "fibre-mesh-self-adhesive-tape",
    name: "Fibre Mesh Self-Adhesive Tape",
    category: "Tile Protection & Accessories",
    subCategory: "Floor Protection Sheets",
    type: "Consumables",
    image: "/assets/products/fibre-mesh-self-adhesive-tape.jpg",
    description: "Self-adhesive woven alkali-resistant fiberglass tape for sealing protection sheet seams and drywall joints seamlessly.",
    applications: ["Tile Protection Sheet Seaming", "Drywall Joint Finishing", "Plaster Crack Sealing"],
    specifications: {
      "Width": "50 mm (2 inch) / 75 mm / 100 mm",
      "Length": "45 m / 90 m rolls",
      "Adhesive": "Pressure sensitive water-based acrylic",
      "Weave": "9x9 mesh per inch alkali resistant"
    }
  },
  {
    id: "tile-spacers",
    name: "Tile Spacers",
    category: "Tile Protection & Accessories",
    subCategory: "Tile Levelling & Spacing Systems",
    type: "Consumables",
    image: "/assets/products/tile-spacers.jpeg",
    description: "Precision cross and T-shaped plastic spacers to maintain exact uniform grout joints for floor and wall tile installations.",
    applications: ["Vitrified Tile Installation", "Wall Tile Grouting", "Granite & Marble Paving"],
    specifications: {
      "Joint Widths": "2 mm, 3 mm, 4 mm, 5 mm, 6 mm, 8 mm",
      "Shape": "Cross (+) and T configuration",
      "Material": "Precision molded virgin white plastic",
      "Packaging": "Pouch of 100 / 250 / 500 pcs"
    }
  },
  {
    id: "tile-levelling-clips-wedges",
    name: "Tile Levelling Clips & Wedges",
    category: "Tile Protection & Accessories",
    subCategory: "Tile Levelling & Spacing Systems",
    type: "Consumables",
    image: "/assets/products/tile-levelling-clips-wedges.jpg",
    description: "Professional two-part tile leveling system consisting of disposable spacing clips and reusable red wedges to eliminate lippage.",
    applications: ["Large Format Tile Laying", "Zero Lippage Marble Floors", "Wall Cladding"],
    specifications: {
      "Clip Thickness": "1.0 mm, 1.5 mm, 2.0 mm, 3.0 mm",
      "Suitable Tile Thickness": "3 mm to 16 mm tiles",
      "Wedge": "Reusable high-tensile red wedge with serrated ramp",
      "Mechanism": "Plier-tensioned quick snap removal after adhesive sets"
    }
  },

  // CATEGORY 8: SAFETY EQUIPMENTS
  {
    id: "rubber-hand-gloves",
    name: "Rubber Hand Gloves (Sentouch / Heavy Duty)",
    category: "Safety Equipments",
    subCategory: "Hand Protection",
    type: "Safety",
    image: "/assets/products/rubber-hand-gloves.png",
    description: "Heavy-duty industrial rubber safety gloves offering superior grip, chemical abrasion resistance, and palm protection for concrete handling and steel tying.",
    applications: ["Concrete Pouring & Masonry", "Chemical & Solvent Handling", "Material Handling & Formwork", "Site Worker Hand Protection"],
    specifications: {
      "Brand / Quality": "Sentouch / Heavy-Duty Industrial Grade",
      "Material": "Reinforced Natural Latex / Nitrile blend",
      "Grip Surface": "Textured diamond anti-slip grip",
      "Available Sizes": "Medium (10\"), Large (12\"), Extra-Large (14\")",
      "Standard Compliance": "EN 388 & IS:4770 mechanical risk certified"
    }
  },
  {
    id: "tiger-safety-shoes",
    name: "Safety Shoes",
    category: "Safety Equipments",
    subCategory: "Foot Protection",
    type: "Safety",
    image: "/assets/products/safety-shoes.png",
    description: "ISI certified industrial construction safety boots with 200J steel toe impact guard, puncture-resistant sole, and anti-slip double-density PU tread.",
    applications: ["Construction Site Safety", "Scaffolding & Structural Erection", "Civil Infrastructure Projects", "Heavy Industrial Operations"],
    specifications: {
      "Brand": "Tiger Industrial Safety Footwear",
      "Toe Protection": "200 Joules impact-resistant steel toe cap",
      "Sole Construction": "Direct-injected double density PU (Oil & Acid resistant)",
      "Certification": "ISI Marked (IS:15298 Part-2) & CE Certified",
      "Upper": "Genuine breathable grain leather with padded collar",
      "Available Sizes": "UK / IND 5 to 11"
    }
  },
  {
    id: "safety-reflective-jackets",
    name: "Safety Reflective Jackets",
    category: "Safety Equipments",
    subCategory: "High-Visibility Apparel",
    type: "Safety",
    image: "/assets/products/safety-reflective-jackets.png",
    description: "High-visibility fluorescent neon safety vest with 360-degree retroreflective glass bead tapes. Ensures day and night visibility for site engineers, supervisors, and labor.",
    applications: ["Night & Low-Light Construction", "Traffic & Crane Operations", "Site Engineering & Supervision", "Monolithic Pouring Sites"],
    specifications: {
      "Fabric Material": "100% Breathable Fluorescent Polyester mesh",
      "Reflective Band": "2-inch high-luminance micro-prismatic tape (360°)",
      "Closure Type": "Reinforced front velcro / zipper closure",
      "Standard Compliance": "EN ISO 20471 Class 2 compliant",
      "Available Colors": "Fluorescent Neon Green & High-Vis Orange"
    }
  },
  {
    id: "industrial-safety-helmets",
    name: "Industrial Safety Helmets",
    category: "Safety Equipments",
    subCategory: "Head Protection",
    type: "Safety",
    image: "/assets/products/industrial-safety-helmets.png",
    description: "Heavy-duty HDPE industrial safety helmets equipped with 6-point ratchet suspension and sweatband. Protects against vertical impact and falling debris on construction sites.",
    applications: ["Working at Heights & Scaffolding", "Structural Steel & Formwork", "Excavation & Crane Operations", "Site Visitors & Engineering Staff"],
    specifications: {
      "Shell Material": "High-Density Polyethylene (HDPE) impact shell",
      "Harness Type": "6-point adjustable suspension with ratchet wheel",
      "Standard Compliance": "IS:2925 : 1984 & CE Marked",
      "Impact Resistance": "Tested to withstand over 5 kN shock load",
      "Colors Available": "Yellow (Labor), White (Engineers), Blue (Supervisors)"
    }
  }
];
