import MyPhoto from '../../../assets/images/Photo-Anderson-Dias.jpeg'

export const AboutMe = () => {
    return (
        <div className='w-full lg:w-1/2'>
            <div className='h-auto bg-transparent p-10 shadow-2xl'>
                <img className='rounded-full w-36 shadow-2xl mb-4' src={MyPhoto} alt="Foto de Anderson Dias" />

                <h2 className='mb-4 text-slate-200 text-3xl phone:text-5xl'><span className='text-blue'>Quem</span> eu sou?</h2>

                <div className='flex  space-y-3 flex-col'>
                    <p className='text-slate-200'>Trabalhei durante alguns anos na área de design, e autônomo como fotógrafo de
                        eventos. Atualmente estou no 1º período da minha graduação em <strong className='text-blue'>análise e
                            desenvolvimento de sistemas</strong> pela universidade Estácio de Sá, Ponta Negra RN.
                    </p>

                    <p className='text-slate-200'>Estou em uma conversão de carreira para a <strong className='text-blue'>área tech</strong>, preferencialmente
                        no desenvolvimento de sistemas <strong className='text-blue'>front-end</strong>, na qual, tenho desejo de atuar profissionalmente.
                        Cada dia fico mais entusiasmado
                        por cada conhecimento que venho adquirindo nessa nova trajetória profissional.</p>
                </div>
            </div>
        </div>
    )
}