import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
// import {
//   MenuItem, FormControl, Select, LinearProgress, List, ListItem
// } from '@material-ui/core';
import {
  FormControl, MenuList, MenuItem, Input, ListItemIcon, Paper, ListItemText,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const Container = () => {
  const classes = useStyles();

  const qMatrix = [
    { qText: 'Some long, long, very long, very very very long text', qState: 'S', qElemNumber: 1 },
    { qText: 2019, qState: 'O', qElemNumber: 2 },
    { qText: 2018, qState: 'S', qElemNumber: 3 },
    { qText: 2017, qState: 'X', qElemNumber: 4 },
  ];

  return (
    <>
      <h3>QdtSelect</h3>
      <p>Default options: &#123;  &#125;</p>
      <div className={classes.root}>
        <div>options: &#123; &#125;</div>
        <FormControl variant="outlined" className={classes.formControl}>
          <Paper>
            <MenuList component="nav" className="qdt-list">
              <MenuItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <Input type="search" disableUnderline />
              </MenuItem>
              { qMatrix.map((row) => (
                <MenuItem
                  key={row.qElemNumber}
                  value={row}
                  className={classnames({
                    selected: row.qState === 'S',
                    excluded: row.qState === 'X',
                  })}
                  button
                >
                  <ListItemText primary={row.qText} />
                  {row.qState === 'S'
                    && (
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    )}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </FormControl>
      </div>
    </>
  );
};

export default Container;
