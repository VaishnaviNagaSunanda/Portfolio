/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light Mode (Feminine/Soft)
                'cream': '#FAF9F6',      // Off-White
                'charcoal': '#2D2426',   // Warm Dark Grey
                'beige': '#F4C2C2',      // Baby Pink
                'brown': '#884A5B',      // Deep Berry/Mauve
                'light-brown': '#E6A4B4', // Rose Pink

                // Dark Mode (Neon/Black)
                'neon-green': '#22c55e', // Reverted to Neon Green
                'dark-bg': '#0a0a0a',
                'card-dark': '#171717',
                'gray-text': '#a3a3a3',
            },
            animation: {
                scroll: 'scroll 20s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            }
        },
    },
    plugins: [],
}
