import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const Toggle = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <nav className='desk:hidden text-slate-200 absolute right-16 sm:right-28 top-5'>
            {!visibility === true &&
                
                    <a className='text-2xl' onClick={() => setVisibility(true)}>
                        <GiHamburgerMenu />
                    </a>
                
            }

            {visibility === true &&
                <ul className='z-50 w-full bg-transp fixed right-0 top-0 h-full transition-all flex flex-col item-center justify-center'>
                    <div className="">
                        <a className='text-slate-200 absolute right-16 sm:right-28 top-5  text-2xl' onClick={() => setVisibility(false)}>X</a>
                    </div>
                    <div className="text-slate-200 flex justify-center items-center flex-col space-y-4 text-3xl">
                        <li>
                            <a href="#home" onClick={() => setVisibility(false)}>Home</a>
                        </li>
                        <li>
                            <a href="#aboutme" onClick={() => setVisibility(false)}>Sobre</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => setVisibility(false)}>Projetos</a>
                        </li>
                        <li>
                            <a href="#contato" onClick={() => setVisibility(false)}>Contato</a>
                        </li>
                    </div>
                </ul>
            }


        </nav>
    )
}