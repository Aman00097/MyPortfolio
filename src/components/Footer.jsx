import React from 'react'
import { publicUrl } from '../api'

export default function Footer() {
    return (
        <footer className='flex justify-center items-center flex-col gap-5 p-10'>
            <a href="#top" className='relative group  hover:scale-105 ease-in-out duration-100'>
                <div className={`flex gap-3 bg-secondary p-2 rounded cursor-pointer -z-10 absolute top-2 group-hover:-top-14 ease-in-out duration-100`}>
                    <h3>To Top</h3>
                    <span className={`w-4 h-4 absolute top-8 left-1/2 -translate-x-1/2 rotate-45 bg-secondary`} ></span>
                </div>
                <img src={`${publicUrl}/icons/logo.svg`} alt="logo" className='w-20 bg-background' />
            </a>
            <p className='flex items-center justify-center gap-2 text-xl'>Aman Mourya <img src={`${publicUrl}/icons/copyright.svg`} alt='copyright' className='w-4' /> 2024</p>
        </footer>
    )
}
