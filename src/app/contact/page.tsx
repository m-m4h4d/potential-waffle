'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.contact}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact <span>Me</span></h1>
        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Email</h3>
                <p>mahadbinashfaq@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Phone</h3>
                <p>+92 304 0009032</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Location</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.formWrapper} glass`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className={styles.secondaryBtn}
                style={{ marginTop: '1rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                {status !== 'submitting' && <Send size={18} style={{ marginLeft: '8px' }} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

