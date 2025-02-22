import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1c398e',
                'secondary': '#162455',
            },
            spacing: {
                '0': '0px',
                '1': '8px',
                '2': '16px',
                '3': '24px',
                '4': '32px',
                '5': '40px',
                '6': '48px',
                '7': '56px',
                '8': '64px',
                '9': '72px',
                '10': '80px',
                '11': '88px',
                '12': '96px',
            }
        },
    },
    plugins: [],
};

export default config;