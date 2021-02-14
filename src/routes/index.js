import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import TheHome from '@pages/TheHome';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/loja-vtex-jussi" component={TheHome} />
      <Redirect from="*" to="/loja-vtex-jussi" />
    </Switch>
  </Router>
);

export default Routes;
