/**
 * @file [ThemeLoader]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-05-13 11:12:23
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
import * as themePalette from './palette';

class ThemeLoader {
    // 不支持动态换肤，只初始化一次
    // constructor(cb) {
    //     this.init(cb);
    // }
    cb;
    async init(cb) {
        this.connect(cb);
        const primaryColor: string = await this.getPrimaryColor();
        this.loadThemeConfig(primaryColor);
    }
    getPrimaryColor(): Promise<string> {
        //  异步API
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('green');
            }, 0);
        });
    }
    /**
     *根据primaryColor获取theme
     *
     * @param {string} primaryColor
     * @returns
     * @memberof ThemeLoader
     */
    getThemeConfig(primaryColor: string) {
        const theme = {
            palette: {
                ...themePalette.default,
                ...themePalette[primaryColor]
            }
        };
        return theme;
    }
    /**
     *应用主题色
     *
     * @param {string} primaryColor 主题色
     * @memberof ThemeLoader
     */
    loadThemeConfig(primaryColor: string) {
        const themeConfig = this.getThemeConfig(primaryColor);
        this.cb && this.cb(themeConfig);
        console.log('bbq::loadThemeConfig', primaryColor);
    }
    /**
     *绑定loadThemeConfig之后的回调函数
     *
     * @param {Function} cb
     * @memberof ThemeLoader
     */
    connect(cb: Function) {
        this.cb = cb;
    }
}

export default new ThemeLoader();
