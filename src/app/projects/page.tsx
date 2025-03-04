"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    categories: ["Frontend"],
    image: "/sahilwebdev.png",
    description: "A fully responsive Next.js portfolio with animations.",
    live: "https://sahilwebdev.vercel.app/",
    github: "https://github.com/sahilwebdev21/sahilwebdev",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    categories: ["Full Stack"],
    image: "/ecommerce.png",
    description: "Admin panel with real-time analytics & authentication.",
    live: "https://ecommerce.com",
    github: "https://github.com/yourgithub/ecommerce",
  },
  {
    id: 3,
    title: "Task Manager API",
    categories: ["Backend"],
    image: "/api.png",
    description: "REST API for managing tasks using Node.js & MySQL.",
    live: "https://api-taskmanager.com",
    github: "https://github.com/yourgithub/task-api",
  },
  {
    id: 4,
    title: "Blog CMS",
    categories: ["Frontend", "Full Stack"],
    image: "/blog.png",
    description: "A headless CMS built with Next.js & Strapi.",
    live: "https://blogcms.com",
    github: "https://github.com/yourgithub/blogcms",
  },
];

const categories = ["Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  };

  const filteredProjects = selectedCategories.length
    ? projects.filter((project) =>
        project.categories.some((category) =>
          selectedCategories.includes(category)
        )
      )
    : projects;

  return (
    <motion.main
      className="projectsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="sectionTitle">🚀 My Projects</h1>

      {/* Multi-Select Category Buttons */}
      <div className="filterButtons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filterBtn ${
              selectedCategories.includes(category) ? "active" : ""
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projectsGrid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="projectCard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="projectImage">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="imageStyle"
              />
            </div>
            <div className="projectContent">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="projectLinks">
                <a href={project.live} target="_blank" className="liveBtn">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href={project.github} target="_blank" className="githubBtn">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
