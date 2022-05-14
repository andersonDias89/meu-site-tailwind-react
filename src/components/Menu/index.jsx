import React from 'react'

import { Logo } from './Logo';
import { Nav } from './Nav';
import { Toggle } from './Toggle';

export const Menu = () => {
    return (
        <header className='w-auto h-14 z-40'>
            <div className='flex w-4/5 m-auto border-b-2'>
                <Logo />
                <Nav />
                <Toggle />
            </div>
        </header>
    )
}