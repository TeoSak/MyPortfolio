'use client'
import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import work from '../public/work-4.png'
import { useLanguage } from '../app/context/LanguageContext'

export const About = () => {
    const { lang } = useLanguage();
    return (
        <div className='w-full h-screen bg-cover bg-center pt-20' id='about' style={{ backgroundImage: `url('/bg-2.jpg')` }}>
            <h1 className='text-blue-600 text-center py-6 text-5xl font-bold'>{lang === 'en' ? 'About Me' : 'Το Προφίλ μου'}</h1>
            <div className='mt-10 flex flex-col lg:flex-row items-center justify-center px-6 md:px-20'>
                <div className='md:p-20 md:ps-40'>
                    <p className='text-gray-700 mt-4'>
                        {lang === 'en' ? ("Hi, I'm Teo! I'm a Junior Software Engineer and 4th-year Computer Science student at the Athens University of Economics and Business.")
                            :
                            ("Γεια σας, είμαι ο Θοδωρής! Είμαι Junior Software Engineer και φοιτητής 4ου έτους Πληροφορικής στο Οικονομικό Πανεπιστήμιο Αθηνών.")}


                    </p>
                    <p className='text-gray-700 mt-4'>
                        {lang === 'en' ? ("My journey into software development began with learning HTML, CSS, and JavaScript independently. Since then, I have expanded my skills into both frontend and backend development, building full-stack applications and working with technologies such as C#, .NET, React, Angular, JavaScript, TypeScript, SQL, Node.js, MongoDB, REST APIs, Tailwind CSS, and Git.")
                            :
                            ("Η πορεία μου στον προγραμματισμό ξεκίνησε με την αυτοδίδακτη εκμάθηση HTML, CSS και JavaScript. Από τότε, έχω διευρύνει τις γνώσεις μου τόσο στο frontend όσο και στο backend development, δημιουργώντας full-stack εφαρμογές και δουλεύοντας με τεχνολογίες όπως C#, .NET, React, Angular, JavaScript, TypeScript, SQL, Node.js, MongoDB, REST APIs, Tailwind CSS και Git.")}
                    </p>
                    <p className='text-gray-700 mt-4'>
                        {lang === 'en' ? "I enjoy solving problems, learning new technologies, and turning ideas into clean, functional, and user-friendly applications. I'm continuously developing my skills with a particular interest in .NET and backend development."
                            :
                            "Μου αρέσει να επιλύω προβλήματα, να μαθαίνω νέες τεχνολογίες και να μετατρέπω ιδέες σε καθαρές, λειτουργικές και φιλικές προς τον χρήστη εφαρμογές. Συνεχίζω να εξελίσσω τις γνώσεις μου, με ιδιαίτερο ενδιαφέρον για το .NET και το backend development."}
                    </p>
                </div>
                <div className='hidden lg:block pe-40'>
                    <Image src={work} alt="Profile" className='rounded' />
                </div>
            </div>

        </div>
    )
}
