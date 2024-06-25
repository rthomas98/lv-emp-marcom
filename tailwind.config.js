import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/preline/dist/*.js',
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "em-pink": "#BD1550",
                "em-dark-pink": "#720D31",
                "em-purple": "#231B53",
                "em-yellow": "#FFC259",
                "em-dark-purple": "#1F1946",
                "em-light": "#F8F9FA",
            },
        },
    },

    plugins: [
        forms,
        require('preline/plugin'),
        require('flowbite/plugin'),
    ],

};
