import { memo } from 'react';
import { Column, Image, Paragraph } from "../../atoms";
import { Wrapper } from "./styles";
import { useMobile } from "../../../hooks/index.jsx";
import { assets } from '../../../assets/assetKeys'
export const AvailabilityRating = memo(
    function AvailabilityRating() {
        const isMobile = useMobile();

        const ratingOne = assets.availability.icon["rating-one"];
        const ratingTwo = assets.availability.icon["rating-one"];
        return (
            <Column >
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