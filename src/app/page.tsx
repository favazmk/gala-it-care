import { Metadata } from "next";
import { Clock, ShieldCheck, MapPin, CheckCircle2, Phone, MessageCircle, Truck } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Printer & Plotter Repair Dubai & Ajman",
  description: "Fast & Certified Printer & Plotter Repair in Dubai & Ajman. Same-day on-site repair and workshop service.",
  alternates: {
    canonical: ROUTES.home,
  },
};

export default function PrinterRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Printer & Plotter Repair Dubai & Ajman",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gala IT Care",
      "telephone": CONTACT_INFO.phonePrimary,
      "address": [
        { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
        { "@type": "PostalAddress", "addressLocality": "Ajman", "addressCountry": "AE" }
      ]
    },
    "description": "Fast & Certified Printer & Plotter Repair in Dubai & Ajman. Same-day on-site repair and workshop service.",
    "areaServed": ["Dubai", "Ajman"]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      
      {/* 1. HERO SECTION (PREMIUM EDITORIAL) */}
      <section className="relative bg-background pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-[3rem] relative overflow-hidden flex flex-col lg:flex-row items-center min-h-[85vh]">
            
            {/* Background Image inside the rounded container */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10" />
              <Image 
                src="/images/printer_hero_premium.jpg"
                alt="Printer Repair Lab"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="w-full lg:w-[55%] relative z-20 p-10 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-max mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[11px] font-bold text-white tracking-widest uppercase">Dubai & Ajman Authorized Service</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-white">
                Fast & Certified <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Printer & Plotter Repair</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
                Same-day on-site repair and workshop service for HP DesignJet, Canon, Epson, Brother, and Xerox. Original parts with service warranty.
              </p>
              
              <ul className="space-y-5 mb-14">
                {[
                  { icon: Clock, text: "24–48 Hour Repair Turnaround" },
                  { icon: Truck, text: "On-Site Service or Free Pickup & Delivery" },
                  { icon: ShieldCheck, text: "90-Day Parts & Labor Warranty" }
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-[15px] font-bold text-white tracking-wide">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-primary rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call: {CONTACT_INFO.phonePrimaryDisplay}
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Urgent Fix
                </a>
              </div>
            </div>
            
            {/* Right Content - Form */}
            <div className="w-full lg:w-[45%] relative z-20 p-6 lg:p-12 lg:pr-20 h-full flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <LeadForm type="printer" title="Request Repair Service" buttonText="Submit Inquiry" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. COMMON PROBLEMS (ASYMMETRIC CARDS) */}
      <section className="py-24 lg:py-32 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Diagnostics</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
              Common Printer & Plotter Problems We Fix
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="relative p-10 md:p-14 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group overflow-hidden flex flex-col min-h-[480px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_plotter.jpg" alt="Plotter Repair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-hover:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">01</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-8 tracking-tight">Wide-Format & Plotter Repairs</h4>
                <ul className="space-y-6 flex-1">
                  {[
                    "HP DesignJet carriage jams, error code 86:01, and belt replacements",
                    "Printhead alignment failures, clogged ink channels, and banding lines",
                    "Paper cutter assembly failures, spindle jams, and media feed errors",
                    "Main logic board, chip-level component, and power supply repairs"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5 text-[15px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative p-10 md:p-14 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group overflow-hidden flex flex-col min-h-[480px] lg:translate-y-12">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_laserjet.jpg" alt="LaserJet Repair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-hover:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">02</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-8 tracking-tight">Office LaserJet & Copier Repairs</h4>
                <ul className="space-y-6 flex-1">
                  {[
                    "Fuser kit errors (50.x error codes), heating roller replacements, ghosting",
                    "Persistent paper jams, worn pickup rollers, and tray feed errors",
                    "Poor print quality, toner smudging, white lines, and color bleeding",
                    "Scanner module repair, network connectivity, and firmware troubleshooting"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5 text-[15px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRANDS SUPPORTED & SERVICE GUARANTEES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <h2 className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-12">Supported Brands</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
            {["HP DesignJet & LaserJet", "Canon imagePROGRAF", "Epson SureColor", "Brother", "Xerox", "Ricoh"].map((brand) => (
              <span key={brand} className="text-[13px] font-bold text-primary bg-slate-50 border border-slate-100 px-6 py-3 rounded-full tracking-wide shadow-sm">{brand}</span>
            ))}
          </div>
          <div className="bg-slate-50 p-10 md:p-16 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-6">Service Guarantees</h3>
            <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed text-balance">
              100% Genuine OEM Replacement Parts &middot; Certified Hardware Technicians &middot; Serving Corporate & Retail Clients Across the UAE
            </p>
          </div>
        </div>
      </section>

      {/* 4. FLEXIBLE REPAIR OPTIONS */}
      <section className="py-24 lg:py-32 bg-primary text-white rounded-t-[3rem] -mt-10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Service Models</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Flexible Repair Options</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* On-Site */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex px-4 py-2 rounded-full bg-accent/20 text-accent text-[11px] font-bold tracking-widest uppercase mb-8">Option 01</div>
              <h4 className="text-3xl font-bold mb-4">On-Site Office Repair</h4>
              <p className="text-[14px] text-slate-400 mb-10"><strong className="text-white">Target Device / Need:</strong> Office fleets, heavy production plotters, enterprise copiers</p>
              
              <ul className="space-y-6">
                {[
                  "Dispatched directly to your location in Dubai or Ajman",
                  "Zero downtime: repairs completed on office premises",
                  "On-site diagnostics, calibration, and live print testing"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshop */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="inline-flex px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-[11px] font-bold tracking-widest uppercase mb-8">Option 02</div>
              <h4 className="text-3xl font-bold mb-4">Service Center Workshop Repair</h4>
              <p className="text-[14px] text-slate-400 mb-10"><strong className="text-white">Target Device / Need:</strong> Desktop laserjets, compact inkjets, chip-level fixes</p>
              
              <ul className="space-y-6">
                {[
                  "Drop off at Dubai (Al Karama) or Ajman (Al Riyadh) centers",
                  "Complimentary pickup and delivery options available",
                  "Full component disassembly & ultrasonic cleaning"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEP-BY-STEP REPAIR PROCESS */}
      <section className="py-24 lg:py-32 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">Step-By-Step Repair Process</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Submit Inquiry", desc: "Share printer model & error via call, form, or WhatsApp." },
              { step: "02", title: "Diagnosis & Quote", desc: "Receive a transparent repair estimate & parts cost first." },
              { step: "03", title: "Precision Fix", desc: "Certified technicians repair using genuine original parts." },
              { step: "04", title: "Quality Check", desc: "Full testing performed before returning unit with warranty." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-premium transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <span className="text-9xl font-black">{item.step}</span>
                </div>
                <div className="text-xs font-bold text-accent tracking-[0.2em] mb-4">STEP {item.step}</div>
                <h4 className="text-xl font-bold text-primary mb-4 relative z-10">{item.title}</h4>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Help Center</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-12">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How fast can a technician visit my office for plotter repair?", a: "We offer rapid dispatch across Dubai and Ajman, with most on-site visits scheduled within 2 to 4 hours of your booking request." },
              { q: "Do you provide original spare parts and warranty?", a: "Yes, Gala IT Care uses only genuine OEM parts for all HP, Canon, Epson, and Xerox repairs. All parts and labor are backed by our service warranty." },
              { q: "What should I do before calling for repair service?", a: "Please have your printer make, exact model number, and any error code displayed on the screen ready so our technicians can prepare correct parts." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100">
                <h4 className="text-[16px] md:text-[18px] font-bold text-primary mb-4">{faq.q}</h4>
                <p className="text-[15px] text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-surface-dark text-white relative overflow-hidden rounded-[3rem] mx-4 lg:mx-8 mb-8 border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1] text-balance">
            Print Quality Drops or Hardware Halts? <span className="text-slate-400">Don't Let Downtime Cost You.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-14 font-medium max-w-2xl mx-auto">Contact Gala IT Care now for instant expert diagnostics and fast repair turnarounds across Dubai and Ajman.</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-100 text-primary font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" /> WhatsApp: {CONTACT_INFO.phonePrimaryDisplay}
            </a>
            <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
