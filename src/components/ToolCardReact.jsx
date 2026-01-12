import { useState } from "react";
import { Open } from "@/icons/Open";
import { Thunder } from "@/icons/Thunder";

import { logos } from '../lib/logos';

export function ToolCardReact({ toolData }) {
  const { name, url, description, type, tags } = toolData;
  const [imageError, setImageError] = useState(false);

  const getToolLogo = (name, url) => {
    if (logos[name]) {
      return logos[name];
    }
  };

  const toolLogo = getToolLogo(name, url);

  return (
    <div className="card-3d w-full h-[14rem] bg-white/10 border border-white/25 rounded-lg p-4 relative shadow-2xl">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 text-white/45 z-10 hover:text-white transition-colors"
      >
        <Open />
      </a>

      <div className="size-16 rounded-xl overflow-hidden my-1 bg-white/10 flex items-center justify-center p-2">
        {toolLogo && !imageError ? (
          <img
            src={toolLogo}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <Thunder />
        )}
      </div>


      <h2 className="text-white text-xl font-bold capitalize mt-2.5">
        {name} <span className="ml-2 text-xs align-middle font-medium p-0.5 px-2 border border-amber-400/40 bg-amber-600/30 rounded-full">{type}</span>
      </h2>
      <p className="text-white/75 line-clamp-2 text-sm mt-1">{description}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag) => (
          <span className="bg-purple-100/30 font-medium text-white/91 rounded-full px-3 py-1 text-xs border border-white/15">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}