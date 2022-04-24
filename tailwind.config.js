module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                'at-light-green': '#44ba9f' ,
                'at-green': '#286d5d',
                'light-grey': '#f1f1f1',
            },

            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            }
        },
    },
    plugins: [],
}
