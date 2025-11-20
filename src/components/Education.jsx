import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";
import "../styles/components/About.css";

const Education = () => {
  const stats = [
    { icon: Code, label: "DSA Problems Solved", value: "400+" },
    { icon: GraduationCap, label: "CGPA", value: "7.0" },
    { icon: Award, label: "NCAT Rank", value: "11,635" },
  ];

  const highlights = [
    "Bachelor of Technology in Computer Science Engineering",
    "Currently working as Node.js Developer at LogicLoom IT Solutions",
    "All India Rank 11,635 in NCAT by Naukri Campus",
    "Solved 400+ Data Structures and Algorithms problems",
    "Completed Robotics Operating System (ROS) Certification",
  ];

  const education = [
    {
      education: "Bachelor of Technology in Computer Science Engineering",
      institute: "KJ's Institute Trinity College Of Engineering and Research",
      duration: "August 2021 - June 2025",
      marks: "8.30/ 10.0",
      location: "Pune, Maharashtra",
      type: "CGPA",
      results:
        "https://drive.google.com/file/d/1tUc6y1Ab45fg_Bq-7i1b-GRMOso9rual/view?usp=drive_link",
    },
    {
      education: "Higher Secondary Education (12th HSC)",
      institute: "Chandmal Tarachand Bora, Shirur",
      duration: "June 2020 - April 2021",
      marks: "88.33/ 100",
      location: "Pune, Maharashtra",
      type: "Percentage",
      results:
        "https://drive.google.com/file/d/15TNjql1L7g-oT_Shb4Z5C-I-q7MJCCby/view?usp=drive_link",
    },
    {
      education: "Secondary Education (10th CBSE)",
      institute: "Parikrama Public School, Kashti",
      duration: "June 2018 - April 2019",
      marks: "79.0/ 100",
      location: "AhmedNagar, Maharashtra",
      type: "Percentage",
      results:
        "https://drive.google.com/file/d/14wDFjXMiE_8dPNgK82Kb6Xebl0gGvc3y/view?usp=sharing",
    },
  ];

  return (
    <section id="education" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Education</h2>
          <p>Get to know more about my Education </p>
        </motion.div>

        {/* <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontFamily: "ui-sans-serif" }}>
              I Create What Others Imagine
            </h3>
            <p className="intro-text">
              A passionate Full-Stack Developer with expertise in modern web
              technologies. I'm currently working as a Node.js Developer at
              LogicLoom IT Solutions, where I build robust APIs and scalable web
              applications.
            </p>

            <p>
              My journey began during my Computer Science studies, and I've
              developed a strong foundation in both frontend and backend
              technologies. I love solving complex problems and creating
              efficient solutions that make a real impact.
            </p>

            <p>
              When I'm not coding, you can find me solving algorithmic
              challenges on competitive programming platforms or exploring new
              technologies.
            </p>

            <div className="highlights">
              <h4>Key Achievements</h4>
              <ul>
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">
                    <stat.icon size={28} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="personal-note"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Philosophy</h4>
              <p>
                "I believe that great software is built with empathy for users
                and a commitment to continuous improvement."
              </p>
            </motion.div>

            <motion.div
              className="current-focus"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Currently Learning</h4>
              <div className="learning-tags">
                <span>System Design</span>
                <span>Microservices</span>
                <span>DevOps</span>
                <span>Machine Learning</span>
              </div>
            </motion.div>
          </motion.div>
        </div> */}

        {/* Education & Certifications */}
        <div>
          {/* Education */}
          {/* <div className="section-title">
            <Award size={24} />
            <h3>Education</h3>
          </div> */}
          <div className="about-content">
            {education.map((edc, idx) => (
              <motion.div
                key={idx}
                className="education-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="education-header"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div className="education-details">
                    <h4>{edc.education}</h4>
                    <div className="institution-name">
                      <Building size={16} />
                      {edc.institute}
                    </div>
                    <div className="education-meta">
                      <span className="duration">
                        <Calendar size={16} />
                        {edc.duration}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {edc.location}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "space-between",
                      height: "100%",
                      gridTemplateRows: "3fr 1fr",
                    }}
                  >
                    <div
                      className="gpa-badge"
                      style={{ height: "fit-content" }}
                    >
                      <span className="gpa-label">{edc.type}</span>
                      <span className="gpa-value" style={{ textWrap: "wrap" }}>
                        {edc.marks}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "fit-content",
                        marginTop: "15px",
                      }}
                    >
                      <Link to={edc.results}>
                        <button
                          type="button"
                          className="fw-bold btn btn-sm btn-primary"
                          style={{
                            padding: "10px",
                            borderRadius: "20px",
                            border: "1px solid white",
                            fontSize: "0.7rem",
                            height: "fit-content",
                          }}
                        >
                          Click Here
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="section-title">
            <Award size={24} />
            <h3>Certifications</h3>
          </div>

          <div className="certifications-grid">            

            <motion.div
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="cert-date">2024</div>
              </div>
              <h4>Programming in C</h4>
              <p>NPTEL</p>
              <span className="verified-badge">Verified</span>
            </motion.div>

            
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
