/**
 * @file [PrivateRouteDev]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:40:17
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import config from 'config';
import AuthGuard from 'api/AuthGuard';
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({component: Component, ...rest}) => {
    if (!AuthGuard.isAuthenticated) {
        // window.history.back(); // fixme: 如果空降无权限页会遣返
        return <Redirect to={config.path.root} />;
    }

    function renderFn(props: any) {
        // console.log('renderFn::rest.path', rest.path);
        return AuthGuard.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: config.path.root,
                    state: {from: props.location}
                }}
            />
        );
    }

    return <Route {...rest} render={renderFn} />;
};
export default PrivateRoute;
