// import { Phone, Mail } from 'lucide-react';

// export default function FloatingContact() {
//   return (
//     <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
//       {/* Phone */}
//       <a
//         href="tel:8880796796"
//         className="group w-14 h-14 flex items-center justify-center
//         bg-white/30 backdrop-blur-lg
//         border border-white/40
//         shadow-lg cursor-pointer
//         hover:bg-white/40 transition-all duration-300"
//       >
//         <Phone
//           size={24}
//           className="text-[#2D5C3A]  transition-colors duration-300 group-hover:text-[#2D5C3A]"
//         />
//       </a>

//       {/* Mail */}
//       <a
//         href="mailto:enquiry@upkardevelopers.com"
//         className="group w-14 h-14 flex items-center justify-center
//         bg-white/30 backdrop-blur-lg
//         border border-white/40
//         shadow-lg cursor-pointer
//         hover:bg-white/40 transition-all duration-300"
//       >
//         <Mail
//           size={24}
//           className="text-[#2D5C3A] transition-colors duration-300 group-hover:text-[#2D5C3A]"
//         />
//       </a>
//     </div>
//   );
// }
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-8 px-8 py-4 
        rounded-full 
        bg-white/30 backdrop-blur-xl 
        border border-white/40 
        shadow-xl"
      >
        {/* Phone */}
        <a href="tel:8880796796" className="group">
          <Phone
            size={28}
            className="text-[#2D5C3A] group-hover:scale-125 transition duration-300"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918880796796"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaWhatsapp
            size={28}
            className="text-[#2D5C3A] group-hover:scale-125 transition duration-300"
          />
        </a>

        {/* Mail */}
        <a href="mailto:enquiry@upkardevelopers.com" className="group">
          <Mail
            size={28}
            className="text-[#2D5C3A] group-hover:scale-125 transition duration-300"
          />
        </a>
      </div>
    </div>
  );
}
