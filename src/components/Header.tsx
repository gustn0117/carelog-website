"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "홈", href: "/" },
  { label: "서비스", href: "/services" },
  { label: "병원마케팅", href: "/marketing" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="CARE LOG 케어로그"
            style={{ height: "36px", width: "auto" }}
            className={scrolled ? "" : "brightness-0 invert"}
          />
          <div className="flex flex-col items-start" style={{ gap: "1px" }}>
            <span className={`text-[15px] font-light tracking-[0.25em] uppercase transition-colors duration-300 ${scrolled ? "text-dark" : "text-white"}`}>
              CARELOG
            </span>
            <span className={`text-[10px] font-normal tracking-[0.15em] transition-colors duration-300 ${scrolled ? "text-muted" : "text-white/60"}`}>
              케어로그
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors relative group ${scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-primary" : "bg-white"}`} />
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm px-5 py-2 rounded-md transition-all duration-300 hover:shadow-lg ${scrolled ? "bg-primary text-white hover:bg-primary-light hover:shadow-primary/20" : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25 hover:shadow-white/10"}`}
          >
            무료 상담
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <svg className={`w-6 h-6 ${scrolled ? "" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-primary py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
