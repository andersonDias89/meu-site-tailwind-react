import React, { useState } from 'react'

import { BsGithub } from 'react-icons/bs'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export const GithubSkill = () => {
    const [gitBox, setGitBox] = useState(false)

    const openBoxGit = () => {
        if (!gitBox === true) {
            setGitBox(true)

        } else {
            setGitBox(false)
        }
    }

    return (
        <div className="w-11/12 flex flex-col justify-center items-center m-auto ">

            <button onClick={openBoxGit} className="bg-neutral-900 w-full relative p-2 rounded-t-2xl" >
                <div className="flex items-center space-x-3">
                    <div className="text-5xl text-blue"><BsGithub /></div>
                    <h3 className="text-4xl text-slate-200">GitHub</h3>
                </div>
                {!gitBox === true &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxGit}><BsFillArrowDownCircleFill /></a>
                }
                {!gitBox === false &&
                    <a className='text-3xl absolute top-4 right-3 text-orange' onClick={openBoxGit}><BsArrowUpCircle /></a>
                }
            </button>

            {!gitBox === false &&
                <div className="px-3 py-2 bg-neutral-700">
                    <p className="text-slate-300">
                        Tenho boa experiência com git / <strong className='text-blue'>GitHub</strong> para <strong className='text-blue'>versionamento de códigos</strong>.
                        Criações de <strong className='text-blue'>repositórios</strong>, novas branchs, pull request e commits. Para visualizar
                        o meu perfil no GitHub <a href='https://github.com/andersonDias89' target='_blank'>clique aqui</a>
                    </p>
                </div>
            }

        </div>
    )
}