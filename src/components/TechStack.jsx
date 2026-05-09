"use client";
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const techStack = [
  { icon: <FaHtml5 className="text-[#E34F26]" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-[#1572B6]" />, name: 'CSS3' },
  { icon: <FaJs className="text-[#F7DF1E]" />, name: 'JavaScript' },
  { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
  { icon: <SiNextdotjs className="text-on-surface" />, name: 'Next.js' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
  { icon: <SiExpress className="text-on-surface" />, name: 'Express' },
  { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  { icon: <SiFirebase className="text-[#FFCA28]" />, name: 'Firebase' },
];

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-on-surface/10"></div>
          <h3 className="font-display text-xl font-bold text-on-surface uppercase tracking-widest text-sm px-6 border border-on-surface/10 py-2.5 rounded-full">
            Tech Stack
          </h3>
          <div className="h-px flex-1 bg-on-surface/10"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {techStack.map((tech, i) => (
            <GlassCard
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 flex flex-col items-center justify-center gap-3 rounded-2xl border-on-surface/5 hover:border-primary/30 transition-all group"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
