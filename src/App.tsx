/**
 * @file [App]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:23:07
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React, {Component} from 'react';

import styled, {css, keyframes} from 'styled-components';
// import {Box, palette, Flex} from 'galaco';

import Config from 'config';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';
import Joke from 'routes/Joke';
import Home from 'routes/Home';
import Landing from 'routes/Landing';
interface Props {}
interface State {}
class App extends Component<Props, State> {
    state: State;

    static defaultProps = {};

    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute
                        exact
                        path={Config.path.joke}
                        component={Joke}
                    />
                    <PrivateRoute
                        exact
                        path={Config.path.home}
                        component={Home}
                    />
                    <Route exact path={Config.path.root} component={Landing} />
                    <Redirect to={Config.path.root} />
                </Switch>
            </Router>
        );
    }
}
export default App;
