import { memo } from 'react';
import { Column, Image, Paragraph } from "../../atoms";
import { Wrapper } from "./styles";
import { useMobile } from "../../../hooks/index.jsx";

export const AvailabilityRating = memo(
    function AvailabilityRating(props) {
        const isMobile = useMobile();
        const ratingOne = props.assets.icons.ratingOne;
        const ratingTwo = props.assets.icons.ratingTwo;
        return (
            <Column $paddingLeft={isMobile ? 16 : 64}>
                <Wrapper>
                    <Image src={ratingOne.src} />
                    <Paragraph $variant>
                        NABERS Energy Rating
                    </Paragraph>
                </Wrapper>
                <Wrapper>
                    <Image src={ratingTwo.src}/>
                    <Paragraph $variant>
                        NABERS Water Rating
                    </Paragraph>
                </Wrapper>
            </Column>
        );
    }
);