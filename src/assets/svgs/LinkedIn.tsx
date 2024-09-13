import { theme } from '@/MUI/Theme'
import React, { useState } from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={66}
      fill="none"
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle cx={33} cy={33} r={32.5} fill={isHovered ? theme.palette.secondary.main : '#000'} />
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="50%" style={{ stopColor: '#00FBDF' }} />
          <stop offset="100%" style={{ stopColor: '#01BAF8' }} />
        </linearGradient>
      </defs>
      <path
        fill={isHovered ? 'white' : 'url(#myGradient)'}
        d="M24.403 25.01H17.09v23.322h7.313V25.01ZM44.187 24.504c-.27-.034-.556-.05-.843-.067-4.095-.169-6.403 2.258-7.212 3.302-.22.287-.32.455-.32.455v-3.117h-6.994v23.322h7.314V37.446c0-1.584-.118-3.27.674-4.719.674-1.213 1.887-1.82 3.252-1.82 4.044 0 4.129 3.657 4.129 3.994V48.5H51.5V33.283c0-5.207-2.646-8.274-7.313-8.779ZM20.747 21.993a4.246 4.246 0 1 0 0-8.493 4.246 4.246 0 0 0 0 8.493Z"
      />
    </svg>
  );
};

export { SvgComponent as LinkedIn };
