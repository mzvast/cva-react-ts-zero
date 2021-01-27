/**
 * @file [Api]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-26 13:13:39
 */

import config from 'config';
import {get} from 'utils/request';
import requestUrl from './requestUrl';

export default {
    getABC() {
        const url = config.apiAddress + requestUrl.getABC;
        return get(url);
    }
};
