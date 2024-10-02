import styled from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';

export const StyledInput = styled.input`
    width: 100%;
    height: ${STYLE.height(51)};
    font-size: ${STYLE.fontSize(18)};
    font-family: 'SuisseIntl-Light', serif;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 0 0 0 20px;
    
    &::placeholder {
        color: white;
    }
    
`