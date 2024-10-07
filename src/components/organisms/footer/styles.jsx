import styled, { css } from 'styled-components'
import { screen as SCREEN, media as MEDIA } from '../../../utils'

export const Container = styled.div`
    position: relative;
    background-color: #162425;
    display: flex;
    width: 100%;
    align-items: end;
    padding-bottom: ${SCREEN.height(32)};
    height: ${SCREEN.height(128)};
    z-index: 0;

    ${MEDIA.md`
        flex-direction: column;
        height: fit-content;
        align-items: center;
        padding: 0;
        z-index: 1;
    `};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    padding-inline: ${SCREEN.width(32)};
`

export const LeftDiv = styled.div`
    flex: 1;
`
export const CentreDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    width: 33vw;
    height: 100px;
    svg {
        width: 100%;
    }
`
export const RightDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;
    img {
        display: flex;
        height: 150px;
        justify-content: end;
        align-items: end;
        transform: translateY(50px)
    }
`

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    font-size: ${SCREEN.fontSize(14)};
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 700;
    color: #fff;

    ${MEDIA.md`
        font-size: 14px;
        line-height: 27px;
        padding-bottom: 16px;
    `};
`

export const MobileWrapper = styled.div`
    display: flex;
    padding-top: 144px;
    flex-direction: column;
    align-items: center;
`

export const CustomImage = styled.img`
    width: 150px;
    height: auto;
`
