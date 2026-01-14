import { create } from "framer-motion/m";
import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
        changeTheme()
    };
    
    const changeTheme = () => {
        document.body.classList.toggle('dark')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}