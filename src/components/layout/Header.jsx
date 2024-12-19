import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Github, Linkedin, Instagram, FileText, Home, User, Briefcase, ShoppingBag } from 'lucide-react';
import ToriiLogo from '../home/ToriiLogo.jsx';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarState');
    return saved ? JSON.parse(saved) : false;
  });
  
  const location = useLocation();
  
  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const navigationLinks = [
    { path: '/', text: 'Home', Icon: Home },
    { path: '/about', text: 'About', Icon: User },
    { path: '/services', text: 'Services', Icon: Briefcase },
    { path: '/shop', text: 'Merch', Icon: ShoppingBag },
  ];

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 h-12 bg-black text-white shadow-lg flex items-center justify-between px-4 z-50">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <Link to="/" className="flex items-center">
          <ToriiLogo />
        </Link>
        
        <div className="w-8"></div>
      </header>

      <div className={`fixed top-12 left-0 h-[calc(100vh-3rem)] w-64 bg-black/50 backdrop-blur-lg text-white shadow-2xl transform transition-all duration-300 z-40 border-r border-white/10 flex flex-col ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <nav className="flex-1 p-4">
          {navigationLinks.map(({ path, text, Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                location.pathname === path 
                  ? 'bg-white/20 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon size={18} />
              {text}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex justify-center space-x-4">
            {[
              { Icon: Github, url: 'https://github.com/galbii' },
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/chance-noonan-56abab208/' },
              { Icon: FileText, url: 'https://medium.com/@galbii' },
              { Icon: Instagram, url: 'https://www.instagram.com/dancebabuu/' }
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-12 bg-black" />
    </div>
  );
};

export default Header;
