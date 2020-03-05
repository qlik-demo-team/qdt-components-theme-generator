import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

const OutlinedPrimaryBox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    padding: 50,
    border: '1px solid currentColor',
    fontSize: 60,
    textAlign: 'center',
  },
}))(Box);

const PrimaryBox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: 50,
    border: '1px solid',
    borderColor: theme.palette.primary.lightx,
    fontSize: 60,
    textAlign: 'center',
  },
}))(Box);

const OutlinedSecondaryBox = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    padding: 50,
    border: '1px solid currentColor',
    fontSize: 60,
    textAlign: 'center',
  },
}))(Box);

const SecondaryBox = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: 50,
    border: '1px solid',
    borderColor: theme.palette.secondary.light,
    fontSize: 30,
    textAlign: 'center',
  },
}))(Box);

const PrimaryGrid = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid',
    borderColor: theme.palette.primary.light,
    fontSize: '4rem',
    height: '100%',
  },
}))(Grid);

const Container = () => (
  <>
    <h3>QdtKpi</h3>
    <p>Default options: &#123; color: &apos; primary &apos; &#125;</p>
    <div style={{ width: 400, height: 200 }}>
      <PrimaryGrid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        432
      </PrimaryGrid>
    </div>
    <div>
      <PrimaryBox className="qdt-kpi"> 513 </PrimaryBox>
    </div>
    <p>Options: &#123; color: &apos; primary &apos; &#125;</p>
    <div>
      <OutlinedPrimaryBox> 513 </OutlinedPrimaryBox>
    </div>
    <p>options: &#123; color: &apos; secondary &apos; &#125;</p>
    <div>
      <SecondaryBox> 133 </SecondaryBox>
    </div>
    <p>options: &#123; color: &apos; secondary &apos; &#125;</p>
    <div>
      <OutlinedSecondaryBox> 133 </OutlinedSecondaryBox>
    </div>
  </>
);

export default Container;
