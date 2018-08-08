import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomeContainer from './home/home_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';

const App = () => (
  <div className='main-wrapper'>

    <Switch>
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <Route path='/' component={HomeContainer}/>
    </Switch>

  </div>
);

export default App;