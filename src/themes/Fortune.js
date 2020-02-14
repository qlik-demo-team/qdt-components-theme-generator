import Colors from './Colors';

const theme = {
  palette: {
    primary: {
      light: '#2eb5db',
      main: '#0089ae',
      dark: '#00637f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4248',
      main: '#ed1c24',
      dark: '#b50309',
      contrastText: '#fff',
    },
    success: {
      light: Colors.EMERALD_LIGHT,
      main: Colors.EMERALD,
      dark: Colors.EMERALD_DARK,
      contrastText: '#fff',
    },
    error: {
      light: Colors.RUBY,
      main: Colors.RUBY,
      dark: Colors.RUBY,
      contrastText: '#fff',
    },
    info: { // SAPPHIRE
      light: Colors.AQUAMARINE,
      main: Colors.AQUAMARINE,
      dark: Colors.AQUAMARINE,
      contrastText: '#fff',
    },
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.87)',
    //   secondary: 'rgba(0, 0, 0, 0.54)',
    //   disabled: 'rgba(0, 0, 0, 0.38)',
    //   hint: 'rgba(0, 0, 0, 0.38)',
    // },
    // divider: 'rgba(0, 0, 0, 0.12)',
    // background: {
    //   paper: '#fff',
    //   default: '#fafafa',
    // },
    // action: {
    //   active: Colors.QLIK_GREEN,
    //   hover: 'rgba(0, 0, 0, 0.04)',
    //   hoverOpacity: 0.04,
    //   selected: Colors.QLIK_GREEN,
    //   selectedOpacity: 1,
    //   disabled: 'rgba(0, 0, 0, 0.26)',
    //   disabledBackground: 'rgba(0, 0, 0, 0.12)',
    // },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 3,
        borderColor: '#FFFFFF',
        border: 5,
      },
    },
    MuiSelect: {
      root: {
      },
    },
    MuiInputBase: {
      root: {
      },
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          backgroundColor: Colors.QLIK_GREEN,
          color: '#FFF',
          '&:hover': {
            backgroundColor: Colors.QLIK_GREEN,
          },
        },
      },
    },
    MuiSlider: {
      root: {
        height: 8,
      },
      thumb: {
        height: 24,
        width: 'auto',
        padding: 5,
        borderRadius: 0,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
        },
        '& .bar': {
          height: 10,
          width: 1,
          backgroundColor: 'currentColor',
          marginLeft: 1,
          marginRight: 1,
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 5,
        borderRadius: 0,
      },
      rail: {
        height: 5,
        borderRadius: 0,
      },
    },
  },
};

export default theme;
