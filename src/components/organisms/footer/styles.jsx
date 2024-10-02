import styled, { css } from 'styled-components'
import { screen as STYLE } from '../../../utils'

export const Container = styled.div`
    position: relative;
    background-color: #162425;
    display: flex;
    width: 100%;
    align-items: end;
    padding-bottom: ${STYLE.height(32)};
    height: ${STYLE.height(128)};
    z-index: 0;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    padding-inline: ${STYLE.width(32)};
`

export const LeftDiv = styled.div`
    flex: 1;
`
export const CentreDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
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
    font-size: ${STYLE.fontSize(14)};
    font-family: 'SuisseIntl-Light', serif;
    font-weight: 700;
    color: #fff;
`
