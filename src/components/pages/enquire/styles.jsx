import styled, { css } from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const CustomContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: ${SCREEN.height(70)};
    margin-bottom: ${SCREEN.height(140)};
    box-sizing: border-box;
    overflow: hidden;
    align-items: center;
    
    ${MEDIA.md`
        padding-block: 64px;
        padding-inline: 16px;
        margin-bottom: 0;
    `};
`

export const CustomHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: ${SCREEN.fontSize(54)};
    padding: 0;
    margin: 0;
    font-weight: 300;
    color: #FFF;
    
    ${MEDIA.md`
        font-size: 36px;
        line-height: 43.2px;
        width: 100%;
    `};
`

export const CustomColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: ${SCREEN.height(32)};
    
    ${MEDIA.md`
        gap: 32px;
    `};
    
`