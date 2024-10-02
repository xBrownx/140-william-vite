import { Container, Pane } from './styles';
import React from "react";

function SplitScreen(props) {
    const [left, right] = props.children;
    return (
        <Container
            ref={props.$pageRef}
            {...props}
        >
            <Pane >
                {left}
            </Pane >
            <Pane >
                {right}
            </Pane >
        </Container >
    );
}

export default React.memo(SplitScreen);
