import React from 'react';

const WaveLogo = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 800 400" 
          className="w-full h-auto"
          style={{ background: 'transparent' }}
        >
          <defs>
            {/* Enhanced neon glow for main text */}
            <filter id="neonPurple" x="-50%" y="-50%" width="200%" height="200%">
              <feFlood floodColor="#9333ea" floodOpacity="0.8" result="purpleFlood"/>
              <feComposite operator="in" in="purpleFlood" in2="SourceGraphic" result="purpleText"/>
              <feGaussianBlur in="purpleText" stdDeviation="4" result="purpleBlur"/>
              <feMerge>
                <feMergeNode in="purpleBlur"/>
                <feMergeNode in="purpleBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Elegant glow for white elements */}
            <filter id="elegantGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="glow"/>
              <feMerge>
                <feMergeNode in="glow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Dynamic wave gradient */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>

          {/* Minimalist Torii Gate */}
          <g filter="url(#elegantGlow)">
            <path 
              d="M180 80 
                 C250 75, 400 60, 620 80
                 L625 82
                 C400 62, 250 77, 175 82 Z" 
              fill="white" 
              opacity="0.9"
            >
              <animate
                attributeName="opacity"
                values="0.9;0.7;0.9"
                dur="6s"
                repeatCount="indefinite"
              />
            </path>
            
            <path 
              d="M185 92
                 C250 87, 400 75, 615 92
                 L620 94
                 C400 77, 250 89, 180 94 Z" 
              fill="white" 
              opacity="0.7"
            />
            
            <rect x="230" y="80" width="2" height="140" fill="white" opacity="0.8"/>
            <rect x="568" y="80" width="2" height="140" fill="white" opacity="0.8"/>
          </g>

          {/* Stylized Wave Effect */}
          <g className="wave-group">
            <path 
              d="M40 270 Q200 170, 400 270 T760 270" 
              stroke="white" 
              fill="none" 
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.15"
              filter="url(#elegantGlow)"
            >
              <animate 
                attributeName="d" 
                dur="7s"
                repeatCount="indefinite"
                values="M40 270 Q200 170, 400 270 T760 270;
                        M40 270 Q200 220, 400 170 T760 270;
                        M40 270 Q200 170, 400 270 T760 270"
              />
            </path>

            <path 
              d="M40 280 Q200 180, 400 280 T760 280" 
              stroke="url(#waveGradient)" 
              fill="none" 
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#elegantGlow)"
            >
              <animate 
                attributeName="d" 
                dur="5s"
                repeatCount="indefinite"
                values="M40 280 Q200 180, 400 280 T760 280;
                        M40 280 Q200 330, 400 230 T760 280;
                        M40 280 Q200 180, 400 280 T760 280"
              />
            </path>
          </g>

          {/* Logo Text Group */}
          <g className="logo-text">
            {/* Main "chanks" text */}
            <text 
              x="50%" 
              y="58%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fontFamily="'Rajdhani', sans-serif" 
              fontSize="130" 
              fontWeight="600" 
              fill="#ffffff"
              filter="url(#neonPurple)"
              letterSpacing="8"
              className="select-none"
            >
              chanks
            </text>
            
            {/* ".dev" suffix */}
            <text 
              x="75%" 
              y="72%" 
              textAnchor="start" 
              dominantBaseline="middle" 
              fontFamily="'Rajdhani', sans-serif" 
              fontSize="60" 
              fontWeight="300"
              fill="white"
              filter="url(#elegantGlow)"
              letterSpacing="4"
              className="select-none"
            >
              .dev
            </text>
          </g>

          {/* Accent Elements */}
          <g className="accents" filter="url(#elegantGlow)">
            <line 
              x1="230" 
              y1="220" 
              x2="570" 
              y2="220" 
              stroke="white" 
              strokeWidth="0.5" 
              opacity="0.3"
            />
            <circle cx="230" cy="220" r="1" fill="white" opacity="0.8"/>
            <circle cx="570" cy="220" r="1" fill="white" opacity="0.8"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WaveLogo;
