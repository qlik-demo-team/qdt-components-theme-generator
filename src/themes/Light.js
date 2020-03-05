import Colors from './Colors';

const theme = {
  palette: {
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
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 3,
        borderColor: '#FFFFFF',
        border: 5,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '10px 14px',
      },
    },
    MuiListItemText: {
      primary: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        fontSize: 12,
      },
    },
    MuiMenuItem: {
      root: {
        borderBottom: `1px solid ${Colors.GREY_80}`,
        '&.selected': {
          backgroundColor: Colors.QLIK_GREEN,
          color: '#FFF',
          borderBottom: `1px solid ${Colors.GREY_100}`,
          '&:hover': {
            backgroundColor: Colors.QLIK_GREEN,
          },
          '& .MuiListItemIcon-root': {
            minWidth: 10,
            '& .MuiSvgIcon-root': {
              fill: '#FFF',
              width: '0.5em',
              height: '0.5em',
            },
          },
        },
        '&.excluded': {
          backgroundColor: Colors.GREY_80,
          color: '#000',
          borderBottom: `1px solid ${Colors.GREY_100}`,
          '&:hover': {
            color: '#FFF',
            backgroundColor: Colors.QLIK_GREEN,
          },
        },
      },
    },
    MuiList: {
      root: {
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        // textAlign: 'right',
        borderBottom: `1px solid ${Colors.GREY_85}`,
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
