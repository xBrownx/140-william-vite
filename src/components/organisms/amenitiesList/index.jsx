import React from 'react';
import { assets } from '../../../assets/assetKeys';
import { constants as CONST } from './constants'
import { Paragraph } from '../../atoms'
import { IconLink } from "../../molecules";
import { StyledLi, StyledUl } from "./styles";


function AmenitiesList() {
    const menuItems = CONST.menuItems;
    const icons = assets.amenities["icon"]
    return (
        <StyledUl>
            {Object.keys(menuItems).map((key) => {
                return (
                    <StyledLi key={key}>
                        <IconLink $iconSrc={icons[key].src}>
                            <Paragraph $secondary $size16>
                                {menuItems[key].title}
                            </Paragraph>
                        </IconLink>
                    </StyledLi>
                );
            })}
        </StyledUl>
    );
}

export default React.memo(AmenitiesList)
