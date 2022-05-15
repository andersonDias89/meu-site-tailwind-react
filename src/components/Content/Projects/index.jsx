import { ProjectItem } from "./ProjectItem"

import ThumbRachi from '../../../assets/images/Projeto-Rachi.jpeg'
import ThumbAcademia from '../../../assets/images/Thumb-Site-Academia.jpeg'
import ThumbCurso from '../../../assets/images/Thumb-Landing-Page-Cursos.jpeg'


export const Projects = () => {
    return (
        <section className="w-auto py-12 phone:py-16" id="projects">
            <div className="w-11/12 phone:w-4/5 m-auto flex flex-wrap justify-center items-center lg:flex-row lg:space-x-0 lg:justify-between">
                <ProjectItem
                    title='Site Rachi'
                    img={ThumbRachi}
                    alt='Capa do site Rachi'
                    description='Desafio proposto por Iuri Silva para desenvolver um web site da empresa Rachi'
                    linkSite='https://projeto-rachi.web.app'
                    linkRepo='https://github.com/andersonDias89/rachi-desafio'
                />

                <ProjectItem
                    title='Site Academia'
                    img={ThumbAcademia}
                    alt='Capa do site Academia'
                    description='Projeto criado para portfólio.Trata-se de um site para academia divulgando os seus serviços'
                    linkSite='https://academia-projeto.web.app'
                    linkRepo='https://github.com/andersonDias89/academia-treino'
                />

                <ProjectItem
                    title='Landing Page Cursos'
                    img={ThumbCurso}
                    alt='Capa da landing page cursos'
                    description='Projeto realizado para o meu portfólio. Trata-se de uma landing page de divulgação para cursos de programação.'
                    linkSite='https://curso-dev-projeto.web.app'
                    linkRepo='https://github.com/andersonDias89/Landing-Page-Dev'
                />
            </div>
        </section>
    )
}