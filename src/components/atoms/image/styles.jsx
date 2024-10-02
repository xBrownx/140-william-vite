import styled, { css } from 'styled-components';
import { screen as STYLE, media as MEDIA } from '../../../utils';

export const Container = styled.div`
    z-index: 1;
    width: ${props => STYLE.width(props.$width)};
    height: ${props => STYLE.height(props.$height)};
    
    ${props => props.$paddingTop && css`
        padding-top: ${STYLE.height(props.$paddingTop)};
    `}
    
    ${props => props.$displayBlock && css`
        display: block;
    `}
    
    ${MEDIA.md`
        width: ${props => props.$width}px;
        height: auto;
    `}
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${MEDIA.md`
        
    `}
`
