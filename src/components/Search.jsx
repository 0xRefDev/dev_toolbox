import { useState } from "react"
import { SearchIcon } from "@/icons/SearchIcon";

export function Search() {
  const [search, setSearch] = useState("");

  const handleSearchValue = (value) => {
    setSearch(value)
  }

  return (
    <div className="search-wrapper relative w-full flex justify-center py-4">
      <div className="w-full relative max-w-[450px]">
        <input
          type="search"
          value={search}
          className="search-input w-full py-[10px] pl-13 pr-5 
                 bg-white/10 backdrop-blur-md
                 border border-white/20 rounded-full
                 text-white placeholder-white/70
                 outline-none transition-all duration-300
                 focus:bg-white/15 focus:border-white/30"
          onChange={(e) => handleSearchValue(e.target.value)}
          placeholder="Search tools..."
        />
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none transition-colors duration-300"><SearchIcon /></div>
      </div>

      <style jsx>{`
        .search-input {
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}