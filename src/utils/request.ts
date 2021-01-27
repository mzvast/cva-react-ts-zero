/**
 * @file [request]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-26 13:08:29
 */
import axios from 'axios';

interface FinalRet<T = any> {
    result: boolean;
    code: number;
    msg: string;
    data: Get<T, 'data'>;
}

export const get = <T = any>(url: string, config?: any) => {
    axios.defaults.withCredentials = true;
    return axios
        .get<T>(url, config)
        .then((res) => {
            //@ts-ignore
            let {error_code, error_msg, data} = res.data;
            let result = error_code === 0;
            const ret: FinalRet<T> = {
                result,
                code: error_code,
                msg: error_msg,
                data
            };
            return ret;
        })
        .catch((error) => {
            const ret: FinalRet<T> = {
                result: false,
                code: -999,
                msg: error,
                data: null
            };
            return ret;
        });
};

export const post = <T = any>(url: string, data: any, config?: any) => {
    axios.defaults.withCredentials = true;
    return axios
        .post(url, data, config)
        .then((res) => {
            let {error_code, error_msg, data} = res.data;
            let result = error_code === 0;
            const ret: FinalRet<T> = {
                result,
                code: error_code,
                msg: error_msg,
                data
            };
            return ret;
        })
        .catch((error) => {
            const ret: FinalRet<T> = {
                result: false,
                code: -999,
                msg: error,
                data: null
            };
            return ret;
        });
};
