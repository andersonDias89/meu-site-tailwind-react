import React, { useState } from 'react'

import { FaReact } from 'react-icons/fa'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export const ReactSkill = () => {
    const [reactBox, setReactBox] = useState(false)

    const openBoxReact = () => {
        if (!reactBox === true) {
            setReactBox(true)

        } else {
            setReactBox(false)
        }
    }

    return (
        <div className="w-11/12 flex flex-col justify-center items-center m-auto ">

            <button onClick={openBoxReact} className="bg-neutral-900 w-full relative p-2 rounded-t-2xl" >
                <div className="flex items-center space-x-3">
                    <div className="text-5xl text-blue"><FaReact /></div>
                    <h3 className="text-4xl text-slate-200">React</h3>
                </div>
                {!reactBox === true &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxReact}><BsFillArrowDownCircleFill /></a>
                }
                {!reactBox === false &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxReact}><BsArrowUpCircle /></a>
                }
            </button>

            {!reactBox === false &&
                <div className="px-3 py-2 bg-neutral-700">
                    <p className="text-slate-300">
                        <strong className='text-blue'>React</strong> é o <strong lassName='text-blue'>framework</strong> de JavaScript que utilizo nos meus <strong lassName='text-blue'>projetos</strong>.
                        Conheço e uso os principais <strong lassName='text-blue'>hooks</strong> como: useState e useEfects. Prefiro utilizar funções
                        e <strong lassName='text-blue'>CSS in Js</strong> em minhas aplicações. Estudo atualmente os conceitos de <strong lassName='text-blue'>Context API e reducer</strong>.
                    </p>
                </div>
            }

        </div>
    )
}