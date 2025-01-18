import React, { useContext, useState } from 'react'
import { MyContext } from '@/Contexts/Hamburger'
import Card from './Card1'
import ShortlistedCV from './ShortlistedCV'
import Transactions from './Transactions'
// import image1 from '../Images/image1.jpg'
// import image2 from '../Images/image2.jpeg'
// import image3 from '../Images/image3.jpeg'
// import image4 from '../Images/image4.jpg'
// import image5 from '../Images/image5.jpeg'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'

function RightPage() {
    const { ham, setham, selected, setselected } = useContext(MyContext)
    return (
        <div className='flex-1 bg-slate-300'>
            {/* <button  >Hamburger</button> */}
            <div className="head flex justify-between  py-6 px-3 mt-5 ">
                <div className="tablet:hidden block" onClick={() => setham(!ham)}>
                    <GiHamburgerMenu className='min-[900px]:hidden block' size={30} />
                </div>
                <div className="profile ms-auto flex gap-2">
                    <div className='sm:block hidden'><h1 >Hi! Username</h1><h2 className='text-sm font-bold text-blue-500'>credits left : 300</h2></div>
                    <Image className='rounded-full' src={require('../Images/image1.jpg')} alt='userimage' height={45} width={45} />
                </div>
            </div>
            {
                selected === 2 ? (
                    <ShortlistedCV />
                ) : (
                    selected === 3 ? (
                        <Transactions />
                        // <div>hello</div>
                    ) : null
                )
            }

        </div>
    )
}

export default RightPage
