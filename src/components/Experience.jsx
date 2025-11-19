import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Award,
  Building,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";
import "../styles/components/Experience.css";
import { ExternalLink, Github, Users, Database, Shield } from "lucide-react";
import "../styles/components/Projects.css";

const Experience = () => {
  const experiences = [
    {
      company: "LogicLoom IT Solutions",
      position: "React.js Developer",
      duration: "July 2025 - Present",
      location: "Remote",
      type: "Internship",
      current: true,
      description: "",
      achievements: [
        "Created custom DayPilot calendar from scratch",
        "Implemented Infinite scrolling and mulitple views (month,day)",
        "Drag and Drop of events and enabling smooth navigation across large date ranges",
        "Improved rendering time by ~50% using HTML Canvas for rendering 1000’s of cells",
        "Created 50+ customised and interactive charts for dashboards using bootstrap only",
      ],
      technologies: ["React.js"],
    },
  ];
  const projects = [
    {
      title: "Deployment of 3-tier web app",
      description: null,
      video: null,
      technologies: ["AWS", "DOCKER", "KUBERNETES", "AWS-EKS", "MERN"],
      features: [
        "Created EC2 instance using Terraform.",
        "Maintained 3-tier application using Elastic Kubernetes Cluster.",
        "Containerized web application using Docker & Created Pods using Kubernetes orchestration for auto scaling.",
        "Reduced downtime by 65%, improved uptime by 99.5%. Scalable up to 10,000 concurrent users. ",
      ],
      github: "https://github.com/anuplohar001/AWS_3Tier_App_Deployment",
      live: null,
      image: "/images/projects/architecture.png",
      duration: "Sept 2025 - Oct 2025",
      type: "Self Driven",
      featured: true,
    },
    {
      title: "PromptsBook",
      description: null,
      image: null,
      video: "/videos/prompts.mp4",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      features: [
        "User can Create Posts and add Stories and Authenticated users can put Likes, Comments",
        "Share Posts through integrated Real-Time Chatt Application programmed using WebSockets",
        "Processed by 30+ API routes, maintained database using MongoDB and NodeJS, styled using Tailwind CSS.",
        "Deployed on Vercel",
      ],
      github: "https://github.com/anuplohar001/PromptsBook",
      live: "https://prompts-book.vercel.app/", // No live demo for SocialHub
      duration: "Aug 2025 - Sept 2025",
      type: "Self Driven",
      featured: false,
    },
    {
      title: "Sorting Visualiser",
      description: null,
      image: null,
      video: "/videos/sorting.mp4",
      technologies: ["React.js", "TailwindCSS", "DSA"],
      features: [
        "Visualises inner working of 6 main sorting algorithms",
        "supports controls like speed of visualisation and size of array",
        "Deployed on GitHub Pages",
      ],
      github: "https://github.com/anuplohar001/AlgoSort",
      live: "https://anuplohar001.github.io/AlgoSort/", // No live demo for SocialHub
      duration: "Aug 2025 - Sept 2025",
      type: "Self Driven",
      featured: false,
    },
    {
      title: "Music Player",
      description: null,
      image: null,
      video: "/videos/musicplayer.mp4",
      technologies: ["HTML", "CSS", "JS"],
      features: [
        "Playlists of multiple singers Albums",
        "Supports playback controls – Prev, Next, Play, Pause, Volume",
        "Deployed on Vercel",
      ],
      github: "https://github.com/anuplohar001/BeatBox",
      live: "https://beat-box-ten.vercel.app/", // No live demo for SocialHub
      duration: "Aug 2025 - Sept 2025",
      type: "Self Driven",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Experience & Self Driven Projects</h2>
          <p>My professional journey and some of my Creations</p>
        </motion.div>

        <div className="row">
          <div className="section-title" st>
            <Building size={24} />
            <h3>Professional Experience & Projects</h3>
          </div>
        </div>

        <div className="experience-content">
          {/* Professional Experience */}
          <div className="experience-section">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`experience-card ${exp.current ? "current" : ""}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>{exp.position}</h4>
                      <div className="company-name">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    </div>

                    <div className="experience-meta">
                      <div className="duration">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="location">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <span
                        className={`type ${exp.type
                          .toLowerCase()
                          .replace("-", "")}`}
                      >
                        {exp.current && <Clock size={14} />}
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="achievements">
                    <h5>
                      <Star size={16} />
                      Key Achievements
                    </h5>
                    <ul>
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex}>
                          <CheckCircle size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {/* <div className="d-flex flex-wrap"></div> */}

          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? "featured" : ""}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                {project.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={project.image} />
                )}

                <div className="project-overlay">
                  <div className="project-links">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-badges">
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.type}</span>

                  <span className="project-duration">{project.duration}</span>
                </div>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm mb-2"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm mb-2"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
