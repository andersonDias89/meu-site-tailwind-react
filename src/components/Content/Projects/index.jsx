import { ProjectItem } from "./ProjectItem"

import ThumbRachi from '../../../assets/images/Projeto-Rachi.jpeg'
import ThumbAcademia from '../../../assets/images/Thumb-Site-Academia.jpeg'
import ThumbCurso from '../../../assets/images/Thumb-Landing-Page-Cursos.jpeg'


export const Projects = () => {
    return (
        <section className="w-auto py-36">
            <div className="w-4/5 m-auto flex flex-wrap justify-between">
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
                    description='Desafio proposto por Iuri Silva para desenvolver um web site da empresa Rachi'
                    linkSite='https://projeto-rachi.web.app'
                    linkRepo='https://github.com/andersonDias89/rachi-desafio'
                />

                <ProjectItem
                    title='Landing Page Cursos'
                    img={ThumbCurso}
                    alt='Capa da landing page cursos'
                    description='Desafio proposto por Iuri Silva para desenvolver um web site da empresa Rachi'
                    linkSite='https://projeto-rachi.web.app'
                    linkRepo='https://github.com/andersonDias89/rachi-desafio'
                />
            </div>
        </section>
    )
}