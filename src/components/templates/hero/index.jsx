import React from "react";
import { Container } from "./styles";
import { ParallaxImg } from "../../molecules";
import { Page } from "../page";

function Hero(props) {
    return (
        <Page $fullscreen {...props}>
            <Container {...props}>
                <ParallaxImg image={props.src} />
            </Container >
        </Page >
    );
}

export default React.memo(Hero);
