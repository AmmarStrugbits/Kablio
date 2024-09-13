"use client"
/*
| Developed by Reskue
| Filename: theme.tsx
| Author: eric@reskue.tech
*/
import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto';
import '@fontsource/anton';
import '@fontsource/inter';


declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    cancelContained: true;
    deleteOutlined: true;
    deleteContained: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    headerHeight: string;
  }
  interface ThemeOptions {
    headerHeight?: string;
  }
}


export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      color: "#080039",
      fontSmooth: "auto",
    },
    h2: {
      fontSize: "1.5rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    h3: {
      fontSize: "1.25rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    h4: {
      fontSize: "1rem",
      color: "#080039",
      fontWeight: "bold",
      fontSmooth: "auto",
    },
    body1: {
      fontSize: "0.875rem",
      color: "#080039",
      fontSmooth: "auto",
    },
    body2: {
      color: "#080039",
      fontSize: "0.75rem",
      fontSmooth: "auto",
    },
  },
  palette: {
    primary: {
      main: "#00FBDF",
    },
    secondary: {
      main: "#FFED82",
    },
    info: {
      main: "#5186EC",
    },
    warning: {
      main: "#FF6969",
    },
    error: {
      main: "#FF6969",
    },

  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "0.625rem",
          boxShadow: "0px 6px 16px 0px rgba(8, 0, 57, 0.10)",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "0.5px solid #DADAE3",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        // variant: "body1"
        variantMapping: {
          body1: "span",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
            backgroundColor: "black",
            border: "none",
            fontWeight: "bold",
            padding: "2rem",
            fontFamily: "Anton",
            fontSize: "1.375rem",
            borderRadius: '0.625rem',
            "&:hover": {
              backgroundColor: "#FFED82",
              color: "black",
            },
          }
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "black",
            backgroundColor: "transparent",
            border: "0.2rem solid black",
            fontWeight: "normal",
            padding: "1.8rem",
            fontFamily: "Roboto",
            fontSize: "1.375rem",
            borderRadius: '0.625rem',
            "&:hover": {
              backgroundColor: "#FFED82",
              fontWeight: "bold",
              padding: "2rem",
              border: "none",
              color: "black",
            },
          }
        },
        {
          props: { variant: "cancelContained" },
          style: {
            color: "black",
            border: "1px solid black",
            "&:hover": {
              backgroundColor: "#FFED82",
              color: "black",
            },
          },
        },
        {
          props: { variant: "deleteOutlined" },
          style: {
            color: "#FF6969",
            borderColor: "#FF6969",
            border: "0.5px solid #FF6969",
            "&:hover": {
              backgroundColor: "#FF6969",
              color: "#FFFFFF",
            },
          },
        },
        {
          props: { variant: "deleteContained" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#FF6969",
            "&:hover": {
              backgroundColor: "#FF4747",
            },
          },
        },
      ],
      defaultProps: {
        // disableElevation: true,
        // disableRipple: true,
      },
      styleOverrides: {
        contained: {
          color: "white",
        },
        outlined: {
          backgroundColor: "white",
        },
        root: {
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "0.875rem",
          borderRadius: "6px",
          height: "2.5rem",
          "&:hover": {
            backgroundColor: "#2161DD",
            color: "#fff",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledInfo: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "0.16719rem",
          background: "rgba(8, 0, 57, 0.80)",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgba(8, 0, 57, 0.80);",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        // icon: <CheckIcon />,
      },

      styleOverrides: {
        root: {
          color: "#DADAE3",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          // to update style of onHover the left menu
          boxShadow: "8px 0px 15px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
    },
  },
  headerHeight: '10vh',
});

theme.typography.h1 = {
  "@media (min-width:600px)": {
  },
  [theme.breakpoints.up("md")]: {
  },
};

