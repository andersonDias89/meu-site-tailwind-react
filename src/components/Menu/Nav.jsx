import React from 'react'

export const Nav = () => {
    return (
        <nav className='w-3/5 cell:hidden'>

            <ul className='flex space-x-10 items-center h-14 text-slate-200 justify-end'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>

        </nav>
    )
}