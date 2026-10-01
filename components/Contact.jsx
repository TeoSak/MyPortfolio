'use client'
import { useState } from 'react'
import React from 'react'
import { useLanguage } from '../app/context/LanguageContext'

export const Contact = () => {
    const { lang } = useLanguage();
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(lang === 'en' ? "sending..." : "Αποστολή...");
        const formData = new FormData(event.target);
        formData.append("access_key", "e2f414b7-a732-488c-b4a2-871de5d3ee92");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? (lang === 'en' ? "Success!" : "Επιτυχία!") : (lang === 'en' ? "Error" : "Σφάλμα"));
    };


    return (

        <form onSubmit={onSubmit} className="flex flex-col items-center text-sm py-20" id='contact'>
            <p className="text-lg text-black font-medium pb-2">{lang === 'en' ? 'Connect with me' : 'Επικοινωνήστε μαζί μου'}</p>
            <h1 className="text-5xl font-bold text-blue-600 pb-4">{lang === 'en' ? 'Get in touch' : 'Επικοινωνία'}</h1>
            <p className="text-sm text-gray-500 text-center pb-10 px-1">{lang === 'en' ? 'I would love to hear from you! If you have any questions, comments or feedback, please use the form below.' : 'Αν έχετε οποιεσδήποτε ερωτήσεις, σχόλια ή παρατηρήσεις, παρακαλώ χρησιμοποιήστε τη φόρμα παρακάτω.'}</p>

            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">{lang === 'en' ? 'Your Name' : 'Το όνομά σας'}</label>
                    <input name='name' className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder={lang === 'en' ? 'Enter your name' : 'Εισάγετε το όνομά σας'} type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">{lang === 'en' ? 'Your Email' : 'Το email σας'}</label>
                    <input name='email' className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder={lang === 'en' ? 'Enter your email' : 'Εισάγετε το email σας'} type="email" required />
                </div>
            </div>

            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">{lang === 'en' ? 'Message' : 'Μήνυμα'}</label>
                <textarea name='message' className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" placeholder={lang === 'en' ? 'Enter your message...' : 'Εισάγετε το μήνυμά σας...'} required></textarea>
            </div>

            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">{lang === 'en' ? 'Send Message' : 'Αποστολή μηνύματος'}</button>
            <p className='text-gray-500 mt-10'>{result}</p>
        </form>
    );


}
