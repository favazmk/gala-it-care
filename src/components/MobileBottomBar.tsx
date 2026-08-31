import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center bg-white/95 backdrop-blur-md border border-border-light shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full p-1.5 w-[90%] max-w-[320px]">
      <a
        href={`tel:${CONTACT_INFO.phonePrimary}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
      >
        <Phone className="w-4 h-4" />
        <span className="text-sm font-bold tracking-wide">Call Now</span>
      </a>
      
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-success hover:bg-green-50 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-bold tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
