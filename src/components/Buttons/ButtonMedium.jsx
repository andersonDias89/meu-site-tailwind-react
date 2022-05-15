import React from 'react'

export const ButtonMedium = ({ name, destiny }) => {
    return (
        <>
            <a type='button' href={destiny} className="flex justify-center items-center bg-transparent rounded border-4 border-orange px-8 h-10 md:px-10 md:h-14 text-lg text-orange" target="_blank">
                {name}
            </a>
        </>
    )
}