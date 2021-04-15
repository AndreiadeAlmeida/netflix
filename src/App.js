import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Browse, Signin, Signup, } from './pages'
import * as ROUTES from './constants/routes';
import { IsUserRedirect , ProtectedRoute } from './helpers/routes';

function App() {
  const user = {};

  return <Router>
    <Route exact path="/signin">
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
    </Route>
    <Route exact path="/signup">
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>
    </Route>

    <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
      <Browse />
    </ProtectedRoute>
    <IsUserRedirect 
      user={user} 
      loggedInPath={ROUTES.BROWSE}
      path={ROUTES.HOME}
    >
      <Home />
    </IsUserRedirect>
  </Router>;
}

export default App;
