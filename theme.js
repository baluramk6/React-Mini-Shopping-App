import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";

const theme = extendTheme({
    font: {
        colors: {
            brand: {
                50: "#FFF5F5",
                100: "#FED7D7",
                200: "#FEB2B2",
                300: "#FC8181",
                400: "#F56565",
                500: "#E53E3E",
            },
        },
        heading: `Inconsolata,${base.fonts.heading}`,
        text: `monospace,${base.fonts.text}`,
    },
},
    withDefaultColorScheme({
        colorScheme: "brand",
    }),
    withDefaultVariant({
        variant: "filled",
        components: ["Input", "Select", "Textarea"]
    })
);


export default theme;
