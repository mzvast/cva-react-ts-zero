/**
 * @file [getPx2vw]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-06-27 16:17
 */
/**
 * getPx2vw
 * @param pWidth 设计稿宽度，单位px
 */

export default function getPx2vw(pWidth: number) {
    // -2 /* post-process context */
    // -1 /* preparation context */
    // 0  /* newline context */
    //
    // 1  /* property context */
    // 2  /* selector block context */
    // 3  /* @at-rule block context */
    /**
     * px2vw
     * @param context
     * @param content
     * @param selectors
     * @param parent
     * @param line
     * @param column
     * @param length
     */

    const dpr = window.devicePixelRatio || 1;

    const normalTransform = (content) =>
        content.replace(/([0-9.]+)px/g, function (match, p1) {
            // console.log('plugin::match,p1', match, p1);
            const val = Number(p1);

            if (val > 1) {
                return String((val * 100) / pWidth) + 'vw';
            }

            if (val === 0) {
                return '0';
            }
            // 0<val<=1
            // return (val / dpr).toFixed(4) + 'px';
            if (dpr >= 3) {
                return '0.4px';
            }
            if (dpr >= 2) {
                return '0.5px';
            }
            return '1px';
        });

    // eslint-disable-next-line max-params
    function px2vw(context, content, selectors, parent, line, column, length) {
        // console.log('plugin::context:,', context, ',content:', content);
        switch (context) {
            case 1:
                // console.log('plugin::1content', content);
                if (/[0-9]px/.test(content)) {
                    return normalTransform(content);
                } else if (/apx/.test(content)) {
                    // !hack apx 不转换的绝对px absolute px
                    // if (Env.ua.isHuawei) {
                    return content.replace(/apx/g, 'px');
                    // } else {
                    // return normalTransform(content.replace(/apx/g, 'px'));
                    // }
                } else if (/_dpr100/.test(content)) {
                    // 特殊变量，dpr*100
                    return content.replace(/_dpr100/g, dpr * 100);
                } else if (/_rdpr/.test(content)) {
                    // 特殊变量，1/dpr
                    return content.replace(/_rdpr/g, 1 / dpr);
                }
                return content;
        }
    }
    // eslint-disable-next-line dot-notation
    window['galacoMoGaiCssPlugin'] = px2vw; // MoGai Hook
    return px2vw;
}
