import styled, {css} from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';
import { SCREEN } from "../../../utils/screen.jsx";

const squareTwo = (px) => {
    const width = (px / SCREEN.width) * 100;
    const height = (px / SCREEN.height) * 100;
    const sq = Math.min(width, height);

    return css`
        height: ${sq}vw;
        min-width: ${sq}vw;
        padding-bottom: ${sq}vw;
    `;
}

export const Container = styled.div`
    box-sizing: border-box;
    z-index: 2;
    will-change: all;
    transition: all 450ms;
    width: fit-content;
    ${props => props.$isHover && props.$active && css`
        cursor: pointer;
    `};
    
`
export const Wrapper = styled.div`
    box-sizing: border-box;
    transition: all 200ms ease;
    
    ${squareTwo(30)};
    font-size: ${STYLE.fontSize(14)};
    font-family: 'SuisseIntl-Light', serif;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: rgba(0,0,0,0.15);
    padding-top: ${STYLE.height(5)} 0 0 0;
    border-radius: 5px;
    
    
    ${props => props.$active && css`
        font-weight: 700;
        background: #164A49;
    `}
    
    span {
        padding-top: 100%;
    }
    
    
    
`