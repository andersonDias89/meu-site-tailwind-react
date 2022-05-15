import React from 'react' 
import VetorContato from '../../../assets/images/Vetor-Contato.png'

import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export const Contact = () => {
    return (
        <section className='w-auto bg-neutral-800 py-12 phone:py-16' id="contact">
            <div className='w-4/5 m-auto flex flex-col justify-center items-center sm:flex-row'>
                <div className='w-full sm:w-1/2  flex items-center justify-center'>
                    <img className='h-64 md:h-72' src={VetorContato} alt="Imagem ilustrativa de contato" />
                </div>

                <div className='w-full sm:w-1/2  flex items-center justify-center'>

                    <div className="">
                        <h2 className='text-slate-200 text-3xl md:text-4xl mb-5'>Contato</h2>
                        <div className="text-slate-200">
                            <div className="phone">
                                <p className='text-lg md:text-2xl'>84 99637-4284</p>
                            </div>
                            <div>
                                <p>andersondiasmd21@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex space-x-6 text-orange text-4xl md:text-5xl items-center mt-6">

                            <a href="https://github.com/andersonDias89" target={'_blanck'}><BsGithub /></a>
                            <a href="https://www.linkedin.com/in/anderson-dias-bb7b3122b/" target={'_blanck'}><AiFillLinkedin /></a>
                            <a href="https://www.instagram.com/andersondias_dev/" target={'_blanck'}><AiFillInstagram /></a>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}