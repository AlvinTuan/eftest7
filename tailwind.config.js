/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#11A7B6',
                focus_hover: '#23527c'
            },
            lineHeight: {
                desktopTitle1: '56.016px'
            },
            boxShadow: {
                btn: '0 2px 8px 0 rgba(25, 25, 25, 0.2);'
            },
            backgroundColor: {
                hr: 'rgba(0, 0, 0, 0.12)'
            }
        }
    },
    plugins: []
}
