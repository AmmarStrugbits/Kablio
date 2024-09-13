import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import NextImage from 'next/image';
// import Image from 'next/image';

import DefaultArticleMainImage from '@/assets/images/blog/ImageArticle/ArticleImage.png'
import { Box, Typography } from "@mui/material";
import { theme } from "@/MUI/Theme";
/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '100%',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
      },
    }}
      width={900}
    >
      <NextImage
        src={slice.primary?.image?.url || DefaultArticleMainImage} alt={slice.primary.image.alt || 'default image'}
        width={900}
        height={480}
        layout="responsive" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '434px',
          width: '100%'
        }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: '300',
            color: '#505662'
          }}
        >{slice.primary?.image_description} </Typography>
      </Box>
    </Box>
  );
};

export default Image;
