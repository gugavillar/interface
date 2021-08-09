import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    colors: {
        gray: {
            '50': '#F5F8FA',
            '100': '#DADADA',
            '200': '#999999',
            '600': '#47585B'
        },
        yellow: {
            '300': '#FFBA08'
        }
    }
})