import styled, { css } from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    transition: all 0.8s ease-in-out;
    
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

export const Wrapper = styled.div`
    position: relative;
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
`

export const StyledP = styled.p`
    font-size: ${SCREEN.fontSize(64)};
    ;
    color: #DED9D0;
    line-height: ${SCREEN.height(84.54)};
`