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
        <li className='w-11/12 flex flex-row gap-2'>
            <input type="checkbox" />
            <div className="info p-2 bg-white rounded-lg flex start gap-4 lg:flex-nowrap flex-wrap h-fit">
                <div className='xl:w-44 sm:w-48 w-full place-items-center flex'>
                    <Image src={imge1} width={40} className='rounded-lg h-10' alt="no  " />
                    <div className='lg:ms-auto ms-2'><h1 className='text-lg font-bold mb-[-6px]'>John Doe</h1><h2 className=' text-slate-400 text-[12px] mt-0'>UI UX designer</h2></div>
                </div>
                <div className=" px-2 lg:w-3/6 w-full lg:max-h-12 h-fit overflow-y-scroll lg:order-2 order-4" style={{ scrollbarWidth: "none" }}>
                    <p className='word-break text-[15px] '>From france, paris, I have rich experience in web design, also I am good at wordpress and I love to talk with you about our unique. </p>
                </div>
                <div className="flex flex-col p-1  px-3 lg:order-3 order-2">
                    <div><TbCapsuleHorizontalFilled className='inline' color='blue' /> Skills</div>
                    <div className='flex flex-row gap-1'>
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' />
                        <FaStopCircle size={20} color='blue' /></div>
                </div>
                <div className="xl:px-5 px-3 max-h-12 text-center rounded-lg lg:order-4 order-3 text-white text-[10px]
                place-content-center  " style={{ background: 'linear-gradient(to right,skyblue, blue)' }}>
                    <h1 className=''><GoDownload className='inline' size={10} /> download for 30 credits</h1>
                </div>
                <div className="mx-auto place-content-center place-items-center xl:flex hidden order-5">
                    <FaMinusSquare className='inline' color='blue' />
                </div>
            </div>
        </li>
    )
}

export default Card
