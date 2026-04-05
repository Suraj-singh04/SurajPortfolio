"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "surajsingh877028@gmail.com",
    href: "mailto:surajsingh877028@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70093 69901",
    href: "tel:+917009369901",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Suraj-singh04",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suraj-singh-953388206/",
  },
  {
    icon: ExternalLink,
    label: "Medium",
    href: "https://medium.com/@theycallmedweeb",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Contact() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const Wrapper = info.href ? "a" : "div";
            const wrapperProps =
              info.href ?
                {
                  href: info.href,
                  target: info.href.startsWith("http") ? "_blank" : undefined,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div key={info.label} variants={item}>
                <Wrapper
                  {...wrapperProps}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    {info.label}
                  </span>
                  <span className="text-sm text-foreground font-medium text-center">
                    {info.value}
                  </span>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="mailto:dhananjayhirey2905@gmail.com"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
