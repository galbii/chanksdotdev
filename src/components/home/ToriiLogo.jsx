import React from 'react';

const ToriiLogo = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="160 60 480 80" 
      className="h-8 w-auto"
    >
      <defs>
        <filter id="headerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="glow"/>
          <feFlood floodColor="#ff0000" floodOpacity="0.2" result="coloredGlow"/>
          <feComposite operator="in" in="coloredGlow" in2="glow"/>
          <feMerge>
            <feMergeNode in="coloredGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="brightNeon" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="blur0"/>
          <feFlood floodColor="#ffffff" floodOpacity="1" result="flood0"/>
          <feComposite operator="in" in="flood0" in2="blur0" result="glow0"/>
          
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1"/>
          <feFlood floodColor="#ffffff" floodOpacity="0.9" result="flood1"/>
          <feComposite operator="in" in="flood1" in2="blur1" result="glow1"/>
          
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2"/>
          <feFlood floodColor="#4d4dff" floodOpacity="0.7" result="flood2"/>
          <feComposite operator="in" in="flood2" in2="blur2" result="glow2"/>
          
          <feMerge>
            <feMergeNode in="glow2"/>
            <feMergeNode in="glow1"/>
            <feMergeNode in="glow0"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Compact Oni Torii Gate */}
      <g filter="url(#headerGlow)">
        {/* Main top beam with prominent oni horns */}
        <path 
          d="M300 75
             L350 65
             L370 50 L380 65  /* Left horn */
             L400 62
             L420 65 L430 50  /* Right horn */
             L450 65
             L500 75
             L450 72
             L430 57 L420 72  /* Right horn bottom */
             L400 69
             L380 72 L370 57  /* Left horn bottom */
             L350 72
             Z" 
          fill="currentColor" 
          opacity="0.95"
        />
        
        {/* Connected bottom beam with fangs */}
        <path 
          d="M305 88
             L350 85
             L365 92 L380 85 L395 92  /* Left fangs */
             L400 85
             L405 92 L420 85 L435 92  /* Right fangs */
             L450 85
             L495 88
             L450 86
             L435 93 L420 86 L405 93  /* Right fangs bottom */
             L400 86
             L395 93 L380 86 L365 93  /* Left fangs bottom */
             L350 86
             Z" 
          fill="currentColor" 
          opacity="0.9"
        />
        
        {/* Connected demonic pillars */}
        <path d="M350 65 L355 70 L350 115 L345 70 Z" fill="currentColor" opacity="0.9"/>
        <path d="M450 65 L455 70 L450 115 L445 70 Z" fill="currentColor" opacity="0.9"/>
        
        {/* Subtle connecting elements */}
        <path 
          d="M350 72 Q400 69 450 72" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.7"
        />
        <path 
          d="M350 86 Q400 83 450 86" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.7"
        />
      </g>

      {/* Japanese Text */}
      <g transform="translate(460, 112) scale(1.1)">
        <text 
          x="0" 
          y="0"
          fontFamily="'Noto Sans JP', sans-serif"
          fontSize="24"
          fontWeight="500"
          letterSpacing="2"
          fill="white"
          filter="url(#brightNeon)"
          className="select-none"
        >
          チャンクス
        </text>
      </g>

      {/* Wide Side-Profile Katana */}
      <g transform="translate(445, 124) scale(1.4)" filter="url(#brightNeon)">
        {/* Handle */}
        <path
          d="M-25 0 
             L-8 0
             L-8 8
             L-25 8
             Z"
          fill="white"
          opacity="0.95"
        />
        {/* Handle wrapping */}
        {[-23, -21, -19, -17, -15, -13, -11].map((x, i) => (
          <rect 
            key={i}
            x={x} 
            y="1" 
            width="1" 
            height="6" 
            fill="rgba(0,0,0,0.4)"
          />
        ))}
        
        {/* Enhanced Tsuba */}
        <path
          d="M-10 -2
             L-6 -2
             L-4 -1
             L-4 9
             L-6 10
             L-10 10
             L-12 9
             L-12 -1
             Z"
          fill="white"
          opacity="0.95"
        />
        
        {/* Wide Blade */}
        <path
          d="M-6 0
             C20 0, 50 0, 80 -1
             Q120 -2, 140 -3
             C160 -4, 180 -5, 190 -6
             L192 -5
             C180 -4, 160 -3, 140 -2
             Q120 -1, 80 0
             C50 1, 20 1, -4 1
             Z"
          fill="white"
          opacity="1"
          transform="scale(1, 2.5)"
        />
        
        {/* Blade Edge and Details */}
        <path
          d="M-4 4
             C20 4, 50 3, 80 1
             Q120 -1, 140 -3
             C160 -5, 180 -7, 190 -8"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="1"
        />
        
        {/* Blade Highlight */}
        <path
          d="M-4 -4
             C20 -4, 50 -5, 80 -7
             Q120 -9, 140 -11
             C160 -13, 180 -15, 190 -16"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
          opacity="0.9"
        />
      </g>
    </svg>
  );
};

export default ToriiLogo;
