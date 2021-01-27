/**
 * @file [getUA]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-11-06 10:44:46
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */

export const defaultUA = {
    isIe: false,
    isAndroid: false,
    isiOS: false,
    isEdge: false,
    isWeixin: false,
    isUC: false,
    isH5: false,
    isHuawei: false
};

export type UAReturn = {[k in keyof typeof defaultUA]: boolean};

const getUA = (u = ''): UAReturn => {
    let isAndroid = u.includes('Android') || u.includes('Adr'); //android终端
    let isiOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u); //ios终
    let isiPad = u.includes('iPad');
    const isWeixin = /micromessenger/i.test(u);
    const isUC = /UCBrowser/i.test(u);
    const isHuawei = /huawei/i.test(u);
    // let isIe = u.indexOf('MSIE') > -1;
    function ieVersion() {
        let isIE = u.includes('compatible') && u.includes('MSIE'); //判断是否IE<11浏览器
        let isEdge = u.includes('Edge') && !isIE; //判断是否IE的Edge浏览器
        let isIE11 = u.includes('Trident') && u.includes('rv:11.0');
        if (isIE) {
            let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
            reIE.test(u);
            let fIEVersion = parseFloat(RegExp.$1);
            if (fIEVersion === 7) {
                return 7;
            } else if (fIEVersion === 8) {
                return 8;
            } else if (fIEVersion === 9) {
                return 9;
            } else if (fIEVersion === 10) {
                return 10;
            }
            return 6; //IE版本<=7
        } else if (isEdge) {
            return 'edge'; //edge
        } else if (isIE11) {
            return 11; //IE11
        }
        return -1; //不是ie浏览器
    }
    return {
        isIe: ieVersion() !== -1,
        isAndroid,
        isiOS,
        isEdge: ieVersion() === 'edge',
        isWeixin,
        isUC,
        isH5: isAndroid || (isiOS && !isiPad),
        isHuawei
    };
};

export default getUA;

export const getMatchUaArray = (ua): string[] => {
    let result: string[] = [];
    const uaObj = getUA(ua);
    for (const key in uaObj) {
        if (Object.prototype.hasOwnProperty.call(uaObj, key)) {
            const element = uaObj[key];
            if (element) result.push(key);
        }
    }
    return result;
};
