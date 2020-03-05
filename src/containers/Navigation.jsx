import React from 'react';
import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';
import {
  Palette, StopOutlined, PlayArrow, ArrowDropDown, Autorenew, SpaceBar, Tune, Search, Filter9Plus, Navigation, BarChart,
} from '@material-ui/icons';

const Container = ({ handleListItemClick, selectedIndex }) => (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button component="a" href="#/qdt-button" selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
      <ListItemIcon>
        <StopOutlined />
      </ListItemIcon>
      <ListItemText primary="QdtButton" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-sequencer" selected={selectedIndex === 2} onClick={() => handleListItemClick(2)}>
      <ListItemIcon>
        <PlayArrow />
      </ListItemIcon>
      <ListItemText primary="QdtSequencer" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-select" selected={selectedIndex === 3} onClick={() => handleListItemClick(3)}>
      <ListItemIcon>
        <ArrowDropDown />
      </ListItemIcon>
      <ListItemText primary="QdtSelect" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-list" selected={selectedIndex === 4} onClick={() => handleListItemClick(4)}>
      <ListItemIcon>
        <ArrowDropDown />
      </ListItemIcon>
      <ListItemText primary="QdtList" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-preloader-circular" selected={selectedIndex === 5} onClick={() => handleListItemClick(5)}>
      <ListItemIcon>
        <Autorenew />
      </ListItemIcon>
      <ListItemText primary="QdtProgressCircular" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-preloader-linear" selected={selectedIndex === 6} onClick={() => handleListItemClick(6)}>
      <ListItemIcon>
        <SpaceBar />
      </ListItemIcon>
      <ListItemText primary="QdtProgressLinear" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-slider" selected={selectedIndex === 7} onClick={() => handleListItemClick(7)}>
      <ListItemIcon>
        <Tune />
      </ListItemIcon>
      <ListItemText primary="QdtSlider" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-search" selected={selectedIndex === 8} onClick={() => handleListItemClick(8)}>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="QdtSearch" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-kpi" selected={selectedIndex === 9} onClick={() => handleListItemClick(9)}>
      <ListItemIcon>
        <Filter9Plus />
      </ListItemIcon>
      <ListItemText primary="QdtKpi" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-mapbox" selected={selectedIndex === 10} onClick={() => handleListItemClick(10)}>
      <ListItemIcon>
        <Navigation />
      </ListItemIcon>
      <ListItemText primary="QdtMapbox" />
    </ListItem>
    <ListItem button component="a" href="#/qdt-picasso" selected={selectedIndex === 11} onClick={() => handleListItemClick(11)}>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="QdtPicasso" />
    </ListItem>
    <Divider />
    <ListItem button component="a" href="#/colors" selected={selectedIndex === 12} onClick={() => handleListItemClick(12)}>
      <ListItemIcon>
        <Palette />
      </ListItemIcon>
      <ListItemText primary="Colors" />
    </ListItem>
  </List>
);

Container.propTypes = {
  handleListItemClick: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default Container;
