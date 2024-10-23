// import React, { useEffect, useState } from 'react'
// import { Blogs } from '../Pages/Blogs';

// export const ColorTheme = () => {


//         // Load colors from localStorage, or use default colors if not set
//         const [primaryColor, setPrimaryColor] = useState(
//                 localStorage.getItem("primaryColor") || "#0060b5"
//         );
//         const [secondaryColor, setSecondaryColor] = useState(
//                 localStorage.getItem("secondaryColor") || "white"
//         );
//         const [backgroundColor, setBackgroundColor] = useState(
//                 localStorage.getItem("backgroundColor") || "#272626"
//         );


//         // Update the root CSS variables when colors change
//         // Update the root CSS variables when colors change
//         const updateColors = () => {
//                 const root = document.documentElement;
//                 root.style.setProperty("--primary-color", primaryColor);
//                 root.style.setProperty("--secondary-color", secondaryColor);
//                 root.style.setProperty("--background-color", backgroundColor);
//         };

//         // Save color changes to localStorage whenever they update
//         useEffect(() => {
//                 localStorage.setItem("primaryColor", primaryColor);
//                 localStorage.setItem("secondaryColor", secondaryColor);
//                 localStorage.setItem("backgroundColor", backgroundColor);
//                 updateColors();
//         }, [primaryColor, secondaryColor, backgroundColor]);

//         return (
              
//                                 <div className="fixed top-4 right-4 flex flex-col space-y-2">
//                                         {/* Primary Color Picker */}
//                                         <div className="relative">
//                                                 <input
//                                                         type="color"
//                                                         value={primaryColor}
//                                                         onChange={(e) => setPrimaryColor(e.target.value)}
//                                                         className="absolute opacity-0 w-full h-full cursor-pointer"
//                                                 />
//                                                 <div
//                                                         className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
//                                                         style={{ backgroundColor: primaryColor }}
//                                                 />
//                                         </div>

//                                         {/* Secondary Color Picker */}
//                                         <div className="relative">
//                                                 <input
//                                                         type="color"
//                                                         value={secondaryColor}
//                                                         onChange={(e) => setSecondaryColor(e.target.value)}
//                                                         className="absolute opacity-0 w-full h-full cursor-pointer"
//                                                 />
//                                                 <div
//                                                         className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
//                                                         style={{ backgroundColor: secondaryColor }}
//                                                 />
//                                         </div>

//                                         {/* Background Color Picker */}
//                                         <div className="relative">
//                                                 <input
//                                                         type="color"
//                                                         value={backgroundColor}
//                                                         onChange={(e) => setBackgroundColor(e.target.value)}
//                                                         className="absolute opacity-0 w-full h-full cursor-pointer"
//                                                 />
//                                                 <div
//                                                         className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
//                                                         style={{ backgroundColor: backgroundColor }}
//                                                 />
//                                         </div>
//                                 </div>

//         )
// }




// import { IconButton } from '@mui/material';
// import React, { useEffect, useState, createContext, useContext } from 'react';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

// // Create a ThemeContext
// const ThemeContext = createContext();

// // ThemeProvider component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   // Update localStorage and HTML class based on the theme
//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   // Toggle theme between light and dark
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div>
//         <IconButton
//           sx={{
//             ml: 1,
//             padding: '4px',
//             borderRadius: '30px',
//             backgroundColor: theme === 'dark' ? 'gray' : 'white',
//             border: theme === 'dark' ? '2px solid white' : '2px solid black',
//             position: 'fixed',
//             left: '10px',
//             bottom: '10px',
//             zIndex:1000
//           }}
//           onClick={toggleTheme}
//           color="primary"
//         >
//           {theme === 'dark' ? (
//             <LightModeIcon sx={{ color: 'yellow' }} />
//           ) : (
//             <DarkModeIcon sx={{ color: 'black' }} />
//           )}
//         </IconButton>

//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use the ThemeContext
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export default ThemeProvider;


// import React, { useEffect, useState, createContext, useContext } from 'react';
// import { IconButton } from '@mui/material';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

// // Create a ThemeContext
// const ThemeContext = createContext();

// // ThemeProvider component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   // Update localStorage and HTML class based on the theme
//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   // Toggle theme between light and dark
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children} {/* Render children components */}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use the ThemeContext
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export default ThemeProvider;
// themeprovider.js

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load the saved theme from localStorage or set it based on the system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  // Effect to apply the theme class to the document element
  useEffect(() => {

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save user preference to localStorage
    localStorage.setItem('theme', theme);
    console.log(theme)
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only change if the user hasn't set a theme
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
