import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <>
      <h3>QdtPreloaderLinear</h3>
      <p>Default options: &#123; color: &apos; primary &apos; &#125;</p>
      <div className={classes.root}>
        <LinearProgress color="primary" />
      </div>
      <p>options: &#123; color: &apos; secondary &apos; &#125;</p>
      <div className={classes.root}>
        <LinearProgress color="secondary" />
      </div>
    </>
  );
};

export default Container;
