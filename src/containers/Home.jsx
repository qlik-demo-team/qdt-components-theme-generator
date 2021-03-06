import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

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
      <div className={classes.root}>
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
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>
      <div>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </div>
    </>
  );
};

export default Container;
