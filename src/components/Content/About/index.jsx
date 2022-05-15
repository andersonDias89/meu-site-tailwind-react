import React from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'



export const About = () => {
    return (
        <section className='w-auto bg-neutral-800 py-12 phone:py-16' id='aboutme'>
            <div className='w-11/12 phone:w-4/5 m-auto flex flex-col lg:flex-row justify-center items-center space-y-10'>
                <AboutMe />
                <Skills />
            </div>
        </section>
    )
}