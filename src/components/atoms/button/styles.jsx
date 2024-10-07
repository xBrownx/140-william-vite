import styled, {css} from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';


export const StyledButton = styled.button`

    font-size: ${STYLE.fontSize(18)};
    font-family: 'SuisseIntl-Regular', serif;
    border-radius: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #164A49;
    
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #164A49;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;

    ${props => props.$width && css`
        width: ${STYLE.width(props.$width)};
        margin: 0;
        padding: 0;
    `};

    ${props => props.$height && css`
        height: ${STYLE.height(props.$height)};
    `};

    ${props => props.$fontSize && css`
        font-size: ${STYLE.fontSize(props.$fontSize)};
    `};
    
    ${props => props.$secondary && css`
        color: white;
        border-color: white;
    `};
    
    ${props => props.$variantOne && css`
        color: black;
        border-color: white;
        background-color: white;
        transition: all 200ms ease-in-out;
    `};

    ${props => props.$gap && css`
        gap: ${STYLE.width(props.gap)};
    `};
    
    ${props => props.$fillParent && css`
        width: 100%;
    `};
    
    ${props => props.$square && css`
        width: 150px;
        height: 150px;
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
        padding: 0.5em 1.5em;
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

    ${props => props.$variant && css`
        &::after,  &:hover::after {
            all: unset;
        }
        
        &:hover {
            cursor: pointer;
            color: black;
        }

        padding: 0;
        margin: 0;
        width: 100%;
        height: ${STYLE.height(51)};
        color: #162425;
        
        background: white;

    `}

`

