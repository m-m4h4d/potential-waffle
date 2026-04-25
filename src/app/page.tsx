'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <motion.div 
        className={styles.profileImageWrapper}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
        <Image
          src="/assets/profile.png"
          alt="Profile"
          width={250}
          height={250}
          className={styles.profileImage}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className={styles.title}>
          Hi, I'm <span>Mahad</span>
        </h1>
        <p className={styles.subtitle}>
          Full Stack Web and Mobile App Developer crafting premium digital solutions with passion and precision.
        </p>
      </motion.div>

      <motion.div 
        className={styles.cta}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/projects" className={styles.primaryBtn}>
          View My Work
        </Link>
        <Link href="/contact" className={styles.secondaryBtn}>
          Get In Touch
        </Link>
      </motion.div>
    </div>
  );
}
