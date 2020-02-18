import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  MenuItem, FormControl, Select, LinearProgress,
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

const Container = () => {
  const classes = useStyles();
  const [year, setYear] = React.useState(2020);
  const [month, setMonth] = React.useState('Jan');

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <h3>QdtSelect</h3>
      <p>Default options: &#123;  &#125;</p>
      <div className={classes.root}>
        <div>options: &#123; &#125;</div>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            displayEmpty
            value={year}
            onChange={handleChangeYear}
          >
            <MenuItem value="" disabled>
              Year
            </MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
          </Select>
          <LinearProgress variant="determinate" value={80} />
        </FormControl>
        <div>options: &#123; color: &apos; secondary &apos; &#125;</div>
        <FormControl variant="outlined" color="secondary" className={classes.formControl}>
          {/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            displayEmpty
            value={month}
            onChange={handleChangeMonth}
          >
            <MenuItem value="" disabled>
              Month
            </MenuItem>
            <MenuItem value="Jan">Jan</MenuItem>
            <MenuItem value="Feb">Feb</MenuItem>
            <MenuItem value="Mar">Mar</MenuItem>
          </Select>
          <LinearProgress variant="determinate" color="secondary" value={80} />
        </FormControl>
      </div>
    </>
  );
};

export default Container;
