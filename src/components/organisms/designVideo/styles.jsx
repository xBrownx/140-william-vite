import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'


export const Container = styled.div`
    width: 100%;
    height: ${SCREEN.height(810)};
    margin: 2% 0 0 0;
    background-color: black;
    position: relative;
    box-sizing: border-box;
`

export const ListWrapper = styled.div`
    flex: 1;
    padding-top: ${SCREEN.height(140)};
    padding-left: ${SCREEN.width(32)};
    z-index: 1000;
`

export const ButtonWrapper = styled.div`
    opacity: 1;
    transition: opacity 0.4s;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;

    padding-top: ${SCREEN.height(140)};
    
    ${props => props.$visible && css`
        opacity: 0;
    `}
    
    button {
        z-index: 1000;

        svg {
            height: ${SCREEN.height(24)};
            width: ${SCREEN.width(24)};
        }
    }
`

export const MapWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    flex: 1;
    z-index: 10;
    display: flex;
    justify-content: end;
    right: 0;
    top: 0;
    padding-top: ${SCREEN.height(120)};
    padding-right: ${SCREEN.width(32)};

    img {
        width: ${SCREEN.width(175)};
        height: ${SCREEN.height(219)};
    }
`

export const VideoContainer = styled.div`
    box-sizing: border-box;
    transition: all 200ms;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute !important;
    z-index: 0;

    ${props => props.$isLoading && css`
        opacity: 0;
    `};

`

export const StyledVideo = styled.video`
    box-sizing: border-box;    
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Overlay = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;

    box-sizing: border-box;
`

export const MenuWrapper = styled.div`
    z-index: 10000;
    height: ${SCREEN.height(61)};
    padding-right: ${SCREEN.width(74)};
    padding-bottom: ${SCREEN.height(41)};
    padding-left: ${SCREEN.width(42)};
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
`

export const StyledUl = styled.ul`

    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${SCREEN.width(16)};
    ${MEDIA.md`
        display: none;
    `};

`;

export const StyledLi = styled.li`
    transition: all 200ms ease-in-out;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${SCREEN.height(29)};
    padding-inline: ${SCREEN.width(8)};

    ${props => props.$border && css`
        border-right: 1px solid white;
    `}
    
    p {
        transition: all 200ms ease-in-out;
        color: white;
        opacity: 0.7;
        font-size: ${SCREEN.fontSize(16)};
        font-weight: 300;

        font-family: 'SuisseIntl-Light', serif;
        line-height: ${SCREEN.height(20.75)};
    }

    &:hover {
        cursor: pointer;

        p {
            opacity: 1;
        }
    }
    ${props => props.$active && css`
        p {
            opacity: 1;
        }
    `}
`

export const MobileOverlay = styled.div`
    z-index: 10000;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding-top: 17.5px;
`

export const CustomRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 16px;
box-sizing: border-box;
`

export const CustomHeading = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20.75px;
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    vertical-align: center;
`

export const ArrowWrapper = styled.div`
    width: 24px;
    height: 24px;


    img {
        width: 100%;
        height: 100%;
        
        ${props => props.$hidden && css`
            display: none;
        `}
    }
    
    ${props => props.$right && css`
        rotate: 90deg;
    `}
    
    ${props => props.$left && css`
        rotate: -90deg;
    `}
`