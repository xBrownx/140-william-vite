import styled, { css } from 'styled-components'
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const StyledParagraph = styled.p`
    font-family: 'SuisseIntl-Regular', serif;
    font-size: ${STYLE.fontSize(18)};
    color: #164A49;
    opacity: 0.9;
    white-space: pre-wrap;
    box-sizing: border-box;
    
    ${props => props.$opacity && css`
        opacity: ${props.$opacity};
    `};
    
    ${props => props.$fontSize && css`
        font-size: ${STYLE.fontSize(props.$fontSize)};
    `};

    ${props => props.$lineHeight && css`
        line-height: ${STYLE.height(props.$lineHeight)};
    `};
    
    ${props => props.$weight && css`
        font-weight: ${props.$weight};
    `};
    
    ${props => props.$light && css`
        font-family: 'SuisseIntl-Light', serif;
    `};

    ${props => props.$secondary && css`
        color: #FFF;
        opacity: 1;
    `};

    ${props => props.$variant && css`
        color: #162425;
        font-weight: 400;
        opacity: 1;
    `};

    ${MEDIA.md`
        font-size: 14px;
        line-height: 21px;
        opacity: 0.7;
        white-space: wrap;
        padding: 0;
        font-weight: 400;
        
    `};
    
`

