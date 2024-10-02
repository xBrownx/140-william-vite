import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: ${SCREEN.fontSize(64)};
    margin: 0;
    padding: 0;
    font-weight: 300;
    color: #164A49;
    box-sizing: border-box;
    
    ${props => props.$secondary && css`
        color: #FFF;
    `};
    
    ${props => props.$variant && css`
        color: #162425;

        font-size: ${SCREEN.fontSize(88)};
    `}

    ${MEDIA.md`
        font-size: 36px;
        line-height: 43.2px;
    `};
`
