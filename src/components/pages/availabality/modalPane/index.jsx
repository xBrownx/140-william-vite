import React from "react";
import { Image } from '../../../atoms/index.jsx'
import { BackgroundOverlay, CloseButtonWrapper, ModalWindow } from "./styles.jsx";

import { useModalStatusContext } from "../availabilityOverlay/context.jsx";

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