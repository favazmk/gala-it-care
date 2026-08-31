"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <header className="w-full max-w-7xl bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-premium rounded-full pointer-events-auto transition-all duration-300">
        <div className="px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo and Location */}
        <div className="flex items-center gap-8">
          <Link href={ROUTES.home} className="flex items-center group">
            <Image
              src="https://galaitcare.com/wp-content/uploads/2025/05/Gala-IT-Care-C-Logo-180-60.png"
              alt="Gala IT Care Logo"
              width={160}
              height={53}
              priority
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Dubai & Ajman
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { name: "Printer Repair", route: ROUTES.home },
            { name: "Laptop Repair", route: ROUTES.laptop },
            { name: "Data Recovery", route: ROUTES.dataRecovery },
          ].map((item) => {
            const isActive = pathname === item.route;
            return (
              <Link
                key={item.name}
                href={item.route}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? "bg-slate-100 text-accent shadow-sm" 
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-[13px] font-bold text-success bg-green-50/50 hover:bg-green-100 rounded-full transition-all duration-300 border border-green-100"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${CONTACT_INFO.phonePrimary}`}
            className="flex items-center gap-2 px-7 py-3 text-[13px] font-bold text-white bg-primary hover:bg-slate-800 rounded-full transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            {CONTACT_INFO.phonePrimaryDisplay}
          </a>
        </div>
        
        {/* Mobile Header Icons */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-green-50 text-success border border-green-100"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-50 text-primary border border-slate-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="absolute top-[90px] left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-premium rounded-3xl p-6 flex flex-col gap-6 pointer-events-auto md:hidden">
        <nav className="flex flex-col gap-2">
          {[
            { name: "Printer Repair", route: ROUTES.home },
            { name: "Laptop Repair", route: ROUTES.laptop },
            { name: "Data Recovery", route: ROUTES.dataRecovery },
          ].map((item) => {
            const isActive = pathname === item.route;
            return (
              <Link
                key={item.name}
                href={item.route}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-5 py-4 rounded-2xl text-[14px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? "bg-slate-100 text-accent shadow-sm" 
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
          <a
            href={`tel:${CONTACT_INFO.phonePrimary}`}
            className="flex items-center justify-center gap-2 px-7 py-4 text-[13px] font-bold text-white bg-primary rounded-full"
          >
            <Phone className="w-4 h-4" />
            {CONTACT_INFO.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    )}
  </div>
  );
}
