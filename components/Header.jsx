"use client"
import React from 'react'
import { Linkedin, Github } from "@geist-ui/icons"
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useLanguage } from '../app/context/LanguageContext'

export const Header = () => {
    const companyLogos = [assets.html, assets.css, assets.javascript, assets.reactjs, assets.next, assets.tailwind, assets.bootstrap, assets.nodejs];
    const { lang } = useLanguage();
    return (
        <>

            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>


            <div className='h-screen w-full mt-20 md:mt-0 flex flex-col justify-center items-center gap-10 px-6 md:px-16 lg:px-24 xl:px-32'>
                <div className='w-full flex-col lg:flex-row-reverse flex justify-center items-center gap-6'>
                    <div className='w-3/6 md:w-1/5 aspect-square animate-float bg-gradient-to-r from-blue-700 to-blue-300 rounded-full flex justify-center items-center'>
                        <Image src={assets.teoPhoto} alt="Theodoros Sakarelos" className='rounded-full w-full h-full pt-2 object-cover' />
                    </div>
                    <div className='px-5 text-center lg:text-left lg:w-2/5'>
                        <h3 className='text-xl font-semibold text-blue-600 py-1'>{lang === 'en' ? "Hi! I'm Theodoros Sakarelos" : "Γεια σας! Είμαι ο Θοδωρής Σακαρέλος"}</h3>
                        <h1 className='text-4xl font-bold'>Software Engineer <br /> .NET Developer</h1>
                        <p className='my-4 text-gray-600'>
                            {lang === 'en' ? (
                                "Computer Science student at the Athens University of Economics and Business, passionate about building modern web applications. I work across both frontend and backend development, with hands-on experience in C#, .NET, React, Angular, JavaScript, SQL, and REST APIs, with a focus on creating clean, functional, and user-friendly digital experiences."
                            ) : (
                                "Φοιτητής Πληροφορικής στο Οικονομικό Πανεπιστήμιο Αθηνών, με πάθος για τη δημιουργία σύγχρονων web εφαρμογών. Ασχολούμαι τόσο με το frontend όσο και με το backend development, έχοντας πρακτική εμπειρία σε C#, .NET, React, Angular, JavaScript, SQL και REST APIs, με έμφαση στη δημιουργία καθαρών, λειτουργικών και φιλικών προς τον χρήστη ψηφιακών εμπειριών."
                            )}

                        </p>
                        <div className='flex justify-center lg:justify-start gap-2'>
                            <Link href="https://github.com/TeoSak" target="_blank" rel="noopener noreferrer"><Github /></Link>
                            <Link href="https://www.linkedin.com/in/sakarelostheo" target="_blank" rel="noopener noreferrer"><Linkedin color="blue" /></Link>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "60s" }}>
                        <div className="flex">
                            {[...companyLogos, ...companyLogos].map((company, index) => (
                                <Image key={index} src={company}
                                    alt={company} className="w-10 h-10 object-cover mx-6" draggable={false} />
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                </div>
            </div>
        </>
    )


}
