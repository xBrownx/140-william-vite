import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ImgContainer, StyledImg } from "./styles";

function ParallaxImg(props) {

    const img = props.image;

    const targetRef = useRef();
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.4, 0.6, 1],
        ["175%", "150%", "125%", "100%"]
    );

    return (
        <ImgContainer
            ref={targetRef}
        >
            <StyledImg
                id={img.alt}
                as={motion.img}
                style={{scale: scale}}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
            />
        </ImgContainer >
    );
}

export default React.memo(ParallaxImg);