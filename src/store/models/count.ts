import {createModel} from '@rematch/core';

export const count = createModel()({
    state: 0,
    reducers: {
        increment(state, payload: number) {
            return state + payload;
        }
    },
    effects: (dispatch) => ({
        incrementAsync(payload: number, state) {
            dispatch.count.increment(payload);
        }
    })
});
