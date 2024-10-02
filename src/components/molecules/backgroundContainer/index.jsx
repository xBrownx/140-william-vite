import { Container, InnerContainer } from "./styles";
import React from "react";

function BackgroundContainer(props) {
    return (
        <Container {...props}>
            <InnerContainer >
                {props.children}
            </InnerContainer >
        </Container >
    );
}

export default React.memo(BackgroundContainer);