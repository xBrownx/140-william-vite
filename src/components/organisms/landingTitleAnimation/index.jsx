import { Container } from "./styles";
import Line from "./line";
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








