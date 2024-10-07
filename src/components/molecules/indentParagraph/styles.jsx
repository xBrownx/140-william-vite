import styled, { css } from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const Wrapper = styled.div`
    border-left: 1px solid #84936E;
    margin-top: ${SCREEN.height(28)};
    padding-left: ${SCREEN.width(32)};
    padding-bottom: ${SCREEN.height(32)};
    box-sizing: border-box;

    ${props => props.$displayEnd && css`
        margin: 0;
        display: flex;
        align-items: end;
        justify-content: end;
    `};

    ${props => props.$row && css`
        width: ${SCREEN.width(600)};
    `};


    ${props => props.$variant && css`
        padding: 0;
        border: none;
    `}

    ${MEDIA.md`
        margin-top: 0;
        padding-left: 16px;
        width: 100%;
        ${props => props.$noPStyle && css`
        padding: 0;
        border: none;
    `}
    `};
`
