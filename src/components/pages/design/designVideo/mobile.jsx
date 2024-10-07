import React, { useState } from "react";
import { constants as CONST } from './constants.jsx';
import { VideoJS } from "../../../atoms/index.jsx";
import Arrow from '../../../../assets/Up-Arrow.svg'
import { ArrowWrapper, Container, CustomHeading, CustomRow, MobileOverlay } from "./styles.jsx";
import { assets } from "../../../../assets/assetKeys.jsx";

function MobileDesignVideo() {
    const videos = assets.design.vid;
    const [activeKey, setActiveKey] = useState("tour");
    const [mobileIdx, setMobileIdx] = useState(0);
    const menuItems = CONST.menuItems;
    const tour = {...CONST.tour, title: "TOUR"};

    let menuArray = Object.keys(menuItems).map(key => {
        return {key: key, ...menuItems[key]};
    });

    menuArray = [tour, ...menuArray];

    const navLeft = () => {
        let idx = mobileIdx
        if (idx > 0) {
            idx--;
            setMobileIdx(idx);
        }
    }

    const navRight = () => {
        let idx = mobileIdx
        if (idx < menuArray.length - 1) {
            idx++;
            setMobileIdx(idx);
        }
    }

    return (
        <Container >
            <VideoJS
                src={videos[menuArray[mobileIdx].key].src}
                autoplay={true}
                muted={true}
            />
            <MobileOverlay >
                <CustomRow >
                    <ArrowWrapper
                        $left
                        $hidden={mobileIdx === 0}
                    >
                        <img src={Arrow} alt={"left-arrow"} onClick={navLeft} />
                    </ArrowWrapper >
                    <CustomHeading >
                        {menuArray[mobileIdx].title}
                    </CustomHeading >
                    <ArrowWrapper
                        $right
                        $hidden={mobileIdx === menuArray.length - 1}
                    >
                        <img src={Arrow} alt={"left-arrow"} onClick={navRight} />
                    </ArrowWrapper >
                </CustomRow >
            </MobileOverlay >
        </Container >
    );
}

export default React.memo(MobileDesignVideo);