import React from 'react'

import { ImageHome } from './ImageHome'
import { InfoHome } from './InfoHome'

export const Home = () => {
    return (
        <section className='w-auto h-[calc(100vh-70px)]' id="home">
            <div className='w-4/5 m-auto flex relative'>
                <InfoHome />
                <ImageHome />
            </div>
        </section>
    )
}