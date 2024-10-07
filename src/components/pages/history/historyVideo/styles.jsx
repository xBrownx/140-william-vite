import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../../utils';

export const CustomContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    margin-inline: auto;
    overflow: hidden;
    width: 100%;
    height: ${SCREEN.height(630)}; 
    padding-inline: ${SCREEN.width(160)};
    padding-block: ${SCREEN.height(32)};
    border-radius: 15px;
    ${MEDIA.md`
        height: 240px;
        padding-inline: 16px;
        padding-top: 32px;
        padding-bottom: 0;
        border-radius: 5px;
    `};

    img {
        border-radius: 15px;
        background-color: transparent;
    }
    
    video {
        border-radius: 15px;
        background-color: transparent;
    }
    
    video-js {
        border-radius: 15px;
        background-color: transparent;
    }
`

export const ButtonWrapper = styled.div`
    position: relative;
    transition: opacity 200ms ease-in-out;
    grid-row: 1;
    grid-column: 1;
    opacity: ${props => props.$isVisible ? 1 : 0};

    &:hover {
        cursor: pointer;
        ${props => props.$isPlaying && css`
            opacity: 1;
        `
        }
`

