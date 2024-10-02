import styled, {css} from "styled-components";
import { screen as STYLE, media as MEDIA } from '../../../utils';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    
    ${props => props.$column && css`
        flex-direction: column;
    `}
    
    ${props => props.$padding && css`
        padding-inline: ${STYLE.width(160)};
        padding-block: ${STYLE.height(190)};
    `}
    
    ${MEDIA.md`
        height: auto;
    `};
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;

    ${MEDIA.md`
        flex: none;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`