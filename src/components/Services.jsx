import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Web App Development',
    desc: 'Building high-performance, scalable web applications with complex logic and real-time features using React and Next.js.',
    icon: 'terminal',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/20',
    textClass: 'text-primary'
  },
  {
    title: 'Authentication System',
    desc: 'Implementing secure, robust user authentication and authorization flows using NextAuth, JWT, and OAuth providers.',
    icon: 'lock',
    bgClass: 'bg-secondary-container/10',
    borderClass: 'border-secondary-container/20',
    textClass: 'text-secondary-container'
  },
  {
    title: 'Full Stack Website',
    desc: 'End-to-end development of dynamic websites with integrated CMS, server-side rendering, and optimized database schemas.',
    icon: 'layers',
    bgClass: 'bg-tertiary/10',
    borderClass: 'border-tertiary/20',
    textClass: 'text-tertiary'
  },
  {
    title: 'Web Design',
    desc: 'Creating modern, high-fidelity UI/UX designs focused on premium aesthetics, usability, and conversion-optimized layouts.',
    icon: 'brush',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/20',
    textClass: 'text-primary'
  }
];

import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-32 space-y-12">
      <SectionHeader 
        subtitle="What I offer"
        title="Services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <GlassCard 
            key={index} 
            className="p-10 rounded-[2rem] group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <div className={`w-14 h-14 rounded-2xl ${service.bgClass} flex items-center justify-center mb-8 border ${service.borderClass}`}>
                <span className={`material-symbols-outlined ${service.textClass} text-3xl`}>{service.icon}</span>
              </div>
              <h3 className="card-title font-display text-2xl font-semibold text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
            <div className="card-actions justify-end mt-8">
              <span className={`material-symbols-outlined text-outline group-hover:${service.textClass} transition-colors`}>arrow_forward</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* CTA Reference Block */}
      <GlassCard className="mt-32 rounded-3xl overflow-hidden h-[400px] relative">
        <Image 
          alt="Tech Architecture Workspace" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xP9ij3nec_wqrpQGzGOWY-bj72azJuHDnL4RiEWx6D5FsP8v0OI7NF2Tlu6cp9Uxbm-1MVG5EEexK5i-I6ajZpu-bjWZz18Yl4wq_ev8EtymsQ38eOvJKNQ3fSawxS47tH95alB7Y0ErvJ3qS-AiNafYShschaa6B30Q7uXakdLna8qZ1ZT1qx_IIHMcCrc3YkIbByQi-gIdZJ9S8KT_TIztFcCIkUzXBPAYgQRBb-9HBfN4wezhq64Ij_L7RejezKg_ML2oQhw"
          fill
        />
        <div className="card-body relative z-10 bg-gradient-to-t from-background to-transparent flex flex-col justify-end p-12">
          <h2 className="card-title font-display text-4xl font-bold text-on-surface leading-tight">Let's build the future together.</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Currently accepting high-impact projects for Q3 2024. Reach out for architectural consulting or full-cycle development.</p>
        </div>
      </GlassCard>
    </section>
  );
};


export default Services;
