import React, { useRef, useState } from 'react'
import { constants as CONST } from './constants';
import { assets } from '../../../assets/assetKeys';

import {
    Container, MapWrapper,
    MenuWrapper,
    Overlay,
    StyledLi,
    StyledUl,
    VideoContainer
} from "./styles";
import { Row, VideoJS, Image } from "../../atoms";

function DesignVideo(props) {
    const tour = CONST.tour;
    const menuItems = CONST.menuItems;
    const videos = assets.design.vid;
    const images = assets.design.img;

    const [activeKey, setActiveKey] = useState("tour");
    const videoRef = useRef(null);

    return (
        <Container>
            <VideoContainer>
                <MapWrapper>
                    {activeKey !== "tour" &&
                        <Image src={images[activeKey].src} alt={images[activeKey].alt}/>
                    }
                </MapWrapper>
                <VideoJS
                    src={videos[activeKey].src}
                    autoplay={true}
                    muted={true}
                >
                    <Overlay>
                        <MenuWrapper>
                            <StyledUl>
                                <StyledLi
                                    $border
                                    onClick={() => setActiveKey("tour")}
                                >
                                    <Row $centre $paddingRight={16}>
                                        {/*<Image width={24} height={24} src={tour.iconSrc} />*/}
                                        <p>{tour.title}</p>
                                    </Row>

                                </StyledLi>
                                {Object.keys(menuItems).map((key) => {
                                    return (
                                        <StyledLi
                                            key={key}
                                            onClick={() => setActiveKey(key)}
                                            $active={key === activeKey}
                                        >
                                            <p>
                                                {menuItems[key].title}
                                            </p>
                                        </StyledLi>
                                    );
                                })}

                            </StyledUl>
                        </MenuWrapper>
                    </Overlay>
                </VideoJS>
            </VideoContainer>
        </Container>
    );
}

export default React.memo(DesignVideo);
