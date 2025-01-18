'use client'

import React from 'react'
import imge1 from '../Images/image1.jpg'
import { FaStopCircle } from "react-icons/fa";
import { TbCapsuleHorizontalFilled } from "react-icons/tb";
import { FaMinusSquare } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Image from 'next/image';
function Card({ }) {
    return (
        <li className='w-11/12 flex flex-row gap-2 '>
            <input type="checkbox" />
            <div className="info p-2 bg-white rounded-lg flex start gap-4 lg:flex-nowrap flex-wrap h-fit">
                <div className='lg:w-44 min-[600]:w-32 w-full place-items-center flex order-1'>
                    <Image src={imge1} width={40} className='rounded-lg h-10' alt="no  " />
                    <div className='lg:ms-auto ms-2'><h1 className='text-lg font-bold mb-[-6px]'>John Doe</h1><h2 className=' text-slate-400 text-[12px] mt-0'>UI UX designer</h2></div>
                </div>
                <div className="about  lg:w-3/6 w-full   px-2 lg:order-2 order-4 lg:max-h-12 h-fit overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
                    <p className='word-break text-[15px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui quos eius, n the ourfd  neque molestias lroe mepsym ayad </p>
                </div>
                <div className="skills flex flex-col w-44 0 lg:order-3 order-2 p-1">
                    <div><TbCapsuleHorizontalFilled className='inline' color='blue' /> Skills</div>
                    <div className='flex flex-row gap-1'>
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' /></div>
                </div>
                <div className="download w-44 max-h-12 text-center rounded-lg text-white text-[10px]
                place-content-center lg:ms-0 ms-auto lg:order-4 order-3" style={{ background: 'linear-gradient(to right,skyblue, blue)' }}>
                    <h1 className=''><GoDownload className='inline' size={10} /> download for 30 credits</h1>
                </div>
                <div className="checkbox w-10 me-2 place-content-center place-items-center xl:block hidden order-5">
                    <FaMinusSquare className='inline' color='blue' />
                </div>
            </div>
        </li>
    )
}

export default Card
