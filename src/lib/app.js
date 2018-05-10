import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ShowPage from './pages/ShowPage';
import FourOhForPage from "./pages/FourOhFourPage";

const App = ({ store }) => {
  const state = store.getState();
  console.log('state:', state);
  const { plugins } = state;
  const MyHomePage = plugins.pages.HomePage || HomePage;
  const MyAboutPage = plugins.pages.AboutPage || AboutPage;
  const MyLoginPage = plugins.pages.LoginPage || LoginPage;
  const MyShowPage = plugins.pages.ShowPage || ShowPage;
  const MyFourOhFourPage = plugins.pages.FourOhFourPage || FourOhForPage;
  return (
    <Switch>
      <Route exact path='/' component={MyHomePage}/>
      <Route exact path='/about' component={MyAboutPage}/>
      <Route exact path='/login' component={MyLoginPage}/>
      <Route exact path='/:identifier/:claim' component={MyShowPage}/>
      <Route exact path='/:claim' component={MyShowPage}/>
      <Route component={MyFourOhFourPage}/>
    </Switch>
  )
};

export default App;
