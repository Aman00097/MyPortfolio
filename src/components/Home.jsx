import React, { useState } from 'react'
import { programmingLanguageLogos, socialMediaIcons } from '../api'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
    const [logos, setLogos] = useState(programmingLanguageLogos)

    function parallax(e) {
        setLogos(logos.map(ele => {
            const x = (window.innerHeight - e.pageX * ele.speed) / 100
            const y = (window.innerWidth - e.pageY * ele.speed) / 100
            return { ...ele, xAxis: x, yAxis: y }
        }))
    }

    return (
        <section className='w-full h-screen relative overflow-hidden flex items-center justify-center' onMouseMove={parallax}>
            {logos.map(ele => <div key={ele.logo} className='w-screen h-screen absolute top-0 left-0' style={{ translate: `${ele.xAxis}px ${ele.yAxis}px` }} >
                <img src={`./public/icons/${ele.logo}.svg`} alt={ele.logo} style={{ width: '50px', translate: `${ele.xAxisPermenent}vw ${ele.yAxisPermenent}vh`, opacity: '.5' }} />
            </div>)}

            {/* <img src="./public/icons/logo.svg" alt="logo" className='absolute w-[400px]' /> */}
            <img src="./icons/logo.svg" alt="logo" className='absolute w-[400px]' />

            {/* <ul className='flex items-center justify-center gap-7 flex-col absolute top-0 right-0 h-full p-5'>
                {socialMediaIcons.map(ele => (<li key={ele.name} className='hover:bg-secondary rounded-full cursor-pointer p-0 hover:p-3 ease-in-out duration-300' title={ele.name} >
                    <a href={ele.url} target="_blank">
                        <img src={`./public/icons/${ele.name}.svg`} alt={ele.name} className='w-[25px]' />
                    </a>
                </li>))}
            </ul> */}

            <div className='absolute top-[30%] left-[10%] font-cursive'>
                <h1 className='text-7xl font-medium mb-5'>Hi, I'm Aman</h1>
                <h2 className='text-3xl font-medium text-accent'>&lt;<span className='text-text'>
                    <TypeAnimation
                        sequence={[
                            'Software Developer',
                            1000,
                            'MERN Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        cursor={false}
                    />
                </span>/&gt;</h2>
            </div>

            <div className='absolute bottom-10 flex items-center flex-col gap-2 group'>
                <a href="#latestWorks"><button type='button' className='p-2 px-5 rounded group-hover:scale-110 ease-in-out duration-300' style={{ background: 'linear-gradient(308deg, #8ee9be 0%, #821a58 113% 113%, #d87038 100%)' }}>Latest Works</button></a>
                <img src="./public/icons/arrow.svg" alt="arrow" className='w-[25px] absolute top-8 group-hover:top-12 ease-in-out duration-300' />
            </div>
        </section>
    )
}