import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const CustomSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding-inline: ${SCREEN.width(160)};
    padding-block: ${SCREEN.height(72)};
    
    ${MEDIA.md`
        flex-direction: column;
        padding-top: 64px;
        padding-inline: 16px;
        padding-bottom: 32px;
        gap: 32px;
    `};
`;

export const Pane = styled.div`
    flex: 1;
    align-items: center;
    box-sizing: border-box;
    ${MEDIA.md`
        flex: none;
        width: 100%;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

export const VideoContainer = styled.div`

    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: ${SCREEN.width(16)};
`