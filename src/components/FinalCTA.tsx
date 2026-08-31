import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

interface FinalCTAProps {
  headline: string;
  copy: string;
}

export default function FinalCTA({ headline, copy }: FinalCTAProps) {
  return (
    <section className="py-20 bg-primary text-white border-b-8 border-accent">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{headline}</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {copy}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.phonePrimary}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-accent hover:bg-accent-hover active:bg-accent-hover rounded-lg transition-colors shadow-lg active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-green-600 bg-white hover:bg-slate-50 active:bg-slate-50 rounded-lg transition-colors shadow-lg active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
