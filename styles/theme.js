import { extendTheme } from "@chakra-ui/react";

const customTheme = {
    config: {
        initialColorMode: 'light',
    },
    fonts:
    {
        heading: 'Marcellus SC',
        body: 'Montserrat'
    }
}

export const theme = extendTheme(customTheme);