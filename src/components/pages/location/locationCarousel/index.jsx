import React, { useState } from "react";
import { assets } from "../../../../assets/assetKeys.jsx";
import { constants as CONST } from './constants.jsx';
import { CustomContainer, MenuContainer, MenuWrapper, MenuItem, Wrapper } from "./styles.jsx";
import { Image } from "../../../atoms/index.jsx";
import { FadeCarousel } from "../../../molecules/index.jsx";
import { useMobile } from "../../../../hooks/index.jsx";

function LocationCarousel() {
    const isMobile = useMobile();
    const images = isMobile ? assets.location.img.mobile : assets.location.img.desktop;
    const icons = assets.location.icon;
    const menuItems = CONST.menuItems
    const [activeKey, setActiveKey] = useState("fnb");

    return (
        <Wrapper>
            <CustomContainer>
                <FadeCarousel
                    activeKey={activeKey}
                    carouselItems={images} />
            </CustomContainer>
            <MenuContainer>
                <MenuWrapper>
                    {Object.keys(menuItems).map((key) => {
                            return (
                                <MenuItem
                                    key={key}
                                    onClick={() => setActiveKey(key)}
                                    $isActive={activeKey === key}
                                >
                                    <Image src={icons[key].src} />
                                    <p >
                                        {menuItems[key].title}
                                    </p >
                                </MenuItem >
                            );
                        }
                    )}
                </MenuWrapper>
            </MenuContainer>
        </Wrapper>
    );
}

export default React.memo(LocationCarousel);