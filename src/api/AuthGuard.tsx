/**
 * @file [AuthGuard]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-03-13 16:16:32
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
export default {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
        return Promise.resolve();
    },
    signOut() {
        this.isAuthenticated = false;
        return Promise.resolve();
    }
};
