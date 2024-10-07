import React from "react";
import { StyledHeading } from "./styles.jsx";
import Animation from "./animation.jsx";


function TitleRow({item}) {
    return (
        <Animation
            x={item.x}
            y={item.y}
            delay={item.delay}
        >
            <StyledHeading $justify={item.justify} $align={item.align}>
                {item.title}
            </StyledHeading >
        </Animation >
    );
}

export default React.memo(TitleRow);