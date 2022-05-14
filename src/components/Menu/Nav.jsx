import React from 'react'

export const Nav = () => {
    return (
        <nav className='w-3/5 cell:hidden'>

            <ul className='flex space-x-10 items-center h-14 text-slate-200 justify-end'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#aboutme">Sobre</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>

        </nav>
    )
}