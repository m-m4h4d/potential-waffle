import React from 'react';
import SocialIcon from '../SocialIcon';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Portfolio<span>.</span></h3>
          <p>Full Stack Web & Mobile App Developer building seamless digital experiences.</p>
        </div>
        <div className={styles.socials}>
          <a title="Github" href="https://github.com/m-m4h4d" target="_blank" rel="noopener noreferrer"><SocialIcon name="github" size={20} /></a>
          <a title="Linkedin" href="https://www.linkedin.com/in/muhammadm4h4d/" target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" size={20} /></a>
          <a title="X" href="https://x.com/m_m_peykar" target="_blank" rel="noopener noreferrer"><SocialIcon name="x" size={20} /></a>
          <a title="Mail" href="mailto:mahadbinashfaq@gmail.com"><SocialIcon name="mail" size={20} /></a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
