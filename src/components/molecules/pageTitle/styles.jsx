import styled, { css } from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    width: fit-content;
    box-sizing: border-box;
    ${props=> props.$row && css`
        display: flex;
        flex-direction: row;
    `};
    
    ${props => props.$column && css`
        display: flex;
        flex-direction: column;
    `};
    
    ${props => props.$paddingInline && css`
        padding-inline: ${SCREEN.width(props.$paddingInline)};
    `};

    ${props => props.$paddingBlock && css`
        padding-block: ${SCREEN.height(props.$paddingBlock)};
    `};

    ${props => props.$paddingTop && css`
        padding-top: ${SCREEN.height(props.$paddingTop)};
        ${MEDIA.md`
            padding-top: ${props.$paddingTop}px;
        `}
    `};

    ${props => props.$paddingRight && css`
        padding-right: ${SCREEN.width(props.$paddingRight)};
        ${MEDIA.md`
            padding-right: ${props.$paddingRight}px;
        `}
    `};

    ${props => props.$paddingBottom && css`
        padding-bottom: ${SCREEN.height(props.$paddingBottom)};
        ${MEDIA.md`
            padding-bottom: ${props.$paddingBottom}px;
        `}
    `};

    ${props => props.$paddingLeft && css`
        padding-left: ${SCREEN.width(props.$paddingLeft)};
        ${MEDIA.md`
            padding-left: ${props.$paddingLeft}px;
        `}
    `};

    ${MEDIA.md`
           display: flex;
           flex-direction: column;
           width: 100%;
           gap: 16px;
           padding-inline: 16px;
    `};
`

export const Wrapper = styled.div`
    ${props=> props.$row && css`
        width: 75%;
        ${MEDIA.md`
           width: 100%;
           gap: 16px;
        `};
    `};
`