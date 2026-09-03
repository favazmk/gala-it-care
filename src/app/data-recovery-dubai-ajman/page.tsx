import { Metadata } from "next";
import { ShieldCheck, Truck, Lock, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Data Recovery Dubai & Ajman | No Data, No Fee",
  description: "Professional & Confidential Data Recovery in Dubai & Ajman. Advanced lab recovery for hard drives, SSDs, RAID servers, and damaged smartphones.",
  alternates: {
    canonical: ROUTES.dataRecovery,
  },
};

export default function DataRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Recovery Services Dubai & Ajman",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gala IT Care",
      "telephone": CONTACT_INFO.phonePrimary,
      "address": [
        { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
        { "@type": "PostalAddress", "addressLocality": "Ajman", "addressCountry": "AE" }
      ]
    },
    "description": "Professional & Confidential Data Recovery in Dubai & Ajman.",
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
                src="/images/data_desktop.webp"
                alt="Data Recovery Clean Room Lab"
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
                  src="/images/data_mobile.webp"
                  alt="Data Recovery Clean Room Lab"
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
                Professional & Confidential <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 [text-shadow:none]">Data Recovery</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
                Advanced lab recovery for crashed hard drives, SSDs, RAID servers, USBs, and damaged smartphones. 100% secure, strictly confidential file retrieval with zero data risk.
              </p>
              
              <ul className="space-y-5 mb-14">
                {[
                  { icon: Lock, text: "Strict Privacy & Non-Disclosure Protocol" },
                  { icon: ShieldCheck, text: "\"No Data, No Fee\" Guarantee" },
                  { icon: Truck, text: "Free Device Pickup & Safe Delivery Across UAE" }
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
                  className="track-call-desktop track-call-mobile inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 active:bg-slate-100 text-primary rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  Call: {CONTACT_INFO.phonePrimaryDisplay}
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-wa-desktop track-wa-mobile inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 active:bg-white/10 text-white rounded-full font-bold transition-all duration-300 text-[13px] tracking-widest uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Emergency Recovery
                </a>
              </div>
              </div>
            </div>
            
            {/* Right Content - Form */}
            <div className="w-full lg:w-[45%] relative z-20 p-6 lg:p-12 lg:pr-20 h-full flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <LeadForm type="data-recovery" title="Request Data Recovery" buttonText="Submit Details" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. RECOVERY SOLUTIONS BY STORAGE MEDIA (ASYMMETRIC CARDS) */}
      <section className="py-24 lg:py-32 bg-surface-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Diagnostics</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
              Recovery Solutions By Storage Media
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="relative p-10 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group flex flex-col overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_hdd.webp" alt="HDD Recovery" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">01</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-8 tracking-tight">Hard Drive (HDD) & Solid-State Drive (SSD) Recovery</h4>
                <ul className="space-y-5 flex-1">
                  {[
                    "Mechanical head crash, clicking/grinding sounds, and motor spindle failures",
                    "NVMe / SATA SSD controller failure, dead NAND flash memory, and electrical shorts",
                    "Formatted drives, deleted partitions, and RAW file system corruption",
                    "Firmware corruption, bad sectors, and OS boot failures"
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
                <Image src="/images/card_raid.webp" alt="RAID Recovery" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">02</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-8 tracking-tight">RAID Arrays, NAS & Enterprise Servers</h4>
                <ul className="space-y-5 flex-1">
                  {[
                    "RAID 0, RAID 1, RAID 5, RAID 6, and RAID 10 array reconstruction",
                    "Failed controller cards, multiple drive striping failures, degraded NAS volumes",
                    "Virtual Machine (VMware, Hyper-V) data extraction & database restoration (SQL, Oracle)"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-[14px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl shadow-premium border border-slate-100 transition-all duration-500 hover:shadow-premium-hover group flex flex-col overflow-hidden min-h-[500px] lg:translate-y-16">
              <div className="absolute inset-0 z-0">
                <Image src="/images/card_mobile.webp" alt="Mobile Recovery" fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] group-hover:bg-white/40 group-active:bg-white/40 active:bg-white/40 group-hover:backdrop-blur-none group-active:backdrop-blur-none transition-all duration-500" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-8 group-hover:scale-110 group-active:scale-110 transition-transform duration-500 shadow-md">
                  <span className="text-2xl font-black">03</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-8 tracking-tight">Smartphone, Memory Card & USB Flash Recovery</h4>
                <ul className="space-y-5 flex-1">
                  {[
                    "Micro-soldering / chip-off recovery for dead or water-damaged iPhones & Androids",
                    "Corrupted SD / MicroSD cards (camera photo & 4K video retrieval)",
                    "Broken USB connectors, undetected pen drives, and flash controller recovery"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-[14px] text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPORTED STORAGE BRANDS & FILE SYSTEMS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <h2 className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-12">Supported Storage Brands</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
            {["Western Digital", "Seagate", "SanDisk", "Samsung", "Toshiba", "Kingston", "Synology", "QNAP", "LaCie"].map((brand) => (
              <span key={brand} className="text-[13px] font-bold text-primary bg-slate-50 border border-slate-100 px-6 py-3 rounded-full tracking-wide shadow-sm">{brand}</span>
            ))}
          </div>
          <div className="bg-slate-50 p-10 md:p-16 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-6">File Systems Recovered</h3>
            <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed text-balance">
              NTFS, FAT32, exFAT, APFS, HFS+, ext2/ext3/ext4, VMFS, ZFS
            </p>
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP DATA RECOVERY WORKFLOW */}
      <section className="py-24 lg:py-32 bg-primary text-white rounded-[3rem] mx-4 lg:mx-8 relative overflow-hidden -mt-10 lg:mt-16 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4">Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Step-By-Step Data Recovery Workflow</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: "01", title: "Free Pickup", desc: "Call or WhatsApp to arrange device collection or drop-off." },
              { step: "02", title: "Lab Diagnosis", desc: "Engineers inspect media in clean lab & provide file list & quote." },
              { step: "03", title: "Safe Extraction", desc: "Data extracted using hardware tools onto a clone drive safely." },
              { step: "04", title: "Verification", desc: "Preview restored files before delivery on external storage." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-white/10 hover:bg-white/10 active:bg-white/10 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.05] group-hover:opacity-[0 group-active:opacity-[0.1] transition-opacity">
                  <span className="text-9xl font-black text-white">{item.step}</span>
                </div>
                <div className="text-xs font-bold text-accent tracking-[0.2em] mb-4">STEP {item.step}</div>
                <h4 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                <p className="text-[14px] text-slate-300 font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
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
              { q: "What does your \"No Data, No Fee\" policy mean?", a: "If our lab engineers are unable to recover your required critical files, you pay nothing for the recovery labor." },
              { q: "My hard drive is making a clicking sound. What should I do?", a: "Power off the drive immediately. Continuous powering of a clicking hard drive can cause permanent physical platter scratch, making data unrecoverable." },
              { q: "How do you guarantee the privacy of my sensitive personal or corporate data?", a: "All recovery operations are performed offline on isolated systems, and we sign binding Non-Disclosure Agreements (NDAs)." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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
            Critical Data Lost or Storage Device Crashed?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-14 font-medium max-w-2xl mx-auto">Contact Gala IT Care now for immediate diagnostic assistance and secure data recovery services across Dubai and Ajman.</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="track-wa-desktop track-wa-mobile inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-100 active:bg-slate-100 text-primary font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase shadow-premium hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]">
              <MessageCircle className="w-5 h-5" /> WhatsApp: {CONTACT_INFO.phonePrimaryDisplay}
            </a>
            <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="track-call-desktop track-call-mobile inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/20 hover:bg-white/10 active:bg-white/10 text-white font-bold rounded-full transition-all duration-300 text-[13px] tracking-widest uppercase">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
