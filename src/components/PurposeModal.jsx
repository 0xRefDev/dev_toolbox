import { useStore } from '@nanostores/react';
import { isPurposeModalOpen } from '@/stores/modalStore';

export function PurposeModal() {
  const isOpen = useStore(isPurposeModalOpen);
  
  return (
    <>
      <article className={`absolute w-[70%] h-[85%] top-94 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-300/85 backdrop-blur-lg outline outline-white/20 rounded-2xl flex justify-center z-9999 p-6 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity`}>
        <div className="p-2 rounded-lg w-[90%] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-4xl font-bold mb-4 text-white">Our Purpose</h2>
          <p className="text-white/80 mb-4 text-2xl font-extralight italic">
            "Less searching, more creating"
          </p>
          <button 
            onClick={() => {
              isPurposeModalOpen.set(false);
            }}
            className="absolute right-4 top-4 text-white/75 px-4 py-2 rounded cursor-pointer"
          >
            
          </button>
        </div>
      </article>
    </>
  );
}