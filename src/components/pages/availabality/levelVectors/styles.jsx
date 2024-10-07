import styled, { css } from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    position: absolute;
    max-width: 100vw;
    width: 66.1%;
    height: 100%;
    padding: 46.7% 0 0 33.81%;
`

export const VectorWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    width: 51.45%;
    margin: ${props => props.$offset}% 0 0 0;
    mix-blend-mode: overlay;

    img {
        box-sizing: border-box;
        opacity: 0;
        width: 100%;
        height: 100%;

        transition: opacity 200ms;
        transition-timing-function: linear;

        ${props => props.$hover && css`
            opacity: 1;
            cursor: pointer;
        `}


    }
`
