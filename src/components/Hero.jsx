"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from './GlassCard';

const Hero = () => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-8 pt-20 pb-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-semibold uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight font-display"
          >
            Hi, I'm SOHAN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">
              Frontend Web Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg font-normal text-on-surface-variant max-w-xl leading-relaxed"
          >
            I build modern, fast, and responsive web applications using React
            and Next.js. I focus on clean UI design, smooth user experience,
            and performance optimization.
            <br /><br />
            Currently, I’m improving my full-stack skills and preparing for
            opportunities in professional software development teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="btn btn-primary px-8 py-4 h-auto rounded-xl shadow-lg shadow-primary/20">
              Let’s Work Together
            </button>

            <button className="btn btn-outline px-8 py-4 h-auto rounded-xl hover:bg-on-surface/5 border-on-surface/20 text-on-surface">
              View My Projects
            </button>
          </motion.div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative">
          <GlassCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden aspect-[4/5]"
          >
            <Image
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="High-end professional portrait of SOHAN"
              src="https://i.ibb.co.com/XrwPYnNc/unnamed.jpg"
              width={600}
              height={750}
              priority
            />
          </GlassCard>

          {/* Decorative Element */}
          <GlassCard
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 12 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl flex items-center justify-center z-20"
          >
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};


export default Hero;
