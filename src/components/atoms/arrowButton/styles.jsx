import styled, {css} from "styled-components";
import { screen as SCREEN, media as MEDIA } from "../../../utils";


export const StyledButton = styled.button`
    font-size: ${SCREEN.fontSize(18)};
    font-family: 'SuisseIntl-Regular', serif;
    border-radius: 0.278vw;
    margin: 0;
    padding: 0;
    display: flex;
    background: transparent;
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 100%;
    border: unset;
    
    ${props => props.$secondary && css`
        color: white;
        border-color: white;
    `};
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    }
    
    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
    
    img {
        width: 100%;
        height: 100%;
       
    }
    
     ${props => props.$rotate && css`
         transform: rotate(180deg);
     `}
    
`

export const Wrapper = styled.div`
    z-index: 1;
    border-radius: 0.278vw;
    margin: 0;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    overflow: hidden;
    position: relative;
    height: 0;
    min-width: ${SCREEN.width(64)};
    padding-bottom: ${SCREEN.width(64)};

    ${MEDIA.md`
        width: 64px;
        height: 64px;
        border-radius: 3px;
        padding-bottom: 0;
    `};
    
`

