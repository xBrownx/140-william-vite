import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
`

export const ArrowContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${SCREEN.width(32)};
    padding-bottom: ${SCREEN.height(41)};

    ${MEDIA.md`
        width: 64px;
        height: 64px;
        right: unset;
        bottom: 32px;
    `};
`