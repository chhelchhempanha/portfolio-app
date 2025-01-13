"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  "Full Stack Developer",
  "Web Scraper",
  "Data Analyst",
  "Spring Boot Expert",
  "Generative AI Developer",
];

export default function HeroSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let typingTimeout;

    if (!isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentSkill.substring(0, text.length + 1));
        if (text.length + 1 === currentSkill.length) {
          setIsDeleting(true);
          setTypingSpeed(50); // Slow down before deleting
        }
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentSkill.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
          setTypingSpeed(100); // Reset typing speed
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting]);

  return (
    <motion.section
      className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-white to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm <span className="text-indigo-600">Chhel Chhempanha</span>!
      </motion.h1>

      <motion.p
        className="mt-4 text-2xl text-gray-700"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        I am a{" "}
        <span className="font-semibold text-indigo-600" style={{ caretColor: "transparent" }}>
          {text}
          {/* <span className="blinking-cursor">|</span> */}
        </span>
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button size="lg" className="mr-4">
          View Portfolio
        </Button>
        <Button size="lg" variant="outline">
          Contact Me
        </Button>
      </motion.div>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 10px;
          background-color: transparent;
          border-left: 3px solid #4f46e5;
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </motion.section>
  );
}
