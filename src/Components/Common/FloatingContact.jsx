import { Phone, Mail } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
      <a
        className="group w-14 h-14 flex items-center justify-center 
        bg-white/30 backdrop-blur-lg
        border border-white/40 
        shadow-lg cursor-pointer
        hover:bg-white/40 transition-all duration-300"
      >
        <Phone
          size={24}
          className="text-black transition-colors duration-300 group-hover:text-[#2D5C3A]"
        />
      </a>

      <a
        className="group w-14 h-14 flex items-center  justify-center 
        bg-white/30 backdrop-blur-lg
        border border-white/40 
        shadow-lg cursor-pointer
        hover:bg-white/40 transition-all duration-300"
      >
        <Mail
          size={24}
          className="text-black transition-colors duration-300 group-hover:text-[#2D5C3A]"
        />
      </a>
    </div>
  );
}
