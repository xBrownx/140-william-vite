import styled, { css } from "styled-components";
import { screen as STYLE, media as MEDIA } from "../../../utils";

export const CustomSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    ${MEDIA.md`
        padding-top: 32px;
        height: auto;
        flex-direction: column;
        gap: 32px;
    `};
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;

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

export const CustomImageWrapper = styled.div`
    

     ${MEDIA.md`
        display: none;
    `};
`

export const CustomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 16px;
    box-sizing: border-box;

    ${MEDIA.md`
        display: none;
    `};
`

export const RightHandPane = styled.div`
    padding: 0 0 0 ${STYLE.width(48)};

    ${MEDIA.md`
        padding: 0;
        padding-inline: 16px;
    `};
`

export const ContentContainer = styled.div`
    border-left: 1px solid #84936E;
    padding: 0 0 0 ${STYLE.width(32)};

    ${MEDIA.md`
        padding-left: 16px;
    `};
`

export const StyledHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-weight: 300;
    font-size: ${STYLE.fontSize(64)};
    color: #fff;
    margin: 0;
    padding: 0;

    ${MEDIA.md`
        font-size: 36px;
        line-height: 43.2px;
    `};
`

export const StyledParagraph = styled.p`
    font-size: ${STYLE.fontSize(18)};
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 400;
    line-height: ${STYLE.height(27)};
    color: #fff;
    opacity: 0.7;
    margin: ${STYLE.height(32)} 0 0 0;
    padding: 0;

    ${MEDIA.md`
        font-size: 14px;
        line-height: 21px;
        margin-top: 16px;
    `};
`

export const SubheadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${STYLE.height(32)} 0 0 0;

    padding: ${STYLE.height(8)} 0;

    img {
        padding: 0;
        margin: 0 0 0 10px;
        height: ${STYLE.height(18)};
        width: ${STYLE.width(18)};
    }

    &:hover {
        cursor: pointer;
    }

    ${MEDIA.md`
        margin-top: 8px;
        
        img {
        padding: 0;
        margin: 0 0 0 10px;
        height: 24px;
        width: 24px;
    }
    `};
`

export const StyledSubheading = styled.h1`
    margin: 0 0 0 0;
    padding: 0;
    color: #5178E1;
    font-family: "SuisseIntl-Regular", serif;
    font-size: ${STYLE.fontSize(20)};
    text-decoration: underline;
    
    ${MEDIA.md`
        padding-top: 32px;
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
    `};
`

export const StyledUl = styled.ul`
    margin: ${STYLE.height(16)} 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: ${STYLE.height(26)};
    //margin: var(--height-32px) 0 0 0;

    ${MEDIA.md`
        gap: 16px;
        margin-top: 16px;;
    `};
`