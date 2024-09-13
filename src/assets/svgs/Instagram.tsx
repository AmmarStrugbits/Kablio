import React, { useState } from 'react';
import { theme } from '@/MUI/Theme'
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
        stroke={isHovered ? 'white' : 'url(#myGradient)'}
        strokeWidth={4}
        d="M45.814 50.5H19.186c-2.575 0-4.686-2.11-4.686-4.686V19.186c0-2.575 2.11-4.686 4.686-4.686h26.628c2.575 0 4.686 2.11 4.686 4.686v26.628a4.681 4.681 0 0 1-4.686 4.686Z"
      />
      <path fill={isHovered ? 'white' : 'url(#myGradient)'} d="M43.75 24a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
      <circle
        cx={33}
        cy={33}
        r={8.5}
        stroke={isHovered ? 'white' : theme.palette.primary.main}
        strokeWidth={4}
      />
    </svg>
  );
};

export { SvgComponent as Instagram };
