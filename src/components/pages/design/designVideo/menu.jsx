import { MenuWrapper, StyledLi, StyledUl } from "./styles.jsx";
import { Row } from "../../../atoms/index.jsx";
import { constants as CONST } from './constants.jsx';
import React from "react";

function Menu(props) {
    const tour = CONST.tour;
    const menuItems = CONST.menuItems;
    return (
        <MenuWrapper>
            <StyledUl>
                <StyledLi
                    $border
                    onClick={() => props.setActiveKey("tour")}
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
                            onClick={() => props.setActiveKey(key)}
                            $active={key === props.activeKey}
                        >
                            <p>
                                {menuItems[key].title}
                            </p>
                        </StyledLi>
                    );
                })}

            </StyledUl>
        </MenuWrapper>
    );
}

export default React.memo(Menu);