import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import clothzyStoreImg from './images/clothzy-1.png';
import smartStrokesImg from './images/smartStrokes-homepage.png';
import masalaflixImg from './images/masalaflix-home.png';
import techshotImg from './images/techshot-home.png';
import profileImg from './images/profile-1.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
    {label}
  </span>
);

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
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

  const skillGroups = useMemo(
    () => [
      {
        title: 'Languages & Frameworks',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      },
      {
        title: 'Tools & Platforms',
        skills: ['Git', 'GitHub', 'VS Code', 'REST APIs', 'JWT Authentication', 'AI Integration'],
      },
      {
        title: 'Deployment',
        skills: ['Vercel', 'Render'],
      },
    ],
    []
  );

  const education = useMemo(
    () => [
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
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: 'Clothzy Store',
        description:
          'A MERN stack e-commerce clothing platform that supports user browsing, cart management, order placement, and an admin panel for inventory and orders.',
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
        description:
          'An AI-enhanced typing platform that analyses character-level mistakes and generates targeted practice content to improve accuracy.',
        image: smartStrokesImg,
        liveUrl: 'https://smart-strokes.vercel.app',
        repoUrl: 'https://github.com/Prashantkumar999/Smart-Strokes',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
        features: ['Mistake detection and analytics', 'Dynamic content generation using AI', 'Responsive design for all devices'],
      },
      {
        title: 'MasalaFlix',
        description:
          'A responsive movie streaming front-end that lets users browse, search, and explore films with trailers and ratings using the TMDB API.',
        image: masalaflixImg,
        liveUrl: 'https://masalaflix.vercel.app',
        repoUrl: 'https://github.com/Prashantkumar999/MasalaFlix',
        stack: ['React.js', 'Tailwind CSS', 'TMDB API'],
        features: ['Search and filter functionality', 'Trailer popups and responsive grid layout', 'Integration with TMDB for live data'],
      },
      {
        title: 'MERN Blog App',
        description:
          'A secure blogging platform with user authentication, role-based access, and CRUD support for managing blog content.',
        image: techshotImg,
        liveUrl: 'https://techshot-c9qe.onrender.com',
        repoUrl: 'https://github.com/Prashantkumar999/techshot-blog',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
        features: ['JWT authentication and role support', 'Rich text editor for blogs', 'REST API architecture'],
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 ease-out dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-600/20" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent dark:via-slate-700/40" />
      </div>

      <button
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed top-6 right-6 z-50 flex h-10 w-24 items-center justify-between rounded-full border border-slate-200 bg-white/80 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 shadow-lg backdrop-blur transition dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
        onClick={() => setDark((d) => !d)}
      >
        <span className="text-center">{dark ? 'Dark' : 'Light'}</span>
        <span
          className={`inline-flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full border border-white/40 bg-gradient-to-br text-white shadow-md transition ${
            dark ? 'from-blue-500 to-indigo-500' : 'from-amber-500 to-orange-500'
          }`}
        >
          {dark ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm13.657 6.657-1.06-1.06a1 1 0 0 1 1.414-1.415l1.06 1.061a1 1 0 0 1-1.414 1.414zM6.404 6.404 5.343 5.343A1 1 0 1 1 6.757 3.93l1.06 1.06a1 1 0 0 1-1.413 1.415zM18.657 5.343l-1.06 1.06A1 1 0 1 1 16.182 4.99l1.06-1.061A1 1 0 0 1 18.657 5.343zM7.464 19.657l-1.06 1.06A1 1 0 1 1 5 19.303l1.06-1.06a1 1 0 0 1 1.414 1.414zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" />
            </svg>
          )}
        </span>
      </button>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10">
        <header className="flex flex-col gap-14 pt-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-slate-600 dark:text-slate-300">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              PRASHANT
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
              <a href="#projects" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                Projects
              </a>
              <a href="#skills" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                Skills
              </a>
              <a href="#education" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                Education
              </a>
              <a href="#contact" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:prashant047alg@gmail.com"
                className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 md:flex"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 6v12h16V6M4 6l8 7 8-7" />
        </svg>
                Say hello
              </a>
              <a
                href="https://drive.google.com/file/d/1_mpgkYwZ2Xev0V_ini1l5zCX0Uz2vbf7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Resume
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-3-3v6M5 4h14v16H5z" />
                </svg>
              </a>
            </div>
          </nav>

          <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px]" id="top">
            <motion.div {...fadeUp}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Full-stack developer · MERN stack
              </div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
                Building user-friendly, responsive web applications with the MERN stack.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                Full-stack developer with hands-on experience in React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. I focus on solving real product problems, crafting clean UI, and delivering maintainable codebases that are easy to iterate on.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Explore projects
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/prashant-kumar-39abb5253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                >
                  Connect on LinkedIn
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 11v7m-3-7v7m3-10a1.5 1.5 0 1 1-3 0A1.5 1.5 0 0 1 8 8zm7 3v7m0-4a2 2 0 1 1 4 0v4m-4-7v4" />
                  </svg>
                </a>
          </div>
        </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative mx-auto flex h-fit max-w-sm flex-col items-center justify-center rounded-3xl border border-slate-200/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-slate-800">
                <img src={profileImg} alt="Prashant Kumar portrait" className="h-full w-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Prashant Kumar</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">prashant047alg@gmail.com — +91 7818808311</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-300">
                <a href="https://github.com/Prashantkumar999" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                  github.com/Prashantkumar999
                </a>
                <span className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" />
                <a href="https://linkedin.com/in/prashant-kumar-39abb5253" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                  linkedin.com/in/prashant-kumar-39abb5253
                </a>
              </div>
            </motion.div>
          </section>
        </header>

        <motion.section {...fadeUp} id="skills" className="flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blue-500">Skills</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Technologies I work with every day.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">
              A hands-on toolkit covering front-end interfaces, backend APIs, authentication, and deployments. Each project is built with these technologies based on use-case fit and performance needs.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}
                  </h3>
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 20h12M9 20V4h6v16M9 8h6" />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
      </motion.section>

        <motion.section {...fadeUp} id="education" className="flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blue-500">Education</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Academic background.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">
              Formal education combined with continuous learning keeps me grounded in fundamentals while adapting to new tools.
            </p>
        </div>
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.program}`}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.program}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">{item.period}</span>
            </div>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">{item.institution}</p>
                {item.detail ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{item.detail}</p> : null}
            </div>
            ))}
            </div>
      </motion.section>

        <motion.section {...fadeUp} id="projects" className="flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blue-500">Projects</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Work that reflects my problem-solving approach.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">
              I enjoy taking ideas from concept to deployment. Each project below highlights the stack, the goals, and what I built to meet them.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900/10">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <SkillBadge key={item} label={item} />
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <svg className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.707 17.707 4 12l1.414-1.414L9.707 14.88l8.879-8.879L20 7.293z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.credentials ? (
                    <div className="rounded-xl border border-dashed border-blue-300/60 bg-blue-50/60 p-4 text-xs text-blue-700 dark:border-blue-500/60 dark:bg-blue-500/10 dark:text-blue-200">
                      <p className="font-semibold uppercase tracking-widest">Admin demo access</p>
                      <p className="mt-2">Email <a href="mailto:prashant047alg@gmail.com" className="font-semibold underline">prashant047alg@gmail.com</a> to request temporary admin access credentials for evaluation.</p>
        </div>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      Live preview
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                      >
                        GitHub
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.62.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.52 2.36 1.08 2.94.82.09-.66.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.42 9.42 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
            </div>
            ))}
        </div>
      </motion.section>

        <motion.section {...fadeUp} id="certifications" className="flex flex-col gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-blue-500">Certifications</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Continuous learning & credentials.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">
              Hands-on training and coursework that sharpened my full-stack fundamentals and project delivery skills.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Full Stack Web Development</h3>
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 6v12h16V6M4 6l8 7 8-7" />
                </svg>
        </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Love Babbar — Web Development Course</p>
              <p className="text-xs uppercase tracking-widest text-blue-500">Issued 2024</p>
              <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">
                Completed an industry-focused full stack curriculum covering MERN architecture, authentication, deployment workflows, and real-world project delivery.
              </p>
              <a
                href="https://drive.google.com/file/d/14mpyAomABZ1IbjCpGNSRiCHtxQuC0MTi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                View certificate
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
        </div>
      </motion.section>

        <motion.section {...fadeUp} id="contact" className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-blue-500">Availability</span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Ready to collaborate on your next release cycle.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">
                I work with startups, product teams, and founders to build or scale web products. Share your roadmap—let’s align on scope, outcomes, and ship dates.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="mailto:prashant047alg@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-5 py-3 font-medium shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-blue-400 dark:hover:text-blue-300"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 6v12h16V6M4 6l8 7 8-7" />
                </svg>
                prashant047alg@gmail.com
              </a>
              <a
                href="tel:+917818808311"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-5 py-3 font-medium shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-blue-400 dark:hover:text-blue-300"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 5a2 2 0 0 1 2-2h1.28a1.5 1.5 0 0 1 1.37.93l1 2.4a1.5 1.5 0 0 1-.34 1.65l-1.01 1.01a13 13 0 0 0 5.18 5.18l1.01-1.01a1.5 1.5 0 0 1 1.65-.34l2.4 1a1.5 1.5 0 0 1 .93 1.37V19a2 2 0 0 1-2 2h-.75C9.55 21 3 14.45 3 6.75V6" />
                </svg>
                +91 78188 08311
              </a>
            </div>
        </div>
      </motion.section>

        <footer className="flex flex-col items-center gap-2 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Prashant Kumar. Crafted with purpose, performance, and polish.</p>
          <p>Available for remote-first collaborations across time zones.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
