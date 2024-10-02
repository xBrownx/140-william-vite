import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const CustomContainer = styled.div`
    box-sizing: border-box;
    ${MEDIA.md`
        padding-top: 64px;
    `};
`