'use client'
import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className='mt-5 w-full'>
            <h1 className="text-3xl font-semibold text-center">Teo<span className="text-blue-600">.dev</span></h1>
            <div className='flex gap-2 justify-center items-center'>
                <Image src={assets.mail_icon} alt='mail icon' className='w-7 h-5' />
                <p className='text-gray-500'>sakarelostheo@gmail.com</p>
            </div>
            <div className='md:px-32 py-4 w-full'>
                <hr />
                <p className="text-center text-gray-500 py-2">© 2025 Teo.dev. All rights reserved.</p>
            </div>
        </div>
    )
}
