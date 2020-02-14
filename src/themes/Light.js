import Colors from './Colors';

const theme = {
  palette: {
    // primary: {
    //   light: Colors.EMERALD_LIGHT,
    //   main: Colors.EMERALD,
    //   dark: Colors.EMERALD_DARK,
    //   contrastText: '#fff',
    // },
    primary: {
      light: Colors.TURQUOISE_LIGHT,
      main: Colors.TURQUOISE,
      dark: Colors.TURQUOISE_DARK,
      contrastText: '#fff',
    },
    secondary: {
      light: Colors.WINE_LIGHT,
      main: Colors.WINE,
      dark: Colors.WINE_DARK,
      contrastText: '#fff',
    },
    success: {
      light: Colors.EMERALD,
      main: Colors.EMERALD,
      dark: Colors.EMERALD,
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
  },
  shape: {
    borderRadius: 0,
  },
  // status: {
  //   danger: 'orange',
  // },

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
