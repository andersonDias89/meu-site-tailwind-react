export const ProjectItem = ({ img, alt, title, description, linkSite, linkRepo }) => {
    return (
        <div className="w-80 h-96 relative bg-neutral-800 rounded-md">
            <div className="p-3 ">
                <img src={img} alt={alt} />
            </div>
            <div className="px-4">
                <h2 className="text-blue text-lg">{title}</h2>
                <p className="text-slate-200">{description}</p>
            </div>
            <div className="px-4 space-x-2 absolute bottom-5 left-2 flex">
                <a type='button' href={linkSite} className="flex justify-center items-center font-bold text-slate-200 bg-orange rounded border-4 border-orange px-8 h-10 text-lg" target="_blank">
                    Live
                </a>
                <a type='button' href={linkRepo} className="flex justify-center items-center bg-transparent rounded border-4 border-orange px-8 h-10 text-lg text-orange" target="_blank">
                    Repo
                </a>
            </div>
        </div>
    )
}