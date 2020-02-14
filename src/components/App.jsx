import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Home from '../containers/Home';
import Colors from '../containers/Colors';
import Header from '../containers/Header';
import Navigation from '../containers/Navigation';
import QdtButton from '../containers/QdtButton';
import QdtSequencer from '../containers/QdtSequencer';
import QdtSelect from '../containers/QdtSelect';
import QdtPreloaderCircular from '../containers/QdtPreloaderCircular';
import QdtPreloaderLinear from '../containers/QdtPreloaderLinear';
import QdtSlider from '../containers/QdtSlider';
import { Light } from '../themes/Themes';

const theme = createMuiTheme(Light);

const App = () => (
  <ThemeProvider theme={theme}>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3} style={{ paddingTop: 50, paddingRight: 15, borderRight: '1px solid #CCC' }}>
        <Navigation />
      </Grid>
      <Grid item xs={9} style={{ paddingTop: 50, paddingLeft: 30 }}>
        <Router>
          <Switch>
            <Route exact path="/qdt-button" component={QdtButton} />
            <Route exact path="/qdt-sequencer" component={QdtSequencer} />
            <Route exact path="/qdt-select" component={QdtSelect} />
            <Route exact path="/qdt-preloader-circular" component={QdtPreloaderCircular} />
            <Route exact path="/qdt-preloader-linear" component={QdtPreloaderLinear} />
            <Route exact path="/qdt-slider" component={QdtSlider} />
            <Route exact path="/colors" component={Colors} />
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default App;
