import React from 'react'
import { projects, publicUrl } from '../api'

export default function LatestWorks() {
    return (
        <section id='latestWorks' className='p-5 pb-0'>
            <div className='flex'>
                <h1 className='border-2 border-text text-text text-3xl font-semibold rounded inline-block p-3 px-5 m-auto'>Latest Works</h1>
            </div>
            <ul className='flex items-center justify-center gap-24 flex-col p-16 relative'>
                {projects.map(ele => (<li key={ele.id} className={`flex items-center justify-between gap-32 ${ele.reverse ? 'flex-row-reverse' : ''} relative`}>
                    <div className={`h-[1px] absolute ${ele.reverse ? 'left-1/2 right-1/4' : 'left-1/4 right-1/2'} top-1/2`} style={{ backgroundColor: ele.hexColor }}></div>
                    <div className={`w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2 bg-text z-10 hover:scale-125 ease-in-out duration-100 cursor-pointer`} style={{ border: `3px solid ${ele.hexColor}` }}></div>
                    <a href={ele.link} target='_blank' className='w-full flex items-center justify-center relative group  hover:scale-105 ease-in-out duration-100'>
                        <div className={`flex gap-3 p-2 rounded cursor-pointer absolute top-2 group-hover:-top-14 ease-in-out duration-100`} style={{ backgroundColor: ele.hexColor }}>
                            <h3>{ele.name}</h3>
                            <img src={`${publicUrl}/icons/external-link.svg`} alt="external-link" className='w-[20px]' />
                            <span className={`w-4 h-4 absolute top-8 left-1/2 -translate-x-1/2 rotate-45`} style={{ backgroundColor: ele.hexColor }}></span>
                        </div>
                        <img src={`${publicUrl}/images/${ele.id}.png`} alt={ele.id} className='w-[400px] cursor-pointer relative' style={{filter: `drop-shadow(0 0 30px ${ele.hexColor})`}}/>
                    </a>
                    <div className='w-full flex justify-center flex-col gap-5'>
                        <h1 className={`text-3xl font-semibold`} style={{ color: ele.hexColor }}>{ele.name}</h1>
                        <p>{ele.description}</p>
                        <ul className='flex  flex-wrap gap-3'>
                            {ele.tag.map(tag => <li key={tag} className='min-w-[50px] border rounded-full px-3 py-1'>#{tag}</li>)}
                        </ul>
                    </div>
                </li>))}
                <div className='w-[2px] h-full bg-text absolute'></div>
            </ul>
        </section>
    )
}
