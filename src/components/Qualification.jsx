"use client";
import React from 'react';
import { motion } from 'framer-motion';

import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const Qualification = () => {
  return (
    <section id="qualification" className="max-w-7xl mx-auto px-8 pt-32 pb-32 relative">
      <SectionHeader
        subtitle="My personal journey"
        title="Qualification"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative">
        {/* Timeline Connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-on-surface/10 hidden md:block"></div>

        {/* Education Branch */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12 justify-end"
          >
            <h2 className="text-2xl font-semibold text-on-surface font-display">Education</h2>
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
          </motion.div>

          {[
            { year: '2014 - 2016', title: 'Secondary School Certificate', institution: 'St. Joseph Higher Secondary School' },
            { year: '2016 - 2018', title: 'Higher Secondary Certificate', institution: 'Notre Dame College' },
            { year: '2019 - 2023', title: 'B.Sc. in Computer Science', institution: 'BRAC University' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative flex md:justify-end"
            >
              <GlassCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl w-full max-w-md group hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-primary text-xs font-semibold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-on-surface mb-2 font-display">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.institution}</p>
              </GlassCard>
              <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(179,197,255,0.8)]"></div>
            </div>
          ))}
        </div>

        {/* Experience Branch */}
        <div className="space-y-16 md:mt-32">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="material-symbols-outlined text-primary text-3xl">work</span>
            <h2 className="text-2xl font-semibold text-on-surface font-display">Experience</h2>
          </motion.div>

          {[
            { year: '2023 - Present', title: 'Senior Product Designer', company: 'InnovateTech Solutions' },
            { year: '2021 - 2023', title: 'UI/UX Designer', company: 'Creative Flow Studio' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative flex"
            >
              <GlassCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 3) * 0.1 }}
                className="p-8 rounded-xl w-full max-w-md group hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-primary text-xs font-semibold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-on-surface mb-2 font-display">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.company}</p>
              </GlassCard>
              <div className="absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full hidden md:block shadow-[0_0_15px_rgba(179,197,255,0.8)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Qualification;
