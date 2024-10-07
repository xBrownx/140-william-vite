import { assets } from '../../../../assets/assetKeys.jsx';
import { constants as CONST } from './constants.jsx';
import { Container, VectorWrapper } from "./styles.jsx";
import { useHoverContext, useModalStatusContext } from "../availabilityOverlay/context.jsx";
import { Image } from "../../../atoms/index.jsx";

export const LevelVectors = props => {
    const vectors = assets.availability.img["shadow-vectors"];
    const vectorProps = CONST.shadowVectors;

    const [hoverKey, setHoverKey] = useHoverContext();
    const [isModalOpen, onLevelClick] = useModalStatusContext();

    return (
        <Container>
                {Object.keys(vectors).map((key) => {
                        return (
                            <VectorWrapper
                                key={key}
                                $hover={key === hoverKey}
                                $offset={vectorProps[key].positionTop}
                                onMouseEnter={() => setHoverKey(key)}
                                onMouseLeave={() => setHoverKey(null)}
                                onClick={() => onLevelClick(key)}
                            >
                                <Image src={vectors[key].src}/>
                            </VectorWrapper>
                        );
                    }
                )}
        </Container>
    );
}