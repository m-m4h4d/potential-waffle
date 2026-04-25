'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Palette, Code, Zap } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites using the latest technologies like Next.js and React.",
    icon: <Globe size={32} />
  },
  {
    title: "Mobile App Development",
    description: "Creating seamless cross-platform mobile experiences with Flutter and React Native.",
    icon: <Smartphone size={32} />
  },
  {
    title: "Backend Development",
    description: "Architecting robust and scalable server-side solutions and APIs with Node.js and PostgreSQL.",
    icon: <Server size={32} />
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces that prioritize user experience.",
    icon: <Palette size={32} />
  },
  {
    title: "Full Stack Solutions",
    description: "Providing end-to-end development services from database design to frontend implementation.",
    icon: <Code size={32} />
  },
  {
    title: "Performance Optimization",
    description: "Ensuring your applications are lightning fast and optimized for all devices and search engines.",
    icon: <Zap size={32} />
  }
];

export default function Services() {
  return (
    <div className={styles.services}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My <span>Services</span></h1>
        <p>Expert solutions tailored to your digital needs.</p>
      </motion.div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`${styles.serviceCard} glass`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
