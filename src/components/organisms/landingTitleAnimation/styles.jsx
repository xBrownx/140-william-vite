import styled, {css} from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;
    bottom: 32px;
    left: 0;
    
    gap: ${STYLE.height(32)};
    padding-inline: ${STYLE.width(32)};
    padding-bottom: ${STYLE.height(41)};
    
    ${props => props.$clone && css`
        z-index: 0;
        opacity: 1 !important;
        h1 {
            color: #162425 !important;
            opacity: 1 !important;
        }
    `}
`

export const StyledHeading = styled.h1`
    z-index: 2;
    font-size: ${STYLE.fontSize(138)};
    font-family: 'TWKEverett-Light', serif;
    color: #D9D9D9;
    line-height: ${STYLE.height(128)};
    font-weight: 300;
    opacity: 0.7;
    justify-content: end;
    ${props => props.$justify && css`
        display: flex;
        justify-content: ${props.$justify};
    `}
    
    ${props => props.$clone && css`
        z-index: 3;
        color: black !important;
        opacity: 1 !important;
    `}
`





//@media only screen and (max-width: 750px) {
//         gap: 0;
//         margin: 0 0 160px 0;
//         width: 100vw;
//         min-width: 100vw;
//         min-height: 0;
//     }