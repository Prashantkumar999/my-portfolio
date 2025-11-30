import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import clothzyStoreImg from './images/clothzy-1.png';
import smartStrokesImg from './images/smartStrokes-homepage.png';
import masalaflixImg from './images/masalaflix-home.png';
import techshotImg from './images/techshot-home.png';
import profileImg from './images/profile-1.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize(); // Set initial size
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 
    'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'REST APIs', 
    'JWT Authentication', 'Vercel', 'Render'
  ];

  const education = [
    {
      institution: 'Aligarh College of Engineering and Technology, Aligarh',
      program: 'B.Tech in Computer Science',
      period: '2019 — 2023',
      detail: 'CGPA: 7.8',
    },
    {
      institution: 'Agrasen Inter College, Aligarh',
      program: '12th Grade — 70%',
      period: '2018',
    },
    {
      institution: 'Agrasen Inter College, Aligarh',
      program: '10th Grade — 76%',
      period: '2016',
    },
  ];

  const projects = [
    {
      title: 'Clothzy Store',
      description: 'A MERN stack e-commerce clothing platform that supports user browsing, cart management, order placement, and an admin panel for inventory and orders.',
      image: clothzyStoreImg,
      liveUrl: 'https://clothzy-store.vercel.app/',
      repoUrl: 'https://github.com/Prashantkumar999/clothzyStore',
      stack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: [
        'Customer authentication and protected routes',
        'Cart and order workflows with responsive UI',
        'Admin dashboard for product and order management',
      ],
      credentials: {
        email: 'clothzystore@gmail.com',
        password: '123456',
      },
    },
    {
      title: 'Smart Strokes',
      description: 'An AI-enhanced typing platform that analyses character-level mistakes and generates targeted practice content to improve accuracy.',
      image: smartStrokesImg,
      liveUrl: 'https://smart-strokes.vercel.app',
      repoUrl: 'https://github.com/Prashantkumar999/Smart-Strokes',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
      features: ['Mistake detection and analytics', 'Dynamic content generation using AI', 'Responsive design for all devices'],
    },
    {
      title: 'MasalaFlix',
      description: 'A responsive movie streaming front-end that lets users browse, search, and explore films with trailers and ratings using the TMDB API.',
      image: masalaflixImg,
      liveUrl: 'https://masalaflix.vercel.app',
      repoUrl: 'https://github.com/Prashantkumar999/MasalaFlix',
      stack: ['React.js', 'Tailwind CSS', 'TMDB API'],
      features: ['Search and filter functionality', 'Trailer popups and responsive grid layout', 'Integration with TMDB for live data'],
    },
    {
      title: 'MERN Blog App',
      description: 'A secure blogging platform with user authentication, role-based access, and CRUD support for managing blog content.',
      image: techshotImg,
      liveUrl: 'https://techshot-c9qe.onrender.com',
      repoUrl: 'https://github.com/Prashantkumar999/techshot-blog',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: ['JWT authentication and role support', 'Rich text editor for blogs', 'REST API architecture'],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 transition-colors duration-500">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute rounded-full opacity-15 blur-3xl transition-all duration-1000 delay-200"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            right: windowSize.width > 0 ? `${windowSize.width - mousePosition.x - 250}px` : '50%',
            bottom: windowSize.height > 0 ? `${windowSize.height - mousePosition.y - 250}px` : '50%',
            transform: 'translate(50%, 50%)',
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex h-20 items-center justify-between">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              PK
            </motion.a>
            <div className="hidden md:flex items-center gap-8">
              {['Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <motion.a
              href="https://forms.gle/A6DS7YaJ4kMhpCV49"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </motion.a>
          </div>
        </div>
      </motion.nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-sm font-semibold text-blue-300">Full-Stack Developer</span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    Building Digital
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
                >
                  I craft beautiful, functional web applications using the MERN stack. 
                  Passionate about clean code, user experience, and bringing ideas to life.
                </motion.p>
                
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    View My Work
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1_mpgkYwZ2Xev0V_ini1l5zCX0Uz2vbf7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Download Resume
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                  <div className="relative rounded-3xl overflow-hidden border-4 border-slate-800/20 shadow-2xl bg-slate-900/10 backdrop-blur-xl p-8">
                    <img 
                      src={profileImg} 
                      alt="Profile" 
                      className="w-64 h-64 mx-auto rounded-full object-cover"
                    />
                    <div className="mt-6 text-center">
                      <h3 className="text-2xl font-bold text-white">Prashant Kumar</h3>
                      <p className="text-slate-300 mt-2">Full-Stack Developer</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <a href="https://github.com/Prashantkumar999" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-900/30 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com/in/prashant-kumar-39abb5253" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-900/30 transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 px-6 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Skills</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Technologies & Tools
              </h2>
              <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern web applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <span className="text-sm font-semibold text-white">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 px-4 sm:px-6 md:px-8 bg-slate-900/30 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Projects</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Featured Work
              </h2>
              <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
                A collection of projects showcasing my skills and problem-solving approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all w-full"
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base text-center shadow-lg hover:shadow-xl transition-all"
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-700 border border-slate-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                      >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 px-6 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Education</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Academic Journey
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.institution}-${item.program}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white">{item.program}</h3>
                    <span className="text-sm font-semibold text-blue-400">{item.period}</span>
                  </div>
                  <p className="text-slate-300">{item.institution}</p>
                  {item.detail && (
                    <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-6 sm:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Contact</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
                Let's Work Together
              </h2>
              <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.a
                href="mailto:prashant047alg@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-blue-100 text-sm">prashant047alg@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917818808311"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-blue-100 text-sm">+91 78188 08311</p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 sm:px-8 border-t border-slate-800/50">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Prashant Kumar. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
