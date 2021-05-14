/**
 * @file [sharedStyle]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-01-10 17:38:13
 */

import {styled, Flex, Box} from 'galaco';

export const flexCenter: any = styled(Flex)`
    align-items: center;
    justify-content: center;
`;

export const Ellipsis = (row: number = 1) =>
    row === 1
        ? styled(Box)`
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
          `
        : styled(Box)`
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: ${row};
          `;
