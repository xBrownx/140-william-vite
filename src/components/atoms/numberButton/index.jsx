import { Container, Wrapper } from './styles'
import React from "react";

function NumberButton(props) {
    return (
        <Container
            onMouseEnter={props.$hoverStart}
            onMouseLeave={props.$hoverEnd}
            {...props}
        >
            <Wrapper {...props}>
                <span>{props.children}</span>
            </Wrapper>
        </Container>
    );
}

export default React.memo(NumberButton);