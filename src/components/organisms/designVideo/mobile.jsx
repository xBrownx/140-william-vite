import React, { useState } from "react";
import { constants as CONST } from './constants';
import { VideoJS } from "../../atoms";
import Arrow from '../../../assets/Up-Arrow.svg'
import { ArrowWrapper, Container, CustomHeading, CustomRow, MobileOverlay } from "./styles.jsx";

function MobileDesignVideo(props) {
    const menuItems = CONST.menuItems;
    const [mobileIdx, setMobileIdx] = useState(0);

    const tour = {...CONST.tour, title: "TOUR"};
    let menuArray = Object.keys(menuItems).map(key => {
        return menuItems[key];
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
                src={menuArray[mobileIdx].videoSrc}
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