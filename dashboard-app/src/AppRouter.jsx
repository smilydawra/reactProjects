import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Page from './common/Page';
import Dashboard from './components/Dashboard';
import MenuItemTwo from './components/MenuItemTwo';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Page exact path="/" page={Dashboard} />
                <Page exact path="/menu-item-2" page={MenuItemTwo} />
                <Page exact path="/menu-item-3" page={MenuItemTwo} />
                <Page exact path="/menu-item-4" page={MenuItemTwo} />
                <Page exact path="/menu-item-5" page={MenuItemTwo} />
                <Page exact path="/menu-item-6" page={MenuItemTwo} />
                <Page exact path="/settings" page={MenuItemTwo} />
            </Switch>
        </Router>
    )
}

export default AppRouter;