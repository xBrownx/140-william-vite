import styled, {css} from 'styled-components'
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const StyledPage = styled.section`
    background-color: #DED9D0;
    display: flex;
    flex-direction: column;
    position: relative;
    
    min-width: 100vw;
    overflow: hidden;
    height: 100%;
    width: 100vw;
    box-sizing: border-box;
    
    ${props => props.$fullscreen && css`
        min-height: 100vh;
        height: 100vh;
    `};
    
    ${props => props.$minHeight && css`
        min-height: ${SCREEN.height(props.$minHeight)};
    `};
    
    ${props => props.$height && css`
        height: ${SCREEN.height(props.$height)};
    `};
    
    ${props => props.$bgPrimary && css`
        background-color: #DED9D0;
    `};

    ${props => props.$bgSecondary && css`
        background-color: #162425;
    `};

    ${props => props.$bgvariant && css`
        background-color: #164A49;
        opacity: 0.3;
    `};

    ${props => props.$xStart && css`
        justify-content: start;
    `};
    
    ${props => props.$xCentre && css`
        justify-content: center;
    `};
    
    ${props => props.$xEnd && css`
        justify-content: end;
    `};

    ${props => props.$yStart && css`
        align-items: start;
    `};
    
    ${props => props.$yCentre && css`
        align-items: center;
    `};
    
    ${props => props.$yEnd && css`
        align-items: end;
    `};
    
    ${props => props.$paddingInline && css`
        padding-inline: ${SCREEN.width(props.$paddingInline)};
    `};
    
    ${props => props.$paddingBlock && css`
        padding-block: ${SCREEN.height(props.$paddingBlock)};
        ${MEDIA.md`
            padding-block: ${props.$paddingBlock}px;
        `};
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${SCREEN.height(props.$paddingTop)};
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${SCREEN.width(props.$paddingRight)};
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${SCREEN.height(props.$paddingBottom)};
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${SCREEN.width(props.$paddingLeft)};
    `};
    
    
    ${props => props.$fitContent && css`
        max-height: unset;
    `};

    ${MEDIA.md`
        width: 100%;
        min-height: fit-content;
        height: 100%;
        x-overflow: scroll;
    `};
    
`

