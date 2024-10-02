import styled, {css} from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const StyledSubheading = styled.h1`
    font-family: 'SuisseIntl-Regular', serif;
    font-size: ${SCREEN.fontSize(16)};
    padding: 0;
    margin-top: ${SCREEN.height(8)};
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    color: #84936E;
    font-weight: 400;
    
    
    ${props => props.$variant && css`
        color: #164A49;
    `}

    ${MEDIA.md`
        font-size: 16px;
        line-height: 18.16px;
        weight: 700;
    `};
    
`