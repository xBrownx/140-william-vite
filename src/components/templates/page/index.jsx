import { StyledPage } from './styles'
import React from "react";

export function Page(props) {
    return (
        <StyledPage ref={props.$pageRef} {...props}>
            {props.children}
        </StyledPage >
    );
}

export default React.memo(Page);
