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
    border-left: 1px solid #162425;
    padding-left: ${SCREEN.width(64)};
    margin-top: ${SCREEN.height(28)};
`

export const Wrapper = styled.div`
    width: fit-content;
    box-sizing: border-box;
    
    ${props => props.$paddingLeft && css`
        padding-left: ${SCREEN.width(props.$paddingLeft)};
        ${MEDIA.md`
            padding-left: ${props.$paddingLeft}px;
        `}
    `};
    ${props => props.$paddingTop && css`
        padding-top: ${SCREEN.height(props.$paddingTop)};
        ${MEDIA.md`
            padding-top: ${props.$paddingTop}px;
        `}
    `};
    
`