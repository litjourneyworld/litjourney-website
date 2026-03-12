"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [lang, setLang] = useState<"EN" | "中" | "DE">("EN");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-16 px-6 md:px-12 bg-black/92 backdrop-blur-[12px] border-b border-border">
      <a href="#" className="font-playfair text-lg font-extrabold tracking-[0.08em] text-white no-underline">
        LIT <span className="text-green">JOURNEY</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium text-[#aaa] no-underline tracking-[0.04em] transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 text-xs text-muted">
          {(["EN", "中", "DE"] as const).map((l) => (
            <span key={l}>
              <button
                type="button"
                onClick={() => setLang(l)}
                className={`px-1 py-0.5 cursor-pointer transition-colors ${lang === l ? "text-green" : "hover:text-green"}`}
              >
                {l}
              </button>
              {l !== "DE" && <span className="text-border mx-0.5">|</span>}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex py-2 px-5 border-[1.5px] border-green rounded border-solid text-[13px] font-semibold text-green bg-transparent no-underline tracking-[0.04em] transition-all hover:bg-green hover:text-black"
        >
          Partner With Us
        </a>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-border md:hidden flex flex-col p-4 gap-2">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white py-2" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="mt-2 py-2 px-5 border border-green rounded text-green text-center" onClick={() => setMobileOpen(false)}>
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  );
}
