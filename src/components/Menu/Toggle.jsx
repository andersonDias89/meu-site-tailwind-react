import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const Toggle = () => {
    const [visibility, setVisibility] = useState(false)

    return (
        <nav className='lg overflow-hidden'>
                    {!visibility === true &&
                         <a onClick={() => setVisibility(true)}>
                            <GiHamburgerMenu/>
                         </a>
                    }

                    {visibility === true &&
                        <ul>
                            <div className="btn-close">
                                <a onClick={() => setVisibility(false)}>X</a>
                            </div>
                            <div className="links">
                                <li>
                                    <a href="#home" onClick={() => setVisibility(false)}>Home</a>
                                </li>
                                <li>
                                    <a href="#sobre" onClick={() => setVisibility(false)}>Sobre</a>
                                </li>
                                <li>
                                    <a href="#projetos"  onClick={() => setVisibility(false)}>Projetos</a>
                                </li>
                                <li>
                                    <a href="#contato"  onClick={() => setVisibility(false)}>Contato</a>
                                </li>
                            </div>
                        </ul>
                    }


                </nav>
    )
}