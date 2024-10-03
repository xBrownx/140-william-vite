export const storefrontURL = "https://d3tbbjv3fiiqdd.cloudfront.net";

export const iconCDN = (file, ext) => `${storefrontURL}/icons/${file}.${ext}`;
export const imageCDN = (featurePath, file, ext) => `${storefrontURL}/images/${featurePath}/${file}.${ext}`;
export const videoCDN = (featurePath, file) => `${storefrontURL}/videos/${featurePath}/${file}.m3u8`;