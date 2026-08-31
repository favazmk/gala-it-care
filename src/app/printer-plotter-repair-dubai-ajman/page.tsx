import { Metadata } from "next";
import { Clock, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Phone, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Printer & Plotter Repair Dubai & Ajman",
  description: "Fast & Certified Printer & Plotter Repair in Dubai & Ajman. Same-day on-site service for HP DesignJet, Canon, Epson, and Xerox with 90-day warranty.",
  alternates: {
    canonical: ROUTES.printer,
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
      
      {/* 1. FULL-WIDTH DARK TECHNICAL HERO */}
      <section className="relative bg-primary text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-10" />
          <Image 
            src="/images/printer_hero.webp"
            alt="Professional Printer and Plotter Repair in Dubai"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 flex flex-col order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent"></span>
                <span className="uppercase tracking-widest text-xs font-bold text-slate-300">Dubai & Ajman Service</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Fast & Certified <br />
                <span className="text-accent">Printer & Plotter</span> <br />
                Repair
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-medium leading-relaxed">
                Same-day on-site repair and workshop service for HP DesignJet, Canon, Epson, Brother, and Xerox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-sm font-bold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  CALL: {CONTACT_INFO.phonePrimaryDisplay}
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-sm font-bold transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WHATSAPP URGENT FIX
                </a>
              </div>

              {/* Compact Trust Line */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-slate-300 uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  24–48 Hour Repair
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  On-Site Service
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  90-Day Warranty
                </div>
              </div>
            </div>
            
            {/* Right Content - Intake Form */}
            <div className="w-full lg:w-2/5 order-1 lg:order-2">
              <LeadForm type="printer" title="Tell Us What's Wrong" buttonText="Get Free Diagnostic Quote" />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. PROBLEM-FIRST SECTION */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 leading-tight">
              Printer Down? <br />
              We Fix the Hardware Behind the Error.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Category 1: Wide-Format */}
            <div className="relative p-10 md:p-14 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group overflow-hidden flex flex-col min-h-[480px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_plotter.webp" alt="Plotter Repair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-hover:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">01</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">Wide-Format & Plotter</h4>
                <p className="text-lg text-slate-600 mb-8">Professional diagnostic and mechanical repair for engineering and design plotters.</p>
                <ul className="space-y-6 flex-1">
                  {[
                    "86:01 Carriage Error & Jams: Complete carriage assembly rebuilds, belt replacements, and track lubrication.",
                    "Printhead & Banding Problems: Ink channel unclogging, alignment calibration, and line-feed fixes.",
                    "Logic Board & Power Issues: Mainboard component-level diagnostics and power supply replacements."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5 text-[15px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 2: Office Printers */}
            <div className="relative p-10 md:p-14 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group overflow-hidden flex flex-col min-h-[480px] lg:translate-y-12">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_laserjet.webp" alt="Office Printer Repair" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-hover:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">02</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">Office Printers & Copiers</h4>
                <p className="text-lg text-slate-600 mb-8">Heavy-duty repairs for enterprise multifunction devices and laserjets.</p>
                <ul className="space-y-6 flex-1">
                  {[
                    "50.x Fuser Errors: Heating roller replacements and complete fuser kit installations.",
                    "Paper Feed & Jams: Pickup roller replacement, tray feed alignment, and ghosting fixes.",
                    "Print Quality & Smudging: Drum unit cleaning, toner smudging diagnosis, and color bleeding fixes."
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

      {/* 3. VISUAL ERROR TO SOLUTION MOMENT */}
      <section className="bg-primary text-white overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center md:text-left flex-1">
              <div className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Phase 1</div>
              <div className="text-xl font-bold">Printer Error</div>
            </div>
            <div className="hidden md:block text-slate-600"><ChevronRight className="w-8 h-8" /></div>
            <div className="text-center md:text-left flex-1">
              <div className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Phase 2</div>
              <div className="text-xl font-bold">Technical Diagnosis</div>
            </div>
            <div className="hidden md:block text-slate-600"><ChevronRight className="w-8 h-8" /></div>
            <div className="text-center md:text-left flex-1">
              <div className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Phase 3</div>
              <div className="text-xl font-bold">Precision Repair</div>
            </div>
            <div className="hidden md:block text-slate-600"><ChevronRight className="w-8 h-8" /></div>
            <div className="text-center md:text-right flex-1">
              <div className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Phase 4</div>
              <div className="text-xl font-bold text-green-400">Tested & Returned</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANDS & EXPERTISE GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-8">
                Trusted to Repair the Equipment Your Business Depends On.
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {["HP", "Canon", "Epson", "Brother", "Xerox", "Ricoh"].map((brand) => (
                  <div key={brand} className="text-2xl font-black text-slate-300 uppercase tracking-tighter">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">100% Genuine OEM Parts</h4>
                <p className="text-slate-600">We refuse to use counterfeit hardware. Every belt, printhead, and logic board installed is a certified original replacement.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">Certified Hardware Technicians</h4>
                <p className="text-slate-600">Our engineers are specialized in complex plotting and commercial printing equipment, bringing laboratory precision to the field.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">Corporate & Retail Service</h4>
                <p className="text-slate-600">From single design-agency plotters to entire enterprise printer fleets across Dubai and Ajman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LARGE TRUST / EXPERTISE SPLIT SECTION */}
      <section className="bg-surface-dark">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
            <Image src="/images/printer_detail.webp" alt="Printer Technician" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="w-full lg:w-1/2 p-12 md:p-20 lg:p-28 bg-primary text-white">
            <h2 className="text-4xl font-extrabold mb-6">Precision Repair. <br/> Properly Diagnosed.</h2>
            <p className="text-lg text-slate-400 mb-16 max-w-md">
              We handle mechanical failures, print quality drops, electronic faults, and power issues with absolute precision.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-3xl font-black text-accent/50">01</span>
                <div>
                  <h4 className="text-xl font-bold tracking-wide uppercase mb-2">Diagnose</h4>
                  <p className="text-slate-400">Identify the exact root cause of the error code or hardware fault.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-3xl font-black text-accent/50">02</span>
                <div>
                  <h4 className="text-xl font-bold tracking-wide uppercase mb-2">Repair</h4>
                  <p className="text-slate-400">Execute component-level fixes or OEM part replacements.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-3xl font-black text-accent/50">03</span>
                <div>
                  <h4 className="text-xl font-bold tracking-wide uppercase mb-2">Calibrate</h4>
                  <p className="text-slate-400">Align printheads, tension belts, and configure network settings.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-3xl font-black text-accent/50">04</span>
                <div>
                  <h4 className="text-xl font-bold tracking-wide uppercase mb-2">Test</h4>
                  <p className="text-slate-400">Run rigorous live print tests before handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REPAIR OPTIONS */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-20 tracking-tight">Choose the Repair Option That Fits Your Situation</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* On-Site */}
            <div className="bg-white p-8 md:p-12 border-t-4 border-accent shadow-xl">
              <h3 className="text-2xl font-black text-primary uppercase tracking-wide mb-2">On-Site Office Repair</h3>
              <p className="text-xl text-slate-500 font-medium mb-10">Your printer stays at your office.</p>
              
              <ul className="space-y-4 text-slate-700 font-medium mb-12">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Technician dispatched to Dubai/Ajman</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> On-site diagnostics</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Live print calibration</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Reduced business downtime</li>
              </ul>
              
              <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 tracking-widest uppercase text-sm transition-colors">
                Request On-Site Service
              </a>
            </div>

            {/* Workshop */}
            <div className="bg-primary p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              {/* Subtle background element */}
              <div className="absolute -bottom-24 -right-24 text-[200px] text-white/5 font-black z-0 pointer-events-none">W</div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Workshop Repair</h3>
                <p className="text-xl text-accent font-medium mb-10">Complex Fault? Bring it in.</p>
                
                <ul className="space-y-4 text-slate-300 font-medium mb-12">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Drop off at Al Karama or Al Riyadh</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Pickup & delivery available</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Full component disassembly</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" /> Ultrasonic cleaning & bench testing</li>
                </ul>
                
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white hover:bg-accent-hover font-bold px-8 py-4 tracking-widest uppercase text-sm transition-colors">
                  Contact Workshop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY GALA IT CARE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight mb-20 text-center lg:text-left">
            Why Businesses Choose <br className="hidden lg:block"/> Gala IT Care
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            <div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 uppercase">Fast Turnaround</h3>
              <p className="text-xl text-slate-500 font-medium">24–48 Hour Repair Turnaround on standard hardware faults, minimizing your operational downtime.</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 uppercase">Genuine Parts</h3>
              <p className="text-xl text-slate-500 font-medium">100% Genuine OEM replacement parts for unmatched reliability and print quality.</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 uppercase">On-Site Service</h3>
              <p className="text-xl text-slate-500 font-medium">Technicians dispatched directly to your location across Dubai and Ajman.</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 uppercase">Service Warranty</h3>
              <p className="text-xl text-slate-500 font-medium">We stand by our work with a 90-Day Parts & Labor Warranty on all repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PREMIUM FAQ */}
      <section className="py-24 bg-surface-dark border-t border-border-dark">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight sticky top-24">
                Questions? <br/>
                <span className="text-slate-500">We've Got Answers.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {/* Native HTML details for lightweight accessible accordion */}
              {[
                { q: "How fast can a technician visit my office for plotter repair?", a: "We offer rapid dispatch across Dubai and Ajman, with most on-site visits scheduled within 2 to 4 hours of your booking request." },
                { q: "Do you provide original spare parts and warranty?", a: "Yes, Gala IT Care uses only genuine OEM parts for all HP, Canon, Epson, and Xerox repairs. All parts and labor are backed by our 90-day service warranty." },
                { q: "What should I do before calling for repair service?", a: "Please have your printer make, exact model number, and any error code displayed on the screen ready so our technicians can prepare the correct diagnostic tools." },
                { q: "What happens if my printer cannot be repaired on-site?", a: "If a complex chip-level hardware failure is identified, we provide hassle-free pickup to our workshop facility, complete the fix, and deliver it back to you tested." }
              ].map((faq, i) => (
                <details key={i} className="group bg-primary border border-slate-800 hover:border-slate-600 transition-colors rounded-sm">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-white">
                    <span>{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-400 px-6 pb-6 pt-0 animate-fadeIn font-medium">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-16 tracking-tight">Service Across Dubai & Ajman</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-slate-100 p-10 flex flex-col items-center">
              <MapPin className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-3xl font-black text-primary uppercase mb-2">Dubai</h3>
              <p className="text-slate-500 font-bold tracking-wide mb-6">AL KARAMA, OPP. BURJUMAN</p>
              <a href="tel:+971586629186" className="text-2xl font-bold text-slate-800 hover:text-accent transition-colors">+971 58 662 9186</a>
            </div>
            <div className="border-2 border-slate-100 p-10 flex flex-col items-center">
              <MapPin className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-3xl font-black text-primary uppercase mb-2">Ajman</h3>
              <p className="text-slate-500 font-bold tracking-wide mb-6">AL RIYADH, NEAR AMINA HOSPITAL</p>
              <a href="tel:+971561481460" className="text-2xl font-bold text-slate-800 hover:text-accent transition-colors">+971 56 148 1460</a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/95 mix-blend-multiply z-10" />
          <Image src="/images/printer_hero.webp" alt="Printer Repair Final" fill className="object-cover object-bottom" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Print Quality Drops or Hardware Halts?
          </h2>
          <p className="text-2xl text-accent font-bold mb-8">Don't Let Downtime Cost You.</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
            Contact Gala IT Care now for instant expert diagnostics and fast repair turnarounds across Dubai and Ajman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phonePrimary}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary hover:bg-slate-100 rounded-sm font-black uppercase tracking-widest transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-sm font-black uppercase tracking-widest transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
