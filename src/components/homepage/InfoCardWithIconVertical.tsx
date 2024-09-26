"use client"

/*
| Developed by Reskue
| Filename: InfoCardwithIconVertical.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, styled, useMediaQuery } from '@mui/material';
import { theme } from '@/MUI/Theme';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface ContainerProps {
	iconposition: 'top' | 'left' | 'right' | 'bottom';
	width: number;
}

interface ImageSize {
	iconwidth: number;
}

export interface InfoCardWithIconProps extends ContainerProps, ImageSize {
	title: string;
	text: string;
	icon: StaticImageData;
	backgroundColor: string;
}

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const BackgroundGradient = styled(Box)<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({

	height: "100%",
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: `radial-gradient(circle, ${backgroundColor} 0%, transparent 0%)`,
	borderRadius: '50%',
	position: 'relative',

	"&:after": {
		content: "''",
		width: '150%',
		height: '90%',
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: 'translate(-50%, -50%)',
		background: backgroundColor,
		borderRadius: '100%',
		opacity: 0.5,
		filter: "blur(2rem)",
		[theme.breakpoints.down('lg')]: {

			filter: "blur(2rem)",
			height: '60%',
			width: '125%',
			top: "40%",
		},
	},
}));

const Container = styled(Box)<ContainerProps>(({ theme, iconposition, width }) => ({
	display: 'flex',
	flexDirection: iconposition === 'top' ? 'column' :
		iconposition === 'bottom' ? 'column-reverse' :
			iconposition === 'left' ? 'row' :
				'row-reverse',
	alignItems: 'center',
	justifyContent: 'flex-end',
	textAlign: iconposition === 'top' || iconposition === 'bottom' ? 'center' : 'left',
	margin: '0.625px',
	width: `${width}rem`,
	height: '100%',
	paddingTop: "5rem",
	[theme.breakpoints.down('lg')]: {
		width: "100vw",
	},
	[theme.breakpoints.down('md')]: {
		gap: "1rem",
		paddingLeft: "0rem",
		paddingRight: "0rem",
	},
}));

const TextZone = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: "0.5rem",
	[theme.breakpoints.down('md')]: {
		minHeight: '70px',
		gap: "0.8rem",

	},
}));

const Title = styled('h3')(({ theme }) => ({
	textTransform: 'uppercase',
	fontFamily: "Anton",
	color: "black",
	flex: 1,
	fontWeight: '400',
	lineHeight: '2.19rem',
	fontSize: '1.9rem',
	zIndex: 1,
	wordWrap: "break-word",
	[theme.breakpoints.down('md')]: {
		fontSize: '1.5rem',
	},
}));

const Text = styled('h4')(({ theme }) => ({
	display: 'block',
	fontFamily: "Roboto",
	color: "#505662",
	flex: 1,
	fontWeight: '400',
	lineHeight: '1.88rem',
	fontSize: '1.25rem',
	zIndex: 1,
	[theme.breakpoints.down('md')]: {
		fontSize: '1.125rem',
		lineHeight: '0rem',
	},
}));

const ImageBoxStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100px',
	height: '100px',
	[theme.breakpoints.down('md')]: {
		width: '50px',
		height: '50px',
	},
}));

const StyledImage = styled(Image)<ImageSize>(({ iconwidth }) => ({
	maxWidth: `${iconwidth}rem`,
	height: `auto`,
	position: 'relative',
	zIndex: 1,
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const InfoCardwithIconVertical: React.FC<InfoCardWithIconProps> = (props: InfoCardWithIconProps) => {
	const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
	const { icon, iconposition, backgroundColor, title, text, iconwidth, width } = props
	// Render
	//--------------------------------------------------------------------------
	return (
		<Box
			height={matchesMobile ? '300px' : '350px'}
		>
			<BackgroundGradient backgroundColor={backgroundColor}>
				<Container iconposition={iconposition} width={width} >
					<ImageBoxStyled>
						<StyledImage src={icon} alt="Icon" iconwidth={iconwidth} />
					</ImageBoxStyled>
					<TextZone>
						<Title>{title}</Title>
						<Text>{text}</Text>
					</TextZone>
				</Container>
			</BackgroundGradient>
		</Box>
	);
}

export default InfoCardwithIconVertical
