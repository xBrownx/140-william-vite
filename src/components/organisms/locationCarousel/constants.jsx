import { imageCDN, iconCDN } from "../../../utils/";
const subFolder = "location";

export const constants = {
    menuItems: [
        {
            title: 'F&B',
            imgSrc: imageCDN(subFolder, "fnb", "svg"),
            iconSrc: iconCDN("Location-01-FB", "svg"),
        },
        {
            title: 'RETAIL',
            imgSrc: imageCDN(subFolder, "retail", "svg"),
            iconSrc: iconCDN("Location-02-Retail", "svg"),
        },
        {
            title: 'TRAINS',
            imgSrc: imageCDN(subFolder, "trains", "svg"),
            iconSrc: iconCDN("Location-03-Trains", "svg"),
        },
        {
            title: 'HOTELS',
            imgSrc: imageCDN(subFolder, "hotels", "svg"),
            iconSrc: iconCDN("Location-04-Hotels", "svg"),
        },
    ],
}