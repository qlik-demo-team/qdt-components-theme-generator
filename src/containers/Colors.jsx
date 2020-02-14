import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../themes/Themes';

// const width = 500;
// const height = 1000;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'visible',
  },
  gridList: {
    width: 500,
  //   height,
  },
}));

const Container = () => {
  const classes = useStyles();
  console.log(Colors);

  return (
    <>
      Colors
      <GridList cellHeight={180} className={classes.gridList}>
        {Object.keys(Colors).map((key) => (
          <GridListTile key={key}>
            <div style={{ width: 250, height: 250, backgroundColor: Colors[key] }} />
            <GridListTileBar
              title={`${key} - ${Colors[key]}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

export default Container;
