import styled, { css } from "styled-components";
import { screen as SCREEN } from '../../../../utils/index.jsx'

export const Title = styled.h1`
    box-sizing: border-box;
    font-family: 'TWKEverett-Light', serif;
    font-size: ${SCREEN.fontSize(48)};
    line-height: ${SCREEN.height(57.6)};
    color: #FFF;
    font-weight: 300;
`

export const NavWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: ${SCREEN.width(96)};
`

export const DetailsWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: ${SCREEN.width(16)};
    border-left: 1px solid white;
    height: fit-content;
    padding-bottom: 8px;
`

export const StyledUl = styled.ul`
    list-style: none;
    box-sizing: border-box;
`

export const StyledLi = styled.li`
    box-sizing: border-box;
    width: ${SCREEN.width(249)};
    display: flex;
    flex-direction: row;
    gap: ${SCREEN.width(16)};
`

export const LabelWrapper = styled.div`
    box-sizing: border-box;
    width: ${SCREEN.width(150)};
`

export const ValueWrapper = styled.div`
    box-sizing: border-box;
    width: ${SCREEN.width(67)};
`

export const VectorWrapper = styled.div`
    box-sizing: border-box;
    width: ${SCREEN.width(307)};
    height: ${SCREEN.height(390.5)};
    margin-top: ${SCREEN.height( 64)};
    
    display: flex;
    align-items: center;

    img {
        box-sizing: border-box;
        width: ${SCREEN.width(307)};
    }
`

export const CustomButton = styled.button`
    box-sizing: border-box;
    font-size: ${SCREEN.fontSize(16)};
    font-family: 'SuisseIntl-Light', serif;
    border-radius: 15px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    color: white;
    border-color: white;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: 100%;
    gap: ${SCREEN.width(8)};
    z-index: 1;
        
    &:hover {
        cursor: pointer;
        color: #FFF;
    }

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
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
    
    img {
        box-sizing: border-box;
        height: ${SCREEN.height(24)};
    }

`

export const CarouselWrapper = styled.div`
    width: ${SCREEN.width(532)} !important;
    height: ${SCREEN.height(299)};
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    position:  relative;
    
    .sc-cJjvBx {
        width: 100%;
        height: 100%;
    }
    
    
`