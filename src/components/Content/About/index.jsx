import React from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'



export const About = () => {
    return (
        <section className='w-auto bg-neutral-800 py-32'>
            <div className='w-4/5 m-auto flex'>
                <AboutMe />
                <Skills/>
            </div>
        </section>
    )
}