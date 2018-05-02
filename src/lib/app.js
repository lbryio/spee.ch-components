import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dynamicImport } from './utils/dynamicImport';

const customizedApp = ({components, containers, pages}) => {
    const HomePage = dynamicImport('HomePage', pages) || require('./pages/HomePage').default;
    const AboutPage = dynamicImport('AboutPage', pages) || require('./pages/AboutPage').default;
    const LoginPage = dynamicImport('LoginPage', pages) || require('./pages/LoginPage').default;
    const ShowPage = dynamicImport('ShowPage', pages) || require('./pages/ShowPage').default;
    const FourOhFourPage = dynamicImport('FourOhFourPage', pages) || require('./pages/FourOhFourPage').default;
    return () => {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/:identifier/:claim' component={ShowPage}/>
                <Route exact path='/:claim' component={ShowPage}/>
                <Route component={FourOhFourPage}/>
            </Switch>
        );
    };
};

export default customizedApp;
