import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';
import { 
  Building, MapPin, ArrowRight, X, CheckCircle, 
  Layers, ExternalLink, Calendar
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { companyInfo } from '../data/companyData';

export default function ProjectsSection() {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);



  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  const handleProjectEnquiry = (project) => {
    const msg = encodeURIComponent(
      `Hello Ayush Enterprises, I would like to inquire regarding materials / shoring solutions for a project similar to "${project.title}".`
    );
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="projects" className="py-14 sm:py-20 bg-[#F5F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#062B59]/5 text-[#062B59] text-xs font-bold tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA500]"></span>
            <span>Landmark Projects Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B59] tracking-tight">
            Our Landmark Projects
          </h2>
          <p className="text-slate-500 text-xs sm:text-base mt-2">
            Supplying premium formwork accessories and construction hardware to iconic developments across Hyderabad.
          </p>
        </div>

        {/* Four Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative h-44 sm:h-52 overflow-hidden cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold bg-[#002653]/90 text-white backdrop-blur-xs">
                    {project.category}
                  </span>

                  {/* Location Pin */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex items-center text-white text-[11px] sm:text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA500] mr-1 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  {project.developer && (
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#FFA500] uppercase tracking-wider mb-1 truncate">
                      {project.developer}
                    </div>
                  )}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-sm sm:text-base font-bold text-[#062B59] hover:text-[#FFA500] cursor-pointer transition-colors leading-snug line-clamp-1"
                    title={project.title}
                  >
                    {project.title}
                  </h3>
                  
                  <div className="mt-1.5 text-[11px] sm:text-xs font-semibold text-slate-400">
                    Scope: <span className="text-slate-600 font-medium">{project.scope}</span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* View Project Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 sm:py-2.5 px-3 sm:px-4 bg-[#F5F7FA] hover:bg-[#062B59] hover:text-white text-[#062B59] font-bold text-xs rounded-xl border border-slate-200 hover:border-[#062B59] transition-all duration-200 flex items-center justify-center cursor-pointer group/btn"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden border border-slate-200 my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Image Header */}
            <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-slate-900 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              <div className="absolute bottom-3.5 left-4 sm:left-6 right-14 text-white">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FFA500] text-[#002653] uppercase shadow-xs">
                    {selectedProject.category}
                  </span>
                  {selectedProject.developer && (
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-white/20 text-white backdrop-blur-xs">
                      {selectedProject.developer}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">{selectedProject.title}</h3>
                <div className="flex items-center flex-wrap gap-2 text-xs text-slate-200 mt-1">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-[#FFA500] mr-1 flex-shrink-0" />
                    {selectedProject.location}
                  </span>
                  {selectedProject.height && (
                    <>
                      <span className="text-slate-400">•</span>
                      <span>{selectedProject.height}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 flex-1">
              <p className="leading-relaxed text-slate-700">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#062B59] text-xs uppercase tracking-wider mb-2.5">
                  Project Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-[13px] text-slate-600 leading-snug">
                      <CheckCircle className="w-4 h-4 text-[#FFA500] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials Supplied */}
              <div>
                <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-2">
                  Materials & Accessories Supplied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materialsSupplied.map((mat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#062B59]/5 text-[#062B59] font-semibold text-xs border border-[#062B59]/10">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-6 bg-slate-50/90 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-2">
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#002653] hover:text-[#FFA500] font-bold underline"
                  >
                    <span>Visit Project Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleProjectEnquiry(selectedProject)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-[#FFA500] hover:bg-[#FF9100] text-[#002653] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Discuss Material Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
