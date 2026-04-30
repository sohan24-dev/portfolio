"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import GlassCard from './GlassCard';

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
      {/* Profile Sidebar */}
      <aside className="lg:col-span-4 space-y-8 sticky top-28">
        <GlassCard
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 rounded-3xl overflow-hidden relative group"
        >
          <div className="avatar mb-6 w-full">
            <div className="w-full rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 relative aspect-square">
              <Image
                alt="SOHAN Professional Portrait"
                src="https://i.ibb.co.com/CKQJpDLb/Gemini-Generated-Image-74fyhn74fyhn74fy.png"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold text-on-surface leading-tight">SOHAN</h1>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Senior Full-Stack Architect specializing in high-performance digital systems and luxury UI/UX implementations.
            </p>
            <div className="flex gap-4 pt-4">
              {['alternate_email', 'hub', 'podcasts'].map((icon) => (
                <Link key={icon} className="btn btn-ghost btn-circle btn-sm bg-on-surface/5 border-on-surface/10 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </Link>
              ))}
            </div>
            <button className="btn btn-primary w-full mt-6 rounded-xl font-semibold hover:shadow-lg shadow-primary/20 transition-all">
              Let's Connect
            </button>
          </div>
        </GlassCard>
      </aside>

      {/* Main Bio Area */}
      <div className="lg:col-span-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="font-display text-4xl font-bold text-on-surface">About Me</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I bridge the gap between complex backend engineering and pixel-perfect interface design. With over a decade of experience in building scalable web applications, I focus on creating digital experiences that are as robust as they are beautiful.
            </p>
            <p>
              My approach is rooted in technical precision and architectural integrity. I believe that every line of code should serve a purpose, and every design element should guide the user journey seamlessly.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-on-surface border-l-4 border-primary pl-4"
          >
            My Tech Stack
          </motion.h3>
          <div className="flex flex-wrap gap-4">
            {['HTML', 'CSS', 'Tailwind', 'React', 'JavaScript', 'Next.js', 'MongoDB'].map((tech, i) => (
              <GlassCard
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-4 rounded-2xl flex items-center gap-3 group hover:border-primary/50 transition-colors"
              >
                <span className="material-symbols-outlined text-primary">
                  {tech === 'HTML' ? 'code' :
                    tech === 'CSS' ? 'brush' :
                      tech === 'Tailwind' ? 'architecture' :
                        tech === 'React' ? 'view_quilt' :
                          tech === 'Next.js' ? 'rocket_launch' : 'database'}
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface font-semibold">{tech}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Experience Table */}
        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-on-surface border-l-4 border-primary pl-4"
          >
            Experience
          </motion.h3>
          <GlassCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <table className="table w-full">
              <thead className="bg-on-surface/5 border-b border-on-surface/10">
                <tr>
                  <th className="text-primary uppercase tracking-widest font-semibold">Role</th>
                  <th className="text-primary uppercase tracking-widest font-semibold">Company</th>
                  <th className="text-primary uppercase tracking-widest font-semibold text-right">Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-on-surface/5">
                {[
                  { role: 'Principal Architect', company: 'Lumina Systems', period: '2021 — Present' },
                  { role: 'Senior Software Engineer', company: 'Vortex Media', period: '2018 — 2021' },
                  { role: 'Full Stack Developer', company: 'Creative Hub', period: '2015 — 2018' },
                ].map((exp, idx) => (
                  <tr key={idx} className="hover:bg-on-surface/5 transition-colors border-none">
                    <td className="text-on-surface font-medium">{exp.role}</td>
                    <td className="text-on-surface-variant">{exp.company}</td>
                    <td className="text-outline text-right">{exp.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};


export default About;
