import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';
import {
  PlayArrow, SkipPrevious, SkipNext, Pause, Stop,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <>
      <h3>QdtSequencer</h3>
      <p>Default options: &#123; size:&apos;small&apos;, variant:&apos;outlined&apos;, color:&apos;primary&apos; &#125;</p>
      <div className={classes.root}>
        <div>options: &#123; &#125;</div>
        <ButtonGroup size="small" variant="outlined" color="primary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>options: &#123; size: &apos;large&apos;, color: &apos;secondary&apos; &#125;</div>
        <ButtonGroup size="large" variant="outlined" color="secondary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>options: &#123; variant: &apos;contained&apos; &#125;</div>
        <ButtonGroup size="small" variant="contained" color="primary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>options: &#123; variant: &apos;contained&apos;, color: &apos;secondary&apos; &#125;</div>
        <ButtonGroup size="small" variant="contained" color="secondary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>options: &#123; variant: &apos;text&apos;, color: &apos;primary&apos; &#125;</div>
        <ButtonGroup size="small" variant="text" color="primary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>options: &#123; variant: &apos;text&apos;, color: &apos;secondary&apos; &#125;</div>
        <ButtonGroup size="small" variant="text" color="secondary" aria-label="qdt-sequencer">
          <Button><SkipPrevious /></Button>
          <Button><PlayArrow /></Button>
          <Button><Pause /></Button>
          <Button disabled><Stop /></Button>
          <Button disabled><SkipNext /></Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Container;
