import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section className="py-16 bg-surface-light border-t border-border-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Service Centers</h2>
          <p className="text-slate-600">Professional technical workshops conveniently located across the UAE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dubai Center */}
          <div className="bg-white rounded-xl shadow-md border border-border-light p-8 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border-light">
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{CONTACT_INFO.locations.dubai.name}</h3>
                <p className="text-slate-500 font-medium">Dubai</p>
              </div>
            </div>
            
            <div className="mb-8 flex-grow">
              <p className="text-slate-700 text-lg mb-2">{CONTACT_INFO.locations.dubai.address}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${CONTACT_INFO.locations.dubai.phone.replace(/\s+/g, '')}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Branch
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Ajman Center */}
          <div className="bg-white rounded-xl shadow-md border border-border-light p-8 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border-light">
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{CONTACT_INFO.locations.ajman.name}</h3>
                <p className="text-slate-500 font-medium">Ajman</p>
              </div>
            </div>
            
            <div className="mb-8 flex-grow">
              <p className="text-slate-700 text-lg mb-2">{CONTACT_INFO.locations.ajman.address}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${CONTACT_INFO.locations.ajman.phone.replace(/\s+/g, '')}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Branch
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors border border-green-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
