"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Lumina Analytics Platform',
    desc: 'An enterprise-grade data visualization suite for decentralized finance protocols.',
    tags: ['React', 'D3.js', 'Web3'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_RwdwH1I13R3JOg6C_MrrHrNJKnX3jFOqlyARN8ExihXv2j8hGqEdQsf4hX0aHM4yE3lXq-yQviV8Wi0fhx71_ylWPKOVB3GlutvbCuVQ6YLLDZSPJPtBNvjWLDXGxApEQ0qZDMdffxikO_8yU8X_adC5X6aPp2XKClH722dMMklK-prTuctS7P8gZv5WhjyzM9Oe_9cMUGnHfR3441UvFcqGdb5mdsapgaHRbw0HZfd9PegMZ7rNBdStmPusN3XDOoeFY4mDvc',
    link: '#',
    large: true
  },
  {
    title: 'Vortex Mobile',
    desc: 'High-performance asset tracking for digital creators and studios.',
    tags: ['React Native', 'Firebase'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn9jTeghMnK_7_LPm_CSgZImRsC4yKbPcSAQi2LpcVQ1YT7s48ZpQ4ru5ynY-vKJj2PuIbQLolR6NI13GKDHdLbnbpBnRdGHx_l90TxLm3JcnNsreMz2XFUyB-cgJWEwa4gZXGIdHfjldqkOD3YUUA_M_zJvlY5myLyPMzq-m4_kjpmOmQRdQOhgQ5TbiCWMZLcxTws6lHsnslwp-hLZjgjtRMzbr_GGRPONFzcov5u74Vz7Z-uuVFKz7eMWtYMIfFDd-fdm3MylE',
    link: '#',
    large: false
  },
  {
    title: 'Echo OS',
    desc: 'A conceptual operating system interface built for spatial computing.',
    tags: ['Three.js', 'Next.js'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNiWSnOFviz8pbDgHiBPNUuDV6bAleI1H9pKQacXSXhAAD3G-2kfpCY-j80BUn4AWk68VXfEuaDk6z5zUDmiBVzj8w2KAg8SlPdK0ogxxVyDHQQgMPYDhSz71aQdG3_o17TD4QIbY1qbZBh8O8ccEjlK1wDdJbE-MNjB0rDnwXvBRNREhiIcSf4KxLK8MpTWo09CDTi48I2WfzLQQMAW41IBfdVVoibFbQ1iN88gjZLTPYkDIz9R5G5OjFAF_u4WW555eqQERFevA',
    link: '#',
    large: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32">
      <SectionHeader 
        subtitle="Selected Works"
        title="Featured Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projects.map((project, index) => (
          <GlassCard 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`${project.large ? 'lg:col-span-2' : ''} group relative overflow-hidden rounded-[2.5rem] h-[450px] cursor-pointer border-on-surface/5 hover:border-primary/30 transition-all duration-700 shadow-2xl`}
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <Image 
                src={project.img}
                alt={project.title}
                fill
                className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end transform group-hover:translate-y-[-10px] transition-transform duration-500">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-on-surface/5 border border-on-surface/10 text-[10px] uppercase tracking-widest font-bold text-primary backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className={`${project.large ? 'text-4xl' : 'text-2xl'} font-display font-bold text-on-surface mb-4 leading-tight`}>
                {project.title}
              </h3>
              
              <p className="text-on-surface-variant text-sm max-w-lg mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex items-center gap-4">
                <Link href={project.link} className="btn btn-primary btn-sm rounded-xl px-6 font-bold tracking-tight">
                  View Case Study
                </Link>
                <Link href={project.link} className="btn btn-ghost btn-circle btn-sm bg-on-surface/5 border border-on-surface/10 text-on-surface hover:bg-primary transition-all">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* Decorative Corner Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-on-surface/5 backdrop-blur-xl border border-on-surface/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
