module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'other': {'min': '340px', 'max': '1200px'},
                // 'sm': {'min': '640px', 'max': '767px'},
                // // => @media (min-width: 640px and max-width: 767px) { ... }
                //
                // 'md': {'min': '768px', 'max': '1023px'},
                // // => @media (min-width: 768px and max-width: 1023px) { ... }
                //
                // 'lg': {'min': '1024px', 'max': '1279px'},
                // // => @media (min-width: 1024px and max-width: 1279px) { ... }
                //
                // 'xl': {'min': '1280px', 'max': '1535px'},
                // // => @media (min-width: 1280px and max-width: 1535px) { ... }
                //
                // '2xl': {'min': '1536px'},
                // // => @media (min-width: 1536px) { ... }
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
            },
        },
    },
    plugins: [],
}