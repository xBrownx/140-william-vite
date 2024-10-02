import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA} from '../../../utils'

export const Container = styled.div`
    z-index: 1;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    
`

export const Wrapper = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;
    bottom: 32px;
    left: 0;
    box-sizing: border-box;
    gap: ${SCREEN.height(32)};
    padding-inline: ${SCREEN.width(32)};
    padding-bottom: ${SCREEN.height(41)};
    
    ${MEDIA.md`
        gap: 0;
        padding: 0 0 160px 0;
        margin: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding-inline: 16px;
        justify-content: end;
        bottom: 0;
        opacity: 1;
    `};
`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(75%);
`

export const StyledHeading = styled.h1`
    z-index: 2;
    font-size: ${SCREEN.fontSize(138)};
    font-family: 'TWKEverett-Light', serif;
    color: #D9D9D9;
    line-height: ${SCREEN.height(128)};
    font-weight: 300;
    opacity: 0.7;
    ${props => props.$justify && css`
        display: flex;
        justify-content: ${props.$justify};
    `};
    
    
    ${MEDIA.md`
        font-size: 48px !important;
        line-height: 48px !important; 
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0;
        opacity: 1;
    `};
`