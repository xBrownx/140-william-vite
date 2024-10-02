import { constants as CONST } from "./constants";
import { CustomContainer, Wrapper } from "./styles";
import React, { useState } from "react";
import { CarouselMenu, FadeCarousel } from "../../molecules";



function LocationCarousel() {
    const menuItems = CONST.menuItems;
    const [activeShot, setActiveShot] = useState(0);

    return (
        <Wrapper>
            <CustomContainer>
                <FadeCarousel
                    activeShot={activeShot}
                    carouselItems={menuItems} />
            </CustomContainer>
            <CarouselMenu
                menuItems={menuItems}
                activeShot={activeShot}
                setActiveShot={setActiveShot}
            />
        </Wrapper>
    );
}

export default React.memo(LocationCarousel);