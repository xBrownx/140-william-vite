import styled from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';

export const StyledTextArea = styled.textarea`
    height: ${STYLE.height(109)};
    font-size: ${STYLE.fontSize(18)};
    font-family: 'SuisseIntl-Light', serif;
    width: 100%;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 15px 0 0 20px;
    
    resize: none;
    
    &::placeholder {
        color: white;
    }
    
`