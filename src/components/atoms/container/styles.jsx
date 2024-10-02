import styled, { css } from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const StyledContainer = styled.div`
    position: relative;
    
    ${props => props.$fullscreen && css`
        width: 100vw;
        height: 100vh;
        min-width: 100vw;
        min-height: 100vh;
    `}

    ${props => props.$absolute && css`
        position: absolute;
    `};

    ${props => props.$width && css`
        width: ${STYLE.width(props.$width)};
    `};

    ${props => props.$widthPc && css`
        width: ${props.$widthPc}%;
    `};

    ${props => props.$height && css`
        height: ${STYLE.height(props.$height)};
    `};

    ${props => props.$centre && css`
        display: flex;
        align-items: center;
        justify-content: center;
    `};

    ${props => props.$positionTop && css`
        top: ${props.$positionTop};
    `};
    
    ${props => props.$right && css`
        right: ${props.$right}; 
    `};
    
    ${props => props.$bottom && css`
        bottom: ${props.$bottom};
    `};
    
    ${props => props.$positionLeft && css`
        left: ${props.$positionLeft};
    `};

    ${props => props.$paddingTop && css`
        padding-top: ${STYLE.height(props.$paddingTop)};
    `};

    ${props => props.$paddingRight && css`
        padding-right: ${STYLE.width(props.$paddingRight)};
    `};

    ${props => props.$paddingBottom && css`
        padding-bottom: ${STYLE.height(props.$paddingBottom)};
    `};

    ${props => props.$marginBottom && css`
        margin-bottom: ${STYLE.height(props.$marginBottom)};
    `};

    ${props => props.$paddingLeft && css`
        padding-left: ${STYLE.width(props.$paddingLeft)};
    `};

    ${props => props.$paddingInline && css`
        padding-inline: ${STYLE.width(props.$paddingInline)};
        ${MEDIA.md`
            padding-inline: ${props.$paddingInline}px;
        `}
    `};

    ${props => props.$paddingBlock && css`
        padding-block: ${STYLE.height(props.$paddingBlock)};
        ${MEDIA.md`
            padding-block: ${props.$paddingBlock}px;
        `}
    `};

    ${props => props.$imgCover && css`
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `};
    
    ${props => props.$fillSize && css`
        width: 100%;
        height: 100%;
    `}

    ${props => props.$fitContent && css`
        width: fit-content;
    `}

    ${props => props.$gridCentre && css`
        display: grid;
        place-items: center;
        margin-inline: auto;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        border-radius: 0.278vw;
    `}

    ${props => props.$flexColumn && css`
        display: flex;
        flex-direction: column;
    `}

    ${props => props.$alignCentre && css`
        align-items: center;
    `}

    ${props => props.$justifyEnd && css`
        display: flex;
        justify-content: end;
    `}
`
