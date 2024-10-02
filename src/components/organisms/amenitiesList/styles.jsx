import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: ${SCREEN.height(32)};
    padding-left: ${SCREEN.width(32)};
    gap: ${SCREEN.height(16)};
    justify-content: space-between;
    list-style: none;
    border-left: 1px solid #84936E;
    box-sizing: border-box;
    ${MEDIA.md`
        margin-top: 16px;
        padding-left: 32px;
        gap: 8px;
    `};
    
`

export const StyledLi = styled.li`
    padding-bottom: ${SCREEN.height(32)};
    box-sizing: border-box;
    p, img {
        opacity: 1;
    }

    ${MEDIA.md`
        padding: 0;
        height: 48px;
    `};
`