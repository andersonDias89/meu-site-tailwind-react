import React, { useState } from 'react'

import { IoLogoJavascript } from 'react-icons/io'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export const JsSkill = () => {
    const [jsBox, setJsBox] = useState(false)

    const openBoxJs = () => {
        if (!jsBox === true) {
            setJsBox(true)

        } else {
            setJsBox(false)
        }
    }

    return (
        <div className="w-full phone:w-11/12  flex flex-col justify-center items-center m-auto ">

            <button onClick={openBoxJs} className="bg-neutral-900 w-full relative p-2 rounded-t-2xl" >
                <div className="flex items-center space-x-3">
                    <div className="text-5xl text-blue"><IoLogoJavascript /></div>
                    <h3 className="text-3xl phone:text-4xl text-slate-200">Javascript</h3>
                </div>
                {!jsBox === true &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxJs}><BsFillArrowDownCircleFill /></a>
                }
                {!jsBox === false &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxJs}><BsArrowUpCircle /></a>
                }
            </button>

            {!jsBox === false &&
                <div className="px-3 py-2 bg-neutral-700">
                    <p className="text-slate-300">
                        Conhecimento dos principais conceitos da <strong className='text-blue'>linguagem</strong> voltada para o <strong className='text-blue'>desenvolvimento
                            front-end</strong>. Venho estudando e praticando para aprimorar mais o domínio com a linguagem <strong className='text-blue'>JavaScript</strong>.
                    </p>
                </div>
            }

        </div>
    )
}