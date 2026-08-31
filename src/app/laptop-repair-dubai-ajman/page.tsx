import { Metadata } from "next";
import { Clock, ShieldCheck, MapPin, CheckCircle2, Phone, MessageCircle, Truck } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laptop Repair Dubai & Ajman | Mac, Surface & Gaming",
  description: "Expert Laptop Repair Services in Dubai & Ajman. Specialized Mac, Microsoft Surface, Gaming Laptop, and PC repairs.",
  alternates: {
    canonical: ROUTES.laptop,
  },
};

export default function LaptopRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laptop Repair Services Dubai & Ajman",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gala IT Care",
      "telephone": CONTACT_INFO.phonePrimary,
      "address": [
        { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
        { "@type": "PostalAddress", "addressLocality": "Ajman", "addressCountry": "AE" }
      ]
    },
    "description": "Expert Laptop Repair Services in Dubai & Ajman. Specialized Mac, Microsoft Surface, Gaming Laptop, and PC repairs.",
    "areaServed": ["Dubai", "Ajman"]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      
      {/* 1. HERO SECTION (PREMIUM EDITORIAL) */}
      <section className="relative bg-background pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-[3rem] relative overflow-hidden flex flex-col lg:flex-row items-center min-h-[85vh]">
            
            {/* Background Image (Desktop only) */}
            <div className="absolute inset-0 z-0 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent z-10" />
              <Image 
                src="/images/laptop_desktop.webp"
                alt="Advanced Electronics Lab"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="w-full lg:w-[55%] relative z-20 p-10 lg:p-20 flex flex-col justify-center">
              {/* Background Image (Mobile only) */}
              <div className="absolute inset-0 z-0 lg:hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/50 to-primary/85 z-10" />
                <Image 
                  src="/images/laptop_mobile.webp"
                  alt="Advanced Electronics Lab"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              <div className="relative z-10 flex flex-col [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-max mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[11px] font-bold text-white tracking-widest uppercase">Dubai & Ajman Authorized Service</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.8),0_4px_24px_rgba(0,0,0,0.6)]">
                Expert <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 [text-shadow:none]">Laptop Repair</span> Services
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
                Specialized Mac, Microsoft Surface, Gaming Laptop, and PC repairs. Certified chip-level logic board diagnostics, screen replacement, and thermal upgrades using genuine parts.
              </p>
              
              <ul className="space-y-5 mb-14">
                {[
                  { icon: Clock, text: "24–48 Hour Express Repair Turnaround" },
                  { icon: Truck, text: "Free Doorstep Pickup & Delivery Across UAE" },
                  { icon: ShieldCheck, text: "90-Day Parts & Labor Service Warranty" }
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
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 active:bg-slate-100 text-primary rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  Call: {CONTACT_INFO.phonePrimaryDisplay}
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 active:bg-white/10 text-white rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Instant Quote
                </a>
              </div>
              </div>
            </div>
            
            {/* Right Content - Form */}
            <div className="w-full lg:w-[45%] relative z-20 p-6 lg:p-12 lg:pr-20 h-full flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <LeadForm type="laptop" title="Request Repair Service" buttonText="Get Instant Quote" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZED REPAIR CATEGORIES (ASYMMETRIC CARDS) */}
      <section className="py-24 lg:py-32 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Diagnostics</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
              Specialized Repair Categories
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="relative p-10 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group flex flex-col overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/macbook.webp" alt="Mac Repair" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">01</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 tracking-tight">Apple Mac Repairs</h4>
                <p className="text-[11px] font-bold text-slate-500 mb-8 uppercase tracking-widest">(MacBook Pro, Air, iMac)</p>
                <ul className="space-y-5 flex-1">
                  {[
                    "Chip-level logic board micro-soldering and power IC repair",
                    "Liquid / water damage restoration and short-circuit removal",
                    "Original Retina display and screen assembly replacements",
                    "Battery degradation replacement and flex-gate cable fixes",
                    "macOS recovery, kernel panic fixes, and SSD data retrieval"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-[14px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group flex flex-col overflow-hidden min-h-[500px] lg:translate-y-8">
              <div className="absolute inset-0 z-0">
                <Image src="/images/microsoft.webp" alt="Surface Repair" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">02</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 tracking-tight">Microsoft Surface Repairs</h4>
                <p className="text-[11px] font-bold text-slate-500 mb-8 uppercase tracking-widest">(Surface Pro, Book, Laptop)</p>
                <ul className="space-y-5 flex-1">
                  {[
                    "Precision screen and digitizer glass replacement without frame damage",
                    "Battery bloating, swollen cell replacement, and power rail fixes",
                    "Charging port (Surface Connect / USB-C) soldering and logic board repair",
                    "Thermal paste re-application and internal fan noise suppression"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-[14px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group flex flex-col overflow-hidden min-h-[500px] lg:translate-y-16">
              <div className="absolute inset-0 z-0">
                <Image src="/images/gaming.webp" alt="Gaming Laptop Repair" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">03</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2 tracking-tight">Gaming Laptop Repairs</h4>
                <p className="text-[11px] font-bold text-slate-500 mb-8 uppercase tracking-widest">(ASUS ROG, MSI, Alienware, Lenovo Legion)</p>
                <ul className="space-y-5 flex-1">
                  {[
                    "High-performance GPU / CPU thermal repasting and liquid metal treatment",
                    "Dedicated graphics card (NVIDIA RTX / AMD Radeon) chip-level diagnostic & reballing",
                    "High refresh rate (144Hz / 240Hz / 4K) screen panel replacements",
                    "RGB keyboard, charging port jack, and cooling fan replacements",
                    "BIOS flashing, blue screen (BSOD) troubleshooting, and RAM/NVMe SSD upgrades"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-[14px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GENERAL HARDWARE & SOFTWARE SOLUTIONS */}
      <section className="py-24 lg:py-32 bg-primary text-white rounded-[3rem] mx-4 lg:mx-8 relative overflow-hidden -mt-10 lg:mt-16 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Core Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">General Hardware & Software Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: "Screen & Hinge Fixes", desc: "Cracked LCD panel replacement, broken chassis/hinge re-anchoring." },
              { title: "Power & Battery", desc: "Battery replacement, dead motherboard revival, charging DC jack repair." },
              { title: "Performance Upgrades", desc: "High-speed NVMe M.2 SSD installation, DDR4/DDR5 RAM expansion." },
              { title: "Data Recovery & Software", desc: "Corrupted OS restoration, virus/malware cleanup, lost data retrieval." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-white/10 hover:bg-white/10 active:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold text-accent mb-4 tracking-wide">{item.title}</h4>
                <p className="text-[15px] text-slate-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRANDS SUPPORTED & SERVICE DELIVERY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-12">Supported Brands</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Apple MacBook", "Microsoft Surface", "ASUS ROG / TUF", "MSI Gaming", "Dell Alienware / XPS", "Lenovo Legion", "HP OMEN"].map((brand) => (
                <span key={brand} className="text-[13px] font-bold text-primary bg-slate-50 border border-slate-100 px-6 py-3 rounded-full tracking-wide shadow-sm">{brand}</span>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Logistics</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Service Delivery Options</h3>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <table className="w-full text-left border-collapse bg-white shadow-premium rounded-3xl overflow-hidden border border-slate-100 min-w-[800px]">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-8 font-bold text-[16px] tracking-wide border-b border-slate-800 w-1/3">Delivery Mode</th>
                  <th className="p-8 font-bold text-[16px] tracking-wide border-b border-slate-800 w-1/3">Ideal For</th>
                  <th className="p-8 font-bold text-[16px] tracking-wide border-b border-slate-800 w-1/3">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 active:bg-slate-50 transition-colors group">
                  <td className="p-8 font-bold text-slate-800 text-[18px]">Doorstep Pickup & Delivery</td>
                  <td className="p-8 text-slate-600 font-medium text-[15px]">Busy professionals, remote workers, home repairs</td>
                  <td className="p-8">
                    <ul className="space-y-4 text-slate-600 text-[14px]">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Free pickup from home/office in Dubai & Ajman</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Safe device transit in padded protective cases</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Digital inspection report & price approval</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 active:bg-slate-50 transition-colors group">
                  <td className="p-8 font-bold text-slate-800 text-[18px]">Workshop Walk-In Service</td>
                  <td className="p-8 text-slate-600 font-medium text-[15px]">Complex chip-level fixes, liquid damage, emergencies</td>
                  <td className="p-8">
                    <ul className="space-y-4 text-slate-600 text-[14px]">
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Visit Dubai (Al Karama) or Ajman (Al Riyadh) centers</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Direct consultation with micro-soldering tech</li>
                      <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> Immediate bench diagnosis & express fix</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 lg:py-32 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Help Center</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-12">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Can you repair liquid damage on a MacBook logic board?", a: "Yes, our technicians specialize in chip-level micro-soldering, ultrasonic cleaning, and trace repair for liquid-damaged MacBooks without requiring full board replacement." },
              { q: "My gaming laptop is overheating and dropping FPS. Can you fix it?", a: "Absolutely. We clean internal dust accumulation, replace worn cooling fans, and re-apply high-grade thermal paste or liquid metal to restore optimal gaming temperatures." },
              { q: "Do you offer genuine screen replacements for Microsoft Surface Pro?", a: "Yes, we use original-quality Surface display assemblies and precision heat-separation techniques to replace screens without damaging the thin enclosure." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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
            Laptop Crashing, Overheating, <span className="text-slate-400">or Won't Turn On?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-14 font-medium max-w-2xl mx-auto">Contact Gala IT Care now for expert diagnostic assistance and fast laptop repairs across Dubai and Ajman.</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-100 active:bg-slate-100 text-primary font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]">
              <MessageCircle className="w-5 h-5" /> WhatsApp: {CONTACT_INFO.phonePrimaryDisplay}
            </a>
            <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/20 hover:bg-white/10 active:bg-white/10 text-white font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
