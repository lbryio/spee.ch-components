import React from 'react';
import { Route, Switch } from 'react-router-dom';

const customizedApp = ({components, containers, pages}) => {
    const HomePage = pages.HomePage || require('./pages/HomePage').default;
    const AboutPage = pages.AboutPage || require('./pages/AboutPage').default;
    const LoginPage = pages.LoginPage || require('./pages/LoginPage').default;
    const ShowPage = pages.ShowPage || require('./pages/ShowPage').default;
    const FourOhFourPage = pages.FourOhFourPage || require('./pages/FourOhFourPage').default;
    const MultisitePage = require('./pages/MultisitePage').default;
    return () => {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/multisite' component={MultisitePage}/>
                <Route exact path='/:identifier/:claim' component={ShowPage}/>
                <Route exact path='/:claim' component={ShowPage}/>
                <Route component={FourOhFourPage}/>
            </Switch>
        );
    };
};

export default customizedApp;
