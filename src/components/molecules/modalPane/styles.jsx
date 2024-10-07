import styled, {css} from "styled-components";
import { screen as STYLE } from '../../../utils'


export const BackgroundOverlay = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 1000;
    display: none;
    ${props => props.$open && css`
        display: block;
    `};
`

export const ModalWindow = styled.div`
    
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: ${STYLE.width(1000)};
    height: ${STYLE.height(562.5)};
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    transition: all 500ms ease-in-out;
    
    
    background: rgba(22, 74, 73, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);

    opacity: 0;
    
    ${props => props.$open && css`
        opacity: 1;
        pointer-events: visible;
    `};
`

export const CloseButtonWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2.963vh 1.667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }

    p {
        box-sizing: border-box;
        font-family: 'SuisseIntl-Light', serif;
        font-size: ${STYLE.fontSize(14)};
        color: #FFF;
        white-space: pre-wrap;
        font-weight: 400;
    }
    
    
`