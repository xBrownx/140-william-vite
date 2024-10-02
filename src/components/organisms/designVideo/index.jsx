import React, { memo, useEffect, useRef, useState } from 'react'
import {
    ArrowWrapper,
    Container, CustomHeading, CustomRow, MapWrapper,
    MenuWrapper, MobileOverlay,
    Overlay,
    StyledLi,
    StyledUl,
    StyledVideo,
    VideoContainer
} from "./styles";
import { Row, VideoJS, Image } from "../../atoms";
import Arrow from '../../../assets/Up-Arrow.svg'
import { useMobile } from "../../../hooks/index.jsx";

function DesignVideo(props) {
    const isMobile = useMobile();
    const tour = props.tour;
    const menuItems = props.menuItems;
    const [currentShot, setCurrentShot] = useState(tour);

    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    const mobileTour = {...tour, title: "TOUR"};

    const [mobileIdx, setMobileIdx] = useState(0);
    let menuArray = Object.keys(menuItems).map(key => {
        return menuItems[key];
    });

    menuArray = [mobileTour, ...menuArray];

    const playerRef = useRef(null);

    const videoOptions = {
        autoplay: true,
        controls: true,
        loop: true,
        muted: true,
        fluid: true,
        preload: 'auto',
        sources: [{
            src: isMobile ? menuArray[mobileIdx].videoSrc : currentShot.videoSrc,
            type: 'application/x-mpegURL'
        }],
    };

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play();
        }, 0.5);
        setTimeout(() => {
            setIsLoading(false);
        }, 0.5)
    }, [currentShot]);


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

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <Container >
            <VideoContainer
                $isLoading={isLoading}
            >
                {!isMobile && <MapWrapper >
                    {currentShot.mapSrc !== undefined && <Image src={currentShot.mapSrc} />}
                </MapWrapper >
                }
                <VideoJS
                    options={videoOptions}
                    onReady={handlePlayerReady}
                />


            </VideoContainer >
            <Overlay style={{justifyContent: "end"}} >
                <MenuWrapper >
                    <StyledUl >
                        <StyledLi
                            $border
                            onClick={() => setCurrentShot(tour)}
                        >
                            <Row $centre padding={{right: 16}} >
                                {/*<Image width={24} height={24} src={tour.iconSrc} />*/}
                                <p >{tour.title}</p >
                            </Row >

                        </StyledLi >
                        {Object.keys(menuItems).map((key) => {
                            return (
                                <StyledLi
                                    key={menuItems[key].key}
                                    onClick={() => setCurrentShot(menuItems[key])}
                                    $active={menuItems[key] === currentShot}
                                >
                                    <p >
                                        {menuItems[key].title}
                                    </p >
                                </StyledLi >
                            );
                        })}

                    </StyledUl >
                </MenuWrapper >
            </Overlay >
            ${isMobile && <MobileOverlay >
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

        }
        </Container >
    );
}

export default React.memo(DesignVideo);
