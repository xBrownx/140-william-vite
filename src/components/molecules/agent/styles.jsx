import styled from "styled-components";
import { screen as SCREEN, media as MEDIA } from "../../../utils";

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: ${SCREEN.width(8)};

    ${MEDIA.md`
        gap: 8px;
    `};
`


export const Name = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'TWKEverett-Regular', serif;
    color: white;
    font-weight: 400;

    ${MEDIA.md`
            font-size: 14px;
            line-height: 18.16px;
            font-weight: 700;
        `};
`

export const Phone = styled.p`
    margin: 0;
    padding-top: ${SCREEN.height(8)};
    font-size: ${SCREEN.fontSize(14)};
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 400;
    color: white;
    opacity: 0.7;

    ${MEDIA.md`
            font-size: 12px;
            line-height: 15.56px;
            font-weight: 400;
        `};
`

export const CustomImageContainer = styled.div`
    width: ${SCREEN.width(80)};
    height: ${SCREEN.width(80)};
    
    ${MEDIA.md`
        width: 64px !important;
        max-width: 64px;
        min-width: 64px;
        
        height: 64px !important;
        max-height: 64px;
        min-height: 64px;
    `};
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
