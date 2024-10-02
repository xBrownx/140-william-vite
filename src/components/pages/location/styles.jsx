import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: ${SCREEN.height(32)};
    padding-top: ${SCREEN.height(192)};
    box-sizing: border-box;
    ${MEDIA.md`
        padding-block: 64px;
        width: 100%;
        padding-bottom: 0;
    `};
`;