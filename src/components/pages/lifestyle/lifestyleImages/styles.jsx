import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../../utils/index.jsx'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    gap: 40px;
    height: ${SCREEN.height(350)};
    max-width: unset !important;
    ${MEDIA.md`
        height: 120px;
        overflow: hidden;
        gap: 16px;
    `};
`


export const ImgContainer = styled.div`
    height: 70%;
    padding: 0;
    margin: 0;
    width: auto;
    object-fit: cover;
`

export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    border-radius: 15px;

    ${MEDIA.md`
        border-radius: 3px;
    `};
`
