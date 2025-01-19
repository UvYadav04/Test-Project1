'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PiFediverseLogo } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiSignOut } from "react-icons/pi";
import { IoLogoBuffer } from "react-icons/io5";
import { BiLogoCodepen } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { MyContext, useMyContext } from '@/Contexts/Hamburger';
function Sidebar() {
    const { ham, setham, selected, setselected } = useMyContext()
    const [width, setwidth] = useState<number>(1476)

    useEffect(() => {

        const handleResize = () => {
            setwidth(window.innerWidth)
            if (window.innerWidth <= 900) {
                setham(false)

            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={width > 900 ? `xl:w-96 lg:w-72 w-60 sticky top-0 h-screen` : ham ? `fixed top-0 left-0 w-72 h-screen bg-white` : 'hidden'} >
            <div className="columns  xl:w-2/3 lg:w-4/5 w-11/12 ms-auto flex flex-col justify-start text-slate-400 font-semibold" style={{ height: "inherit" }}>


                <div className="logo  py-10 text-3xl relative ">
                    <button className='tablet:hidden block absolute top-2 right-2 w-fit float-right ' onClick={() => setham(!ham)}><MdCancel size={30} /></button>
                    <PiFediverseLogo className='inline mb-2' size={80} color='rgb(37 99 235)' /> <h1 className='inline text-blue-600 font-extrabold  h-fit'> AI CV</h1>
                </div>
                <ul className="features flex flex-col gap-6 text-base py-3 lg:mt-10 md:mt-5 mt-0   ">

                    <div className='flex  p-0 overflow-visible relative'>
                        <li className={`py-1 cursor-pointer ${selected == 1 ? "text-[rgb(37,88,235)]" : null} `}><BiLogoCodepen color='rgb(37 99 235)' size={30} className='inline me-2' />Search CV</li>
                        {/* {selected === 1 ? <div className='w-2 rounded-md h-16 absolute right-[-2px] top-[-12px] bg-[rgb(37,99,235)] overflow-visible'></div> : null} */}

                    </div>

                    <div className='flex  p-0 overflow-visible relative'>
                        <li className={`py-1 cursor-pointer ${selected == 2 ? "text-[rgb(37,88,235)]" : null} `} onClick={() => setselected(2)}><IoLogoBuffer color='rgb(148 163 184' className='inline me-2' size={30} />Shortlisted CV</li>
                        {selected === 2 ? <div className='w-2 rounded-md h-16 absolute right-[-5px] top-[-12px] bg-[rgb(37,99,235)] overflow-visible'></div> : null}
                    </div>


                    <div className='flex  p-0 overflow-visible relative'>
                        <li className={`py-1 cursor-pointer ${selected == 3 ? "text-[rgb(37,88,235)]" : null} `} onClick={() => setselected(3)}><FiMessageSquare color='rgb(148 163 184' className="inline me-2" size={30} /> Transaction History </li>
                        {selected === 3 ? <div className='w-2 rounded-md h-16 absolute right-[-5px] top-[-12px] bg-[rgb(37,99,235)] overflow-visible'></div> : null}
                    </div>

                    <div className='flex  p-0 overflow-visible relative'>
                        <li className={`py-1 cursor-pointer`}><FiSettings color='rgb(148 163 184' className='inline me-2' size={30} />Search History</li>
                        {/* {selected === 4 ? <div className='w-2 rounded-md h-16 absolute right-[-2px] top-[-12px] bg-[rgb(37,99,235)] overflow-visible'></div> : null} */}
                    </div>

                    <div className='flex  p-0 overflow-visible relative'>
                        <li className={`py-1 cursor-pointer`}><FiSettings color='rgb(148 163 184' className='inline me-2' size={30} />Profile</li>
                        {/* {selected === 8 ? <div className='w-2 rounded-md h-16 absolute right-[-2px] top-[-12px] bg-[rgb(37,99,235)] overflow-visible'></div> : null} */}
                    </div>

                </ul>
                <ul className="footer  flex flex-col gap-8 py-3 mt-auto mb-3 ">
                    <li><AiOutlineInfoCircle className='inline me-2' />Setting</li>
                    <li><PiSignOut className='inline me-2' />Sign Out</li>
                </ul>
            </div>
        </div >

    )
}

export default Sidebar