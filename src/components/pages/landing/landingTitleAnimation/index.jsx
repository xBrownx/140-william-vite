import { Container } from "./styles.jsx";
import Line from "./line.jsx";
import React from "react";

function LandingTitleAnimation({headings}) {
    return (
        <Container>
            {headings?.map((item) => {
                return (
                    <Line
                        key={item.title}
                        item={item}
                    />
                );
            })}
        </Container >
    );
}

export default React.memo(LandingTitleAnimation);








