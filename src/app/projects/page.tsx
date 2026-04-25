'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SocialIcon from '../../components/SocialIcon';
import styles from './Projects.module.css';

import { projects } from '../../data/projects';

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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
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
