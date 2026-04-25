'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SocialIcon from '../../components/SocialIcon';
import styles from './Projects.module.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management and secure payment integration.",
    image: "/assets/project1.png",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Health & Fitness App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and wellness goals with interactive charts.",
    image: "/assets/project2.png",
    tags: ["Flutter", "Firebase", "Dart", "Provider"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "AI Image Generator",
    description: "Web application that leverages OpenAI's DALL-E API to generate unique artwork from text prompts.",
    image: "/assets/project3.png",
    tags: ["React", "OpenAI API", "Tailwind", "Cloudinary"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management tool with Kanban boards, real-time updates, and team notifications.",
    image: "/assets/project4.png",
    tags: ["Next.js", "Supabase", "React Query", "Radix UI"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Financial Dashboard",
    description: "A comprehensive dashboard for visualizing complex financial data with interactive D3.js charts.",
    image: "/assets/project5.png",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Real Estate Portal",
    description: "Platform for property listings with advanced search filters, map integration, and virtual tours.",
    image: "/assets/project6.png",
    tags: ["Next.js", "Google Maps API", "SWR", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My <span>Projects</span></h1>
        <p>A showcase of some of my best work and side projects.</p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`${styles.projectCard} glass`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
              />
            </div>
            <div className={styles.content}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <SocialIcon name="github" size={18} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
