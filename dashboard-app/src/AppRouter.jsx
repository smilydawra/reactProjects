/**
 * This is Application Routes with all routes menu options
 */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Page from './common/Page';
import Dashboard from './pages/Dashboard';
import MenuItemTwo from './pages/MenuItemTwo';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Page exact path="/" page={Dashboard} />
                <Page exact path="/menu-option-2" page={MenuItemTwo} />
                <Page exact path="/menu-option-3" page={MenuItemTwo} />
                <Page exact path="/menu-option-4" page={MenuItemTwo} />
                <Page exact path="/menu-option-5" page={MenuItemTwo} />
                <Page exact path="/menu-option-6" page={MenuItemTwo} />
                <Page exact path="/settings" page={MenuItemTwo} />
            </Switch>
        </Router>
    )
}

export default AppRouter;