/*
| Developed by Reskue
| Filename: LogoGenerator.tsx
| Author: eric@reskue.art
*/

"use client"

import ComingSoonLogo from '@/assets/svgs/ComingSoonLogo.svg';
import { Box, styled, useMediaQuery } from '@mui/material';

import KablioWallpaperLogo from '@/assets/svgs/KablioWallpaperLogo.svg'
import React from 'react'
import Image from 'next/image';
import { theme } from '@/MUI/Theme';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LogoGeneratorProps //extends buttonProps
{
  nbOfRows: number;
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const RowContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',
  gap: '0.3rem'
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const LogoGenerator: React.FC<LogoGeneratorProps> = (props: LogoGeneratorProps) => {
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { nbOfRows } = props;


  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < nbOfRows; i++) {
      const componentsInRow = [];
      for (let j = 0; j < 5; j++) {
        const ComponentToRender = (i * 5 + j) % 2 === 0 ? <Image src={KablioWallpaperLogo} alt='KablioWallpaperLogo' key={i * 5 + j} width={matchesMobile ? 140 : 240} /> : <Image src={ComingSoonLogo} alt='Coming Soon Logo' key={i * 5 + j} width={matchesMobile ? 145 : 220} />;
        componentsInRow.push(ComponentToRender);
      }
      rows.push(<RowContainer key={i}>{componentsInRow}</RowContainer>);
    }
    return rows;
  };

  // Render
  //--------------------------------------------------------------------------
  return (<>{generateRows()}</>)
}

export default LogoGenerator
