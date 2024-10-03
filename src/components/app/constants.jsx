import { imageCDN } from "../../utils/index.jsx";

export const constants = {
    heroOne: {
        key: "hero-1",
        src: imageCDN("hero", "hero-one-optimised", "jpg"),
        alt: "Hero One",
        width: 1120,
        height: 630,
        lazy: false
    },
    heroTwo: {
        key: "hero-2",
        src: imageCDN("hero", "hero-two-optimised", "jpg"),
        alt: "Hero Two",
        width: 1120,
        height: 630,
        lazy: false
    },
    heroThree: {
        key: "hero-3",
        src: imageCDN("hero", "hero-three-optimised", "jpg"),
        alt: "Hero Three",
        width: 1120,
        height: 630,
        lazy: false
    }
}