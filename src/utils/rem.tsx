/**
 * @file [rem]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-06-02 16:14:19
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
/* eslint-disable */
//@ts-ignore
const pwidth = 1280;
window.onload = () => {
    getRem(pwidth, 16);
};
window.onresize = () => {
    getRem(pwidth, 16);
};
function getRem(pwidth, prem) {
    let html = document.getElementsByTagName('html')[0];
    let dpr = window.devicePixelRatio;
    let oWidth =
        (html.clientWidth ||
            document.body.clientWidth ||
            document.documentElement.clientWidth) * dpr;
    html.style.fontSize = ((oWidth / pwidth) * prem) / dpr + 'px';
}

getRem(pwidth, 16); // 直接调用
