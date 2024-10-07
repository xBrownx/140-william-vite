import styled, { css } from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    transition: all 0.8s ease-in-out 2s;
    
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #162425;
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;

    ${props => props.$startTransition && css`
        transform: translateY(-100%);
    `};
`

export const ImageWrapper = styled.div`
    width: ${SCREEN.width(523)};
    height: ${SCREEN.height(109.5)};
    padding-inline: ${SCREEN.width(32)};
    transition: opacity 800ms ease;
    opacity: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${props => props.$startTransition && css`
        opacity: 1;
    `};
`

export const Wrapper = styled.div`
    position: absolute ;
    height: ${SCREEN.height(194)};
    width: ${SCREEN.width(523)};
    display: flex;
    flex-direction: column;
`

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ProgressBar = styled.progress`
    transition: all 0.1s;
    transition: opacity 800ms ease;
    width: ${SCREEN.width(523)};
    height: ${SCREEN.height(136)};
    padding-inline: ${SCREEN.width(32)};
    background: transparent;
    
    &::-webkit-progress-bar {
        background: transparent;
        border-radius: 0;
    }
    
    &::-webkit-progress-value {
        background-color: #DED9D0;
        transition: width 1s;
    }
    
    ${props => props.$startTransition && css`
        opacity: 0;
    `};
`

export const StyledP = styled.p`
    font-size: ${SCREEN.fontSize(64)};
    color: #DED9D0;
    line-height: ${SCREEN.height(84.54)};
    transition: opacity 800ms ease;
    ${props => props.$startTransition && css`
        opacity: 0;
    `};
`

export const StyledHeading = styled.h1`
    opacity: 0;
    transition: opacity 800ms ease 1s;
    ${props => props.$startTransition && css`
        opacity: 1;
    `};

    font-size: ${SCREEN.fontSize(64)};
    color: #DED9D0;
    line-height: ${SCREEN.height(84.54)};
`

