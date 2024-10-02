import styled from "styled-components";
import { screen as STYLE } from '../../../utils';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: ${STYLE.height(4)};
    padding-top: ${STYLE.height(32)};
    
    img {
        
        height: ${STYLE.height(25)};
        justify-content: start;
        align-items: start;
        object-fit: cover;
        padding: 0;
    }
`