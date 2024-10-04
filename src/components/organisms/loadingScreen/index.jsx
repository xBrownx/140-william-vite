import { memo, useEffect, useRef, useState } from 'react';
import { Container, ProgressBar, StyledP, TextWrapper, Wrapper } from './styles';
import { AnimatePresence, motion } from 'framer-motion'

function LoadingScreen(props) {
    const [progress, setProgress] = useState(0);
    const [finishedLoading, setFinishedLoading] = useState(false);
    const [startTransition, setStartTransition] = useState(false);

    const endTransition = () => {
        setTimeout(() => setStartTransition(true), 2000);
        setTimeout(() => props.setLoading(false), 3000);
    }

    useEffect(() => {
        let x = 0;
        const interval = setInterval(() => {
            setProgress(prevState => {
                x = prevState + 25;
                if(x >= 100) {
                    clearInterval(interval);
                    endTransition();
                }
                return x;
            });

        }, 1000);
        return () => clearInterval(interval);
    })

    return (

        <motion.div
            // key="loading-screen"
            // initial={{ y: 0 }}
            // animate={{ y: 0 }}
            // exit={{ y: "-100%" }}
            // transition={{ease: "easeInOut", duration: 10}}
            style={{ zIndex: 1000, position: "absolute", width: "100vw", height: "100%" }}
        >
            <Container $startTransition={startTransition}>
                <Wrapper>
                    <ProgressBar id="progress-bar" value={progress} max={100} />
                    <TextWrapper>
                        <StyledP id="progress-text" />
                    </TextWrapper>
                </Wrapper>


            </Container>
         </motion.div>

    );
}


export default memo(LoadingScreen);
