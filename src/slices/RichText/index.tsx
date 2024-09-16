'use client'
import type { Content } from "@prismicio/client";

import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

import { Box, Typography } from "@mui/material";
import { theme } from "@/MUI/Theme";
import Link from "next/link";

// Composant pour le bloc de code


export const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <Box><code>{children}</code></Box>;
    }
  },
  hyperlink: ({ node, children }) => {
    return (
      // <Box>
      <Link href={node.data.url || ''} target="_blank" style={{ textDecoration: 'none', color: '#4343FE', cursor: "pointer" }}>
        {children}
      </Link>
      // </Box>
    );
  },
  paragraph: ({ children }) => (
    <Box>
      <Typography variant="body2"
        sx={{
          fontFamily: 'Roboto',
          fontSize: '1.1rem',
          color: '#25272C',
          paddingBottom: '1rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
          },
        }}
      >
        {children}
      </Typography>
    </Box >
  ),
  heading1: ({ children }) => (
    <Box>
      <Typography variant="h1"
        sx={{
          fontFamily: 'Anton',
          fontSize: '3rem',
          color: 'black',
          py: '1rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
          },
        }}>
        {children}
      </Typography>
    </Box >
  ),
  heading2: ({ children }) => (
    <Box>
      <Typography variant="h2"
        sx={{
          fontFamily: 'Roboto',
          fontSize: '2.2rem',
          fontWeight: '700',
          color: 'black',
          py: '1rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
          },
        }}>
        {children}
      </Typography>
    </Box>
  ),
  heading3: ({ children }) => (
    <Box>
      <Typography variant="h3"
        sx={{
          fontFamily: 'Roboto',
          fontSize: '1.4rem',
          color: 'black',
          py: '1rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.1rem',
          },
        }}>
        {children}
      </Typography>
    </Box>
  ),
  heading4: ({ children }) => (
    <Box>
      <Typography variant="h4"
        sx={{
          fontFamily: 'Inter',
          fontSize: '1.1rem',
          fontWeight: '400',
          py: '1rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
          },
        }}>
        {children}
      </Typography>
    </Box>

  ),
  listItem: ({ children }) => (
    <Box>
      <li style={{
        paddingBottom: '0.5rem',
        // paddingLeft: '1rem',
        marginLeft: '1rem',
        // textDecoration: 'none',
        // listStyleType: 'none',
        [theme.breakpoints.down('md')]: {
        },
      }} >
        <Typography
          // variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '1.1rem',
            color: 'black',
            [theme.breakpoints.down('md')]: {
            },
          }}>
          {children}
        </Typography>
      </li>
    </Box >
  ),
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: "flex-start",
      width: '90%',
      padding: '1rem 0rem'
      // maxWidth: '643px',
    }}>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
}