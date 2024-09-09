import React, { useEffect, useState } from 'react'
import { Blogs } from '../Pages/Blogs';

export const ColorTheme = () => {


        // Load colors from localStorage, or use default colors if not set
        const [primaryColor, setPrimaryColor] = useState(
                localStorage.getItem("primaryColor") || "#3498db"
        );
        const [secondaryColor, setSecondaryColor] = useState(
                localStorage.getItem("secondaryColor") || "#2ecc71"
        );
        const [backgroundColor, setBackgroundColor] = useState(
                localStorage.getItem("backgroundColor") || "#f5f5f5"
        );


        // Update the root CSS variables when colors change
        // Update the root CSS variables when colors change
        const updateColors = () => {
                const root = document.documentElement;
                root.style.setProperty("--primary-color", primaryColor);
                root.style.setProperty("--secondary-color", secondaryColor);
                root.style.setProperty("--background-color", backgroundColor);
        };

        // Save color changes to localStorage whenever they update
        useEffect(() => {
                localStorage.setItem("primaryColor", primaryColor);
                localStorage.setItem("secondaryColor", secondaryColor);
                localStorage.setItem("backgroundColor", backgroundColor);
                updateColors();
        }, [primaryColor, secondaryColor, backgroundColor]);

        return (
              
                                <div className="fixed top-4 right-4 flex flex-row space-x-2">
                                        {/* Primary Color Picker */}
                                        <div className="relative">
                                                <input
                                                        type="color"
                                                        value={primaryColor}
                                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                                        className="absolute opacity-0 w-full h-full cursor-pointer"
                                                />
                                                <div
                                                        className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
                                                        style={{ backgroundColor: primaryColor }}
                                                />
                                        </div>

                                        {/* Secondary Color Picker */}
                                        <div className="relative">
                                                <input
                                                        type="color"
                                                        value={secondaryColor}
                                                        onChange={(e) => setSecondaryColor(e.target.value)}
                                                        className="absolute opacity-0 w-full h-full cursor-pointer"
                                                />
                                                <div
                                                        className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
                                                        style={{ backgroundColor: secondaryColor }}
                                                />
                                        </div>

                                        {/* Background Color Picker */}
                                        <div className="relative">
                                                <input
                                                        type="color"
                                                        value={backgroundColor}
                                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                                        className="absolute opacity-0 w-full h-full cursor-pointer"
                                                />
                                                <div
                                                        className="w-8 h-8 rounded-full cursor-pointer border-2 border-black "
                                                        style={{ backgroundColor: backgroundColor }}
                                                />
                                        </div>
                                </div>

        )
}
