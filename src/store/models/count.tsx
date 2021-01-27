/**
 * @file [count]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-05-30 19:34:21
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */

import {createModel} from '@rematch/core';

export type CounterState = number;

export const count = createModel({
    state: 0,
    reducers: {
        increment: (state: CounterState, payload: number): CounterState =>
            state + payload
    },
    effects: {
        async incrementAsync(payload: number) {
            setTimeout(() => {
                this.increment(payload || 1);
            });
        }
    }
});

export default count;
