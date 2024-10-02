import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${SCREEN.width(16)};

    ${MEDIA.md`
        gap: 16px;
        
        p {
            font-size: 14px;
            line-height: 27px;
            weight: 400;
        }
    `};
`