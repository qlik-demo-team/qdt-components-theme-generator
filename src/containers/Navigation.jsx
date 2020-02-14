import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';
import {
  Palette, Home, StopOutlined, PlayArrow, ArrowDropDown, Autorenew, SpaceBar, Tune,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component="a" href="#/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="#/qdt-button">
          <ListItemIcon>
            <StopOutlined />
          </ListItemIcon>
          <ListItemText primary="QdtButton" />
        </ListItem>
        <ListItem button component="a" href="#/qdt-sequencer">
          <ListItemIcon>
            <PlayArrow />
          </ListItemIcon>
          <ListItemText primary="QdtSequencer" />
        </ListItem>
        <ListItem button component="a" href="#/qdt-select">
          <ListItemIcon>
            <ArrowDropDown />
          </ListItemIcon>
          <ListItemText primary="QdtSelect" />
        </ListItem>
        <ListItem button component="a" href="#/qdt-preloader-circular">
          <ListItemIcon>
            <Autorenew />
          </ListItemIcon>
          <ListItemText primary="QdtProgressCircular" />
        </ListItem>
        <ListItem button component="a" href="#/qdt-preloader-linear">
          <ListItemIcon>
            <SpaceBar />
          </ListItemIcon>
          <ListItemText primary="QdtProgressLinear" />
        </ListItem>
        <ListItem button component="a" href="#/qdt-slider">
          <ListItemIcon>
            <Tune />
          </ListItemIcon>
          <ListItemText primary="QdtSlider" />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="#/colors">
          <ListItemIcon>
            <Palette />
          </ListItemIcon>
          <ListItemText primary="Colors" />
        </ListItem>
      </List>
    </div>
  );
};

export default Container;
