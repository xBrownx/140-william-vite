import styled from "styled-components";
import { screen as STYLE, media as MEDIA } from "../../../utils";

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 16px;
    box-sizing: border-box;
`

export const RightHandPane = styled.div`
    padding: 0 0 0 ${STYLE.width(48)};
`

export const ContentContainer = styled.div`
    border-left: 1px solid #84936E;
    padding: 0 0 0 ${STYLE.width(32)};
`

export const StyledHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-weight: 300;
    font-size: ${STYLE.fontSize(64)};
    color: #fff;
    margin: 0;
    padding: 0;
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
`

export const StyledSubheading = styled.h1`
    margin: 0 0 0 0;
    padding: 0;
    color: #5178E1;
    font-family: "SuisseIntl-Bold", serif;
    font-size: ${STYLE.fontSize(20)};
`

export const StyledUl = styled.ul`
    margin: ${STYLE.height(16)} 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: ${STYLE.height(16)};
    //margin: var(--height-32px) 0 0 0;
`