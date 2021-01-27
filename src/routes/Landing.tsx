/**
 * @file [Landing]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:34:40
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React, {Component} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Box, palette, Flex} from 'galaco';
import AuthGuard from 'api/AuthGuard';
import {
    withRouter,
    RouteComponentProps,
    Redirect,
    Link
} from 'react-router-dom';
import Config from 'config';

type Props = {} & RouteComponentProps<{}, {}, {from: any}>;
interface State {
    redirectToReferrer: boolean;
}
class Landing extends Component<Props, State> {
    state: State = {
        redirectToReferrer: false
    };

    static defaultProps = {};

    render() {
        const {from} = this.props.location.state || {
            from: {pathname: Config.path.home}
        };
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <Box>
                LandingPage
                {AuthGuard.isAuthenticated ? (
                    <button onClick={this.logout}>logout</button>
                ) : (
                    <button onClick={this.login}>login</button>
                )}
                <li>
                    <Link to={Config.path.home}>Home</Link>
                </li>
                <li>
                    <Link to={Config.path.joke}>Joke</Link>
                </li>
            </Box>
        );
    }

    login = () => {
        AuthGuard.authenticate().then(() => {
            this.setState({redirectToReferrer: false});
        });
    };
    logout = () => {
        AuthGuard.signOut().then(() => {
            this.props.history.push(Config.path.root);
        });
    };
}
export default withRouter(Landing);
