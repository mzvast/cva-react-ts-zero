/**
 * @file [env]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-26 13:32:14
 */

import isDebug from './isDebug';

const getEnv = () => {
    if (isDebug) {
        return 'test';
    }
    if (
        window.location.host.includes('vrapi-internal') ||
        window.location.host.includes('baidu-int')
    ) {
        return 'test';
    }
    return 'online';
};

export default getEnv();
