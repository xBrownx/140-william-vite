import { css } from 'styled-components';

export const SCREEN = {width: 1440, height: 810};

export const screen = {}

screen.width = (px) => `${(px / SCREEN.width) * 100}vw`;
screen.height = (px) => `${(px / SCREEN.height) * 100}vh`;
screen.fontSize = (px) => {
    const pt = px * 0.74999943307122;
    return `${(pt * 1.3333343412075) / SCREEN.width * 100}vw`;
};

screen.colour = {
    primary: '#B5BA4C',
    neutralLight: '#FFF',
    neutralDark: '#000',
}

screen.font = {
    primary: css``,
    secondary: css``,
}

const device = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
    xxxl: '2134px',
    xxxxl: '2845px'
}

export const media = {
    xs: (...args) => css`
        @media (max-width: ${device.xs}) {
            ${css(...args)};
        }
    `,
    sm: (...args) => css`
        @media (max-width: ${device.sm}) {
            ${css(...args)};
        }
    `,
    md: (...args) => css`
        @media (max-width: ${device.md}) {
            ${css(...args)};
        }
    `,
    mdMin: (...args) => css`
        @media (min-width: ${device.md}) {
            ${css(...args)};
        }
    `,
    lg: (...args) => css`
        @media (max-width: ${device.lg}) {
            ${css(...args)};
        }
    `,
    xl: (...args) => css`
        @media (max-width: ${device.xl}) {
            ${css(...args)};
        }
    `,
    xxl: (...args) => css`
        @media (max-width: ${device.xxl}) {
            ${css(...args)};
        }
    `,
    xxxl: (...args) => css`
        @media (max-width: ${device.xxxl}) {
            ${css(...args)};
        }
    `,
    xxxxl: (...args) => css`
        @media (max-width: ${device.xxxxl}) {
            ${css(...args)};
        }
    `,
}


