"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const stats = [
  { label: 'Experience', value: '10+ Years', sub: 'In Digital Industry' },
  { label: 'Performance', value: '1M+', sub: 'Coding Hours Logged' },
  { label: 'Portfolio', value: '140+', sub: 'Projects Completed' },
  { label: 'Trust', value: '500+', sub: 'Satisfied Clients' },
];

import GlassCard from './GlassCard';

const Stats = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: 15,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-7xl mx-auto px-8">
      {stats.map((stat, index) => (
        <GlassCard 
          key={index} 
          ref={(el) => (statsRef.current[index] = el)}
          className="p-8 rounded-2xl group hover:border-primary/50 transition-colors"
        >
          <div className="text-on-surface-variant/70 text-[12px] uppercase font-semibold mb-2 tracking-wider font-display">{stat.label}</div>
          <div className="text-4xl font-bold text-on-surface mb-1 font-display">{stat.value}</div>
          <div className="text-on-surface-variant text-sm">{stat.sub}</div>
        </GlassCard>
      ))}
    </div>
  );
};


export default Stats;
