import {StyledContainer} from "./styles";
import React from "react";


function Container(props) {
    return (
        <StyledContainer ref={props.$pageRef} {...props}>
            {props.children}
        </StyledContainer>
    );
}

export default React.memo(Container);