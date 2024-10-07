import styled from "styled-components";
import { media as MEDIA } from "../../../utils/index.jsx";

export const Container = styled.div`
    position: relative;
    background-image: url(${props => props.$src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    max-width: 100vw;
    overflow: hidden;
    height: 0;
    padding-top: 143.88%;
    
    ${MEDIA.md`
        width: 100%;
        padding-top: 225.45%;
    `};
    
`

export const InnerContainer = styled.div`
    position: absolute;
    top:0; 
    bottom:0; 
    left:0; 
    right:0;
    
`