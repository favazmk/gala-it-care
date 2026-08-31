"use client";

import { useEffect } from "react";

export default function AdTracker() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    
    // Determine source from UTM parameters or Google Click ID (gclid)
    let source = searchParams.get("utm_source") || searchParams.get("source");
    if (!source && searchParams.has("gclid")) {
      source = "Google Ads";
    }

    if (source) {
      // Store it in sessionStorage so it persists across page navigations
      sessionStorage.setItem("ad_source", source);
    }
    
    // Retrieve the stored source
    const activeSource = sessionStorage.getItem("ad_source");

    if (activeSource) {
      const updateLinks = () => {
        const waLinks = document.querySelectorAll('a[href*="wa.me/"]');
        waLinks.forEach(link => {
          const href = link.getAttribute('href');
          // If the link doesn't already have a custom message
          if (href && !href.includes('?text=')) {
            const message = encodeURIComponent(`Hi Gala IT Care, I need repair assistance. [Source: ${activeSource}]`);
            link.setAttribute('href', `${href}?text=${message}`);
          } else if (href && href.includes('?text=') && !href.includes('[Source:')) {
            // If it has a text but no source yet, append the source
            const urlObj = new URL(href);
            const text = urlObj.searchParams.get('text') || "";
            urlObj.searchParams.set('text', `${text}\n\n[Source: ${activeSource}]`);
            link.setAttribute('href', urlObj.toString());
          }
        });
      };

      // Run initially
      updateLinks();

      // Re-run when DOM changes (e.g., Next.js navigation)
      const observer = new MutationObserver(() => {
        updateLinks();
      });
      
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    }
  }, []);

  return null;
}
