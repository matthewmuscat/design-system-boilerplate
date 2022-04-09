import { createMuiTheme } from '@material-ui/core/styles';

export const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#50B95D',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  overrides: {
    MuiButton: {
      label: {
        color: 'white',
        minWidth: '158px',
        height: '30px',
        fontWeight: 700,
      },
      root: {
        borderRadius: '8px',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#87D691',
        },
        '&:focus': {
          backgroundColor: '#21822D',
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '10px 14px',
        borderColor: '#D5D6D6',
        border: '1px',
      },
      root: {
        borderRadius: '8px',
      },
    },
    MuiFormControl: {
      root: {
        margin: '3px 0',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '96px',
        fontWeight: 700,
        lineHeight: '1.24',
        color: '#2F3B46',
      },
      h2: {
        fontSize: '60px',
        fontWeight: 700,
        lineHeight: '1.4',
        color: '#2F3B46',
      },
      h3: {
        fontSize: '48px',
        fontWeight: 700,
        color: '#2F3B46',
        lineHeight: '1.25',
      },
      h4: {
        fontSize: '34px',
        fontWeight: 700,
        color: '#2F3B46',
        lineHeight: '1.265',
      },
      h5: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#2F3B46',
        lineHeight: '1.33',
      },
      h6: {
        fontSize: '20px',
        color: '#2F3B46',
        fontWeight: 600,
        lineHeight: '1.5',
      },
      overline: {
        fontWeight: 800,
        lineHeight: '1.4',
        color: '#647A8B',
      },
    },
    MuiFormHelperText: {
      root: {
        color: '#EB4747',
        fontWeight: 600,
        fontSize: '14px',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: 'white',
        overflowX: 'hidden',
      },
    },
  },
});
