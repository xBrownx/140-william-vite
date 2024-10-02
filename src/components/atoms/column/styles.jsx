import styled, { css } from 'styled-components'
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 2;
    
    ${props => props.$relative && css`
        position: relative;
    `};
    
    ${props => props.$width && css`
        width: ${STYLE.width(props.$width)};
        ${MEDIA.md`
            width: 100%;
        `}
    `};
    
    ${props => props.$widthPerCent && css`
        width: ${props.$widthPerCent}%;
    `};
    
    ${props => props.$height && css`
        height: ${STYLE.height(props.$height)};
        
        ${MEDIA.md`
            height: 100%;
            overflow: visible;
        `}
    `};
    
    ${props => props.$heightPerCent && css`
        height: ${props.$heightPerCent}%;
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
    
    ${props => props.$paddingTop && css`
        padding-top: ${STYLE.height(props.$paddingTop)};
        ${MEDIA.md`
            padding-top: ${props.$paddingTop}px;
        `}
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${STYLE.width(props.$paddingRight)};
        ${MEDIA.md`
            padding-right: ${props.$paddingRight}px;
        `}
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${STYLE.height(props.$paddingBottom)};
        ${MEDIA.md`
            padding-bottom: ${props.$paddingBottom}px;
        `}
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${STYLE.width(props.$paddingLeft)};
        ${MEDIA.md`
            padding-left: ${props.$paddingLeft}px;
        `}
    `};
    
    ${props => props.$gap && css`
        gap: ${STYLE.height(props.$gap)};
        ${MEDIA.md`
            gap: ${props.$gap}px;
        `}
    `};
    
    ${props => props.$yCentre && css`
        margin-block: auto;
        justify-content: center;
    `};
    
    ${props => props.$centreX && css`
        align-items: center;
    `};
    
    ${props => props.$justifyEnd && css`
        align-items: end;
    `};

    ${props => props.$fitContent && css`
        width: fit-content;
    `}

    ${props => props.$fillParent && css`
        height: 100%;
    `}
    
    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    
`