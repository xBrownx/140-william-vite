import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../../utils/index.jsx';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: ${SCREEN.height(4)};
    padding-top: ${SCREEN.height(32)};
    
    img {
        justify-content: start;
        align-items: start;
        object-fit: cover;
        padding: 0;
    }
    
    ${MEDIA.md`
        padding-top: 16px;;
    `};
`