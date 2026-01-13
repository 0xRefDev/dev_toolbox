import { useState, useEffect } from "react";
import { ToolCardReact } from "./ToolCardReact";
import { useStore } from '@nanostores/react';
import { searchQuery, selectedCategory } from '@/stores/filterStore';

import { ChevronR } from "@/icons/ChevronR";
import { ChevronL } from "@/icons/ChevronL";

export function ToolsList({ allTools }) {
  const [currentPage, setCurrentPage] = useState(1);
  const $search = useStore(searchQuery);
  const $category = useStore(selectedCategory);

  useEffect(() => {
    localStorage.setItem("category", $category)
  }, [$category]);

  const itemsPerPage = 9;

  const filteredTools = allTools.filter(tool => {
    const matchesCategory = $category === "All" || tool.category === $category;
    const matchesSearch = !$search || tool.name.toLowerCase().includes($search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentTools = filteredTools.slice(startIndex, endIndex);

  const categories = ["All", ...new Set(allTools.map(tool => tool.category))];

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    selectedCategory.set(category);
    setCurrentPage(1);
  };

  return (
    <div>
      <div
        className="flex gap-2 w-full max-w-6xl mx-auto overflow-x-auto p-4"
        id="cat_filters"
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-lg w-fit px-4 py-1 flex items-center justify-center cursor-pointer shadow-xl transition-all whitespace-nowrap ${$category === category
              ? "bg-white/25 border-2 border-white/50"
              : "bg-white/10 border border-white/25 hover:bg-white/15"
              }`}
          >
            <h2 className="text-center text-white text-[0.8rem]">
              {category}
            </h2>
          </button>
        ))}
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 p-8 ">
        {currentTools.map((tool, index) => (
          <ToolCardReact
            key={`${tool.name}-${index}`}
            toolData={tool}
          />
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
          {getPagination(currentPage, totalPages).map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="w-10 h-10 flex items-center justify-center text-white/50"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={item}
                onClick={() => handlePageChange(item)}
                className={`w-10 h-10 rounded-full text-sm border transition-colors cursor-pointer ${currentPage === item
                  ? "bg-white/25 border-white/50 text-white font-bold"
                  : "bg-white/10 border-white/25 text-white/75 hover:bg-white/20"
                  }`}
              >
                {item}
              </button>
            );
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
        Showing{" "}
        <span className="font-bold text-purple-200">
          {startIndex + 1}–
          {Math.min(endIndex, filteredTools.length)}
        </span>{" "}
        of{" "}
        <span className="font-bold text-purple-200">
          {filteredTools.length}
        </span>{" "}
        tools
      </div>
    </div>
  );
}

function getPagination(current, total) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 2) {
    return [1, "...", 2, 3, 4, "...", total];
  }

  if (current >= total - 1) {
    return [1, "...", total - 3, total - 2, total - 1, "...", total];
  }

  return [
    1,
    "...",
    current - 1,
    current,
    current + 1,
    "...",
    total,
  ];
}
