'use client';
import React, { useState, useRef } from 'react';
import { workData } from '../assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from '@geist-ui/icons';
import { useLanguage } from '../app/context/LanguageContext';

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [positions, setPositions] = useState({});
    const [visibleIndex, setVisibleIndex] = useState(null);
    const divRefs = useRef([]);
    const { lang } = useLanguage();

    const handleMouseMove = (e, index) => {
        const bounds = divRefs.current[index].getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        setPositions((prev) => ({ ...prev, [index]: { x, y } }));
    };

    return (
        <div className="w-full min-h-screen bg-gray-100" id="projects">
            <h1 className="text-blue-600 text-center py-6 text-5xl font-bold">
                {lang === 'en' ? 'Projects' : 'Δουλειές'}
            </h1>

            <div className="flex flex-col items-center w-full p-4">
                {workData.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const isHovered = hoveredIndex === index;
                    const pos = positions[index] || { x: 0, y: 0 };

                    const ImageOrVideo = (
                        <div
                            className="relative flex justify-center items-center overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={project.bgImage}
                                alt={project.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className={`rounded-lg h-auto w-auto max-w-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                                    }`}
                                loading="eager"
                            />
                            <video
                                src={project.video}
                                muted
                                loop
                                autoPlay
                                playsInline
                                className={`absolute top-0 left-0 h-auto w-auto max-w-full max-h-full rounded-lg object-contain transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </div>
                    );

                    return (
                        <div
                            key={index}
                            ref={(el) => (divRefs.current[index] = el)}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseEnter={() => setVisibleIndex(index)}
                            onMouseLeave={() => setVisibleIndex(null)}

                            className="relative md:w-7/12 shadow-2xl bg-white grid grid-cols-1 my-4 lg:grid-cols-2 rounded-lg p-1 overflow-hidden"
                        >
                            {visibleIndex === index && (
                                <div

                                    className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-60 h-60 absolute z-0 transition-opacity duration-300 rounded-full"
                                    style={{
                                        top: pos.y - 120,
                                        left: pos.x - 120,
                                    }}
                                />
                            )}

                            {isEven ? (
                                <>

                                    <div className="relative z-10 bg-white rounded-lg overflow-hidden">
                                        {ImageOrVideo}
                                    </div>

                                    <div className="relative z-10 bg-white p-4 rounded-lg flex flex-col justify-center">
                                        <h2 className="text-xl font-bold">{project.title}</h2>
                                        <p className="text-gray-600">{lang === 'en' ? project.description : project.description_gr}</p>
                                        <div className="flex justify-start items-center gap-4 mt-4">
                                            <div className="bg-blue-600 border border-blue-600 text-white rounded-md px-3 py-1 hover:bg-gray-100 hover:text-blue-600 transition">
                                                <Link href={project.code} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1">
                                                    {lang === 'en' ? 'Code' : 'Κώδικας'} <Github className="w-5 h-5" />
                                                </Link>
                                            </div>
                                            <div className="border border-blue-600 text-blue-600 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white transition">
                                                <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1">
                                                    {lang === 'en' ? 'Live Demo' : 'Προβολή Σελίδας'}
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative z-10 bg-white p-4 rounded-lg flex flex-col justify-center order-2 lg:order-1">
                                        <h2 className="text-xl font-bold">{project.title}</h2>
                                        <p className="text-gray-600">{lang === 'en' ? project.description : project.description_gr}</p>
                                        <div className="flex justify-start items-center gap-4 mt-4">
                                            <div className="bg-blue-600 border border-blue-600 text-white rounded-md px-3 py-1 hover:bg-gray-100 hover:text-blue-600 transition">
                                                <Link href={project.code} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1">
                                                    {lang === 'en' ? 'Code' : 'Κώδικας'} <Github className="w-5 h-5" />
                                                </Link>
                                            </div>
                                            <div className="border border-blue-600 text-blue-600 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white transition">
                                                <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1">
                                                    {lang === 'en' ? 'Live Demo' : 'Προβολή Σελίδας'}
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-10 bg-white rounded-lg overflow-hidden order-1 lg:order-2">
                                        {ImageOrVideo}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
