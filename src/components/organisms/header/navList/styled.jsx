import styled from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../../utils/index.jsx'

export const StyledUl = styled.ul`
    position: relative;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${STYLE.width(32)};
    
    ${MEDIA.md`
        display: none  
    `};
`

export const CustomLink = styled.span`
    display: inline-block;
    padding-bottom:2px;
    background-image: linear-gradient(#000 0 0, #FFF 0 0);
    background-position: left bottom; /*OR bottom left*/
    
    background-size: 0 2px;
    background-repeat: no-repeat;
    transition:
            background-size 0.5s,
            background-position 0s 0.5s; /*change after the size immediately*/
    
    &:hover {
        background-position: right bottom; /*OR bottom right*/
        background-size: 100% 2px;
    }
`