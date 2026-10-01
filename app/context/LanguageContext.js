"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("lang");
        if (stored) setLang(stored);
    }, []);

    // Save to localStorage when changed
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLanguage = () => {
        setLang(prev => (prev === "en" ? "gr" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
