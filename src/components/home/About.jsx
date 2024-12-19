import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Share2, Terminal } from 'lucide-react';
import chance from '../../assets/chance.jpg';

const CompactAbout = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Modern web applications with React & Node.js"
    },
    {
      icon: Database,
      title: "System Architecture",
      description: "Scalable and efficient system design"
    },
    {
      icon: Share2,
      title: "API Development",
      description: "RESTful and GraphQL API solutions"
    },
    {
      icon: Terminal,
      title: "DevOps & Cloud",
      description: "AWS and container orchestration"
    }
  ];

  return (
    <section className="py-20 bg-[#1B2735] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, #93a5cf 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Enhanced Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative"
            >
              {/* Ripple circles effect */}
              <div className="absolute inset-0 -m-8">
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                      scale: [0.95, 1.1],
                      opacity: [0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.6,
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image container with effects */}
              <div className="relative group">
                {/* Main image frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-2xl animate-[gradient_3s_ease_infinite] z-0" />
                  
                  {/* Image wrapper */}
                  <div className="relative rounded-2xl overflow-hidden z-10 bg-[#1B2735]">
                    {/* Background glow effects */}
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.6, 0.4],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -inset-4 bg-blue-500/20 blur-2xl"
                    />

                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
                    
                    {/* The image */}
                    <img 
                      src={chance}
                      alt="Chance Noonan"
                      className="w-full h-full object-cover relative z-10"
                    />
                    
                    {/* Dynamic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2735] via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -right-8 top-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-8 bottom-8 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Header */}
                <div>
                  <h2 className="text-sm font-light tracking-[0.2em] text-blue-400/80 mb-2">ABOUT ME</h2>
                  <h3 className="text-4xl font-bold text-white mb-2">Chance Noonan</h3>
                  <p className="text-lg text-blue-200/80">Systems Designer & Developer</p>
                </div>

                {/* Description with quote first */}
                <div className="space-y-4 text-gray-300/90">
                  <blockquote className="border-l-2 border-blue-500/30 pl-4 italic text-blue-200/70">
                    "The mind that perceives the limitation is the limitation."
                    <footer className="text-sm text-blue-400/60 mt-1 not-italic">― Gautama Buddha</footer>
                  </blockquote>
                  <p>
                    Architecting innovative digital solutions at the intersection of design and technology. 
                    With a focus on scalable system design and cutting-edge development practices, 
                    I transform complex challenges into elegant, future-proof solutions that deliver measurable impact.
                  </p>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`p-4 rounded-xl transition-all duration-300 border border-transparent ${
                        hoveredSkill === index 
                          ? 'bg-gray-800 border-gray-700' 
                          : 'bg-black/20 hover:bg-gray-800/90'
                      }`}
                    >
                      <skill.icon 
                        className={`w-5 h-5 mb-2 transition-colors duration-300 ${
                          hoveredSkill === index ? 'text-blue-400' : 'text-blue-500/70'
                        }`}
                      />
                      <h4 className="text-sm font-medium text-white mb-1">{skill.title}</h4>
                      <p className="text-xs text-blue-200/70">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactAbout;
