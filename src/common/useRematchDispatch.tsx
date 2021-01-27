/**
 * @file [useRematchDispatch]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-11-17 17:02:00
 */
import {useSelector, useDispatch} from 'react-redux';
import {iRootState, Dispatch} from 'store';

const useRematchDispatch = <D extends Dispatch, MD>(
    selector: (dispatch: D) => MD
) => {
    const dispatch = useDispatch<D>();
    return selector(dispatch);
};

export default useRematchDispatch;
