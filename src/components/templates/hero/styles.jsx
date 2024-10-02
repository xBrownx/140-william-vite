import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const Container = styled.div`
    padding-inline: ${SCREEN.width(160)};
    padding-block: ${SCREEN.height(90)};
    
    
    position: relative;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    

    ${MEDIA.md`
        padding-block: 32px;
        padding-inline: 16px;
        height: fit-content;
    `};
    
`