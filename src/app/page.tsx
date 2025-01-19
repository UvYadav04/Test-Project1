'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import RightPage from "@/Components/ContentPage";
export default function Home() {
  return (
    <>
      <div className='flex flex-row w-full relative'>
        <Sidebar />
        <RightPage />
      </div>
    </>
  );
}
