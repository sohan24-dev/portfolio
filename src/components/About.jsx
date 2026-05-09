"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 space-y-24 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Profile Sidebar */}
        <aside className="md:col-span-5 space-y-8 md:sticky md:top-28">
          <GlassCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-8 rounded-[2.5rem] overflow-hidden relative group border-primary/10"
          >
            <div className="relative mb-8 aspect-square rounded-3xl overflow-hidden group">
              <Image
                alt="SOHAN Professional Portrait"
                src="https://i.ibb.co.com/CKQJpDLb/Gemini-Generated-Image-74fyhn74fyhn74fy.png"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="font-display text-4xl font-bold text-on-surface tracking-tight">
                  SOHAN
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-primary rounded-full"></div>
                  <h3 className="text-lg font-medium text-primary uppercase tracking-widest text-sm">
                    Frontend Developer
                  </h3>
                </div>
              </div>

              <p className="text-on-surface-variant leading-relaxed font-medium">
                Building the future of the web with precision, passion, and modern technologies.
              </p>

              <div className="flex gap-3">
                {[
                  { icon: <FaFacebook />, href: "https://facebook.com/rizbeahamedsohan", key: "fb" },
                  { icon: <FaGithub />, href: "https://github.com/sohan24-dev", key: "gh" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sohan-dev25", key: "in" },
                ].map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-on-surface/5 border border-on-surface/10 text-xl text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>

              <button className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold tracking-wide hover:shadow-[0_8px_30px_rgb(var(--primary-rgb),0.3)] transition-all duration-300 active:scale-[0.98]">
                Get In Touch
              </button>
            </div>
          </GlassCard>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-7 space-y-16">
          
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">My Story</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                Crafting digital <span className="text-primary">experiences</span> that matter.
              </h2>
            </div>

            <div className="space-y-6 text-on-surface-variant text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am a dedicated Frontend Developer with a focus on creating highly interactive, responsive, and performance-optimized web applications. My journey into the world of development began with a fascination for user interfaces and has evolved into a full-scale commitment to mastering the MERN stack.
              </p>
              <p>
                I specialize in building modular components with <span className="text-on-surface font-semibold underline decoration-primary/30">React & Next.js</span>, ensuring that every pixel serves a purpose and every interaction feels natural. My approach combines technical rigor with a keen eye for aesthetic design.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {[
               { title: "Performance First", desc: "Optimizing for speed and efficiency in every line of code.", icon: "bolt" },
               { title: "User Centric", desc: "Designing with the end-user in mind for intuitive experiences.", icon: "person" }
             ].map((val, i) => (
               <GlassCard key={i} className="p-6 rounded-3xl space-y-4 border-on-surface/5">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{val.icon}</span>
                 </div>
                 <div className="space-y-1">
                   <h4 className="font-bold text-on-surface">{val.title}</h4>
                   <p className="text-sm text-on-surface-variant">{val.desc}</p>
                 </div>
               </GlassCard>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
