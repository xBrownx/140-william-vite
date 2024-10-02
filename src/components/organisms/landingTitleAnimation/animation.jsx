import { AnimateY } from "./animateY";
import { AnimateX } from "./animateX";
import React from "react";


function Animation({x, y, delay, children}) {
    return (
        <AnimateY y={y} delay={delay} >
            <AnimateX x={x} delay={delay} >
                {children}
            </AnimateX >
        </AnimateY >
    )
}

export default React.memo(Animation);