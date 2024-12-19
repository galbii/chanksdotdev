import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Trend Trader",
      description: "Advanced trading desk platform engineered for high-frequency trading and real-time market analysis. Features include custom technical indicators, automated trading strategies, and comprehensive risk management tools.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "Trading APIs"],
      links: {
        github: "https://github.com/galbii/trendtrader",
      }
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-[#1B2735] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(1.5px 1.5px at center,rgba(147, 197, 253, 0.15) 50%,transparent 50%)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light font-['Comfortaa'] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
            Featured Projects
          </h2>
          <span className="block text-sm text-blue-200/50 mt-3 font-light">
            Recent Development Work
          </span>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center">
            <button
              onClick={prevProject}
              className="absolute left-0 z-10 p-2 text-blue-300/70 hover:text-blue-300 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/20">
                  <h3 className="text-2xl font-light text-white mb-4 font-['Comfortaa']">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-400/10 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[currentIndex].links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      <Github size={18} />
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextProject}
              className="absolute right-0 z-10 p-2 text-blue-300/70 hover:text-blue-300 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`h-full p-6 rounded-xl transition-all duration-300 border border-transparent
                ${hoveredIndex === index 
                  ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-lg border-blue-400/20' 
                  : 'bg-black/30 hover:bg-black/40'}`}
              >
                <h3 className="text-xl font-light text-white mb-3 font-['Comfortaa']">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs bg-blue-400/10 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs bg-blue-400/10 text-blue-300 rounded-full">
                      +{project.tech.length - 3}
                    </span>
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

export default Projects;
