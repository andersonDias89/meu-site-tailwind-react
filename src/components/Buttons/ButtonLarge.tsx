import React from 'react'

export const ButtonLarge = ({ name, destiny }) => {
    return (
        <>
            <a type='button' href={destiny} className="flex justify-center items-center font-bold text-slate-200 bg-orange rounded border-4 border-orange px-10 h-14 text-lg" target="_blank">
                {name}
            </a>
        </>
    )
}