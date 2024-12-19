// src/components/home/GalaxyHero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WaveLogo from './WaveLogo.jsx'; // Make sure the path matches your file structure

const GalaxyHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const createStars = (layerId, count, speed) => {
      const stars = document.getElementById(layerId);
      if (!stars) return;
      
      stars.innerHTML = '';
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.transform = `translate(${mousePosition.x * speed * 50}px, ${mousePosition.y * speed * 50}px)`;
        
        stars.appendChild(star);
      }
    };

    createStars('stars-far', 50, 0.3);
    createStars('stars-mid', 30, 0.5);
    createStars('stars-near', 20, 0.7);
  }, [mousePosition]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="galaxy-wrapper">
        <div 
          className="nebula" 
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        />
        <div className="stars" id="stars-far" />
        <div className="stars" id="stars-mid" />
        <div className="stars" id="stars-near" />
        
	<motion.div 
	  initial={{ opacity: 0, y: 20 }}
	  animate={{ opacity: 1, y: 0 }}
	  transition={{ duration: 1 }}
	  className="absolute inset-0 "
	>
	  <WaveLogo />
	</motion.div>
      </div>
    </section>
  );
};

export default GalaxyHero;
