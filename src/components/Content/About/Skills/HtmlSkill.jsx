import React, { useState } from 'react'

import { AiFillHtml5 } from 'react-icons/ai'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export const HtmlSkill = () => {
    const [htmlBox, setHtmlBox] = useState(false)

    const openBoxHtml = () => {
        if (!htmlBox === true) {
            setHtmlBox(true)

        } else {
            setHtmlBox(false)
        }
    }

    return (
        <div className="w-full phone:w-11/12  flex flex-col justify-center items-center m-auto ">

            <button onClick={openBoxHtml} className="bg-neutral-900 w-full relative p-2 rounded-t-2xl" >
                <div className="flex items-center space-x-3">
                    <div className="text-5xl text-blue"><AiFillHtml5 /></div>
                    <h3 className="text-3xl phone:text-4xl text-slate-200">Javascript</h3>
                </div>
                {!htmlBox === true &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxHtml}><BsFillArrowDownCircleFill /></a>
                }
                {!htmlBox === false &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxHtml}><BsArrowUpCircle /></a>
                }
            </button>

            {!htmlBox === false &&
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