import styled from "styled-components";
import { screen as STYLE, media as MEDIAST } from "../../../utils";

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: ${STYLE.width(8)};
`

export const TxtWrapper = styled.div`

`

const AgentDetails = styled.div`
    
    p {
        font-size: ${STYLE.fontSize(14)};
        margin: 0;
        padding: ${STYLE.height(14)} 0 0 0;
        color: white;
        opacity: 0.7;
        line-height: ${STYLE.height(14)};
        font-weight: 400;
        font-family: 'SuisseIntl-Light', serif;
    }
`

export const Name = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'TWKEverett-Regular', serif;
    color: white;
    font-weight: 400;
`

export const Phone = styled.p`
    margin: 0;
    padding-top: ${STYLE.height(8)};
    font-size: ${STYLE.fontSize(14)};
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 400;
    color: white;
    opacity: 0.7;
`

export const Email = styled.p``

export const StyledImg = styled.img`
    width: ${STYLE.width(80)};
    height: ${STYLE.width(80)};
`
