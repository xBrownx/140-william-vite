import styled from "styled-components";

import { screen as SCREEN, media as MEDIA } from "../../../utils";

export const Container = styled.div`
    background: #DED9D0;
    height: ${SCREEN.height(500)};
    min-height: ${SCREEN.height(500)};
    padding-top: ${SCREEN.height(150)};
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;
    ${MEDIA.md`
        height: fit-content;
        min-height: fit-content;
        padding-block: 64px;
    `};
    
`

export const Heading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: ${SCREEN.fontSize(300)};
    line-height: ${SCREEN.height(300)};
    color: #84936E;
    font-weight: 300;
    opacity: 0.2;
    padding: 0;
    margin: 0;

    ${MEDIA.md`
        font-size: 96px;
        line-height: 96px;
        padding-block: 32px;
        height: fit-content;
    `};
`
