import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const ThirdSpaceContainer = styled.div`
    width: 100%;
    position: relative;
`

export const CarouselWrapper = styled.div`
     padding-inline: ${SCREEN.width(64)};
    position: relative;
    width: ${SCREEN.width(1312)};
        height: ${SCREEN.height(737)};
    img {
        object-fit: cover;
        object-position: center center;
        
    }
`

export const ContentsContainer = styled.div`
    border-left: 1px solid #84936E;
    margin-left: ${SCREEN.width(64)};
`