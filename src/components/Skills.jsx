import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, image: "/icons/react.png" },
        { name: "JavaScript", level: 85, image: "/icons/javascript.jpg" },
        { name: "HTML5", level: 90, image: "/icons/html.png" },
        { name: "CSS3", level: 80, image: "/icons/css.png" },
        { name: "Bootstrap", level: 85, image: "/icons/bootstrap.png" },
        { name: "Tailwind", level: 85, image: "/icons/tailwind.png" },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 95, image: "/icons/nodejs.jpeg" },
        { name: "Express.js", level: 90, image: "/icons/expressjs.png" },
        { name: "JWT Auth", level: 85, image: "/icons/jwt.jpeg" },
        { name: "MongoDB", level: 85, image: "/icons/mongodb.png" },
        { name: "Postman", level: 75, image: "/icons/postman.png" },
      ],
    },

    {
      title: "Clouds & Others",
      skills: [
        { name: "Git/GitHub", level: 90, image: "/icons/github.png" }, // If you have git icon
        { name: "AWS", level: 80, image: "/icons/aws.png" },
        { name: "Docker", level: 70, image: "/icons/docker.jpg" },
        { name: "Kubernetes", level: 70, image: "/icons/kubernetes.png" },
        { name: "AWS EKS", level: 70, image: "/icons/awseks.jpeg" },
        { name: "C++", level: 70, image: "/icons/c++.png" },
      ],
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              style={{ borderTop: "5px solid #06b6d4" }}
            >
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-box">
                      <div className="icon-wrapper">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          style={{
                            width: "45px",
                            height: "45px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <p className="skill-label">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
