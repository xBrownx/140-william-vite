import {StyledLink} from "./styles";
import React from "react";

function Link(props) {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );
}

export default React.memo(Link);

