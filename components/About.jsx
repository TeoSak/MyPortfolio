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
                        {lang === 'en' ? ("Hi, I'm Teo! I am a junior front-end developer and 3rd year student of Computer Science in Athens University of Business and Economics. My jurney into web development began two years ago when I started learning HTML, CSS, and JavaScript on my own. Since then, I have been passionate about creating beautiful and functional websites.")
                            :
                            ("Γεια σας, είμαι ο Θοδωρής! Είμαι junior front-end developer και φοιτητής 3ου έτους Πληροφορικής στο Οικονομικό Πανεπιστήμιο Αθηνών. Το ταξίδι μου στον κόσμο της ανάπτυξης ιστοσελίδων ξεκίνησε πριν από δύο χρόνια, όταν άρχισα να μαθαίνω HTML, CSS και JavaScript μόνος μου. Από τότε, είμαι παθιασμένος με τη δημιουργία όμορφων και λειτουργικών ιστοσελίδων.")}


                    </p>
                    <p className='text-gray-700 mt-4'>
                        {lang === 'en' ? ("I have some experience working with HTML5, CSS3, and responsive design techniques, React, Tailwind CSS, Bootstrap, Next js, Node js, Api, Git and other modern web technologies.")
                            :
                            ("Έχω κάποια εμπειρία στην εργασία με HTML5, CSS3 και τεχνικές responsive design, React, Tailwind CSS, Bootstrap, Next js, Node js, Api, Git και άλλες σύγχρονες τεχνολογίες web.")}
                    </p>
                    <p className='text-gray-700 mt-4'>
                        {lang === 'en' ? "I enjoy solving problems and continuously improving my skills to stay up-to-date with the latest trends in web development."
                            :
                            "Απολαμβάνω να λύνω προβλήματα και να βελτιώνω συνεχώς τις δεξιότητές μου για να παραμένω ενημερωμένος με τις τελευταίες τάσεις στην ανάπτυξη ιστοσελίδων."}
                    </p>
                </div>
                <div className='hidden lg:block pe-40'>
                    <Image src={work} alt="Profile" className='rounded' />
                </div>
            </div>

        </div>
    )
}
