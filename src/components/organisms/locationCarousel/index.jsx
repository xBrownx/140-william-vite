import React, { useState } from "react";
import { assets } from "../../../assets/assetKeys";
import { constants as CONST } from './constants';
import { CustomContainer, MenuContainer, MenuWrapper, MenuItem, Wrapper } from "./styles";
import { Image } from "../../atoms";
import { FadeCarousel } from "../../molecules";

function LocationCarousel() {
    const images = assets.location.img;
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