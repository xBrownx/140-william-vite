import styled from "styled-components";

import { screen as STYLE, media as MEDIA } from "../../../utils";

export const Container = styled.div`
    background: #DED9D0;
    height: ${STYLE.height(500)};
    min-height: ${STYLE.height(500)};
    padding-top: ${STYLE.height(150)};
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;
`

export const Heading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: ${STYLE.fontSize(300)};
    line-height: ${STYLE.height(300)};
    color: #84936E;
    font-weight: 300;
    opacity: 0.2;
    padding: 0;
    margin: 0;
`
