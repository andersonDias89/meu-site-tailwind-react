import React from 'react'

import { ImageHome } from './ImageHome'
import { InfoHome } from './InfoHome'

export const Home = () => {
    return (
        <section className='w-auto h-[calc(100vh-56px)] flex justify-center items-center' id="home">
            <div className='w-4/5 m-auto justify-center items-center flex flex-col lg:flex-row '>
                <InfoHome />
                <ImageHome />
            </div>
        </section>
    )
}