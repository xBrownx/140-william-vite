import { StyledButton } from "./styles";
import React from "react";

function Button(props) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}

export default React.memo(Button);
