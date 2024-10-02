import styled, { css } from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';

export const StyledLink = styled.a`
    transition: all 1000ms ease-in-out;
    margin: 0;
    padding: 0;
    font-size: ${STYLE.fontSize(18)};
    font-family: 'SuisseIntl-Regular', serif;
    z-index: 1000;
    font-weight: 400;
    color: white;

    ${props => props.$underlined && css`
        opacity: 0.7;
        ${props => props.$active && css`
            border-bottom: 1px solid white;
            opacity: 1;
        `}
    `}
    ${props => props.$nav && css`
        position: relative;
        transition: none;
    `}
    &:hover {
        cursor: pointer;
        ${props => props.$underlined && css`
            color: white;
            opacity: 1;
        `}
        
    }

    height: fit-content;
`
