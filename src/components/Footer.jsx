"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-on-surface/10 text-sm text-on-surface-variant">

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20 px-8 max-w-7xl mx-auto">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold tracking-tight text-on-surface">
            SOHAN
          </h2>

          <p className="text-on-surface-variant leading-relaxed max-w-xs">
            Full Stack Developer passionate about building modern, scalable and high-performance web applications.
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-on-surface-variant">
              Available for work
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest text-on-surface font-semibold">
            Quick Links
          </h3>

          <nav className="flex flex-col gap-3">
            {["About", "Projects", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest text-on-surface font-semibold">
            Connect
          </h3>

          <div className="flex flex-col gap-3">
            {["GitHub", "LinkedIn", "Twitter", "Email"].map((item) => (
              <Link
                key={item}
                href="#"
                className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-lg">
                  {item === "GitHub"
                    ? "terminal"
                    : item === "LinkedIn"
                      ? "hub"
                      : item === "Twitter"
                        ? "share"
                        : "mail"}
                </span>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest text-on-surface font-semibold">
            Stay Updated
          </h3>

          <p className="text-xs text-on-surface-variant">
            Subscribe to get insights, updates and tips.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-background border border-on-surface/10 px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition"
            />

            <button className="bg-on-surface text-background hover:opacity-80 transition px-4 py-3 text-xs uppercase tracking-widest font-semibold">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-on-surface/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} SOHAN. Built with Next.js & Tailwind CSS
          </p>

          <div className="flex gap-6 text-xs text-on-surface-variant">
            <Link href="#" className="hover:text-on-surface transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-on-surface transition">
              Terms
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;