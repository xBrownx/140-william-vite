import styled, {css} from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    gap: 0.12%;
    padding: 35.55% 0 0 69%;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    height: 42%;
    width: fit-content;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 0.76%;
    box-sizing: border-box;
    
    ${props => props.$bottom && css`
        gap: 0.84%;
    `}
    
`
