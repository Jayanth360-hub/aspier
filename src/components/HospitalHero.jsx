// AI-generated hospital hero image as an inline SVG illustration
export default function HospitalHeroImage({ className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1200 520"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8d8ea"/>
            <stop offset="45%" stopColor="#cceeff"/>
            <stop offset="100%" stopColor="#e8f7ff"/>
          </linearGradient>
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b8d9b8"/>
            <stop offset="100%" stopColor="#8fbc8f"/>
          </linearGradient>
          <linearGradient id="buildMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f8fc"/>
            <stop offset="100%" stopColor="#d8eef7"/>
          </linearGradient>
          <linearGradient id="buildWing" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e2f2f8"/>
            <stop offset="100%" stopColor="#c4dde9"/>
          </linearGradient>
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1EB8D0"/>
            <stop offset="100%" stopColor="#1590A8"/>
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8c8c8"/>
            <stop offset="100%" stopColor="#b0b0b0"/>
          </linearGradient>
          <filter id="bldShadow">
            <feDropShadow dx="3" dy="6" stdDeviation="8" floodColor="#0e2535" floodOpacity="0.22"/>
          </filter>
          <filter id="softShadow">
            <feDropShadow dx="1" dy="3" stdDeviation="4" floodColor="#0e2535" floodOpacity="0.15"/>
          </filter>
        </defs>

        {/* Sky */}
        <rect width="1200" height="520" fill="url(#skyGrad)"/>

        {/* Sun */}
        <circle cx="1060" cy="85" r="50" fill="#FFF9C4" opacity="0.7"/>
        <circle cx="1060" cy="85" r="36" fill="#FFE082" opacity="0.9"/>

        {/* Clouds */}
        <g opacity="0.9">
          <ellipse cx="160" cy="90" rx="80" ry="28" fill="white"/>
          <ellipse cx="210" cy="72" rx="55" ry="36" fill="white"/>
          <ellipse cx="110" cy="82" rx="45" ry="24" fill="white"/>
        </g>
        <g opacity="0.75">
          <ellipse cx="480" cy="70" rx="65" ry="22" fill="white"/>
          <ellipse cx="520" cy="55" rx="42" ry="28" fill="white"/>
          <ellipse cx="445" cy="65" rx="36" ry="19" fill="white"/>
        </g>
        <g opacity="0.6">
          <ellipse cx="820" cy="55" rx="55" ry="18" fill="white"/>
          <ellipse cx="858" cy="43" rx="36" ry="24" fill="white"/>
        </g>

        {/* Ground / grass */}
        <rect x="0" y="390" width="1200" height="130" fill="url(#groundGrad)"/>
        <ellipse cx="600" cy="390" rx="680" ry="22" fill="#9dbb9d" opacity="0.5"/>

        {/* Road */}
        <rect x="0" y="420" width="1200" height="100" fill="url(#roadGrad)"/>
        <rect x="0" y="420" width="1200" height="4" fill="#a0a0a0"/>
        {/* Road markings */}
        {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
          <rect key={i} x={i*120} y="468" width="70" height="6" fill="white" opacity="0.7" rx="3"/>
        ))}
        {/* Sidewalk */}
        <rect x="0" y="390" width="1200" height="30" fill="#d4d4c8"/>
        <rect x="0" y="390" width="1200" height="3" fill="#b8b8ac"/>

        {/* ===== LEFT WING BUILDING ===== */}
        <rect x="80" y="230" width="200" height="170" fill="url(#buildWing)" filter="url(#bldShadow)"/>
        <rect x="80" y="230" width="200" height="14" fill="url(#roofGrad)"/>
        <rect x="80" y="244" width="200" height="5" fill="rgba(30,184,208,0.25)"/>
        {/* Left wing windows */}
        {[0,1,2].map(row => [0,1,2,3].map(col => (
          <g key={`lw${row}${col}`}>
            <rect x={100+col*44} y={262+row*46} width="28" height="34" fill="#b8e8f8" stroke="#4fc3f7" strokeWidth="1.2" rx="2"/>
            <line x1={114+col*44} y1={262+row*46} x2={114+col*44} y2={296+row*46} stroke="#4fc3f7" strokeWidth="0.8"/>
            <line x1={100+col*44} y1={279+row*46} x2={128+col*44} y2={279+row*46} stroke="#4fc3f7" strokeWidth="0.8"/>
          </g>
        )))}

        {/* ===== RIGHT WING BUILDING ===== */}
        <rect x="920" y="230" width="200" height="170" fill="url(#buildWing)" filter="url(#bldShadow)"/>
        <rect x="920" y="230" width="200" height="14" fill="url(#roofGrad)"/>
        <rect x="920" y="244" width="200" height="5" fill="rgba(30,184,208,0.25)"/>
        {/* Right wing windows */}
        {[0,1,2].map(row => [0,1,2,3].map(col => (
          <g key={`rw${row}${col}`}>
            <rect x={940+col*44} y={262+row*46} width="28" height="34" fill="#b8e8f8" stroke="#4fc3f7" strokeWidth="1.2" rx="2"/>
            <line x1={954+col*44} y1={262+row*46} x2={954+col*44} y2={296+row*46} stroke="#4fc3f7" strokeWidth="0.8"/>
            <line x1={940+col*44} y1={279+row*46} x2={968+col*44} y2={279+row*46} stroke="#4fc3f7" strokeWidth="0.8"/>
          </g>
        )))}

        {/* ===== MAIN CENTRAL BUILDING ===== */}
        <rect x="270" y="140" width="660" height="260" fill="url(#buildMain)" filter="url(#bldShadow)"/>
        <rect x="270" y="140" width="660" height="18" fill="url(#roofGrad)"/>
        <rect x="270" y="158" width="660" height="6" fill="rgba(30,184,208,0.3)"/>

        {/* Main building — row 1 windows */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={`mr1${i}`}>
            <rect x={296+i*86} y={178} width="52" height="56" fill="#b3e5fc" stroke="#29b6f6" strokeWidth="1.5" rx="3"/>
            <line x1={322+i*86} y1={178} x2={322+i*86} y2={234} stroke="#29b6f6" strokeWidth="1"/>
            <line x1={296+i*86} y1={207} x2={348+i*86} y2={207} stroke="#29b6f6" strokeWidth="1"/>
          </g>
        ))}
        {/* Main building — row 2 windows */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={`mr2${i}`}>
            <rect x={296+i*86} y={248} width="52" height="56" fill="#b3e5fc" stroke="#29b6f6" strokeWidth="1.5" rx="3"/>
            <line x1={322+i*86} y1={248} x2={322+i*86} y2={304} stroke="#29b6f6" strokeWidth="1"/>
            <line x1={296+i*86} y1={277} x2={348+i*86} y2={277} stroke="#29b6f6" strokeWidth="1"/>
          </g>
        ))}
        {/* Main building — row 3 windows */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={`mr3${i}`}>
            <rect x={296+i*86} y={318} width="52" height="46" fill="#b3e5fc" stroke="#29b6f6" strokeWidth="1.5" rx="3"/>
            <line x1={322+i*86} y1={318} x2={322+i*86} y2={364} stroke="#29b6f6" strokeWidth="1"/>
            <line x1={296+i*86} y1={342} x2={348+i*86} y2={342} stroke="#29b6f6" strokeWidth="1"/>
          </g>
        ))}

        {/* Rooftop details */}
        <rect x="420" y="118" width="80" height="24" fill="#d0eaf5" stroke="#1EB8D0" strokeWidth="1.5" rx="3"/>
        <rect x="560" y="110" width="80" height="32" fill="#d0eaf5" stroke="#1EB8D0" strokeWidth="1.5" rx="3"/>
        <rect x="700" y="118" width="80" height="24" fill="#d0eaf5" stroke="#1EB8D0" strokeWidth="1.5" rx="3"/>

        {/* ===== RED CROSS / H sign on roof ===== */}
        <rect x="580" y="72" width="22" height="66" fill="#e53935" rx="5"/>
        <rect x="556" y="95" width="70" height="22" fill="#e53935" rx="5"/>
        <circle cx="591" cy="105" r="38" fill="none" stroke="white" strokeWidth="2" opacity="0.25"/>

        {/* H letters on building */}
        <rect x="574" y="160" width="9" height="30" fill="#1EB8D0" rx="2" opacity="0.85"/>
        <rect x="599" y="160" width="9" height="30" fill="#1EB8D0" rx="2" opacity="0.85"/>
        <rect x="574" y="173" width="34" height="6" fill="#1EB8D0" rx="2" opacity="0.85"/>

        {/* ===== ENTRANCE PORTICO ===== */}
        <rect x="460" y="310" width="280" height="100" fill="#cfe9f4"/>
        <rect x="460" y="310" width="280" height="14" fill="url(#roofGrad)"/>
        {/* Portico columns */}
        {[0,1,2,3,4,5].map(i => (
          <rect key={`pc${i}`} x={475+i*44} y="324" width="12" height="86" fill="#a0cfe0" rx="3"/>
        ))}

        {/* Main double door */}
        <rect x="530" y="355" width="140" height="75" fill="#1590A8" rx="4"/>
        <rect x="538" y="362" width="58" height="55" fill="#0d7390" rx="2"/>
        <rect x="604" y="362" width="58" height="55" fill="#0d7390" rx="2"/>
        <circle cx="597" cy="392" r="4" fill="#FFE082"/>
        <circle cx="607" cy="392" r="4" fill="#FFE082"/>
        {/* Door glass reflection */}
        <rect x="542" y="365" width="18" height="30" fill="rgba(255,255,255,0.15)" rx="1"/>
        <rect x="608" y="365" width="18" height="30" fill="rgba(255,255,255,0.15)" rx="1"/>

        {/* ===== ASPIER SIGN ===== */}
        <rect x="470" y="430" width="260" height="36" fill="url(#roofGrad)" rx="5" filter="url(#softShadow)"/>
        <text x="600" y="453" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="3">
          ASPIER INSTITUTE
        </text>

        {/* ===== TREES ===== */}
        {[60, 250, 950, 1130].map((x,i) => (
          <g key={`tree${i}`}>
            <rect x={x-5} y="345" width="10" height="50" fill="#6d4c41"/>
            <ellipse cx={x} cy="318" rx="34" ry="42" fill="#388e3c"/>
            <ellipse cx={x-10} cy="330" rx="22" ry="28" fill="#43a047"/>
            <ellipse cx={x+10} cy="325" rx="18" ry="22" fill="#2e7d32"/>
          </g>
        ))}
        {/* Extra mid trees */}
        {[420, 780].map((x,i) => (
          <g key={`tree2${i}`}>
            <rect x={x-4} y="362" width="8" height="32" fill="#6d4c41"/>
            <ellipse cx={x} cy="342" rx="24" ry="30" fill="#388e3c"/>
            <ellipse cx={x-7} cy="350" rx="16" ry="20" fill="#43a047"/>
          </g>
        ))}

        {/* ===== LAMP POSTS ===== */}
        {[460, 540, 660, 740].map((x,i) => (
          <g key={`lamp${i}`}>
            <rect x={x-3} y="345" width="6" height="58" fill="#607d8b"/>
            <ellipse cx={x} cy="343" rx="14" ry="7" fill="#FFF9C4" opacity="0.95"/>
            <ellipse cx={x} cy="343" rx="9" ry="4" fill="#FFE082"/>
          </g>
        ))}

        {/* ===== AMBULANCE ===== */}
        <g transform="translate(60, 395)">
          <rect x="0" y="0" width="120" height="56" fill="white" stroke="#e0e0e0" strokeWidth="1.5" rx="7"/>
          <rect x="0" y="0" width="120" height="14" fill="#ef5350" rx="7"/>
          <rect x="120" y="6" width="34" height="44" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" rx="5"/>
          {/* Wheels */}
          <circle cx="25" cy="56" r="12" fill="#37474f"/>
          <circle cx="25" cy="56" r="6" fill="#90a4ae"/>
          <circle cx="105" cy="56" r="12" fill="#37474f"/>
          <circle cx="105" cy="56" r="6" fill="#90a4ae"/>
          {/* Red cross */}
          <rect x="52" y="18" width="6" height="20" fill="#e53935" rx="1"/>
          <rect x="45" y="24" width="20" height="6" fill="#e53935" rx="1"/>
          {/* Windows */}
          <rect x="8" y="18" width="28" height="22" fill="#b3e5fc" rx="2"/>
          <rect x="122" y="10" width="28" height="28" fill="#b3e5fc" rx="2"/>
          {/* Siren */}
          <rect x="48" y="-6" width="24" height="8" fill="#e53935" rx="3"/>
        </g>

        {/* ===== PARKED CARS ===== */}
        <g transform="translate(960, 400)">
          <rect x="0" y="0" width="90" height="42" fill="#4fc3f7" rx="6"/>
          <rect x="12" y="6" width="66" height="22" fill="#b3e5fc" rx="3"/>
          <circle cx="18" cy="44" r="9" fill="#37474f"/>
          <circle cx="18" cy="44" r="4" fill="#90a4ae"/>
          <circle cx="72" cy="44" r="9" fill="#37474f"/>
          <circle cx="72" cy="44" r="4" fill="#90a4ae"/>
        </g>
        <g transform="translate(1070, 405)">
          <rect x="0" y="0" width="80" height="38" fill="#ef9a9a" rx="6"/>
          <rect x="10" y="5" width="60" height="18" fill="#ffcdd2" rx="3"/>
          <circle cx="16" cy="40" r="8" fill="#37474f"/>
          <circle cx="16" cy="40" r="4" fill="#90a4ae"/>
          <circle cx="64" cy="40" r="8" fill="#37474f"/>
          <circle cx="64" cy="40" r="4" fill="#90a4ae"/>
        </g>

        {/* Subtle vignette for depth */}
        <rect width="1200" height="520" fill="url(#skyGrad)" opacity="0.03"/>
      </svg>
    </div>
  )
}
