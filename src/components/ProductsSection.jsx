// import React, { useState, useMemo, useEffect } from 'react';

// import './ProductsSection.css';

// import { 

//   Filter, Search, Grid, List, ChevronDown, ChevronUp, 

//   RotateCcw, Eye, ArrowRight, X, CheckCircle, ShieldCheck, 

//   Sparkles, Layers, Link2, Box, Package, MessageCircle, HardHat

// } from 'lucide-react';

// import { categoriesData, productsData } from '../data/productsData';

// import { companyInfo } from '../data/companyData';

// export default function ProductsSection() {

//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const [expandedCategories, setExpandedCategories] = useState({

//     'mivan-formwork': false,

//     'plywood-shuttering': false,

//     'scaffolding-accessories': false,

//     'scaffolding-couplers': false,

//     'covers-spacers': false,

//     'construction-consumables': false,

//     'tile-protection': false,

//     'safety-equipments': false

//   });

//   const [selectedTypes, setSelectedTypes] = useState([]);

//   const [searchQuery, setSearchQuery] = useState('');

//   const [sortBy, setSortBy] = useState('name-asc');

//   const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

//   const [currentPage, setCurrentPage] = useState(1);

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {

//     if (selectedProduct) {

//       document.body.style.overflow = 'hidden';

//       const handleKeyDown = (e) => {

//         if (e.key === 'Escape') setSelectedProduct(null);

//       };

//       window.addEventListener('keydown', handleKeyDown);

//       return () => {

//         document.body.style.overflow = 'unset';

//         window.removeEventListener('keydown', handleKeyDown);

//       };

//     }

//   }, [selectedProduct]);

//   const itemsPerPage = 12;

//   // Toggle category collapse

//   const toggleCategoryExpand = (catId) => {

//     setExpandedCategories(prev => ({

//       ...prev,

//       [catId]: !prev[catId]

//     }));

//   };

//   // Toggle product type filter

//   const handleTypeToggle = (type) => {

//     setSelectedTypes(prev => 

//       prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]

//     );

//     setCurrentPage(1);

//   };

//   // Clear all filters

//   const handleClearFilters = () => {

//     setSelectedCategory('All');

//     setSelectedTypes([]);

//     setSearchQuery('');

//     setSortBy('name-asc');

//     setCurrentPage(1);

//   };

//   // Filtered & Sorted Products

//   const filteredProducts = useMemo(() => {

//     let result = [...productsData];

//     // Filter by Category

//     if (selectedCategory !== 'All') {

//       result = result.filter(p => p.category === selectedCategory);

//     }

//     // Filter by Product Type

//     if (selectedTypes.length > 0) {

//       result = result.filter(p => selectedTypes.includes(p.type));

//     }

//     // Filter by Search Query

//     if (searchQuery.trim() !== '') {

//       const q = searchQuery.toLowerCase();

//       result = result.filter(p => 

//         p.name.toLowerCase().includes(q) ||

//         p.description.toLowerCase().includes(q) ||

//         p.subCategory.toLowerCase().includes(q)

//       );

//     }

//     // Sort Products

    
//     // Sort Products
//     if (sortBy === 'name-asc') {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy === 'name-desc') {
//       result.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortBy === 'category') {
//       result.sort((a, b) => a.category.localeCompare(b.category));
//     }

//     // Always show Venlub Shuttering Oil first
//     // when Mivan Formwork Accessories is selected
//     if (selectedCategory === 'Mivan Formwork Accessories') {
//       result.sort((a, b) => {
//         const aIsVenlub = a.id === 'venlub-shuttering-oil';
//         const bIsVenlub = b.id === 'venlub-shuttering-oil';

//         if (aIsVenlub && !bIsVenlub) return -1;
//         if (!aIsVenlub && bIsVenlub) return 1;

//         return 0;
//       });
//     }

//     return result;


//   }, [selectedCategory, selectedTypes, searchQuery, sortBy]);

//   // Pagination calculation

//   const totalItems = filteredProducts.length;

//   const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

//   const startIndex = (currentPage - 1) * itemsPerPage;

//   const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

//   // Send WhatsApp enquiry

//   const handleWhatsAppEnquiry = (product, e) => {

//     if (e) e.stopPropagation();

//     const message = encodeURIComponent(

//       `Hello Ayush Enterprises, I am interested in inquiring about "${product.name}" (${product.category}). Please share current pricing, technical specs and stock availability.`

//     );

//     window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');

//   };

//   return (

//     <section id="products" className="py-16 sm:py-20 bg-[#F8FAFC]">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}

//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

//           <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#002653]/5 border border-[#002653]/10 text-[#002653] text-xs font-bold tracking-wider uppercase mb-3">

//             <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>

//             <span>Product Catalogue</span>

//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002653] tracking-tight">

//             Construction Materials & Accessories

//           </h2>

//           <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">

//             High-grade shuttering accessories, scaffolding couplers, Mivan formwork systems and consumables.

//           </p>

//         </div>

//         {/* Catalogue Body: Left Sidebar + Right Products Grid */}

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

//           {/* LEFT SIDEBAR: Clean, modern unified card */}

//           <div className="lg:col-span-3 space-y-5">

//             {/* Unified Filter Card */}

//             <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">

//               {/* Sidebar Header */}

//               <div className="bg-[#002653] px-4 sm:px-5 py-4 flex items-center justify-between text-white">

//                 <div className="flex items-center space-x-2.5 font-bold text-sm tracking-wide">

//                   <Filter className="w-4 h-4 text-[#FFA500]" />

//                   <span>Categories</span>

//                 </div>

//                 {selectedCategory !== 'All' && (

//                   <button 

//                     onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}

//                     className="text-xs text-[#FFA500] hover:text-white font-semibold transition-colors cursor-pointer"

//                   >

//                     Reset

//                   </button>

//                 )}

//               </div>

//               {/* Categories List */}

//               <div className="p-2 sm:p-2.5 divide-y divide-slate-100">

//                 {/* "All Categories" Item */}

//                 <button

//                   onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}

//                   className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all duration-150 cursor-pointer ${

//                     selectedCategory === 'All' 

//                       ? 'bg-[#002653] text-white shadow-xs' 

//                       : 'text-slate-700 hover:bg-slate-50'

//                   }`}

//                 >

//                   <span>All Categories</span>

//                   <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${

//                     selectedCategory === 'All' ? 'bg-[#FFA500] text-[#002653]' : 'bg-slate-100 text-slate-500'

//                   }`}>

//                     {productsData.length}

//                   </span>

//                 </button>

//                 {/* Individual Categories */}

//                 {categoriesData.map((category) => {

//                   const isExpanded = expandedCategories[category.id];

//                   const isSelected = selectedCategory === category.name;

//                   const catCount = productsData.filter(p => p.category === category.name).length;

//                   return (

//                     <div key={category.id} className="pt-1.5 pb-1">

//                       {/* Category Header Row */}

//                       <div className="flex items-center justify-between">

//                         <button

//                           onClick={() => {

//                             setSelectedCategory(category.name);

//                             setCurrentPage(1);

//                           }}

//                           className={`flex-1 text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${

//                             isSelected 

//                               ? 'text-[#002653] font-bold bg-[#002653]/10' 

//                               : 'text-slate-700 hover:text-[#002653] hover:bg-slate-50'

//                           }`}

//                         >

//                           <span className="truncate pr-1">{category.name}</span>

//                           <span className="text-[10px] text-slate-400 font-medium ml-1">({catCount})</span>

//                         </button>

//                         <button

//                           onClick={() => toggleCategoryExpand(category.id)}

//                           className="p-1.5 text-slate-400 hover:text-[#002653] rounded transition-colors cursor-pointer"

//                           aria-label="Expand category"

//                         >

//                           {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}

//                         </button>

//                       </div>

//                       {/* Subcategories (Expanded view with clean left border tree) */}

//                       {isExpanded && (

//                         <div className="ml-4 pl-3 border-l-2 border-amber-300/60 my-1 py-1 space-y-1 text-xs text-slate-500">

//                           {category.subcategories.map((sub, sIdx) => (

//                             <div 

//                               key={sIdx}

//                               onClick={() => {

//                                 setSelectedCategory(category.name);

//                                 setSearchQuery(sub);

//                                 setCurrentPage(1);

//                               }}

//                               className="cursor-pointer hover:text-[#002653] hover:font-semibold py-1 px-1 rounded transition-colors truncate"

//                             >

//                               {sub}

//                             </div>

//                           ))}

//                         </div>

//                       )}

//                     </div>

//                   );

//                 })}

//               </div>

//               {/* Product Type Filter Sub-card inside the same clean container */}

//               <div className="border-t border-slate-200/90 p-4 bg-slate-50/50">

//                 <div className="flex items-center justify-between mb-2.5">

//                   <div className="text-xs font-bold text-[#002653] uppercase tracking-wider">Product Type</div>

//                   {selectedTypes.length > 0 && (

//                     <button 

//                       onClick={() => setSelectedTypes([])}

//                       className="text-[11px] text-[#FFA500] hover:underline font-semibold cursor-pointer"

//                     >

//                       Clear

//                     </button>

//                   )}

//                 </div>

//                 <div className="grid grid-cols-2 gap-1.5">

//                   {['Accessories', 'Couplers', 'Formwork', 'Consumables'].map((type) => {

//                     const isChecked = selectedTypes.includes(type);

//                     return (

//                       <button

//                         key={type}

//                         type="button"

//                         onClick={() => handleTypeToggle(type)}

//                         className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center transition-all cursor-pointer border ${

//                           isChecked 

//                             ? 'bg-[#002653] text-white border-[#002653] shadow-xs' 

//                             : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'

//                         }`}

//                       >

//                         {type}

//                       </button>

//                     );

//                   })}

//                 </div>

//                 {/* Reset All Filters button */}

//                 {(selectedCategory !== 'All' || selectedTypes.length > 0 || searchQuery !== '') && (

//                   <button

//                     onClick={handleClearFilters}

//                     className="w-full mt-3 py-2 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#002653] hover:bg-white transition-colors cursor-pointer flex items-center justify-center bg-white shadow-xs"

//                   >

//                     <RotateCcw className="w-3.5 h-3.5 mr-1.5 text-slate-400" />

//                     <span>Reset All Filters</span>

//                   </button>

//                 )}

//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE: Products Header Controls + Grid */}

//           <div className="lg:col-span-9">

//             {/* Top Controls Bar - Modern rounded card */}

//             <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-3.5 sm:p-4 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3.5">

//               {/* Product Count Display */}

//               <div className="text-xs sm:text-sm font-medium text-slate-600 flex items-center space-x-2">

//                 <span>Showing</span>

//                 <span className="px-2 py-0.5 rounded-md bg-[#002653]/5 text-[#002653] font-bold text-xs">

//                   {totalItems === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, totalItems)}

//                 </span>

//                 <span>of</span>

//                 <span className="text-[#002653] font-bold">120+ Products</span>

//                 {selectedCategory !== 'All' && (

//                   <span className="text-xs font-semibold text-[#FFA500] pl-1">

//                     • {selectedCategory}

//                   </span>

//                 )}

//               </div>

//               {/* Right Side: Search + Sort + View Mode */}

//               <div className="flex flex-wrap items-center gap-2.5">

//                 {/* Search Input */}

//                 <div className="relative min-w-[190px] sm:min-w-[230px] flex-1 sm:flex-initial">

//                   <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

//                   <input 

//                     type="text"

//                     value={searchQuery}

//                     onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}

//                     placeholder="Search materials..."

//                     className="w-full pl-9 pr-7 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#002653] focus:bg-white text-slate-800 transition-all"

//                   />

//                   {searchQuery && (

//                     <button 

//                       onClick={() => setSearchQuery('')}

//                       className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs w-4 h-4 flex items-center justify-center cursor-pointer"

//                     >

//                       ×

//                     </button>

//                   )}

//                 </div>

//                 {/* Sort By Dropdown */}

//                 <div className="flex items-center text-xs">

//                   <select

//                     value={sortBy}

//                     onChange={(e) => setSortBy(e.target.value)}

//                     className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-3 rounded-xl font-medium text-xs focus:outline-none focus:ring-1 focus:ring-[#002653] cursor-pointer"

//                   >

//                     <option value="name-asc">Sort: Name (A–Z)</option>

//                     <option value="name-desc">Sort: Name (Z–A)</option>

//                     <option value="category">Sort: Category</option>

//                   </select>

//                 </div>

//                 {/* Grid / List View Toggle */}

//                 <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">

//                   <button

//                     onClick={() => setViewMode('grid')}

//                     className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${

//                       viewMode === 'grid' 

//                         ? 'bg-[#002653] text-white shadow-xs' 

//                         : 'text-slate-500 hover:text-[#002653]'

//                     }`}

//                     aria-label="Grid view"

//                   >

//                     <Grid className="w-4 h-4" />

//                   </button>

//                   <button

//                     onClick={() => setViewMode('list')}

//                     className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${

//                       viewMode === 'list' 

//                         ? 'bg-[#002653] text-white shadow-xs' 

//                         : 'text-slate-500 hover:text-[#002653]'

//                     }`}

//                     aria-label="List view"

//                   >

//                     <List className="w-4 h-4" />

//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* PRODUCT GRID / LIST */}

//             {paginatedProducts.length === 0 ? (

//               <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">

//                 <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />

//                 <h3 className="text-base font-bold text-slate-700">No products match your criteria</h3>

//                 <p className="text-xs text-slate-400 mt-1 mb-4">Try clearing your search term or adjusting filters.</p>

//                 <button

//                   onClick={handleClearFilters}

//                   className="px-5 py-2.5 bg-[#002653] text-white text-xs font-semibold rounded-xl hover:bg-[#001733] cursor-pointer transition-colors shadow-sm"

//                 >

//                   Reset All Filters

//                 </button>

//               </div>

//             ) : viewMode === 'grid' ? (

//               /* Beautiful Grid Layout */

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

//                 {paginatedProducts.map((product) => (

//                   <div

//                     key={product.id}

//                     className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#FFA500]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"

//                   >

//                     {/* Top: Image & Header */}

//                     <div>

//                       {/* Product Image Area with Subtle Gradient & Inner Frame */}

//                       <div 

//                         onClick={() => setSelectedProduct(product)}

//                         className="relative w-full h-44 bg-gradient-to-b from-slate-50/90 to-slate-100/50 p-3.5 flex items-center justify-center cursor-pointer overflow-hidden border-b border-slate-100"

//                       >

//                         <img 

//                           src={product.image} 

//                           alt={product.name}

//                           className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-300"

//                           loading="lazy"

//                         />

//                         {/* Elegant Type Badge */}

//                         <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-[#002653] shadow-xs border border-slate-200/70 backdrop-blur-xs">

//                           {product.type}

//                         </span>

//                         {/* Quick View Button on Hover */}

//                         <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 text-slate-500 hover:text-[#002653] shadow-xs border border-slate-200/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">

//                           <Eye className="w-3.5 h-3.5" />

//                         </span>

//                         {/* Authorized Distributor Badge */}

//                         {product.badge && (

//                           <span className="absolute bottom-1.5 inset-x-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-[#002653]/95 text-[#FFA500] shadow-xs border border-[#FFA500]/40 backdrop-blur-xs text-center truncate z-10" title={product.badge}>

//                             ★ {product.badge}

//                           </span>

//                         )}

//                       </div>

//                       {/* Product Text Content */}

//                       <div className="p-4 pb-3">

//                         <div className="text-[10px] font-bold text-[#FFA500] uppercase tracking-wider mb-1 truncate">

//                           {product.subCategory}

//                         </div>

//                         <h3 

//                           onClick={() => setSelectedProduct(product)}

//                           className="text-sm font-bold text-[#002653] line-clamp-1 hover:text-[#FFA500] cursor-pointer transition-colors leading-snug"

//                           title={product.name}

//                         >

//                           {product.name}

//                         </h3>

//                         <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed min-h-[32px]">

//                           {product.description}

//                         </p>

//                       </div>

//                     </div>

//                     {/* Symmetrical, Balanced Action Buttons */}

//                     <div className="p-4 pt-0 grid grid-cols-2 gap-2">

//                       <button

//                         type="button"

//                         onClick={() => setSelectedProduct(product)}

//                         className="w-full py-2 px-1 text-center bg-slate-50 hover:bg-slate-100 text-[#002653] border border-slate-200 font-semibold text-xs rounded-xl transition-all cursor-pointer shadow-2xs hover:border-slate-300"

//                       >

//                         View Details

//                       </button>

//                       <button

//                         type="button"

//                         onClick={(e) => handleWhatsAppEnquiry(product, e)}

//                         className="w-full py-2 px-1 flex items-center justify-center bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-xs rounded-xl shadow-xs transition-all duration-150 cursor-pointer"

//                       >

//                         <svg className="w-3.5 h-3.5 mr-1 fill-current flex-shrink-0" viewBox="0 0 24 24">

//                           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

//                         </svg>

//                         <span>Enquire</span>

//                       </button>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             ) : (

//               /* List View Mode */

//               <div className="space-y-3.5">

//                 {paginatedProducts.map((product) => (

//                   <div

//                     key={product.id}

//                     className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col sm:flex-row items-center justify-between gap-4"

//                   >

//                     <div className="flex items-center space-x-4 w-full sm:w-auto">

//                       <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 flex items-center justify-center flex-shrink-0 border border-slate-100">

//                         <img 

//                           src={product.image} 

//                           alt={product.name} 

//                           className="max-h-full max-w-full object-contain"

//                         />

//                       </div>

//                       <div>

//                         <div className="flex flex-wrap items-center gap-2">

//                           <span className="text-[11px] font-bold text-[#FFA500] uppercase tracking-wider">{product.category}</span>

//                           {product.badge && (

//                             <span className="text-[10px] font-bold bg-[#002653] text-[#FFA500] px-2 py-0.5 rounded-md border border-[#FFA500]/30">

//                               ★ {product.badge}

//                             </span>

//                           )}

//                         </div>

//                         <h3 className="text-sm font-bold text-[#002653] hover:text-[#FFA500] cursor-pointer transition-colors" onClick={() => setSelectedProduct(product)}>

//                           {product.name}

//                         </h3>

//                         <p className="text-xs text-slate-500 line-clamp-1 max-w-lg mt-0.5">{product.description}</p>

//                       </div>

//                     </div>

//                     <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">

//                       <button

//                         onClick={() => setSelectedProduct(product)}

//                         className="py-2 px-3.5 bg-slate-50 text-[#002653] border border-slate-200 hover:bg-slate-100 text-xs font-semibold rounded-xl cursor-pointer transition-colors"

//                       >

//                         View Details

//                       </button>

//                       <button

//                         onClick={(e) => handleWhatsAppEnquiry(product, e)}

//                         className="py-2 px-3.5 bg-[#FFA500] hover:bg-[#FF9100] text-[#002653] font-bold text-xs rounded-xl flex items-center cursor-pointer shadow-xs transition-colors"

//                       >

//                         <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 24 24">

//                           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

//                         </svg>

//                         <span>Enquire</span>

//                       </button>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             )}

//             {/* Pagination Component */}

//             {totalPages > 1 && (

//               <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-center space-x-2">

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (

//                   <button

//                     key={pageNum}

//                     onClick={() => {

//                       setCurrentPage(pageNum);

//                       document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });

//                     }}

//                     className={`w-9 h-9 rounded-xl font-bold text-xs transition-all cursor-pointer ${

//                       currentPage === pageNum

//                         ? 'bg-[#002653] text-white shadow-xs'

//                         : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'

//                     }`}

//                   >

//                     {pageNum}

//                   </button>

//                 ))}

//                 {currentPage < totalPages && (

//                   <>

//                     <button

//                       onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}

//                       className="w-9 h-9 rounded-xl bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"

//                       title="Next Page"

//                     >


//                     </button>

//                     <button

//                       onClick={() => setCurrentPage(totalPages)}

//                       className="px-3 h-9 rounded-xl bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"

//                       title="Last Page"

//                     >

//                       Last »

//                     </button>

//                   </>

//                 )}

//               </div>

//             )}

//           </div>

//         </div>

//       </div>

//       {/* Product Detail Modal */}

//       {selectedProduct && (

//         <div 

//           className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"

//           onClick={() => setSelectedProduct(null)}

//         >

//           <div 

//             className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[88vh] overflow-y-auto border border-slate-200 my-auto animate-in zoom-in-95 duration-200"

//             onClick={(e) => e.stopPropagation()}

//           >

//             <button

//               type="button"

//               onClick={() => setSelectedProduct(null)}

//               aria-label="Close product details"

//               className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"

//             >

//               <X className="w-5 h-5" />

//             </button>

//             <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">

//               <div className="sm:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl p-4 flex items-center justify-center border border-slate-100 h-56">

//                 <img
//                     src={selectedProduct.detailImage || selectedProduct.image}
//                     alt={selectedProduct.name}
//                     className="max-h-full max-w-full object-contain"
//                 />

//               </div>

//               <div className="sm:col-span-7">

//                 {selectedProduct.badge && (

//                   <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-lg bg-[#002653] text-[#FFA500] text-xs font-bold border border-[#FFA500]/40 shadow-xs">

//                     <CheckCircle className="w-3.5 h-3.5 text-[#FFA500] shrink-0" />

//                     <span>{selectedProduct.badge}</span>

//                   </div>

//                 )}

//                 <div className="text-xs font-bold text-[#FFA500] uppercase tracking-wider mb-1">

//                   {selectedProduct.category}

//                 </div>

//                 <h3 className="text-xl sm:text-2xl font-extrabold text-[#002653] leading-tight mb-2">

//                   {selectedProduct.name}

//                 </h3>

//                 <p className="text-xs text-slate-400 font-medium mb-3">

//                   Sub-System: {selectedProduct.subCategory}

//                 </p>

//                 <p className="text-sm text-slate-600 leading-relaxed mb-4">

//                   {selectedProduct.description}

//                 </p>

//               </div>

//             </div>

//             {/* Specifications: Image (for MS Wall Tie or products with specificationImage) or Table */}

//             {selectedProduct.specificationImage || selectedProduct.id === 'ms-wall-tie' ? (

//               <div className="mb-6">

//                 <div className="flex items-center justify-between mb-2">

//                   <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">

//                     Technical Specifications

//                   </h4>

//                   <a 

//                     href={selectedProduct.specificationImage || '/assets/products/ms-wall-tie-specs.jpg'} 

//                     target="_blank" 

//                     rel="noopener noreferrer"

//                     className="text-xs text-[#002653] hover:text-[#FFA500] font-semibold transition-colors inline-flex items-center gap-1 cursor-pointer"

//                   >

//                     View Full Image ↗

//                   </a>

//                 </div>

//                 <div className="bg-white rounded-xl border border-slate-200 p-2 sm:p-4 overflow-hidden flex items-center justify-center">

//                   <img 

//                     src={selectedProduct.specificationImage || '/assets/products/ms-wall-tie-specs.jpg'} 

//                     alt={`${selectedProduct.name} Technical Specifications`}

//                     className="w-full max-h-[500px] object-contain rounded-lg shadow-2xs"

//                   />

//                 </div>

//               </div>

//             ) : selectedProduct.specifications ? (

//               <div className="mb-6">

//                 <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">

//                   Technical Specifications

//                 </h4>

//                 <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200 text-xs">

//                   {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (

//                     <div key={idx} className="flex justify-between py-2 px-3">

//                       <span className="font-medium text-slate-500">{key}</span>

//                       <span className="font-bold text-slate-800 text-right">{value}</span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             ) : null}

//             {/* Modal WhatsApp Enquiry Button */}

//             <div className="flex justify-end pt-2">

//               <button

//                 onClick={(e) => handleWhatsAppEnquiry(selectedProduct, e)}

//                 className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"

//               >

//                 <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">

//                   <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

//                 </svg>

//                 <span>Enquire via WhatsApp</span>

//               </button>

//             </div>

//           </div>

//         </div>

//       )}

//     </section>

//   );

// }





import React, { useState, useMemo, useEffect } from 'react';

import './ProductsSection.css';

import { 

  Filter, Search, Grid, List, ChevronDown, ChevronUp, 

  RotateCcw, Eye, ArrowRight, X, CheckCircle, ShieldCheck, 

  Sparkles, Layers, Link2, Box, Package, MessageCircle, HardHat

} from 'lucide-react';

import { categoriesData, productsData } from '../data/productsData';

import { companyInfo } from '../data/companyData';

export default function ProductsSection() {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [expandedCategories, setExpandedCategories] = useState({

    'mivan-formwork': false,

    'plywood-shuttering': false,

    'scaffolding-accessories': false,

    'scaffolding-couplers': false,

    'covers-spacers': false,

    'construction-consumables': false,

    'tile-protection': false,

    'safety-equipments': false

  });

  const [selectedTypes, setSelectedTypes] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [sortBy, setSortBy] = useState('name-asc');

  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {

    if (selectedProduct) {

      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {

        if (e.key === 'Escape') setSelectedProduct(null);

      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {

        document.body.style.overflow = 'unset';

        window.removeEventListener('keydown', handleKeyDown);

      };

    }

  }, [selectedProduct]);

  const itemsPerPage = 12;

  // Toggle category collapse

  const toggleCategoryExpand = (catId) => {

    setExpandedCategories(prev => ({

      ...prev,

      [catId]: !prev[catId]

    }));

  };

  // Toggle product type filter

  const handleTypeToggle = (type) => {

    setSelectedTypes(prev => 

      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]

    );

    setCurrentPage(1);

  };

  // Clear all filters

  const handleClearFilters = () => {

    setSelectedCategory('All');

    setSelectedTypes([]);

    setSearchQuery('');

    setSortBy('name-asc');

    setCurrentPage(1);

  };

  // Filtered & Sorted Products

  const filteredProducts = useMemo(() => {

    let result = [...productsData];

    // Filter by Category

    if (selectedCategory !== 'All') {

      result = result.filter(p => p.category === selectedCategory);

    }

    // Filter by Product Type

    if (selectedTypes.length > 0) {

      result = result.filter(p => selectedTypes.includes(p.type));

    }

    // Filter by Search Query

    if (searchQuery.trim() !== '') {

      const q = searchQuery.toLowerCase();

      result = result.filter(p => 

        p.name.toLowerCase().includes(q) ||

        p.description.toLowerCase().includes(q) ||

        p.subCategory.toLowerCase().includes(q)

      );

    }

    // Sort Products

    // Sort Products

    if (sortBy === 'name-asc') {

      result.sort((a, b) => a.name.localeCompare(b.name));

    } else if (sortBy === 'name-desc') {

      result.sort((a, b) => b.name.localeCompare(a.name));

    } else if (sortBy === 'category') {

      result.sort((a, b) => a.category.localeCompare(b.category));

    }

    // Always show Venlub Shuttering Oil first

    // when Mivan Formwork Accessories is selected

    if (selectedCategory === 'Mivan Formwork Accessories') {

      result.sort((a, b) => {

        const aIsVenlub = a.id === 'venlub-shuttering-oil';

        const bIsVenlub = b.id === 'venlub-shuttering-oil';

        if (aIsVenlub && !bIsVenlub) return -1;

        if (!aIsVenlub && bIsVenlub) return 1;

        return 0;

      });

    }

    return result;

  }, [selectedCategory, selectedTypes, searchQuery, sortBy]);

  // Pagination calculation

  const totalItems = filteredProducts.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Send WhatsApp enquiry

  const handleWhatsAppEnquiry = (product, e) => {

    if (e) e.stopPropagation();

    const message = encodeURIComponent(

      `Hello Ayush Enterprises, I am interested in inquiring about "${product.name}" (${product.category}). Please share current pricing, technical specs and stock availability.`

    );

    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');

  };

  return (

    <section id="products" className="py-16 sm:py-20 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#002653]/5 border border-[#002653]/10 text-[#002653] text-xs font-bold tracking-wider uppercase mb-3">

            <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>

            <span>Product Catalogue</span>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002653] tracking-tight">

            Construction Materials & Accessories

          </h2>

          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">

            High-grade shuttering accessories, scaffolding couplers, Mivan formwork systems and consumables.

          </p>

        </div>

        {/* Catalogue Body: Left Sidebar + Right Products Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT SIDEBAR: Clean, modern unified card */}

          <div className="hidden lg:block lg:col-span-3 space-y-5">

            {/* Unified Filter Card */}

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">

              {/* Sidebar Header */}

              <div className="bg-[#002653] px-4 sm:px-5 py-4 flex items-center justify-between text-white">

                <div className="flex items-center space-x-2.5 font-bold text-sm tracking-wide">

                  <Filter className="w-4 h-4 text-[#FFA500]" />

                  <span>Categories</span>

                </div>

                {selectedCategory !== 'All' && (

                  <button 

                    onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}

                    className="text-xs text-[#FFA500] hover:text-white font-semibold transition-colors cursor-pointer"

                  >

                    Reset

                  </button>

                )}

              </div>

              {/* Categories List */}

              <div className="p-2 sm:p-2.5 divide-y divide-slate-100">

                {/* "All Categories" Item */}

                <button

                  onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}

                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all duration-150 cursor-pointer ${

                    selectedCategory === 'All' 

                      ? 'bg-[#002653] text-white shadow-xs' 

                      : 'text-slate-700 hover:bg-slate-50'

                  }`}

                >

                  <span>All Categories</span>

                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${

                    selectedCategory === 'All' ? 'bg-[#FFA500] text-[#002653]' : 'bg-slate-100 text-slate-500'

                  }`}>

                    {productsData.length}

                  </span>

                </button>

                {/* Individual Categories */}

                {categoriesData.map((category) => {

                  const isExpanded = expandedCategories[category.id];

                  const isSelected = selectedCategory === category.name;

                  const catCount = productsData.filter(p => p.category === category.name).length;

                  return (

                    <div key={category.id} className="pt-1.5 pb-1">

                      {/* Category Header Row */}

                      <div className="flex items-center justify-between">

                        <button

                          onClick={() => {

                            setSelectedCategory(category.name);

                            setCurrentPage(1);

                          }}

                          className={`flex-1 text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${

                            isSelected 

                              ? 'text-[#002653] font-bold bg-[#002653]/10' 

                              : 'text-slate-700 hover:text-[#002653] hover:bg-slate-50'

                          }`}

                        >

                          <span className="truncate pr-1">{category.name}</span>

                          <span className="text-[10px] text-slate-400 font-medium ml-1">({catCount})</span>

                        </button>

                        <button

                          onClick={() => toggleCategoryExpand(category.id)}

                          className="p-1.5 text-slate-400 hover:text-[#002653] rounded transition-colors cursor-pointer"

                          aria-label="Expand category"

                        >

                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}

                        </button>

                      </div>

                      {/* Subcategories (Expanded view with clean left border tree) */}

                      {isExpanded && (

                        <div className="ml-4 pl-3 border-l-2 border-amber-300/60 my-1 py-1 space-y-1 text-xs text-slate-500">

                          {category.subcategories.map((sub, sIdx) => (

                            <div 

                              key={sIdx}

                              onClick={() => {

                                setSelectedCategory(category.name);

                                setSearchQuery(sub);

                                setCurrentPage(1);

                              }}

                              className="cursor-pointer hover:text-[#002653] hover:font-semibold py-1 px-1 rounded transition-colors truncate"

                            >

                              {sub}

                            </div>

                          ))}

                        </div>

                      )}

                    </div>

                  );

                })}

              </div>

              {/* Product Type Filter Sub-card inside the same clean container */}

              <div className="border-t border-slate-200/90 p-4 bg-slate-50/50">

                <div className="flex items-center justify-between mb-2.5">

                  <div className="text-xs font-bold text-[#002653] uppercase tracking-wider">Product Type</div>

                  {selectedTypes.length > 0 && (

                    <button 

                      onClick={() => setSelectedTypes([])}

                      className="text-[11px] text-[#FFA500] hover:underline font-semibold cursor-pointer"

                    >

                      Clear

                    </button>

                  )}

                </div>

                <div className="grid grid-cols-2 gap-1.5">

                  {['Accessories', 'Couplers', 'Formwork', 'Consumables'].map((type) => {

                    const isChecked = selectedTypes.includes(type);

                    return (

                      <button

                        key={type}

                        type="button"

                        onClick={() => handleTypeToggle(type)}

                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center transition-all cursor-pointer border ${

                          isChecked 

                            ? 'bg-[#002653] text-white border-[#002653] shadow-xs' 

                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'

                        }`}

                      >

                        {type}

                      </button>

                    );

                  })}

                </div>

                {/* Reset All Filters button */}

                {(selectedCategory !== 'All' || selectedTypes.length > 0 || searchQuery !== '') && (

                  <button

                    onClick={handleClearFilters}

                    className="w-full mt-3 py-2 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#002653] hover:bg-white transition-colors cursor-pointer flex items-center justify-center bg-white shadow-xs"

                  >

                    <RotateCcw className="w-3.5 h-3.5 mr-1.5 text-slate-400" />

                    <span>Reset All Filters</span>

                  </button>

                )}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Products Header Controls + Grid */}

          <div className="lg:col-span-9">

            {/* Mobile-only compact product filters */}
            <div className="lg:hidden bg-white rounded-2xl shadow-sm border border-slate-200/90 p-4 mb-6 space-y-3.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-extrabold text-[#002653]">Explore Products</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Find the right construction materials</p>
                </div>
                <span className="shrink-0 bg-[#002653]/5 text-[#002653] rounded-lg px-2 py-1 text-[11px] font-bold">120+ Products</span>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  placeholder="Search products, materials..."
                  className="w-full pl-9 pr-8 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#002653] focus:bg-white text-slate-800"
                />
                {searchQuery && <button type="button" aria-label="Clear search" onClick={() => { setSearchQuery(''); setCurrentPage(1); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"><X className="w-4 h-4" /></button>}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <label className="min-w-0 block">
                  <span className="block text-xs font-semibold text-[#002653] mb-1.5">Category</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                    className="w-full min-w-0 bg-slate-50 border border-slate-200 text-slate-700 py-3 px-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#002653] cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {categoriesData.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
                  </select>
                </label>
                <label className="min-w-0 block">
                  <span className="block text-xs font-semibold text-[#002653] mb-1.5">Product Type</span>
                  <select
                    value={selectedTypes.length === 1 ? selectedTypes[0] : 'All'}
                    onChange={(e) => { setSelectedTypes(e.target.value === 'All' ? [] : [e.target.value]); setCurrentPage(1); }}
                    className="w-full min-w-0 bg-slate-50 border border-slate-200 text-slate-700 py-3 px-2 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#002653] cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    {['Accessories', 'Couplers', 'Formwork', 'Consumables'].map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </label>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-slate-500">Showing <strong className="text-[#002653]">{totalItems === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, totalItems)}</strong> of {totalItems} products</span>
                <button type="button" onClick={handleClearFilters} className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#002653] cursor-pointer"><RotateCcw className="w-3.5 h-3.5" /> Clear Filters</button>
              </div>
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort products" className="min-w-0 max-w-[70%] bg-slate-50 border border-slate-200 text-slate-700 py-2 px-2.5 rounded-xl font-medium text-xs focus:outline-none focus:ring-1 focus:ring-[#002653] cursor-pointer">
                  <option value="name-asc">Sort: Name (A–Z)</option>
                  <option value="name-desc">Sort: Name (Z–A)</option>
                  <option value="category">Sort: Category</option>
                </select>
                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                  <button type="button" onClick={() => setViewMode('grid')} aria-label="Grid view" className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#002653] text-white shadow-xs' : 'text-slate-500'}`}><Grid className="w-4 h-4" /></button>
                  <button type="button" onClick={() => setViewMode('list')} aria-label="List view" className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#002653] text-white shadow-xs' : 'text-slate-500'}`}><List className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* Top Controls Bar - Modern rounded card */}

            <div className="hidden lg:flex bg-white rounded-2xl shadow-sm border border-slate-200/90 p-3.5 sm:p-4 mb-6 flex-col md:flex-row md:items-center justify-between gap-3.5">

              {/* Product Count Display */}

              <div className="text-xs sm:text-sm font-medium text-slate-600 flex items-center space-x-2">

                <span>Showing</span>

                <span className="px-2 py-0.5 rounded-md bg-[#002653]/5 text-[#002653] font-bold text-xs">

                  {totalItems === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, totalItems)}

                </span>

                <span>of</span>

                <span className="text-[#002653] font-bold">120+ Products</span>

                {selectedCategory !== 'All' && (

                  <span className="text-xs font-semibold text-[#FFA500] pl-1">

                    • {selectedCategory}

                  </span>

                )}

              </div>

              {/* Right Side: Search + Sort + View Mode */}

              <div className="flex flex-wrap items-center gap-2.5">

                {/* Search Input */}

                <div className="relative min-w-[190px] sm:min-w-[230px] flex-1 sm:flex-initial">

                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

                  <input 

                    type="text"

                    value={searchQuery}

                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}

                    placeholder="Search materials..."

                    className="w-full pl-9 pr-7 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#002653] focus:bg-white text-slate-800 transition-all"

                  />

                  {searchQuery && (

                    <button 

                      onClick={() => setSearchQuery('')}

                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs w-4 h-4 flex items-center justify-center cursor-pointer"

                    >

                      ×

                    </button>

                  )}

                </div>

                {/* Sort By Dropdown */}

                <div className="flex items-center text-xs">

                  <select

                    value={sortBy}

                    onChange={(e) => setSortBy(e.target.value)}

                    className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-3 rounded-xl font-medium text-xs focus:outline-none focus:ring-1 focus:ring-[#002653] cursor-pointer"

                  >

                    <option value="name-asc">Sort: Name (A–Z)</option>

                    <option value="name-desc">Sort: Name (Z–A)</option>

                    <option value="category">Sort: Category</option>

                  </select>

                </div>

                {/* Grid / List View Toggle */}

                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">

                  <button

                    onClick={() => setViewMode('grid')}

                    className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${

                      viewMode === 'grid' 

                        ? 'bg-[#002653] text-white shadow-xs' 

                        : 'text-slate-500 hover:text-[#002653]'

                    }`}

                    aria-label="Grid view"

                  >

                    <Grid className="w-4 h-4" />

                  </button>

                  <button

                    onClick={() => setViewMode('list')}

                    className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${

                      viewMode === 'list' 

                        ? 'bg-[#002653] text-white shadow-xs' 

                        : 'text-slate-500 hover:text-[#002653]'

                    }`}

                    aria-label="List view"

                  >

                    <List className="w-4 h-4" />

                  </button>

                </div>

              </div>

            </div>

            {/* PRODUCT GRID / LIST */}

            {paginatedProducts.length === 0 ? (

              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">

                <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />

                <h3 className="text-base font-bold text-slate-700">No products match your criteria</h3>

                <p className="text-xs text-slate-400 mt-1 mb-4">Try clearing your search term or adjusting filters.</p>

                <button

                  onClick={handleClearFilters}

                  className="px-5 py-2.5 bg-[#002653] text-white text-xs font-semibold rounded-xl hover:bg-[#001733] cursor-pointer transition-colors shadow-sm"

                >

                  Reset All Filters

                </button>

              </div>

            ) : viewMode === 'grid' ? (

              /* Beautiful Grid Layout */

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

                {paginatedProducts.map((product) => (

                  <div

                    key={product.id}

                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#FFA500]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"

                  >

                    {/* Top: Image & Header */}

                    <div>

                      {/* Product Image Area with Subtle Gradient & Inner Frame */}

                      <div 

                        onClick={() => setSelectedProduct(product)}

                        className="relative w-full h-44 bg-gradient-to-b from-slate-50/90 to-slate-100/50 p-3.5 flex items-center justify-center cursor-pointer overflow-hidden border-b border-slate-100"

                      >

                        <img 

                          src={product.image} 

                          alt={product.name}

                          className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-300"

                          loading="lazy"

                        />

                        {/* Elegant Type Badge */}

                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-[#002653] shadow-xs border border-slate-200/70 backdrop-blur-xs">

                          {product.type}

                        </span>

                        {/* Quick View Button on Hover */}

                        <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 text-slate-500 hover:text-[#002653] shadow-xs border border-slate-200/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">

                          <Eye className="w-3.5 h-3.5" />

                        </span>

                        {/* Authorized Distributor Badge */}

                        {product.badge && (

                          <span className="absolute bottom-1.5 inset-x-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-[#002653]/95 text-[#FFA500] shadow-xs border border-[#FFA500]/40 backdrop-blur-xs text-center truncate z-10" title={product.badge}>

                            ★ {product.badge}

                          </span>

                        )}

                      </div>

                      {/* Product Text Content */}

                      <div className="p-4 pb-3">

                        <div className="text-[10px] font-bold text-[#FFA500] uppercase tracking-wider mb-1 truncate">

                          {product.subCategory}

                        </div>

                        <h3 

                          onClick={() => setSelectedProduct(product)}

                          className="text-sm font-bold text-[#002653] line-clamp-1 hover:text-[#FFA500] cursor-pointer transition-colors leading-snug"

                          title={product.name}

                        >

                          {product.name}

                        </h3>

                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed min-h-[32px]">

                          {product.description}

                        </p>

                      </div>

                    </div>

                    {/* Symmetrical, Balanced Action Buttons */}

                    <div className="p-4 pt-0 grid grid-cols-2 gap-2">

                      <button

                        type="button"

                        onClick={() => setSelectedProduct(product)}

                        className="w-full py-2 px-1 text-center bg-slate-50 hover:bg-slate-100 text-[#002653] border border-slate-200 font-semibold text-xs rounded-xl transition-all cursor-pointer shadow-2xs hover:border-slate-300"

                      >

                        View Details

                      </button>

                      <button

                        type="button"

                        onClick={(e) => handleWhatsAppEnquiry(product, e)}

                        className="w-full py-2 px-1 flex items-center justify-center bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-xs rounded-xl shadow-xs transition-all duration-150 cursor-pointer"

                      >

                        <svg className="w-3.5 h-3.5 mr-1 fill-current flex-shrink-0" viewBox="0 0 24 24">

                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

                        </svg>

                        <span>Enquire</span>

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              /* List View Mode */

              <div className="space-y-3.5">

                {paginatedProducts.map((product) => (

                  <div

                    key={product.id}

                    className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col sm:flex-row items-center justify-between gap-4"

                  >

                    <div className="flex items-center space-x-4 w-full sm:w-auto">

                      <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 flex items-center justify-center flex-shrink-0 border border-slate-100">

                        <img 

                          src={product.image} 

                          alt={product.name} 

                          className="max-h-full max-w-full object-contain"

                        />

                      </div>

                      <div>

                        <div className="flex flex-wrap items-center gap-2">

                          <span className="text-[11px] font-bold text-[#FFA500] uppercase tracking-wider">{product.category}</span>

                          {product.badge && (

                            <span className="text-[10px] font-bold bg-[#002653] text-[#FFA500] px-2 py-0.5 rounded-md border border-[#FFA500]/30">

                              ★ {product.badge}

                            </span>

                          )}

                        </div>

                        <h3 className="text-sm font-bold text-[#002653] hover:text-[#FFA500] cursor-pointer transition-colors" onClick={() => setSelectedProduct(product)}>

                          {product.name}

                        </h3>

                        <p className="text-xs text-slate-500 line-clamp-1 max-w-lg mt-0.5">{product.description}</p>

                      </div>

                    </div>

                    <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">

                      <button

                        onClick={() => setSelectedProduct(product)}

                        className="py-2 px-3.5 bg-slate-50 text-[#002653] border border-slate-200 hover:bg-slate-100 text-xs font-semibold rounded-xl cursor-pointer transition-colors"

                      >

                        View Details

                      </button>

                      <button

                        onClick={(e) => handleWhatsAppEnquiry(product, e)}

                        className="py-2 px-3.5 bg-[#FFA500] hover:bg-[#FF9100] text-[#002653] font-bold text-xs rounded-xl flex items-center cursor-pointer shadow-xs transition-colors"

                      >

                        <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 24 24">

                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

                        </svg>

                        <span>Enquire</span>

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

            {/* Pagination Component */}

            {totalPages > 1 && (

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-center space-x-2">

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (

                  <button

                    key={pageNum}

                    onClick={() => {

                      setCurrentPage(pageNum);

                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });

                    }}

                    className={`w-9 h-9 rounded-xl font-bold text-xs transition-all cursor-pointer ${

                      currentPage === pageNum

                        ? 'bg-[#002653] text-white shadow-xs'

                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'

                    }`}

                  >

                    {pageNum}

                  </button>

                ))}

                {currentPage < totalPages && (

                  <>

                    <button

                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}

                      className="w-9 h-9 rounded-xl bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"

                      title="Next Page"

                    >

                    </button>

                    <button

                      onClick={() => setCurrentPage(totalPages)}

                      className="px-3 h-9 rounded-xl bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"

                      title="Last Page"

                    >

                      Last »

                    </button>

                  </>

                )}

              </div>

            )}

          </div>

        </div>

      </div>

      {/* Product Detail Modal */}

      {selectedProduct && (

        <div 

          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"

          onClick={() => setSelectedProduct(null)}

        >

          <div 

            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[88vh] overflow-y-auto border border-slate-200 my-auto animate-in zoom-in-95 duration-200"

            onClick={(e) => e.stopPropagation()}

          >

            <button

              type="button"

              onClick={() => setSelectedProduct(null)}

              aria-label="Close product details"

              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"

            >

              <X className="w-5 h-5" />

            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">

              <div className="sm:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl p-4 flex items-center justify-center border border-slate-100 h-56">

                <img

                    src={selectedProduct.detailImage || selectedProduct.image}

                    alt={selectedProduct.name}

                    className="max-h-full max-w-full object-contain"

                />

              </div>

              <div className="sm:col-span-7">

                {selectedProduct.badge && (

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-lg bg-[#002653] text-[#FFA500] text-xs font-bold border border-[#FFA500]/40 shadow-xs">

                    <CheckCircle className="w-3.5 h-3.5 text-[#FFA500] shrink-0" />

                    <span>{selectedProduct.badge}</span>

                  </div>

                )}

                <div className="text-xs font-bold text-[#FFA500] uppercase tracking-wider mb-1">

                  {selectedProduct.category}

                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#002653] leading-tight mb-2">

                  {selectedProduct.name}

                </h3>

                <p className="text-xs text-slate-400 font-medium mb-3">

                  Sub-System: {selectedProduct.subCategory}

                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">

                  {selectedProduct.description}

                </p>

              </div>

            </div>

            {/* Specifications: Image (for MS Wall Tie or products with specificationImage) or Table */}

            {selectedProduct.specificationImage || selectedProduct.id === 'ms-wall-tie' ? (

              <div className="mb-6">

                <div className="flex items-center justify-between mb-2">

                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">

                    Technical Specifications

                  </h4>

                  <a 

                    href={selectedProduct.specificationImage || '/assets/products/ms-wall-tie-specs.jpg'} 

                    target="_blank" 

                    rel="noopener noreferrer"

                    className="text-xs text-[#002653] hover:text-[#FFA500] font-semibold transition-colors inline-flex items-center gap-1 cursor-pointer"

                  >

                    View Full Image ↗

                  </a>

                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-2 sm:p-4 overflow-hidden flex items-center justify-center">

                  <img 

                    src={selectedProduct.specificationImage || '/assets/products/ms-wall-tie-specs.jpg'} 

                    alt={`${selectedProduct.name} Technical Specifications`}

                    className="w-full max-h-[500px] object-contain rounded-lg shadow-2xs"

                  />

                </div>

              </div>

            ) : selectedProduct.specifications ? (

              <div className="mb-6">

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">

                  Technical Specifications

                </h4>

                <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200 text-xs">

                  {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (

                    <div key={idx} className="flex justify-between py-2 px-3">

                      <span className="font-medium text-slate-500">{key}</span>

                      <span className="font-bold text-slate-800 text-right">{value}</span>

                    </div>

                  ))}

                </div>

              </div>

            ) : null}

            {/* Modal WhatsApp Enquiry Button */}

            <div className="flex justify-end pt-2">

              <button

                onClick={(e) => handleWhatsAppEnquiry(selectedProduct, e)}

                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#FFA500] hover:bg-[#FF9100] active:bg-[#E68A00] text-[#002653] font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"

              >

                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">

                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>

                </svg>

                <span>Enquire via WhatsApp</span>

              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}
