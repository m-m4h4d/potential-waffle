'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Flutter", "React Native", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "UI/UX Design", "Three.js"
];

export default function About() {
  return (
    <div className={styles.about}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About <span>Me</span></h1>
        <p>A glimpse into my journey and technical expertise.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.bio}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Who I Am</h2>
          <p>
            I am a dedicated Full Stack Web and Mobile App Developer with over 5 years of experience building high-performance, scalable applications. My passion lies in creating seamless user experiences that combine beautiful design with robust functionality.
          </p>
          <p>
            Whether it&apos;s a complex web ecosystem using Next.js and Node.js or a fluid mobile application with Flutter, I strive for excellence in every line of code I write. I am constantly exploring new technologies to stay at the forefront of the industry.
          </p>
        </motion.div>

        <motion.div
          className={styles.skills}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>My Skills</h2>
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className={`${styles.skillCard} glass`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
