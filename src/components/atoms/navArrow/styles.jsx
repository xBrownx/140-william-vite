import styled, { css } from "styled-components";
import { screen as STYLE } from '../../../utils'

export const Wrapper = styled.div`
    width: ${STYLE.width(24)};
    height: ${STYLE.height(24)};
    margin-bottom: ${STYLE.height(8)};
    
    ${props => props.$flipped && css`
        rotate: 180deg;
        margin-top: ${STYLE.height(8)};
        margin-bottom: 0;
    `}
    
    img {
        width: 100%;
        height: 100%;

        &:hover {
            cursor: pointer;
        }
    }
`