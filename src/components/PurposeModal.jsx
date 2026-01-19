import { useStore } from '@nanostores/react';
import { isPurposeModalOpen } from '@/stores/modalStore';
import { Cancel } from '@/icons/Cancel';
import Compass from "@/assets/compass.webp";

export function PurposeModal() {
  const isOpen = useStore(isPurposeModalOpen);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-150"
        onClick={() => isPurposeModalOpen.set(false)}
      />

      <article className={`relative w-268 max-h-[90vh] overflow-y-auto bg-linear-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transform ${isOpen ? 'scale-100' : 'scale-95'} transition-transform duration-150 p-4`}>

        <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl pointer-events-none" />

        <div className="relative p-8 md:p-12">

          <button
            onClick={() => isPurposeModalOpen.set(false)}
            className="absolute right-0 top-0 p-2 text-white/40 hover:text-white/90 hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
          >
            <Cancel />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Purpose
            </h2>
            <p className="text-xl md:text-2xl text-purple-200/80 font-light italic">
              "Less searching, more creating"
            </p>
          </div>

          <p className="text-center text-white/70 text-base md:text-lg mb-8 leading-relaxed">
            Every hour you save searching for tools is an extra hour to create, learn, or innovate.
          </p>

          <div className="flex justify-center my-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full bg-linear-to-br from-amber-400/10 to-amber-600/10 p-4 border border-amber-500/20">
                <img src={Compass.src} className="w-full h-full object-contain" alt="Compass" />
              </div>
            </div>
          </div>

          <p className="text-center text-white/80 text-base md:text-lg leading-relaxed mb-10 px-4">
            Imagine having all <b className='text-purple-300 font-semibold'>your favorite tools</b> in one place, discovering <b className='text-purple-300 font-semibold'>hidden gems</b>, and <b className='text-purple-300 font-semibold'>sharing</b> that amazing <b className='text-purple-300 font-semibold'>resource</b> you use.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-center text-white/70 text-sm md:text-base mb-4 leading-relaxed">
              We understand how frustrating it can be to find resources on the web, that's why we created Dev Toolbox
            </p>
            <p className="text-center text-amber-300 font-semibold text-base md:text-lg">
              It's not just another bookmark. It's your centralized toolbox.
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}