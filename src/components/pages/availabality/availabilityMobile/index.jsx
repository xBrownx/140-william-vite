import { memo, useEffect, useState } from 'react';
import { ArrowWrapper, ButtonsWrapper, Container, CustomButton, CustomHeading, CustomRow } from './styles.jsx';
import { constants as CONST } from '../availabilityOverlay/constants'
import Arrow from '../../../../assets/Up-Arrow.svg'
import MobileModal from "./modal.jsx";

function AvailabilityMobile(props) {
    const buttonArr = Object.keys(CONST.buttons).map(key => {
        return { key: key, ...CONST.buttons[key] }
    });
    const buttonNumbers = buttonArr.filter(item => item.isActive).map(item => {
        return item;
    });

    const [startIndex, setStartIndex] = useState(0);
    const [visibleButtons, setVisibleButtons] = useState(
        buttonNumbers.slice(0, 5)
    );

    const navLeft = () => {
        let idx = startIndex
        if (idx > 0) {
            idx--;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }

    const navRight = () => {
        let idx = startIndex
        if (idx < buttonNumbers.length - 5) {
            idx++;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }

    const [isModal, setModal] = useState(false);

    const [activeLevel, setActiveLevel] = useState(0);

    const closeModal = () => {
        setModal(false);
    }

    const onButtonClick = (btn) => {
        setActiveLevel(btn);
        setModal(true);
    };

    useEffect(() => {
        props.setNavVis(!isModal);
    }, [isModal]);

    useEffect(() => {
        console.log(activeLevel)
    }, [activeLevel])

    return (
        <Container {...props}>
            <MobileModal
                showModal={isModal}
                closeModal={closeModal}
                startIndex={startIndex}
                visibleButtons={visibleButtons}
                navLeft={navLeft}
                navRight={navRight}
                buttonNumbers={buttonNumbers}
                activeLvl={activeLevel}
                onButtonClick={onButtonClick}
            />
            <CustomHeading>
                AVAILABLE TENANCIES
            </CustomHeading>
            <MobileModalNav
                startIndex={startIndex}
                activeLvl={activeLevel}
                visibleButtons={visibleButtons}
                navLeft={navLeft}
                navRight={navRight}
                buttonNumbers={buttonNumbers}
                onButtonClick={onButtonClick}
                showModal={isModal}
            />
        </Container>
    );
}

export const MobileModalNav = (props) => {
    return (
        <>

            <CustomRow>
                <ArrowWrapper
                    $left
                    $hidden={props.startIndex === 0}
                >
                    <img src={Arrow} alt={"left-arrow"} onClick={props.navLeft} />
                </ArrowWrapper>
                <ButtonsWrapper>
                    <CustomButton
                        onClick={() => props.onButtonClick(props.visibleButtons[0])}
                        $active={props.visibleButtons[0].key === props.activeLvl.key}
                        $modalActive={props.showModal}
                    >
                        {props.visibleButtons[0].lvl}
                    </CustomButton>
                    <CustomButton
                        onClick={() => props.onButtonClick(props.visibleButtons[1])}
                        $active={props.visibleButtons[1].key === props.activeLvl.key}
                        $modalActive={props.showModal}
                    >
                        {props.visibleButtons[1].lvl}
                    </CustomButton>
                    <CustomButton
                        onClick={() => props.onButtonClick(props.visibleButtons[2])}
                        $active={props.visibleButtons[2].key === props.activeLvl.key}
                        $modalActive={props.showModal}
                    >
                        {props.visibleButtons[2].lvl}
                    </CustomButton>
                    <CustomButton
                        onClick={() => props.onButtonClick(props.visibleButtons[3])}
                        $active={props.visibleButtons[3].key === props.activeLvl.key}
                        $modalActive={props.showModal}
                    >
                        {props.visibleButtons[3].lvl}
                    </CustomButton>
                    <CustomButton
                        onClick={() => props.onButtonClick(props.visibleButtons[4])}
                        $active={props.visibleButtons[4].key === props.activeLvl.key}
                        $modalActive={props.showModal}
                    >
                        {props.visibleButtons[4].lvl}
                    </CustomButton>
                </ButtonsWrapper>
                <ArrowWrapper
                    $right
                    $hidden={props.startIndex === props.buttonNumbers.length - 5}
                >
                    <img src={Arrow} alt={"right-arrow"} onClick={props.navRight} />
                </ArrowWrapper>
            </CustomRow>
        </>
    );
}

export default memo(AvailabilityMobile);
