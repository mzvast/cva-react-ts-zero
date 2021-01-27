/**
 * @file [.hygen]
 * @author [mzvast]
 * @email [mzvast@gmail.com']
 * @create date 2020-12-16 17:34:54
 */

/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
module.exports = {
    helpers: {
        getDate: () => {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            return `${year}/${month}/${day}`;
        }
    }
};
