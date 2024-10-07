
import React from "react";
import { CentreDiv, Container, CustomImage, LeftDiv, MobileWrapper, RightDiv, StyledText, Wrapper } from "./styles";
import { Image } from "../../atoms";
import { assets } from "../../../assets/assetKeys.jsx";
import { useMobile } from "../../../hooks/index.jsx";

function Footer() {
    const clientLogo = assets.footer.img["client-logo"];
    const replikaLogo = assets.footer.img["replika-logo"];
    const isMobile = useMobile();
    return (
        <Container >
            <Wrapper >
                {!isMobile && <LeftDiv>
                    <StyledText>
                        Privacy Policy
                    </StyledText>
                </LeftDiv>}
                <CentreDiv >
                    <Image src={clientLogo.src} alt={clientLogo.alt}/>
                </CentreDiv >
                {!isMobile && <RightDiv>
                    <Image src={replikaLogo.src} alt={replikaLogo.alt} />
                </RightDiv >}
            </Wrapper >
            {isMobile && <MobileWrapper>
                <StyledText>
                    Privacy Policy
                </StyledText>
                <CustomImage src={replikaLogo.src} alt={replikaLogo.alt} />
            </MobileWrapper>
            }
        </Container >
    );
}

export default React.memo(Footer);
