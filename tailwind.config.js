const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            spacing: {
                xs: '8px',
                sm: '12px',
                md: '16px',
                lg: '24px',
                xl: '32px'
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px'
        },
        colors: {
            inherit: 'inherit',
            transparent: 'transparent',
            current: 'currentColor',
            primary: '#0ea5e9',
            secondary: '#5b21b6',
            tertiary: '#22d3ee',
            gray: '#94a3b8',
            white: '#ffffff',
            black: '#000000'
        },
        fontSize: {
            'xs': '0.875rem',
            'sm': '1rem',
            'base': '1.125rem',
            'lg': '1.25rem',
            'xl': '1.5rem',
            '2xl': '1.625rem',
            '3xl': '1.75rem',
            '4xl': '2rem',
            '5xl': '2.25rem',
            '6xl': '2.5rem'
        },
        fontWeight: {
            thin: 300,
            normal: 500,
            bold: 600
        },
        fontFamily: {
            sans: 'Roboto'
        }
    }
};

