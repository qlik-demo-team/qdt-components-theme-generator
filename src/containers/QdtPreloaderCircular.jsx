import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <>
      <h3>QdtProgressCircular</h3>
      <p>Default options: &#123; color: &apos; primary &apos; &#125;</p>
      <div className={classes.root}>
        <CircularProgress />
      </div>
      <p>options: &#123; color: &apos; secondary &apos; &#125;</p>
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    </>
  );
};

export default Container;
