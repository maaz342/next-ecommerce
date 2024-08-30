"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Menu = () => {
    const [open,setOpen]=useState(false);
  return (
    <div>
        <Image src="/menu.png" alt='menu' height={28} width={28} className='curson-pointer' onClick={()=>setOpen((prev)=>!prev)}/>
        {open&&(
            <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
<Link href="/">Home</Link>
<Link href="/">About</Link>
<Link href="/">Contact</Link>
<Link href="/">Register</Link>
<Link href="/">Sign</Link>
<Link href="/">Good </Link>

            </div>
        )}
            </div> 
  )
}

export default Menu