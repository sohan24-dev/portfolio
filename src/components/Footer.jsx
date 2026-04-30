import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-on-surface/10 font-body text-sm text-on-surface-variant/70">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20 px-8 w-full max-w-7xl mx-auto">

        {/* Left Column: Branding & Bio */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="text-lg font-bold tracking-tighter text-on-surface font-display">
            SOHAN
          </div>
          <p className="text-neutral-400 leading-relaxed max-w-xs">
            Full Stack Developer passionate about creating beautiful and functional web experiences.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-neutral-500">Available for work</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs text-on-surface uppercase tracking-widest font-bold">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-3">
            <a className="text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out" href="#about">About</a>
            <a className="text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out" href="#projects">Projects</a>
            <a className="text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out" href="#services">Services</a>
            <a className="text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out" href="#contact">Contact</a>
          </nav>
        </div>

        {/* Social Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs text-on-surface uppercase tracking-widest font-bold">
            Connect With Me
          </h3>
          <div className="flex flex-col gap-3">
            <Link className="flex items-center gap-3 text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined text-xl">terminal</span>
              <span>GitHub</span>
            </Link>
            <Link className="flex items-center gap-3 text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined text-xl">hub</span>
              <span>LinkedIn</span>
            </Link>
            <Link className="flex items-center gap-3 text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
              <span>Twitter</span>
            </Link>
            <Link className="flex items-center gap-3 text-neutral-400 hover:text-on-surface hover:translate-x-1 transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined text-xl">mail</span>
              <span>Email</span>
            </Link>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs text-on-surface uppercase tracking-widest font-bold">
            Newsletter
          </h3>
          <p className="text-neutral-400 text-xs">Subscribe to get the latest tech insights.</p>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                className="w-full bg-background border border-on-surface/10 rounded-none py-3 px-4 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40"
                placeholder="Email address"
                type="email"
              />
            </div>
            <button className="btn btn-neutral bg-on-surface text-background hover:bg-on-surface-variant/10 hover:text-on-surface transition-colors duration-200 uppercase tracking-widest text-xs font-bold border-none">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-on-surface/10">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-neutral-500">
            © 2024 SOHAN. Built with Next.js & Tailwind CSS
          </div>
          <div className="flex items-center gap-8">
            <span className="text-xs text-neutral-600">Built for performance.</span>
            <div className="flex items-center gap-4">
              <Link className="text-xs text-neutral-600 hover:text-on-surface transition-colors" href="#">Privacy</Link>
              <Link className="text-xs text-neutral-600 hover:text-on-surface transition-colors" href="#">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
