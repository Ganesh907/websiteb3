// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         blink: 'blink 1s step-end infinite',
//       },
//       keyframes: {
//         blink: {
//           '50%': { opacity: 0 },
//         },
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your source files are located elsewhere
  ],
  theme: {
    extend: {
      animation: {
        'slow-blink': 'slow-blink 3s ease-in-out infinite', // Define a slower animation with smooth transitions
      },
      keyframes: {
       'slow-blink': {
          '0%, 100%': { opacity: 1 },  // Fully visible at the start and end
          '50%': { opacity: 0 },       // Fully invisible in the middle
        },
      },
    },
  },
  plugins: [],
}
