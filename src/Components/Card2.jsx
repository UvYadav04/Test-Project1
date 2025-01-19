'use client'
import { GoDotFill } from "react-icons/go";

import React from 'react'
function Card2({ check, selected, status, credits, amount, id }) {
    console.log()
    return (
        <>
            <tr className='py-4 border-[1px] flex justify-evenly max-w-[100vw] overflow-hidden'>
                <td className=' w-16 text-center text-xl'><input onChange={() => check(id)} defaultChecked={selected} checked={selected} type="checkbox" /></td>
                <td className='md:w-32 flex-1 text-start'>{id}</td>
                <td className='md:w-32 flex-1 text-start text-green-700'>{status === "ok" ? <><GoDotFill className="inline mb-1" color={'rgb(21 128 61)'} /> Complete </> : "Incomplete"}</td>
                <td className='md:w-32 flex-1 text-start'>{credits}</td>
                <td className='md:w-32 flex-1 text-start'>{amount}</td>
            </tr>
            <hr />
        </>

    )
}

export default Card2
