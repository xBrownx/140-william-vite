import React from 'react'
import { NumberButton } from "../../../atoms/index.jsx";
import {
    useHoverContext,
    useModalStatusContext
} from "../availabilityOverlay/context.jsx";

export const LevelButton = props => {
    const [hoverKey, setHoverKey] = useHoverContext();
    const [isModalOpen, onLevelClick] = useModalStatusContext();
    return (
            <NumberButton
                $active={props.item.isActive}
                $isHover={props.item.key === hoverKey}
                $hoverStart={() => setHoverKey(props.item.key)}
                $hoverEnd={() => setHoverKey(null)}
                onClick={() => onLevelClick(props.item.key)}
            >
                {props.children}
            </NumberButton>
    );
}