import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const StyledSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-inline: ${SCREEN.width(160)};
    padding-block: ${SCREEN.height(72)};
    box-sizing: border-box;
    ${MEDIA.md`
        height: auto;
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

export const ImgWrapper = styled.div`

    width: ${SCREEN.width(470)};
    min-width: ${SCREEN.width(470)};
    height: ${SCREEN.height(666)};
    min-height: ${SCREEN.height(666)};
    border-radius: 15px;
    img {
        border-radius: 15px;
    }

    ${MEDIA.md`
        width: 100%;
        min-height: unset;
        height: 100%;
    `};
`

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-inline: ${SCREEN.width(16)};
    gap: ${SCREEN.height(32)};

    ${MEDIA.md`
        gap: 32px;
        padding-inline: 0;
    `};
`

export const CustomButton = styled.button`

    font-size: ${SCREEN.fontSize(18)};
    font-family: 'SuisseIntl-Regular', serif;
    border-radius: 15px;
    color: #164A49;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #164A49;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;

    ${MEDIA.md`
        height: 34px;
        font-size: 14px;
        line-height: 18.16px;
        padding-inline: 16px;
        padding-block: 8px;
        font-weight: 400;
    `};
    
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    };

    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    };

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    };
`

export const CustomSubheading = styled.h2`
    font-family: 'SuisseIntl-Regular', serif;
    color: #164A49;
    font-size: ${SCREEN.fontSize(16)};
    padding: 0;
    margin: 0;
    
    font-weight: 400;

    ${MEDIA.md`
        font-size: 16px;
        line-height: 18.16px;
        weight: 700;
        font-family: 'SuisseIntl-Bold', serif;
    `};
`

export const CustomParagraph = styled.p`
    font-family: 'SuisseIntl-Regular', serif;
    font-size: ${SCREEN.fontSize(36)};
    font-weight: 300;
    color: #164A49; 
    opacity: 0.7;

    ${MEDIA.md`
        font-size: 24px;
        line-height: 28.8px;
        white-space: wrap;
        padding: 0;
    `};
    
    
`