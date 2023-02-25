import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            success: string,
            warning: string,
            danger: string,

            bgPrimary: string,
            bgSecondary: string,

            fontPrimary: string,
            fontSecondary: string,
            fontWhite: string
        }
    }
}