/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 16:54:08
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/rem';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {StyleSheetManager, ThemeProvider} from 'galaco';
import ThemeLoader from './theme/ThemeLoader';
import GlobalStyle from './theme/GlobalStyle';
import getPx2vw from 'utils/getPx2vw';

const theme = ThemeLoader.getThemeConfig('green');
const cssPlugin = [getPx2vw(1280)];
const render = (Component) => {
    ReactDOM.render(
        <React.StrictMode>
            <StyleSheetManager stylisPlugins={cssPlugin}>
                <>
                    <GlobalStyle />
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <Component />
                        </ThemeProvider>
                    </Provider>
                </>
            </StyleSheetManager>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render(App);

// https://github.com/vitejs/vite/issues/1747
if (import.meta.hot) {
    import.meta.hot.accept();
}
