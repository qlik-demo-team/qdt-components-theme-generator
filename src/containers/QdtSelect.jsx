import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel, MenuItem, FormControl, Select, LinearProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

// const MenuItemQlik = withStyles((theme) => ({
//   root: {
//     color: theme.palette.error.contrastText,
//     backgroundColor: theme.palette.error.main,
//     '&:hover': {
//       backgroundColor: theme.palette.error.dark,
//     },
//   },
// }))(MenuItem);

const Container = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <h3>QdtSelect</h3>
      <p>Default options: &#123;  &#125;</p>
      <div className={classes.root}>
        <div>options: &#123; &#125;</div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <LinearProgress variant="determinate" value={80} />
        </FormControl>
      </div>
    </>
  );
};

export default Container;
