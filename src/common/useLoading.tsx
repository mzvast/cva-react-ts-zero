/**
 * @file [useLoading]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-12-23 16:02:19
 */
import React, {useState, useCallback} from 'react';
import {styled, css, keyframes, Box, palette, Flex} from 'galaco';

const LoadingComp = () => <div>loading...</div>;

interface Props {}
const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const onLoadFn = () => {
        setIsLoading(false);
    };
    const onReload = () => {
        setIsLoading(true);
    };
    return [
        {isLoading, LoadingComp},
        {onLoadFn, onReload}
    ] as const;
};
export default useLoading;
