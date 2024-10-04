import { memo, useState } from "react";
import {
    CarouselWrapper,
    CustomButton,
    DetailsWrapper,
    LabelWrapper,
    NavWrapper,
    StyledLi,
    StyledUl,
    Title,
    ValueWrapper,
    VectorWrapper
} from "./styles";
import { Column, Image, Link, Paragraph, Row } from "../../atoms";
import { ModalPane, ModalNav, SlideCarousel } from "../../molecules";
import { useModalKeyContext, useModalStatusContext } from "../availabilityOverlay/context";
import { constants as TSCONST } from "../thirdSpaceCarousel/constants";
import { constants as CONST } from "./constants.jsx";
import { assets } from "../../../assets/assetKeys.jsx";
import { ThirdSpaceCarousel } from "../index.jsx";

function AvailabilityModal(props) {
    const tenancyDetails = CONST.tenancyDetails;
    const tenancyVectors = assets.availability.img["tenancy-vectors"];

    const [isModalOpen, onLevelClick] = useModalStatusContext();
    const [modalKey] = useModalKeyContext();

    const [tenancyIdx, setTenancyIdx] = useState(0);
    const activeModal = props.buttons[modalKey];

    if (modalKey === null) return;


    return (
        <ModalPane
            $open={isModalOpen}
            closeModal={() => onLevelClick(null)}
        >
            <Row
                $paddingInline={64}
                $paddingBlock={22}
                $gap={64}
            >
                <NavWrapper >
                    <ModalNav buttons={props.buttons} />
                </NavWrapper >
                {modalKey === "l05" ? <ThirdspaceModal /> :
                    <>
                        <Column
                            $fitContent $paddingTop={64} $gap={16} >
                            <Title >
                                Level {activeModal.lvl ? activeModal.lvl : "error"}
                            </Title >
                            {tenancyDetails[modalKey].length > 1 &&

                                <Row $gap={16} $fitContent >
                                    <Link
                                        $underlined
                                        $active={tenancyIdx === 0}
                                        onClick={() => setTenancyIdx(0)}
                                    >
                                        TENANCY 1
                                    </Link >
                                    <Link
                                        $underlined
                                        $active={tenancyIdx === 1}
                                        onClick={() => setTenancyIdx(1)}
                                    >
                                        TENANCY 2
                                    </Link >
                                </Row >
                            }
                            <TenancyDeets
                                tenancy={tenancyDetails[modalKey].length > 1
                                    ? tenancyDetails[modalKey][tenancyIdx]
                                    : tenancyDetails[modalKey][0]}
                            />
                            <CustomButton >
                                <Image
                                    src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg"}
                                    alt="Tenancy deet" />
                                Floor Plan
                            </CustomButton >
                        </Column >
                        <VectorWrapper >
                            <Image
                                alt="Tenancy deet"
                                src={tenancyVectors[modalKey].length === 2
                                    ? tenancyVectors[modalKey][tenancyIdx].src
                                    : tenancyVectors[modalKey].src
                                }
                            />
                        </VectorWrapper >
                    </>}
            </Row >
        </ModalPane >
    );
}

const TenancyDeets = (props) => {
    const tenancy = props.tenancy
    return (
        <DetailsWrapper >
            <Column $gap={16} >
                <StyledUl >
                    <StyledLi >
                        <LabelWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                Status
                            </Paragraph >
                        </LabelWrapper >
                        <ValueWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1}
                                       style={{color: "#84936E"}} >
                                {tenancy.status}
                            </Paragraph >
                        </ValueWrapper >
                    </StyledLi >
                    <StyledLi >
                        <LabelWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                Floor Area
                            </Paragraph >
                        </LabelWrapper >
                        <ValueWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                {tenancy.floorArea}
                            </Paragraph >
                        </ValueWrapper >
                    </StyledLi >
                    <StyledLi >
                        <LabelWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                Timing
                            </Paragraph >
                        </LabelWrapper >
                        <ValueWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                {tenancy.timing}
                            </Paragraph >
                        </ValueWrapper >
                    </StyledLi >
                    <StyledLi >
                        <LabelWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                Fitout
                            </Paragraph >
                        </LabelWrapper >
                        <ValueWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                {tenancy.fitout}
                            </Paragraph >
                        </ValueWrapper >
                    </StyledLi >
                    <StyledLi >
                        <LabelWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                Lease Type
                            </Paragraph >
                        </LabelWrapper >
                        <ValueWrapper >
                            <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300} $opacity={1} >
                                {tenancy.leaseType}
                            </Paragraph >
                        </ValueWrapper >
                    </StyledLi >
                </StyledUl >
                {tenancy.furtherDetails !== undefined &&
                    <StyledUl >
                        {tenancy.furtherDetails.map(item => {
                            return (
                                <StyledLi >
                                    <LabelWrapper >
                                        <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300}
                                                   $opacity={1} >
                                            {item.label}
                                        </Paragraph >
                                    </LabelWrapper >
                                    <ValueWrapper >
                                        <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300}
                                                   $opacity={1} >
                                            {item.value}
                                        </Paragraph >
                                    </ValueWrapper >
                                </StyledLi >
                            );
                        })})
                    </StyledUl >
                }
                {tenancy.paragraph !== undefined &&
                    <StyledUl >
                        <Paragraph $secondary $light $fontSize={14} $lineHeight={18.16} $weight={300}
                                   $opacity={1} >
                            {tenancy.paragraph}
                        </Paragraph >
                    </StyledUl >
                }
            </Column >
        </DetailsWrapper >
    );
}

const ThirdspaceModal = () => {
    return (
        <Column $paddingTop={64} $borderBox $width={532} $gap={33} >
            <Title >
                Level 5 - Third Space
            </Title >
            <CarouselWrapper id={"caoursel-wrapper"}>
                <ThirdSpaceCarousel  />
            </CarouselWrapper >
        </Column >
    );
}

export default memo(AvailabilityModal);