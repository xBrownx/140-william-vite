import styled, {css} from "styled-components";
import { screen as STYLE } from '../../../utils'
export const Container = styled.div`
    width: fit-content;
    height: ${STYLE.height(432)};
`

export const Button = styled.div`
    
    justify-content: center;
    align-items: center;
    border-radius: 0.278vw;
    padding: 0;
    margin: 0;
    width: ${STYLE.width(64)};
    height: ${STYLE.height(64)};
    visibility: hidden;
    display: none;
    border: 1px solid white;
    
    ${props => props.$active && css`
        background-color: #164A49;
        border: 1px solid #164A49;
    `}
    
    ${props => props.$visible && css`
        visibility: unset;
        display: flex;
        flex-direction: column;
    `}
    
    p {
        font-family: 'SuisseIntl-Light', serif;
        font-size: ${STYLE.fontSize(16)};
        color: white;
        font-weight: 700;
        ${props => props.$active && css`
            color: white;
        `}
    }
`