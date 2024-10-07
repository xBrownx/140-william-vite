import React from "react";
import { Image } from '../../atoms'
import { BackgroundOverlay, CloseButtonWrapper, ModalWindow } from "./styles";

import { useModalStatusContext } from "../../pages/availabality/availabilityOverlay/context";

function ModalPane(props) {
    const [isModalOpen, onLevelClick] = useModalStatusContext();
    return (
        <>
            <BackgroundOverlay
                $open={isModalOpen}
                onClick={props.closeModal}
            />
            <ModalWindow $open={isModalOpen} >
                <CloseButtonWrapper onClick={props.closeModal} >
                    <p >Close</p >
                    <Image
                        width={24}
                        src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg"} />
                </CloseButtonWrapper >
                {props.children}
            </ModalWindow >
        </>
    );
}

export default React.memo(ModalPane);