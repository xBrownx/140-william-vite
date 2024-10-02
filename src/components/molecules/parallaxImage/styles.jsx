import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { screen as STYLE, media as MEDIA } from '../../../utils'

export const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 0.278vw;
    ${MEDIA.md`
        height: fit-content;
        align-items: start;
        border-radius: 3px;
    `};
`

export const StyledImg = styled(motion.img)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 0.278vw;
    ${props => props.width && css`
        min-width: ${STYLE.width(props.width)};
    `};
    
    ${props => props.height && css`
        min-height: ${STYLE.height(props.height)};
    `};

    

    ${MEDIA.md`
        box-sizing: border-box;
        object-fit: contain;
        height: fit-content;
        min-height: unset;
        border-radius: 3px;
    `};    
`
