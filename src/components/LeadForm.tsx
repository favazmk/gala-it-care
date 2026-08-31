"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

type FormType = "printer" | "laptop" | "data-recovery";

interface LeadFormProps {
  type: FormType;
  title?: string;
  buttonText?: string;
}

export default function LeadForm({ type, title, buttonText = "Get a Free Quote" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form fields state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp Message
    const serviceType = type === "printer" ? "Printer Repair" : type === "laptop" ? "Laptop Repair" : "Data Recovery";
    const activeSource = typeof window !== "undefined" ? sessionStorage.getItem("ad_source") : null;
    
    const message = `Hello Gala IT Care Team,

I would like to request a service quote. Here are my details:

*Name:* ${fullName}
*Phone:* ${phone}
*Service Type:* ${serviceType}
*Device Details:* ${deviceModel}
*Issue Description:* ${issue}
${activeSource ? `\n*Lead Source:* ${activeSource}` : ""}

Please let me know how we can proceed.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
    
    // Simulate a brief loading state for UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Show success state in the UI
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-premium border border-white/50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-success"></div>
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-14 h-14 text-success drop-shadow-sm" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Request Received</h3>
        <p className="text-[15px] text-slate-700 mb-8 leading-relaxed">
          Thank you! Our expert team will contact you shortly to confirm your details.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-widest uppercase text-slate-600 font-bold">Need immediate assistance?</p>
          <a
            href={`tel:${CONTACT_INFO.phonePrimary}`}
            className="flex items-center justify-center gap-2 px-6 py-4 text-[13px] font-bold text-primary bg-white hover:bg-slate-100 active:bg-slate-100 rounded-full transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 text-[13px] font-bold text-success bg-white/60 hover:bg-white/80 active:bg-white/80 rounded-full transition-colors border border-white/50"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-premium rounded-3xl overflow-hidden flex flex-col h-full relative transition-all duration-300 hover:shadow-premium-hover">
      {/* Decorative top accent line */}
      <div className="h-1.5 w-full bg-accent"></div>
      
      <div className="p-8 md:p-10 flex-1">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
            {title || "Tell Us What's Wrong"}
          </h3>
          <p className="text-[14px] text-slate-700 font-medium">Submit your device details for a free technical diagnostic quote.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="fullName" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[14px] text-slate-900 placeholder:text-slate-500 font-medium shadow-sm"
                placeholder="Name"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                Phone <span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[14px] text-slate-900 placeholder:text-slate-500 font-medium shadow-sm"
                placeholder="Mobile Number"
              />
            </div>
          </div>

          {type === "printer" && (
            <div>
              <label htmlFor="deviceModel" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                Device Brand & Model <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="deviceModel"
                required
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[14px] text-slate-900 placeholder:text-slate-500 font-medium shadow-sm"
                placeholder="e.g. HP DesignJet T830"
              />
            </div>
          )}

          {type === "laptop" && (
            <div>
              <label htmlFor="deviceModel" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                Laptop Brand & Model <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="deviceModel"
                required
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[14px] text-slate-900 placeholder:text-slate-500 font-medium shadow-sm"
                placeholder="e.g. MacBook Pro 16 / ASUS ROG"
              />
            </div>
          )}

          {type === "data-recovery" && (
            <div>
              <label htmlFor="deviceModel" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                Storage Device Type <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <select
                  id="deviceModel"
                  required
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full px-5 py-3.5 pr-10 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[14px] text-slate-900 appearance-none font-medium cursor-pointer shadow-sm"
                >
                  <option value="" className="text-slate-900">Select device type...</option>
                  <option value="hard_drive" className="text-slate-900">Hard Drive (HDD)</option>
                  <option value="ssd" className="text-slate-900">Solid-State Drive (SSD)</option>
                  <option value="raid_nas" className="text-slate-900">RAID / NAS / Server</option>
                  <option value="usb_flash" className="text-slate-900">USB Flash / Memory Card</option>
                  <option value="mobile" className="text-slate-900">Smartphone / Tablet</option>
                  <option value="other" className="text-slate-900">Other / Not Sure</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="issue" className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
              Describe {type === "data-recovery" ? "Failure" : "Issue"} <span className="text-accent">*</span>
            </label>
            <textarea
              id="issue"
              required
              rows={3}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full px-5 py-3.5 bg-white/50 border border-white/60 rounded-xl focus:bg-white/70 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-[14px] text-slate-900 placeholder:text-slate-500 font-medium shadow-sm"
              placeholder={
                type === "data-recovery"
                  ? "e.g. Drive is making a clicking sound, deleted files..."
                  : "e.g. Printer showing Error 86:01, Paper jam..."
              }
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-4 px-6 bg-primary hover:bg-slate-800 active:bg-slate-800 text-white font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-premium-hover active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin text-white" />
              ) : (
                <span className="flex items-center gap-3 tracking-widest uppercase text-[12px]">
                  {buttonText}
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 group-active:bg-white/30 active:bg-white/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </span>
                </span>
              )}
            </button>
          </div>
          
          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-slate-600 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            Technicians available now
          </div>
        </form>
      </div>
    </div>
  );
}
