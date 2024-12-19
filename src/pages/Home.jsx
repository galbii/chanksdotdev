// src/pages/Home.jsx
import React from 'react';
import GalaxyHero from '../components/home/GalaxyHero';
import About from '../components/home/About';
import Tools from '../components/home/Tools';
import Projects from '../components/home/Projects';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <GalaxyHero />
      <About />
      <Tools />
      <Projects />
      <Footer/>
      
      {/* Call to Action */}
    </div>
  );
};

export default Home;
