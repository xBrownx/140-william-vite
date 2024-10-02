
import React from "react";
import { CentreDiv, Container, LeftDiv, RightDiv, StyledText, Wrapper } from "./styles";
import { Image } from "../../atoms";

function Footer() {
    return (
        <Container >
            <Wrapper >
                <LeftDiv >
                    <StyledText >
                        Privacy Policy
                    </StyledText >
                </LeftDiv >
                <CentreDiv >
                    <Image src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/Footer-Logo.svg"} />
                </CentreDiv >
                <RightDiv >
                    <Image src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png"} />
                </RightDiv >
            </Wrapper >
        </Container >
    );
}

export default React.memo(Footer);
