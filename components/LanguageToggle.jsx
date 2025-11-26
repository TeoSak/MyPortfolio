"use client";
import { useLanguage } from "../app/context/LanguageContext";

export default function LanguageToggle() {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="hidden md:inline text-sm transition"
        >
            {lang === "en" ? "GR" : "EN"}
        </button>
    );
}
