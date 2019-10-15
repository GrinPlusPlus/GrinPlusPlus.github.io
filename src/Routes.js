import React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import ScrollToTop from './util/ScrollTop'
import Home from './Home.js'
import Donate from './Donate.js';
import FAQ from './FAQ.js';

function Routes(props) {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/donate' component={ Donate } />
            <Route path='/FAQ' component={ FAQ } />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default(Routes);
