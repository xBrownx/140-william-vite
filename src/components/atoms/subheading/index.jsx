import { StyledSubheading } from "./styles";
import React from "react";

function Subheading(props) {
    return (
        <StyledSubheading {...props}>
            {props.children}
        </StyledSubheading>
    );
}

export default React.memo(Subheading);
