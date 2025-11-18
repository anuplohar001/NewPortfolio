import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import '../styles/components/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="hero bg-dark">
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text"  variants={itemVariants}>
            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="highlight">Anup Lohar</span>
            </motion.h1>

            <motion.h1 className="hero-subtitle" variants={itemVariants}>
              Full-Stack Developer | React.js Specialist 
            </motion.h1>

            <motion.p className="hero-description fw-bold" style={{fontFamily:"ui-sans-serif"}} variants={itemVariants}>
              “I DON’T JUST CODE APPS — I BUILD EXPERIENCES THAT WORK FLAWLESSLY END-TO-END.”
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1XUcdkntLfGqlSX5z9gZjBEELOPrDRln2/view?usp=drive_link"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* <motion.div className="social-links" variants={itemVariants}>
              <motion.a
                href="https://github.com/anuplohar001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anup-lohar-581b81212"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:anuplohar001@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div> */}
          </motion.div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-container">
              <img
                src="/images/default-avatar.jpeg"
                alt="Anup Lohar"
                className="avatar-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
