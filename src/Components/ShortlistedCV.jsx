import React from 'react'
import Card from './Card1'
function ShortlistedCV() {
    return (
        <div className='w-full flex flex-col place-items-center gap-10'>
            <h1 className='w-full text-start px-20 text-3xl font-bold text-[rgb(37,99,235)]'>ShortListed CVs</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default ShortlistedCV
