import React, { useRef, useState } from 'react'
import { constants as CONST } from './constants.jsx';
import { assets } from '../../../../assets/assetKeys.jsx';

import {
    Container, MapWrapper,
    VideoContainer
} from "./styles.jsx";
import { Row, VideoJS, Image } from "../../../atoms/index.jsx";
import Menu from "./menu.jsx";

function DesignVideo() {

    const videos = assets.design.vid;
    const images = assets.design.img;
    const [activeKey, setActiveKey] = useState("tour");

    return (
        <Container>
            <VideoContainer>
                <MapWrapper>
                    {activeKey !== "tour" &&
                        <Image
                            src={images[activeKey].src}
                            alt={images[activeKey].alt}
                        />
                    }
                </MapWrapper>
                <VideoJS
                    src={videos[activeKey].src}
                    autoplay={true}
                    muted={true}
                    controls={videos[activeKey].src}
                >
                        <Menu
                            activeKey={activeKey}
                            setActiveKey={setActiveKey}
                        />
                </VideoJS>
            </VideoContainer>
        </Container>
    );
}

export default React.memo(DesignVideo);
