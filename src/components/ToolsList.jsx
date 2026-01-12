import { useState } from "react";
import { ToolCardReact } from "./ToolCardReact";

import { ChevronR } from "@/icons/ChevronR";
import { ChevronL } from "@/icons/ChevronL";

export function ToolsList({ allTools }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const itemsPerPage = 9;
  
  const filteredTools = selectedCategory === "All" 
    ? allTools 
    : allTools.filter(tool => tool.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTools = filteredTools.slice(startIndex, endIndex);
  
  const categories = ["All", ...new Set(allTools.map(tool => tool.category))];
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  return (
    <div>
      <div className="flex gap-2 w-full max-w-6xl mx-auto overflow-x-auto p-4" id="cat_filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-lg w-fit px-4 py-1 flex items-center justify-center cursor-pointer shadow-xl transition-all whitespace-nowrap ${
              selectedCategory === category
                ? "bg-white/25 border-2 border-white/50"
                : "bg-white/10 border border-white/25 hover:bg-white/15"
            }`}
          >
            <h2 className="text-center text-white text-[0.8rem]">{category}</h2>
          </button>
        ))}
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 p-8 min-h-[600px]">
        {currentTools.map((tool, index) => (
          <ToolCardReact key={`${tool.name}-${index}`} toolData={tool} />
        ))}
      </article>

      <div className="flex items-center justify-center gap-2 pt-7">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-white/10 border border-white/25 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors cursor-pointer"
        >
          <ChevronL />
        </button>
        
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full text-sm border transition-colors cursor-pointer ${
                    currentPage === page
                      ? "bg-white/25 border-white/50 text-white font-bold"
                      : "bg-white/10 border-white/25 text-white/75 hover:bg-white/20"
                  }`}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="text-white/50">...</span>;
            }
            return null;
          })}
        </div>
          
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-white/10 border border-white/25 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors cursor-pointer"
        >
          <ChevronR />
        </button>
      </div>

      <div className="text-center text-white/80 pt-5">
        Showing <span className="font-bold text-purple-200">{startIndex + 1}-{Math.min(endIndex, filteredTools.length)}</span> of <span className="font-bold text-purple-200">{filteredTools.length}</span> tools
      </div>
    </div>
  );
}