import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const CarouselContainer = styled.div`
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    background-color: white;
    ${MEDIA.md`
        height: 100%;
        min-width: fit-content;
        width: 100%;
        overflow: auto;
            background-color: unset;
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
    border-radius: 15px;
    align-items: end;
    box-sizing: border-box;
    height: 100%;
    ${MEDIA.md`

        min-width: 100vw;
    `};
`

export const CustomImage = styled.img`
    box-sizing: border-box;
    //border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    ${MEDIA.md`
        min-height: 100%;
        object-fit: contain !important;
    `};
    
`

