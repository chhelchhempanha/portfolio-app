"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spring Boot RESTful API",
    description:
      "Built a secure REST API with Spring Boot, Spring Security (JWT), and PostgreSQL for user authentication and data management.",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Created an interactive dashboard using Power BI to visualize data trends and perform exploratory data analysis on large datasets.",
  },
  {
    title: "Web Scraper Application",
    description:
      "Developed a web scraping tool using Python, BeautifulSoup, and Scrapy to collect data from multiple sources.",
  },
  {
    title: "Generative AI Chatbot",
    description:
      "Implemented a chatbot using LangChain and a Large Language Model (LLM) to generate dynamic responses and assist users with queries.",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Designed and developed a responsive e-commerce web app using Next.js, Tailwind CSS, Spring Boot, and PostgreSQL.",
  },
];

export default function PortfolioSection() {
  return (
    <motion.section
      id="projects"
      className="p-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
