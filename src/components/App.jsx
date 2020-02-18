import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme, ThemeProvider, makeStyles, // useTheme,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Drawer, AppBar, Toolbar, CssBaseline, Typography, Divider, IconButton, Menu, MenuItem, Modal, SimpleModal,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';
import GetAppIcon from '@material-ui/icons/GetApp';
import Home from '../containers/Home';
import Colors from '../containers/Colors';
import QdtButton from '../containers/QdtButton';
import QdtSequencer from '../containers/QdtSequencer';
import QdtSelect from '../containers/QdtSelect';
import QdtPreloaderCircular from '../containers/QdtPreloaderCircular';
import QdtPreloaderLinear from '../containers/QdtPreloaderLinear';
import QdtSlider from '../containers/QdtSlider';
import { Dark } from '../themes/Themes';
import Navigation from '../containers/Navigation';

const theme = createMuiTheme(Dark);

const drawerWidth = 240;

const useStyles = makeStyles((_theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    zIndex: _theme.zIndex.drawer + 1,
    transition: _theme.transitions.create(['width', 'margin'], {
      easing: _theme.transitions.easing.sharp,
      duration: _theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: _theme.transitions.create(['width', 'margin'], {
      easing: _theme.transitions.easing.sharp,
      duration: _theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: _theme.transitions.create('width', {
      easing: _theme.transitions.easing.sharp,
      duration: _theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: _theme.transitions.create('width', {
      easing: _theme.transitions.easing.sharp,
      duration: _theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: _theme.spacing(7) + 1,
    [_theme.breakpoints.up('sm')]: {
      width: _theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: _theme.spacing(0, 1),
    ..._theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: _theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openTheme = Boolean(anchorEl);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Qdt-components Theme Generator - Preview and Create themes for Qdt-components
            </Typography>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <BlurLinearIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openTheme}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Light</MenuItem>
                <MenuItem onClick={handleClose}>Dark</MenuItem>
              </Menu>
              <IconButton
                aria-label="Export Theme"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenModal}
              >
                <GetAppIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <Navigation handleListItemClick={handleListItemClick} selectedIndex={selectedIndex} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Router>
            <Switch>
              <Route exact path="/qdt-button" component={QdtButton} />
              <Route exact path="/qdt-sequencer" component={QdtSequencer} />
              <Route exact path="/qdt-select" component={QdtSelect} />
              <Route exact path="/qdt-preloader-circular" component={QdtPreloaderCircular} />
              <Route exact path="/qdt-preloader-linear" component={QdtPreloaderLinear} />
              <Route exact path="/qdt-slider" component={QdtSlider} />
              <Route exact path="/colors" component={Colors} />
              <Route exact path="/" component={QdtButton} />
              <Route component={Home} />
            </Switch>
          </Router>
        </main>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleCloseModal}
      >
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <SimpleModal />
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default App;
