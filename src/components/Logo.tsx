import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true,
}) => {
  // If variant is image, render the official image
  if (variant === 'image') {
    const sizeClasses = {
      sm: 'h-10 w-auto',
      md: 'h-14 w-auto',
      lg: 'h-20 w-auto',
      xl: 'h-28 w-auto',
    };
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src="/images/logo-solforte.jpg"
          alt="Solforte Transportes Logo"
          className={`${sizeClasses[size]} object-contain rounded-lg`}
        />
      </div>
    );
  }

  // Vector Logo for pixel-perfect sharpness at any DPI and transparent backgrounds
  const sizeMap = {
    sm: { icon: 34, text: 'text-lg', subText: 'text-[9px] tracking-[0.25em]' },
    md: { icon: 46, text: 'text-2xl', subText: 'text-[11px] tracking-[0.3em]' },
    lg: { icon: 60, text: 'text-3xl', subText: 'text-[13px] tracking-[0.35em]' },
    xl: { icon: 80, text: 'text-4xl', subText: 'text-[15px] tracking-[0.4em]' },
  };

  const currentSize = sizeMap[size];
  const isLightOnDark = variant === 'dark'; // Dark background, light text

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Sun + Truck Icon */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md transition-transform duration-300 hover:scale-105"
        >
          {/* Semicircular sun background */}
          <path
            d="M 12,68 A 44,44 0 1,1 88,68 Z"
            fill="url(#sunGradient)"
          />
          {/* Subtle glow border */}
          <path
            d="M 12,68 A 44,44 0 1,1 88,68 Z"
            stroke="#FFA040"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Speed motion lines on left */}
          <path d="M 8 41 L 46 41" stroke={isLightOnDark ? '#0F172A' : '#111827'} strokeWidth="3" strokeLinecap="round" />
          <path d="M 2 49 L 46 49" stroke={isLightOnDark ? '#0F172A' : '#111827'} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 8 57 L 46 57" stroke={isLightOnDark ? '#0F172A' : '#111827'} strokeWidth="3" strokeLinecap="round" />
          <path d="M 16 65 L 46 65" stroke={isLightOnDark ? '#0F172A' : '#111827'} strokeWidth="2.5" strokeLinecap="round" />

          {/* Truck Body Silhouette */}
          <path
            d="M 44 30 
               L 66 30 
               C 70 30, 72 32, 73 35 
               L 77 46 
               C 78 48, 79 50, 79 53 
               L 79 66 
               C 79 68, 77 69, 75 69 
               L 44 69 
               Z"
            fill={isLightOnDark ? '#0B0F17' : '#0B0F17'}
          />

          {/* Truck Cargo Box extension */}
          <path
            d="M 36 29 
               L 65 29 
               L 45 35 
               L 36 35 
               Z"
            fill={isLightOnDark ? '#0B0F17' : '#0B0F17'}
          />

          {/* Windshield */}
          <path
            d="M 57 37 
               L 71 37 
               C 72 37, 73 38, 73 39 
               L 75 48 
               L 55 48 
               C 54 48, 54 46, 54 44 
               L 55 39 
               C 55 38, 56 37, 57 37 
               Z"
            fill="#F58220"
          />

          {/* Side Mirror */}
          <rect x="52" y="40" width="2" height="6" rx="1" fill="#FFA040" />

          {/* Front Grille and Headlights */}
          <rect x="62" y="55" width="13" height="8" rx="1.5" fill="#334155" />
          <line x1="64" y1="58" x2="73" y2="58" stroke="#F58220" strokeWidth="1" />
          <line x1="64" y1="60.5" x2="73" y2="60.5" stroke="#F58220" strokeWidth="1" />
          <line x1="64" y1="63" x2="73" y2="63" stroke="#F58220" strokeWidth="1" />
          
          {/* Headlights */}
          <rect x="56" y="55" width="4" height="3" rx="0.5" fill="#FEF08A" />
          <rect x="56" y="60" width="4" height="3" rx="0.5" fill="#FEF08A" />

          {/* Wheels */}
          <circle cx="48" cy="69" r="6" fill="#020617" stroke="#64748B" strokeWidth="1" />
          <circle cx="48" cy="69" r="2.5" fill="#F58220" />

          <circle cx="70" cy="69" r="6" fill="#020617" stroke="#64748B" strokeWidth="1" />
          <circle cx="70" cy="69" r="2.5" fill="#F58220" />

          {/* Gradients */}
          <defs>
            <linearGradient id="sunGradient" x1="50" y1="24" x2="50" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFA62B" />
              <stop offset="0.6" stopColor="#F58220" />
              <stop offset="1" stopColor="#E05D00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography: SOL in orange, FORTE in bold slate/white, TRANSPORTES spaced underneath */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-black ${currentSize.text} tracking-tight uppercase flex items-center`}>
            <span className="text-[#F58220] drop-shadow-sm font-extrabold">SOL</span>
            <span className={isLightOnDark ? 'text-white' : 'text-slate-900 font-extrabold'}>
              FORTE
            </span>
          </div>
          <span
            className={`font-semibold uppercase text-slate-400 mt-0.5 ${currentSize.subText}`}
          >
            TRANSPORTES
          </span>
        </div>
      )}
    </div>
  );
};
