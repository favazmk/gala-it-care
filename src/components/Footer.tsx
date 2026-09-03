import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, ROUTES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-20 border-t border-slate-900 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Brand & Mission - Takes more space on desktop */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 pr-8">
          <Link href={ROUTES.home} className="inline-block mb-8 transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]">
            <Image
              src="https://galaitcare.com/wp-content/uploads/2025/05/Gala-IT-Care-C-Logo-180-60.png"
              alt="Gala IT Care Logo"
              width={200}
              height={66}
              className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-[15px] leading-relaxed text-slate-400 font-medium max-w-sm">
            Professional IT repair and technical services in the UAE. Delivering precision, confidentiality, and reliability across Dubai and Ajman.
          </p>
        </div>

        {/* Services */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h3 className="text-xs font-bold text-slate-100 tracking-[0.2em] uppercase mb-8">Expertise</h3>
          <ul className="space-y-4">
            <li>
              <Link href={ROUTES.home} className="text-[14px] text-slate-400 hover:text-white active:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
                Printer Repair
              </Link>
            </li>
            <li>
              <Link href={ROUTES.laptop} className="text-[14px] text-slate-400 hover:text-white active:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
                Laptop Repair
              </Link>
            </li>
            <li>
              <Link href={ROUTES.dataRecovery} className="text-[14px] text-slate-400 hover:text-white active:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">
                Data Recovery
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3">
          <h3 className="text-xs font-bold text-slate-100 tracking-[0.2em] uppercase mb-8">Service Centers</h3>
          <div className="space-y-8">
            <div className="group">
              <p className="font-semibold text-white mb-1 group-hover:text-accent active:text-accent transition-colors">{CONTACT_INFO.locations.dubai.name}</p>
              <p className="text-[14px] text-slate-400 leading-relaxed max-w-[200px]">{CONTACT_INFO.locations.dubai.address}</p>
            </div>
            <div className="group">
              <p className="font-semibold text-white mb-1 group-hover:text-accent active:text-accent transition-colors">{CONTACT_INFO.locations.ajman.name}</p>
              <p className="text-[14px] text-slate-400 leading-relaxed max-w-[200px]">{CONTACT_INFO.locations.ajman.address}</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h3 className="text-xs font-bold text-slate-100 tracking-[0.2em] uppercase mb-8">Contact</h3>
          <ul className="space-y-4">
            <li>
              <div className="text-[14px] font-medium text-slate-400 block">
                Dubai: <span className="text-white block mt-1">{CONTACT_INFO.phonePrimaryDisplay}</span>
              </div>
            </li>
            <li>
              <div className="text-[14px] font-medium text-slate-400 block">
                Ajman: <span className="text-white block mt-1">{CONTACT_INFO.phoneSecondaryDisplay}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="container mx-auto px-4 lg:px-8 mt-20 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-[13px] text-slate-500 font-medium text-center md:text-left gap-4 md:gap-0">
        <p>
          &copy; {new Date().getFullYear()} Gala IT Care. All rights reserved. 
          <span className="hidden md:inline mx-2">|</span>
          <span className="block md:inline mt-2 md:mt-0">
            Site by{" "}
            <a 
              href="https://webbranding.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-[#6a0dad] hover:text-[ active:text-[#8a2be2] transition-colors"
            >
              Web Branding
            </a>
          </span>
        </p>
        <div className="flex space-x-8">
          <Link href="#" className="hover:text-slate-300 active:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-300 active:text-slate-300 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
