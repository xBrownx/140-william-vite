import styled, { css } from 'styled-components'
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    transition: all 200ms ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    
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
    
    ${props => props.$pointer && css`
        &:hover {
            cursor: pointer;
        }
    `};
    
    ${props => props.$fitContent && css`
        width: fit-content;
        height: fit-content;
    `};
    
    ${props => props.$fitHeight && css`
        height: fit-content;
    `};
    
    ${props => props.$justifyEnd && css`
        justify-content: end;
    `};
    
    ${props => props.$justifyStart && css`
        justify-content: start;
    `};
    
    ${props => props.$alignEnd && css`
        align-items: end;
    `};
    
    ${props => props.$alignStart && css`
        align-items: start;
    `};
    
    ${props => props.$spaceBetween && css`
        justify-content: space-between;
    `};
    
    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    ${props => props.$mobileFlip && css`
        ${MEDIA.md`
            flex-direction: column;
        `}
    `}
`