"use client";

import { Github, Linkedin, ExternalLink, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/SurajSingh", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dhananjayhirey/",
    label: "LinkedIn",
  },
  {
    icon: ExternalLink,
    href: "https://medium.com/@theycallmedweeb",
    label: "Medium",
  },
];

export function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              SS<span className="text-white/40 font-medium">.dev</span>
            </span>
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Suraj Singh. All rights reserved.
            </p>
          </div>

          {/* Center — Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xs text-white/40 hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — Socials + Back to top */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/[0.15] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/[0.15] transition-all duration-200 hover:-translate-y-0.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
