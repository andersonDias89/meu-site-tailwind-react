import React, { useState } from 'react'

import { IoLogoCss3 } from 'react-icons/io'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export const CssSkill = () => {
    const [cssBox, setCssBox] = useState(false)

    const openBoxCss = () => {
        if (!cssBox === true) {
            setCssBox(true)

        } else {
            setCssBox(false)
        }
    }

    return (
        <div className="w-full phone:w-11/12  flex flex-col justify-center items-center m-auto ">

            <button onClick={openBoxCss} className="bg-neutral-900 w-full relative p-2 rounded-t-2xl" >
                <div className="flex items-center space-x-3">
                    <div className="text-5xl text-blue"><IoLogoCss3 /></div>
                    <h3 className="text-3xl phone:text-4xl text-slate-200">CSS</h3>
                </div>
                {!cssBox === true &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxCss}><BsFillArrowDownCircleFill /></a>
                }
                {!cssBox === false &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxCss}><BsArrowUpCircle /></a>
                }
            </button>

            {!cssBox === false &&
                <div className="px-3 py-2 bg-neutral-700">
                    <p className="text-slate-300">
                        Tenho experiência com <strong className='text-blue'>Flex Box</strong> para posicionamento dos elementos.
                        Busco uma melhor <strong className='text-blue'>responsividade</strong> com media query. Conhecimentos
                        básicos em ainimação no <strong className='text-blue'>CSS</strong>.
                    </p>
                </div>
            }

        </div>
    )
}