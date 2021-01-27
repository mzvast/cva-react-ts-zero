/**
 * @file [Home]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-05-30 19:31:31
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React, {Component} from 'react';
import {Link, Route, withRouter, Switch} from 'react-router-dom';
import styled, {css, keyframes} from 'styled-components';
import {Box, palette, Flex} from 'galaco';
import {connect} from 'react-redux';
import {iRootState, Dispatch} from 'store';

const mapState = (state: iRootState) => ({
    count: state.count
});
const mapDispatch = (dispatch: Dispatch) => ({
    increment: () => dispatch.count.increment(1)
});
type connectedProps = ReturnType<typeof mapState> &
    ReturnType<typeof mapDispatch>;
type Props = {} & connectedProps;
interface State {}

class Home extends Component<Props, State> {
    state: State;
    static defaultProps = {};
    render() {
        return (
            <div>
                <Box>count:{this.props.count}</Box>
                <button onClick={this.props.increment}>increment</button>
            </div>
        );
    }
}

export default connect(mapState, mapDispatch)(Home);
