import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Globe, 
  Brain, 
  Database, 
  BarChart, 
  LineChart, 
  Bot, 
  Cpu 
} from 'lucide-react';

const Tools = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.querySelector('.dev-kit-section');
    if (section) {
      observer.observe(section);
    }

    return () => section && observer.unobserve(section);
  }, []);

  const devTools = [
    {
      name: 'Web Development',
      Icon: Globe,
      description: 'Crafting immersive digital experiences that captivate and inspire. From sleek portfolios to dynamic web apps, I bring your vision to life with cutting-edge tech and a keen eye for design.',
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      gradient: 'from-blue-400/20 to-purple-400/20'
    },
    {
      name: 'AI & Machine Learning',
      Icon: Brain,
      description: 'Unleashing the power of artificial intelligence to solve real-world challenges. Whether you\'re a researcher pushing the boundaries of AI or a business looking to harness its potential, I help develop custom models and intelligent systems.',
      tech: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras'],
      gradient: 'from-purple-400/20 to-pink-400/20'
    },
    {
      name: 'Data Processing & Analysis',
      Icon: Database,
      description: 'Transforming raw data into actionable insights that drive informed decision-making. From data cleaning and feature engineering to advanced statistical analysis, I provide end-to-end solutions.',
      tech: ['Pandas', 'NumPy', 'SciPy', 'SQL'],
      gradient: 'from-emerald-400/20 to-blue-400/20'
    },
    {
      name: 'Data Visualization',
      Icon: BarChart,
      description: 'Bringing your data to life through stunning, interactive visualizations. Whether you\'re crafting data-driven stories or presenting key metrics, I help you create clear, compelling visuals.',
      tech: ['D3.js', 'Plotly', 'Seaborn', 'Matplotlib'],
      gradient: 'from-cyan-400/20 to-blue-400/20'
    },
    {
      name: 'Financial Analysis',
      Icon: LineChart,
      description: 'Empowering investors and financial professionals with cutting-edge tools and analysis. From predictive models to trading algorithms, I provide tailored solutions that optimize your strategies.',
      tech: ['QuantLib', 'NumPy', 'SciPy', 'Pandas'],
      gradient: 'from-amber-400/20 to-orange-400/20'
    },
    {
      name: 'Web Scraping & Automation',
      Icon: Bot,
      description: 'Unleashing the power of automation to streamline your workflows and gather valuable data. Whether you need to collect data at scale or automate processes, I develop custom solutions that save time.',
      tech: ['Scrapy', 'BeautifulSoup', 'Selenium', 'Puppeteer'],
      gradient: 'from-rose-400/20 to-purple-400/20'
    },
    {
      name: 'System Development',
      Icon: Cpu,
      description: 'Building robust, scalable systems that power your digital world. From microservices and APIs to cloud architectures, I specialize in crafting efficient, maintainable, and secure backend solutions.',
      tech: ['Node.js', 'Express', 'FastAPI', 'Docker'],
      gradient: 'from-indigo-400/20 to-blue-400/20'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden dev-kit-section">
      <div className="absolute inset-0 bg-[#1B2735]">
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `radial-gradient(1.5px 1.5px at center,rgba(147, 197, 253, 0.15) 50%,transparent 50%)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Compact section title */}
        <div className="mb-12 text-center relative">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl font-['Comfortaa'] font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Development Kit
            </h2>
            <span className="block text-sm text-blue-200/50 mt-3 font-light">
              Elegant Solutions for Practical Problems
            </span>
          </div>
        </div>

        {/* Compact DevKit Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 delay-${index * 50} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="relative group h-full">
                  <div className={`w-full h-full px-4 py-3 flex items-start transition-all duration-500
                    ${hoverIndex === index 
                      ? 'bg-gradient-to-r ' + tool.gradient + ' backdrop-blur-lg rounded-2xl border border-blue-400/20' 
                      : 'bg-[#1B2735]/30 backdrop-blur-sm rounded-2xl border border-transparent hover:border-blue-400/10'}`}>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className={`p-2 rounded-lg transition-all duration-500 transform
                            ${hoverIndex === index 
                              ? 'bg-blue-400/20 text-blue-300 scale-110 rotate-180' 
                              : 'bg-blue-400/10 text-blue-400/70 group-hover:scale-105'}`}
                        >
                          <tool.Icon size={18} strokeWidth={1.5} />
                        </div>
                        <span className="font-['Comfortaa'] text-white text-base font-light tracking-wide flex-1">
                          {tool.name}
                          <div className={`h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 transition-all duration-500 mt-0.5 ${
                            hoverIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                          }`} />
                        </span>
                        <ChevronRight 
                          className={`w-4 h-4 transition-all duration-500 transform flex-shrink-0
                            ${hoverIndex === index 
                              ? 'rotate-90 text-blue-300 translate-x-1' 
                              : 'text-blue-400/50 group-hover:translate-x-1'}`}
                        />
                      </div>

                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out
                          ${hoverIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-gray-300 text-sm leading-relaxed font-['Comfortaa'] font-light mb-3">
                          {tool.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {tool.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 rounded-md text-xs bg-blue-400/10 text-blue-300 font-['Comfortaa'] 
                                       transition-all duration-300 hover:scale-105 hover:bg-blue-400/20 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
