import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "React Student Datagrid",
      desc: "React Student Management System with authentication and editable tables.",
      tech: "React · Tailwind CSS · Auth · DataGrid",
      link: "https://github.com/SaraSalah1/react-student-datagrid",
    },
    {
      title: "Student Management Table",
      desc: "Add, edit, delete, search, and filter student data with clean UI.",
      tech: "React · Tailwind CSS · API · CRUD",
      link: "https://github.com/SaraSalah1/react-student-table",
    },
    {
      title: "React To-Do List",
      desc: "Manage tasks efficiently with LocalStorage persistence and smooth animations.",
      tech: "React · Tailwind CSS · LocalStorage",
      link: "https://github.com/SaraSalah1/To_Do_List",
    },
    {
      title: "ChatGPT Clone",
      desc: "Interactive AI-style chat interface with responsive design and modern UI.",
      tech: "React · Tailwind CSS · Material-UI · API",
      link: "https://github.com/SaraSalah1/ChatGpt",
    },
    {
      title: "Gemini Chat App",
      desc: "Gemini-inspired chat app with AI replies and full chat history.",
      tech: "React · Tailwind CSS · Material-UI",
      link: "https://github.com/SaraSalah1/gemini-clone",
    },
  ];

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative" style={{ scrollbarWidth: "none" }}>
      
      {/* Animated Cursor Glow */}
      <div
        className="pointer-events-none fixed w-24 h-24 rounded-full bg-pink-500/20 blur-3xl mix-blend-screen z-50"
        style={{ left: cursorPos.x - 48, top: cursorPos.y - 48 }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900/90 backdrop-blur-md border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold text-pink-400 cursor-pointer">Sara</h1>
          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-200">
            <a href="#intro" className="hover:text-pink-400 transition">Intro</a>
            <a href="#about" className="hover:text-pink-400 transition">About Me</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#findme" className="hover:text-pink-400 transition">Find Me</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center relative bg-gradient-to-r from-black via-gray-900 to-purple-900 overflow-hidden">
        <motion.h1 className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-6" initial="hidden" animate="show" variants={fadeUp}>
          Hey! I'm Sara, a Frontend Developer
        </motion.h1>
        <motion.p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}>
          I've focused on learning as much as I can about web development. I have an eye for design, turning ideas into functional web applications. Feel free to check my CV or projects below!
        </motion.p>
        <motion.a
          href="/src/assets/Sara Salah cv.pdf"  
          download
          className="mt-6 px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 rounded-full shadow-lg text-white font-semibold hover:scale-105 hover:shadow-pink-500 transition-all duration-300"
          initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }}
        >
          Download CV
        </motion.a>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen px-6 py-16 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-pink-400 mb-8 text-center">Front End Developer</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl text-center">
          Highly motivated self-taught developer with a keen interest in building modern, responsive web apps, as well as a passion for problem solving and eye-catching design. Experience building with React.js, Next.js, and TypeScript. Proficient in CSS, Tailwind CSS, UI/UX design, Bootstrap 5, among other tools.
        </p>
        <div className="flex gap-8 mt-6">
          <a href="https://www.linkedin.com/in/sara-salah-6846b125b/" target="_blank" className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition font-semibold">
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="https://github.com/SaraSalah1" target="_blank" className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition font-semibold">
            <FaGithub size={24} /> GitHub
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-16 flex flex-col justify-center bg-gradient-to-b from-black via-pink-500 to-black" >
        <h2 className="text-5xl font-bold text-pink-400 mb-12 text-center">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-700 hover:shadow-pink-500 hover:scale-105 transform transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-pink-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-2">{project.desc}</p>
              <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                className="px-6 py-2 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 text-white rounded-full shadow hover:shadow-pink-500 font-semibold transition"
              >
                Open Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Find Me Section */}
      <section id="findme" className="min-h-screen px-6 py-16 flex flex-col justify-center items-center bg-gradient-to-r from-black via-gray-900 to-pink-900">
        <h2 className="text-4xl font-bold text-pink-400 mb-6 text-center">Web Development</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
          I'm actively seeking opportunities in front-end web development. Reach out if you’re expanding your team!
        </p>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="min-h-screen text-center px-6 py-16 bg-gray-900 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold text-pink-400 mb-4">💌 Contact Me</h3>
        <p className="text-gray-300 mb-6">Feel free to reach out via email for collaboration or opportunities!</p>
        <a href="mailto:sara.salah0019@gmail.com" className="px-6 py-2 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 text-white rounded-full shadow hover:shadow-pink-500 transition font-semibold">
          Email Me
        </a>
        <p className="text-xs text-gray-500 mt-6">© 2025 Sara</p>
      </footer>

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute w-60 h-60 bg-pink-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="animate-ping absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"></div>
        <div className="animate-pulse absolute w-40 h-40 bg-pink-500/20 rounded-full blur-2xl top-1/2 left-1/3"></div>
      </div>
    </div>
  );
}
