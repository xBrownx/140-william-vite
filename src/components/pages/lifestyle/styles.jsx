import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: ${SCREEN.height(32)};
    padding-block: ${SCREEN.height(192)};
    box-sizing: border-box;
    ${MEDIA.md`
        padding-block: 64px;
    `};
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding-inline: ${SCREEN.width(160)};
    box-sizing: border-box;
    ${MEDIA.md`
        padding-inline: 16px;
        gap: ${SCREEN.height(8)};
    `};
`

export const CarouselContainer = styled.div`
    box-sizing: border-box;
    ${MEDIA.md`
        height: 120px;
        overflow: hidden;
    `};
`