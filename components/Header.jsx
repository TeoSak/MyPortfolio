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
                        <h1 className='text-4xl font-bold'>Front-End React <br /> Developer</h1>
                        <p className='my-4 text-gray-600'>
                            {lang === 'en' ? (
                                "I am a passionate front-end developer and IT student in economic university of Athens, eager to grow, learn new technologies, and contribute to projects that make a real impact on people’s everyday digital experience."
                            ) : (
                                "Είμαι ένας παθιασμένος front-end developer και φοιτητής Πληροφορικής στο Οικονομικό Πανεπιστήμιο Αθηνών, πρόθυμος να εξελιχθώ, να μάθω νέες τεχνολογίες και να συμβάλλω σε έργα που κάνουν πραγματική διαφορά στην καθημερινή ψηφιακή εμπειρία των ανθρώπων."
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
