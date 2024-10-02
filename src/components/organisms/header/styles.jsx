import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    height: ${SCREEN.height(90)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: ${SCREEN.width(32)};
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;

    ${MEDIA.md`
        height: 70px;
        padding-inline: 16px; 
        box-sizing: border-box;
    `};
`

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    width: 100%;
    
    img {
        min-height: 2.099vh;
        min-width: 19.097vw;

        ${MEDIA.md`
            width: 190px;
            height: 11px;
        `};
        
        &:hover {
            cursor: pointer;
        }
    }
    text-transform: uppercase;

    ${MEDIA.md`
        align-items: end;
        justify-content: end;
        box-sizing: border-box;
    `}
`

export const IconWrapper = styled.div`
    display: none;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    
    ${MEDIA.md`
        display: flex;
    `}
    
    img {
        width: 100%;
        height: 100%;
    }
`

export const MobileMenuContainer = styled.div`
    transition: all 200ms ease-out;
    background: #162425;
    width: 100%;
    
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 0;
    
    ${props => props.$visible && css`
        height: 100%;
    `};
    overflow: hidden;
`

export const CustomColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top: 16px;
    padding-inline: 16px;
    gap: 72px;
`

export const CustomRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

export const MobileUl = styled.ul`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    gap: 16px;
    padding-bottom: 32px;
`

export const CustomHeading = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 36px;
    line-height: 47.56px;
    font-family: 'TWKEverett-Light', serif;
    
    ${props => props.$variant && css`
        padding-top: 168px;
        color: #5178E1;
    `};
`