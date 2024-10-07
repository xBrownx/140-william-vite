import styled from "styled-components";
import { media as MEDIA } from "../../../../utils/index.jsx";

export const Container = styled.div`
    border-radius: 15px;;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    ${MEDIA.md`
        height: 240px;
        border-radius: 6px;
    `};
`
