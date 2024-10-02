import { Wrapper } from "./styles";
import React from "react";
import { Image } from "../index.jsx";

function NavArrow(props) {
    return (
        <Wrapper {...props}>
            <Image
                src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/up-arrow.svg"}
                onClick={props.onClick}
            />
        </Wrapper >
    );
}

export default React.memo(NavArrow);