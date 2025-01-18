'use client'

import RightPage from '@/Components/ContentPage'
import Sidebar from '@/Components/Sidebar'
import React, { useEffect, useState } from 'react'

function page() {


    return (
        <div className='flex flex-row w-full relative'>
            <Sidebar />
            <RightPage />
        </div>
    )
}

export default page
