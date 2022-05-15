import React from 'react'

export const ButtonLarge = ({ name, destiny }) => {
    return (
        <>
            <a type='button' href={destiny} className="flex justify-center items-center font-bold text-slate-200 bg-orange rounded border-4 border-orange px-8 h-10 md:h-14 md:px-10 text-lg">
                {name}
            </a>
        </>
    )
}