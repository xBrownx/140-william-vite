import { StyledInput } from "./styles";
import React from "react";

function Input(props ) {
    return (
        <StyledInput type="text"{...props}>
            {props.children}
        </StyledInput>
    );
}

export default React.memo(Input)
