import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const CarouselContainer = styled.div`
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    ${MEDIA.md`
        height: 100%;
        min-width: fit-content;
        overflow: auto;
    `};
`

export const CarouselSlide = styled.div`
    box-sizing: border-box;
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: fit-content;
    transition-property: opacity;
    opacity: 0;
    transition-timing-function: ease-in;
    transition-duration: 700ms;
    
    ${props => props.$isActive && css`
        opacity: 1;
        transition-timing-function: ease-out;
    `};
    
    ${MEDIA.md`
        box-sizing: unset;
        height: 100%;
        min-width: fit-content;
        overflow: scroll;
    `};
`

export const ImgContainer = styled.div`
    border-radius: 0.278vw;
    align-items: end;
    box-sizing: border-box;
    ${MEDIA.md`
        height: 100%;
        
        min-width: 100vw;
        overflow: scroll;
    `};
`

export const CustomImage = styled.img`
    box-sizing: border-box;
    border-radius: 0.278vw;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${MEDIA.md`
        min-height: 100%;
        width: auto;
        overflow: auto;
        object-fit: contain !important;
    `};
    
`

