/**
 * @file [LoadEruda]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-05-30 21:53:07
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
// https://github.com/liriliri/eruda/blob/master/doc/README_CN.md
export default function () {
    const script = document.createElement('script');
    script.src = '//cdn.jsdelivr.net/npm/eruda';
    document.body.appendChild(script);
    script.onload = function () {
        //@ts-ignore
        eruda.init();
    };
}
