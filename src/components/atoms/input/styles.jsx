import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledInput = styled.input`
    width: 100%;
    height: ${SCREEN.height(51)};
    font-size: ${SCREEN.fontSize(18)};
    font-family: 'SuisseIntl-Light', serif;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 0 0 0 20px;
    
    &::placeholder {
        color: white;
    }

    opacity: 0.7;
    ${MEDIA.md`
        height: 50px;
        font-size: 14px;
        line-height: 18.86px;
    `};
    
`