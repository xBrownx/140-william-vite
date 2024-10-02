import { StyledHeading } from "./styles";
import React from "react";
import { ParallaxText } from "../../molecules/parallaxText/index.jsx";

function Heading(props) {
    return (
        <StyledHeading {...props}>
            <ParallaxText >
                {props.children}
            </ParallaxText >
        </StyledHeading >
    );
}

export default React.memo(Heading);
