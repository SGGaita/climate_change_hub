import Image from 'next/image'
import React from 'react'
import './Banner.scss'

const Banner = () => {
    return (
        <div className='hero-container'>
            <Image className='hero-image' src="/hero1.jpg" width={1920} height={856} />
            <div className='center-text'>
                <div className="preheader">Test</div>
                <h1>Taking action against climate change</h1>

            </div>
        </div>
    )
}

export default Banner