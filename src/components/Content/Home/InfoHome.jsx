import Curriculo from '../../../assets/doc/Curriculum-Atualizado-Anderson-Dias.pdf'
import { ButtonLarge } from '../../Buttons/ButtonLarge'
import { ButtonMedium } from '../../Buttons/ButtonMedium'

export const InfoHome = () => {
    return (
        <div className='w-full lg:w-6/12 flex flex-col justify-center items-center mt-7'>
            <p className='font-extralight text-slate-200 text-2xl md:text-3xl tracking-wider'>Olá, eu me chamo</p>
            <h1 className='text-4xl md:text-5xl text-blue tracking-wider'>Anderson <span className='text-slate-300'>Dias</span></h1>
            <p className='font-light text-slate-100 text-2xl md:text-3xl tracking-wider' >Desenvolvedor Front-end</p>

            <div className='flex space-x-3 mt-2'>
                <ButtonLarge name='Projetos' destiny='#projects' />
                <ButtonMedium name='CV' destiny={Curriculo} />
            </div>
        </div>
    )
}