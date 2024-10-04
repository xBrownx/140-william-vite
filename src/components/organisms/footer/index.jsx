
import React from "react";
import { CentreDiv, Container, LeftDiv, RightDiv, StyledText, Wrapper } from "./styles";
import { Image } from "../../atoms";
import { assets } from "../../../assets/assetKeys.jsx";

function Footer() {
    const clientLogo = assets.footer.img["client-logo"];
    const replikaLogo = assets.footer.img["replika-logo"];
    return (
        <Container >
            <Wrapper >
                <LeftDiv >
                    <StyledText >
                        Privacy Policy
                    </StyledText >
                </LeftDiv >
                <CentreDiv >
                    <Image src={clientLogo.src} alt={clientLogo.alt}/>
                </CentreDiv >
                <RightDiv >
                    <Image src={replikaLogo.src} alt={replikaLogo.alt} />
                </RightDiv >
            </Wrapper >
        </Container >
    );
}

export default React.memo(Footer);
