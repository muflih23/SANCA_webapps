import { extendTheme } from "@chakra-ui/react";
import { InputStyles as Input } from "./components/inputStyles";


const breakpoints = {
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1366px',
    '2xl': '1920px'
}

export const customTheme = extendTheme({
    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'Nunito', sans-serif`
    },
    breakpoints,
    components: {
        Input
    }
})