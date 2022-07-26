import AlbertSansThin from 'src/assets/fonts/AlbertSans-Thin.woff2'
import AlbertSansThinItalic from 'src/assets/fonts/AlbertSans-ThinItalic.woff2'
import AlbertSansExtraLight from 'src/assets/fonts/AlbertSans-ExtraLight.woff2'
import AlbertSansExtraLightItalic from 'src/assets/fonts/AlbertSans-ExtraLightItalic.woff2'
import AlbertSansLight from 'src/assets/fonts/AlbertSans-Light.woff2'
import AlbertSansLightItalic from 'src/assets/fonts/AlbertSans-LightItalic.woff2'
import AlbertSans from 'src/assets/fonts/AlbertSans-Regular.woff2'
import AlbertSansItalic from 'src/assets/fonts/AlbertSans-Italic.woff2'
import AlbertSansMedium from 'src/assets/fonts/AlbertSans-Medium.woff2'
import AlbertSansMediumItalic from 'src/assets/fonts/AlbertSans-MediumItalic.woff2'
import AlbertSansSemiBold from 'src/assets/fonts/AlbertSans-SemiBold.woff2'
import AlbertSansSemiBoldItalic from 'src/assets/fonts/AlbertSans-SemiBoldItalic.woff2'

import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#945A8A',
    },
    secondary: {
      main: '#615253',
      light: '#A39A9A'
    },
    error: {
      main: '#DA5048'
    },
    success: {
      main: '#5DC6A4'
    },
    info: {
      main: '#2CB2C5'
    },
    warning: {
      main: '#F1BC7E'
    },
    background: {
      default: '#282C34',
      paper: '#1d2026'
    }
  },
  typography: {
    fontFamily: [
      '"Albert Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundImage: 'none',
        }),
      },
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: 'holder' },
          style: ({theme}) => ({
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
          })
        }
      ]
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ ownerState, theme }) => ({
          backgroundColor: 'transparent',
          borderRight: 0,
          width: 200,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: `calc(200px - ${theme.spacing(4)})`,
            backgroundColor: theme.palette.background.paper,
            left: 0
          }
        }),
      },
    },
    MuiListItemButton: {
      variants: [
        {
          props: { variant: 'drawer' },
          style: ({ownerState, theme}) => ({
            '& .MuiTypography-root': {
              fontWeight: theme.typography.fontWeightBold,
            },
            '&.Mui-selected': {
              position: 'relative',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.getContrastText(theme.palette.primary.main),
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '100%',
                width: 0, height: 0,
                borderTop: `${theme.spacing(3)} solid transparent`,
                borderBottom: `${theme.spacing(3)} solid transparent`,
                borderLeft: `${theme.spacing(3.5)} solid ${theme.palette.primary.main}`,
                transition: theme.transitions.create('all', {
                  duration: 150
                })
              },
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.getContrastText(theme.palette.primary.light),
                '&::after': {
                  borderLeftColor: theme.palette.primary.light
                }
              },
            }
          })
        }
      ]
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '&.Mui-disabled': {
            opacity: 0
          }
        }),
      },
    },


    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSansThin}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 100;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansThinItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSansExtraLight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 200;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansExtraLightItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSansLight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 300;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansLightItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 400;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSansMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 500;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansMediumItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Albert Sans'), local('Albert Sans-Regular'), url(${AlbertSansSemiBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Albert Sans';
          font-style: italic;
          font-display: swap;
          font-weight: 600;
          src: local('Albert Sans'), local('Albert Sans-Italic'), url(${AlbertSansSemiBoldItalic}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `,
    },
  },
});
