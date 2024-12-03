/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                brown_custom: '#362417',
                yellow_custom: '#ffb627',
                orange_custom: '#bc5d2e',
                snow: '#fffbff',
            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
