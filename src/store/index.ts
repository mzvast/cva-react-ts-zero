/**
 * @file [index]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 17:13:24
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
// https://github.com/rematch/rematch/blob/master/docs/recipes/typescript.md

import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import * as models from './models';

export const store = init({
    models
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
