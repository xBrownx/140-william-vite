import React from "react";
import { Container } from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import AvailabilityModal from "../availabilityModal";
import { AvailabilityProvider } from "./context";


function AvailabilityOverlay(props) {
        return (
            <AvailabilityProvider>
                <Container>
                    <AvailabilityModal
                        buttons={props.buttons}
                        assets={props.assets}
                    />
                    <LevelButtons
                        buttons={props.buttons}
                    />
                    <LevelVectors
                        assets={props.assets}
                    />
                </Container>
            </AvailabilityProvider>
        );
    }

    export default React.memo(AvailabilityOverlay);