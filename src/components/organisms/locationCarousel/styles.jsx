import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const Wrapper = styled.div`
    box-sizing: border-box;
    ${MEDIA.md`
        width: fit-content;
        overflow: scroll;
    `};
`
export const CustomContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    ${MEDIA.md`
        box-sizing: unset;
        width: 100vw;
        height: 810px;
        min-width: 100vw;
        height: 810px;
        overflow: scroll;
    `};
`

export const SwipeContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
`
