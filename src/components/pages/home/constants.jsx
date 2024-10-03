import { imageCDN } from "../../../utils/index.jsx";

export const homeConst = {
    headingTxt: "SPACES FOR OUR TENANTS TO THRIVE",
    paragraphTxt: "Presenting a range of fully fitted tenancies available to lease.\n" +
        "These opportunities, offer stunning views and natural light\n" +
        "with access to the building’s first class facilities and amenities.",
    buttonTxt: "Discovery Availability",
    assets: {
        hero: {
            key: "home-hero",
            src: imageCDN("home", "home-hero-optimised", "jpg"),
            alt: "Home Hero",
            width: 447,
            height: 666,
            lazy: false
        },
    }
};
