'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import SocialIcon from "@/components/SocialIcon";

export default function Home() {
  const socials = [
    { name: 'github', url: 'https://github.com/m-m4h4d' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammadm4h4d/' },
    { name: 'youtube', url: 'https://www.youtube.com/@randomsamples9-11' },
    { name: 'behance', url: 'https://www.behance.net/mahadn4ch33z' },
  ] as const;

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
          Hi, I&apos;m <span>Mahad</span>
        </h1>
        <p className={styles.subtitle}>
          Full Stack Web and Mobile App Developer crafting premium digital solutions with passion and precision.
        </p>

        <motion.div
          className={styles.socialLinks}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
            >
              <SocialIcon name={social.name} size={20} />
            </Link>
          ))}
        </motion.div>
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

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="/assets/resume.pdf"
          download
          className={styles.resumeBtn}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}

