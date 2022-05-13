import React from 'react'

export const ButtonMedium = ({ name, destiny }) => {
    return (
        <>
            <a type='button' href={destiny} className="flex justify-center items-center bg-transparent rounded border-4 border-orange px-10 h-14 text-lg text-orange" target="_blank">
                {name}
            </a>
        </>
    )
}