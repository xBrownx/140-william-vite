import styled, {css} from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../../utils/index.jsx'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    gap: 40px;
    height: ${SCREEN.height(300)};
    max-width: unset !important;
    ${MEDIA.md`
        height: 120px;
        overflow: hidden;
        gap: 16px;
    `};
`


export const ImgContainer = styled.div`
    height: 100%;
    object-fit: cover;
`

export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: auto;
    border-radius: 0.278vw;

    ${MEDIA.md`
        border-radius: 3px;
    `};
`
