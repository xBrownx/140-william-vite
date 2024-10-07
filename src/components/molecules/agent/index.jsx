import { CustomImageContainer, Name, Phone, StyledImg, Wrapper } from "./styles";
import { Column } from "../../atoms";
import React from "react";


function Agent(props) {
    const {name, phone, email} = props.agent;
    const img = props.img
    return (
        <Wrapper >
            <CustomImageContainer >
                <StyledImg src={img.src} $width={img.width} $height={img.height} />
            </CustomImageContainer >
            <Column $paddingLeft={8} >
                <Name >{name}</Name >
                <Phone >
                    {phone}<br />
                    {email}
                </Phone >
            </Column >
        </Wrapper >
    );
}

export default React.memo(Agent);