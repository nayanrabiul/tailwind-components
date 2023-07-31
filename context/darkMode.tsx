'use client';
import React, { useState, useEffect } from 'react';

let ThemeContext = React.createContext('light');

export const useTheme = () => React.useContext(ThemeContext);

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
    let [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

    useEffect(() => {
        if (theme === 'system') {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.remove('light');
        } else
            document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    let setLightTheme = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    };
    let setDarkTheme = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    };
    let setSystemTheme = () => {
        setTheme('system');
        localStorage.setItem('theme', 'system');
    };

    return (
        <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme, setSystemTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
