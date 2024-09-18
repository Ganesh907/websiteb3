// // /** @type {import('tailwindcss').Config} */
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


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your source files are located elsewhere
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'slow-blink': 'slow-blink 3s ease-in-out infinite', // Define a slower animation with smooth transitions
//       },
//       keyframes: {
//        'slow-blink': {
//           '0%, 100%': { opacity: 1 },  // Fully visible at the start and end
//           '50%': { opacity: 0 },       // Fully invisible in the middle
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-design': 'zoom-design 9s ease-in-out infinite',   // Animation for "design"
        'zoom-develop': 'zoom-develop 9s ease-in-out infinite', // Animation for "develop"
        'zoom-deliver': 'zoom-deliver 9s ease-in-out infinite', // Animation for "deliver"
      },
      keyframes: {
        'zoom-design': {
          '0%, 33.33%': { opacity: 1, transform: 'scale(0)' },   // Zoom in "design"
          '16.66%, 33.33%': { transform: 'scale(1)' }, // Zoom out "design"
          '33.34%, 100%': { opacity: 0, transform: 'scale(0.5)' }, // Hide and shrink "design"
        },
        'zoom-develop': {
          '0%, 33.33%': { opacity: 0, transform: 'scale(0)' },   // Hide and shrink "develop"
          '33.34%, 66.66%': { opacity: 1, transform: 'scale(0)' }, // Zoom in "develop"
          '50%, 66.66%': { transform: 'scale(1)' }, // Zoom out "develop"
          '66.67%, 100%': { opacity: 0, transform: 'scale(0.5)' }, // Hide and shrink "develop"
        },
        'zoom-deliver': {
          '0%, 66.66%': { opacity: 0, transform: 'scale(0.5)' },   // Hide and shrink "deliver"
          '66.67%, 100%': { opacity: 1, transform: 'scale(0)' }, // Zoom in "deliver"
          '83.33%, 100%': { transform: 'scale(1)' }, // Zoom out "deliver"
        },
      },
    },
  },
  plugins: [],
};
////////////////////////////////////////




