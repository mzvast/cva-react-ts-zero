/**
 * @file [config]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-26 13:21:00
 */
import env from './env';
import isDebug from './isDebug';

const API_HOST_TEST_ENV = 'http://vrapi-internal.baidu.com';
const API_HOST_ONLINE_ENV = 'https://vrapi-cloud.baidu.com';

const API_PREFIX = '/api/v8/';

const apiConfig = {
    test: API_HOST_TEST_ENV + API_PREFIX,
    online: API_HOST_ONLINE_ENV + API_PREFIX
};

export default {
    apiAddress: apiConfig[env],

    path: {
        root: '/',
        home: '/home',
        joke: '/joke',
        jokeFc: '/jokeFc'
    }
};
