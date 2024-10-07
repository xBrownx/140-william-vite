import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../../utils/index.jsx';

export const Wrapper = styled.div`
    box-sizing: border-box;

    ${MEDIA.md`
        width: 100%;
    `};
`
export const CustomContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    height: fit-content;
    ${MEDIA.md`
        box-sizing: unset;
        width: 100vw;
        min-width: 100vw;
    `};

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
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

export const MenuContainer = styled.div`
    position: relative;
    width: 100%;
    background: #FFF;
    padding: 1.975vh 2.222vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
    overflow: hidden;

    @media only screen and (max-width: 750px) {
        gap: 5px;
    }

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.278vw;
    align-items: center;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    p {
        font-family: 'Archivo', sans-serif;
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 1.975vh;
        opacity: 0.5;
        transition: all 300ms ease;
        ${props => props.$isActive && css`
            opacity: 1;
            color: #164A49;
        `};

        ${MEDIA.md`
            font-size: 16px;
        `};
    }

    img {
        width: 2.222vw;
        height: 2.222vw;
        transition: all 300ms ease;
        opacity: 0.5;
        ${props => props.$isActive && css`
            opacity: 1;
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
        `};

        ${MEDIA.md`
            width: 32px;
            height: 32px;
        `};


    }

    &:hover {
        cursor: pointer;
        animation: y-button-hover 300ms ease-in-out;
        animation-fill-mode: both;

        p {
            opacity: 1;
            color: #164A49;
        }

        img {
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
            opacity: 1;
        }
    }

    @keyframes y-button-hover {
        0% {
            scale: 1;
        }
        40% {
            scale: 1.03;
        }
        60% {
            scale: 1;
        }
        100% {

        }
    }
`
