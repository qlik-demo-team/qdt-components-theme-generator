import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const InfoButton = withStyles((theme) => ({
  root: {
    color: theme.palette.info.contrastText,
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
}))(Button);

const WarningButton = withStyles((theme) => ({
  root: {
    color: theme.palette.warning.contrastText,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}))(Button);

const ErrorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}))(Button);

const SuccessButton = withStyles((theme) => ({
  root: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
}))(Button);

const Container = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <h3>QdtButton</h3>
      <div className={classes.root}>
        <div>variant: &apos;contained&apos;</div>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <InfoButton variant="contained">Info</InfoButton>
        <WarningButton variant="contained">Warning</WarningButton>
        <SuccessButton variant="contained">Success</SuccessButton>
        <ErrorButton variant="contained">Error</ErrorButton>
        <Button variant="contained" disabled>disabled</Button>
        <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
      </div>
      <div className={classes.root}>
        <div>variant: &apos;outlined&apos;</div>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" disabled>disabled</Button>
        <Button variant="outlined" color="primary" href="#contained-buttons">Link</Button>
      </div>
      <div className={classes.root}>
        <div>ButtonGroup with variant: &apos;outlined&apos; and color: &apos;primary&apos;</div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button disabled>disabled</Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>ButtonGroup with variant: &apos;contained&apos; and color: &apos;primary&apos;</div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button disabled>disabled</Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>ButtonGroup with variant: &apos;contained&apos; and color: &apos;secondary&apos;</div>
        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button disabled>disabled</Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <div>ButtonGroup with variant: &apos;text&apos; and color: &apos;primary&apos;</div>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button disabled>disabled</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Container;
