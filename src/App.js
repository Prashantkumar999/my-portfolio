import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import smartStrokesImg from './images/smartStrokes-homepage.png';
import masalaflixImg from './images/masalaflix-home.png';
import techshotImg from './images/techshot-home.png';
import clothzyStoreImg from './images/clothzy-1.png';
import profileImg from './images/profile-1.jpg';

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const devSticker = "https://unpkg.com/undraw@latest/undraw_programming_re_kg9v.svg";
  const gradCapSticker = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f393.svg";
  const rocketSticker = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg";
  const projectSticker = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg";
  const certSticker = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg";

  return (
    <div className="min-h-screen font-sans overflow-x-hidden transition-colors duration-500 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <button
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed top-6 right-6 z-50 w-14 h-8 flex items-center bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200 dark:border-gray-700 rounded-full px-1 transition-all duration-300 focus:outline-none"
        onClick={() => setDark((d) => !d)}
      >
        <span className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${dark ? 'translate-x-6 bg-yellow-400' : 'translate-x-0 bg-blue-500'}`}
          style={{ boxShadow: dark ? '0 0 8px #facc15' : '0 0 8px #3b82f6' }}
        >
          {dark ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A7.5 7.5 0 1 0 18 16.25a.75.75 0 0 0-.25-1.5z"/></svg>
          ) : (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.75a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm5.657 3.093a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707zM19.25 12a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1zm-2.343 5.157a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707zM12 19.25a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm-5.657-3.093a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707zM4.75 12a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1zm2.343-5.157a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 1 1 8.8 8.05l-.707-.707z"/></svg>
          )}
        </span>
        <span className="absolute left-2 text-yellow-400 transition-opacity duration-300" style={{ opacity: dark ? 0 : 1 }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.75a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm5.657 3.093a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707zM19.25 12a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1zm-2.343 5.157a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707zM12 19.25a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm-5.657-3.093a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707zM4.75 12a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1zm2.343-5.157a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 1 1 8.8 8.05l-.707-.707z"/></svg>
        </span>
        <span className="absolute right-2 text-blue-500 transition-opacity duration-300" style={{ opacity: dark ? 1 : 0 }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A7.5 7.5 0 1 0 18 16.25a.75.75 0 0 0-.25-1.5z"/></svg>
        </span>
      </button>
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:to-gray-800 dark:bg-gradient-to-b text-gray-900 dark:text-white px-2 sm:px-4 py-8 sm:py-16 overflow-hidden shadow-xl rounded-b-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-purple-200/30 to-blue-100/40 animate-gradient-x z-0 dark:from-blue-900/40 dark:via-purple-900/30 dark:to-blue-800/40" />
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none" style={{ opacity: 0.10 }} width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[...Array(18)].map((_, i) => (
            <circle key={i} cx={80 + i * 75} cy={100 + (i % 2) * 200} r="2.5" fill="#60a5fa" opacity="0.5" />
          ))}
        </svg>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm z-0 pointer-events-none select-none dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-blue-100/80 z-0 dark:from-gray-900/90 dark:via-transparent dark:to-gray-900/80" />
        <motion.div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%)' }}>
          <motion.div
            className="relative w-40 h-40 sm:w-72 sm:h-72"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', style: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', style: 'top-1/4 right-0 -translate-y-1/2', delay: 0.2 },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', style: 'bottom-1/4 right-0 translate-y-1/2', delay: 0.4 },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', style: 'bottom-0 left-1/2 translate-x-1/2', delay: 0.6 },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', style: 'bottom-1/4 left-0 translate-y-1/2', delay: 0.8 },
              { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', style: 'top-1/4 left-0 -translate-y-1/2', delay: 1.0 },
            ].map((icon, idx) => (
              <motion.img
                key={icon.src}
                src={icon.src}
                alt="Tech Icon"
                className={`absolute w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-xl ring-2 ring-blue-400/60 dark:ring-purple-400/60 bg-white/90 dark:bg-gray-900/80 p-1 ${icon.style}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, filter: [
                  'drop-shadow(0 0 0px #60a5fa)',
                  'drop-shadow(0 0 8px #60a5fa)',
                  'drop-shadow(0 0 0px #60a5fa)'
                ] }}
                transition={{ delay: 1.2 + icon.delay, duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          className="z-20 mb-2 sm:mb-4 relative"
        >
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-200 blur-2xl opacity-60 animate-pulse-slow dark:from-blue-400 dark:via-purple-400 dark:to-pink-400" />
          <img
            src={profileImg}
            alt="Prashant Kumar Avatar"
            className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover bg-white/70 dark:bg-white/40 relative z-10 animate-avatar-glow"
          />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: 'spring' }}
          className="z-20 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl px-4 sm:px-10 py-4 sm:py-8 shadow-2xl flex flex-col items-center border-2 border-transparent animate-border-glow w-full max-w-xs sm:max-w-2xl"
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x text-center"
            initial={{ letterSpacing: '-0.1em' }}
            animate={{ letterSpacing: '0.02em' }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            Prashant Kumar
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-4 bg-blue-100/60 dark:bg-gray-800/40 px-3 sm:px-6 py-2 rounded-full shadow-lg backdrop-blur-md text-blue-900 dark:text-blue-200 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="typewriter">Full-Stack Developer | MERN</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-medium text-blue-700 dark:text-blue-200 mt-2 mb-4 sm:mb-6 text-center max-w-xs sm:max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            Building beautiful, scalable, and intelligent web experiences.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 justify-center w-full items-center">
            <a href="https://github.com/Prashantkumar999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all font-semibold dark:from-blue-400 dark:to-purple-600 w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/prashant-kumar-39abb5253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all font-semibold dark:from-blue-400 dark:to-purple-600 w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              LinkedIn
            </a>
            <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all font-semibold cursor-pointer dark:from-blue-400 dark:to-purple-600 w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-1h8v1zm0-3H8v-1h8v1zm-3-7V3.5L18.5 9H13z"/></svg>
              <a href="https://drive.google.com/file/d/1_mpgkYwZ2Xev0V_ini1l5zCX0Uz2vbf7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="outline-none">Resume</a>
            </button>
          </div>
          <motion.a href="#contact" className="underline hover:text-blue-700 dark:hover:text-blue-200 transition text-lg mt-2 text-center" whileHover={{ scale: 1.1 }}>Contact Me</motion.a>
        </motion.div>
        <motion.div className="absolute -top-32 -left-32 w-60 h-60 sm:w-96 sm:h-96 bg-purple-200/30 rounded-full blur-3xl z-0 animate-spin-slow dark:bg-purple-400/30" />
        <motion.div className="absolute -bottom-32 -right-32 w-60 h-60 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl z-0 animate-spin-slow dark:bg-blue-300/30" />
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto py-16 px-4"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4 text-center sm:text-left">
          <img src={devSticker} alt="Developer Sticker" className="w-10 h-10 sm:w-10 sm:h-10 opacity-80 select-none mb-2 sm:mb-0" />
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">About Me</h3>
        </div>
        <p className="text-lg leading-relaxed bg-white/70 dark:bg-gray-900/70 dark:text-gray-100 rounded-xl p-6 shadow-lg">Full-stack developer with hands-on experience in the MERN stack, HTML, CSS, and Tailwind CSS. Passionate about solving complex problems, building user-friendly applications, and continuously learning new technologies. Strong understanding of both front-end and back-end development with a focus on writing clean, maintainable code.</p>
      </motion.section>
      <motion.section
        id="skills"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-16 px-4"
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={rocketSticker} alt="Rocket Sticker" className="w-10 h-10 opacity-80 select-none" />
          <h3 className="text-3xl font-bold text-blue-400">Skills</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {[
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Advanced', desc: 'Semantic, accessible markup.' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Advanced', desc: 'Responsive, modern layouts.' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Advanced', desc: 'ES6+, async, DOM, fetch.' },
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Advanced', desc: 'Hooks, SPA, state management.' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Advanced', desc: 'APIs, server-side JS.' },
            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 'Advanced', desc: 'REST APIs, middleware.' },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Advanced', desc: 'NoSQL, Mongoose ODM.' },
            { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg', iconDark: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg', level: 'Advanced', desc: 'Utility-first CSS framework.' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Advanced', desc: 'Version control, branching.' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', iconDark: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-white.svg', level: 'Advanced', desc: 'Collaboration, PRs, CI/CD.' },
            { name: 'REST APIs', icon: 'https://www.svgrepo.com/show/354262/api.svg', level: 'Advanced', desc: 'RESTful design, fetch/axios.' },
            { name: 'JWT Auth', icon: 'https://www.svgrepo.com/show/306500/jwt.svg', level: 'Intermediate', desc: 'Authentication, tokens.' },
            { name: 'AI Integration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Familiar', desc: 'OpenAI API, ML basics.' },
            { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', level: 'Advanced', desc: 'Frontend deployment.' },
            { name: 'Render', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 'Familiar', desc: 'Backend deployment.' },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              className="relative flex flex-col items-center bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-4 hover:bg-blue-50 dark:hover:bg-blue-900 transition group cursor-pointer border border-transparent hover:border-blue-400 dark:hover:border-blue-500"
              whileHover={{ scale: 1.12, boxShadow: '0 0 24px 4px #60a5fa88, 0 0 32px 8px #a78bfa88' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6, type: 'spring' }}
            >
              <img
                src={dark && skill.iconDark ? skill.iconDark : skill.icon}
                alt={skill.name + ' logo'}
                className="w-12 h-12 mb-2 drop-shadow-md bg-white dark:bg-gray-900 rounded-full p-1"
                style={{ background: skill.name === 'GitHub' ? '#fff' : 'none' }}
              />
              <span className="font-semibold text-blue-700 dark:text-blue-200 text-lg mb-1 text-center">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-300 text-center">{skill.level}</span>
              <span className="skill-tooltip">{skill.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        id="projects"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={projectSticker} alt="Project Sticker" className="w-10 h-10 opacity-80 select-none" />
          <h3 className="text-3xl font-bold text-blue-400">Projects</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          className="grid gap-10 md:grid-cols-2"
        >
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            className="bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all group relative overflow-hidden"
          >
            <div className="w-full h-48 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
              <img src={clothzyStoreImg} alt="Clothzy Store" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">Clothzy Store</h4>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">Full-stack developer | React.js, Redux, Node.js, Express.js, MongoDB, JWT, bcrypt</p>
            <p className="mb-4 text-center dark:text-gray-100">A complete MERN stack e-commerce platform with user authentication, admin panel, shopping cart, and order management.</p>
            <a href="https://clothzy-store.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Live Site</a>
            <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/40 dark:bg-purple-900/40 rounded-full blur-2xl z-0 group-hover:scale-125 transition-transform" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            className="bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all group relative overflow-hidden"
          >
            <div className="w-full h-48 bg-gradient-to-tr from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
              <img src={smartStrokesImg} alt="Smart Strokes" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">Smart Strokes</h4>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">Full-stack developer | React.js, Node.js, Express.js, MongoDB, Tailwind CSS, OpenAI API</p>
            <p className="mb-4 text-center dark:text-gray-100">An AI-enhanced typing platform that detects user-specific mistakes and generates targeted typing practice content.</p>
            <a href="https://smart-strokes.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Live Site</a>
            <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/40 dark:bg-blue-900/40 rounded-full blur-2xl z-0 group-hover:scale-125 transition-transform" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            className="bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all group relative overflow-hidden"
          >
            <div className="w-full h-48 bg-gradient-to-tr from-yellow-200 to-pink-200 dark:from-yellow-900 dark:to-pink-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
              <img src={masalaflixImg} alt="MasalaFlix" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">MasalaFlix</h4>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">Front-end developer | React.js, Tailwind CSS, TMDB API</p>
            <p className="mb-4 text-center dark:text-gray-100">A modern movie streaming front-end app with search, filter, trailer popup, and responsive layout.</p>
            <a href="https://masalaflix.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Live Site</a>
            <motion.div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-200/40 dark:bg-yellow-900/40 rounded-full blur-2xl z-0 group-hover:scale-125 transition-transform" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            className="bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all group relative overflow-hidden"
          >
            <div className="w-full h-48 bg-gradient-to-tr from-green-200 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
              <img src={techshotImg} alt="MERN Blog App" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">MERN Blog App</h4>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">Full-stack developer | React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT</p>
            <p className="mb-4 text-center dark:text-gray-100">A secure blogging platform with user authentication, role-based access, and full blog CRUD operations.</p>
            <a href="https://techshot-c9qe.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Live Site</a>
            <motion.div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/40 dark:bg-green-900/40 rounded-full blur-2xl z-0 group-hover:scale-125 transition-transform" />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        id="education"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto py-16 px-4"
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={gradCapSticker} alt="Graduation Cap Sticker" className="w-10 h-10 opacity-80 select-none" />
          <h3 className="text-3xl font-bold text-blue-400">Education</h3>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-60" />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-gray-900/80 rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
              <span className="font-bold text-lg text-blue-200">B.Tech in Computer Science</span>
            </div>
            <span className="text-sm text-gray-200">Aligarh College of Engineering and Technology</span>
            <span className="text-xs text-gray-400">2019 - 2023 | CGPA: 7.8</span>
            <p className="mt-2 text-gray-300 text-sm">Focused on software engineering, algorithms, and full-stack web development. Participated in coding competitions and tech fests.</p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="certificates"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-16 px-4"
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={certSticker} alt="Certificate Sticker" className="w-10 h-10 opacity-80 select-none" />
          <h3 className="text-3xl font-bold text-blue-400">Certificates</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(96, 165, 250, 0.18)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900/80 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-blue-500 hover:border-purple-500 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1L12 2.5l3.09 6.24 6.91 1-5 4.87 1.18 6.88z"/></svg>
              <span className="font-bold text-lg text-blue-200">Web Development Course — Love Babbar</span>
            </div>
            <span className="text-sm text-gray-200">Successfully completed a comprehensive Web Development course.</span>
            <span className="text-xs text-gray-400">Issued: 2024</span>
            <img src="https://img.freepik.com/free-vector/certificate-concept-illustration_114360-4947.jpg?w=826&t=st=1680000000~exp=1680003600~hmac=placeholder" alt="Certificate" className="w-full h-32 object-contain rounded-lg bg-gray-800 my-2" />
            <a href="https://drive.google.com/file/d/14mpyAomABZ1IbjCpGNSRiCHtxQuC0MTi/view" target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-400 underline hover:text-blue-300 font-semibold">View Certificate</a>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto py-16 px-4"
      >
        <h3 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 text-center">Contact</h3>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-6 bg-gradient-to-tr from-blue-100 via-purple-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-xl items-center border-2 border-blue-200 dark:border-blue-900 animate-border-glow">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-3">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1a4 4 0 014-4h4a4 4 0 014 4z" /></svg>
                <a href="mailto:prashant047alg@gmail.com" className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400 transition">prashant047alg@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.21a2 2 0 01-.45 2.45l-1.27 1.02a11.05 11.05 0 005.06 5.06l1.02-1.27a2 2 0 012.45-.45l2.21 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
                <a href="tel:+917818808311" className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400 transition">+91 7818808311</a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
