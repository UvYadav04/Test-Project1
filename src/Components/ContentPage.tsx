'use client'

import React from 'react';
import { useMyContext } from '@/Contexts/Hamburger'; // Use the custom hook
import Card from './Card1';
import ShortlistedCV from './ShortlistedCV';
import Transactions from './Transactions';
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';

function RightPage() {
    const { ham, setham, selected, setselected } = useMyContext(); // Use the custom hook here

    return (
        <div className="flex-1 bg-slate-300">
            <div className="head flex justify-between py-6 px-3 mt-5">
                <div className="tablet:hidden block" onClick={() => setham(!ham)}>
                    <GiHamburgerMenu className=" block" size={30} />
                </div>
                <div className="profile ms-auto flex gap-2">
                    <div className="sm:block hidden">
                        <h1>Hi! Username</h1>
                        <h2 className="text-sm font-bold text-blue-500">Credits left: 300</h2>
                    </div>
                    <Image
                        className="rounded-full"
                        src={require('../Images/image1.jpg')}
                        alt="userimage"
                        height={45}
                        width={45}
                    />
                </div>
            </div>
            {selected === 2 ? (
                <ShortlistedCV />
            ) : selected === 3 ? (
                <Transactions />
            ) : null}
        </div>
    );
}

export default RightPage;
