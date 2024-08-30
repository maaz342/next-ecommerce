import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
   <Link
          href="/test" 
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
        <div className='relative h-80 w-full '>
<Image
src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
<Image
src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className='absolute object-cover rounded-md'/>

        </div>
        <div className="flex justify-between">
            <span className="font-medium">Name</span>
            <span className="font-semibold">$46</span>
          </div>
            <div className="text-sm text-gray-500">MY DESC</div>
          
          <button className="rounded-2xl ring-1 ring-maaz text-maaz w-max py-2 px-4 text-xs hover:bg-maaz hover:text-white">
            Add to Cart
          </button>
          </Link>
          <Link
          href="/test" 
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
        <div className='relative h-80 w-full '>
<Image
src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
<Image
src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className='absolute object-cover rounded-md'/>

        </div>
        <div className="flex justify-between">
            <span className="font-medium">Name</span>
            <span className="font-semibold">$46</span>
          </div>
            <div className="text-sm text-gray-500">MY DESC</div>
          
          <button className="rounded-2xl ring-1 ring-maaz text-maaz w-max py-2 px-4 text-xs hover:bg-maaz hover:text-white">
            Add to Cart
          </button>
          </Link>
          <Link
          href="/test" 
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
        <div className='relative h-80 w-full '>
<Image
src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
<Image
src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className='absolute object-cover rounded-md'/>

        </div>
        <div className="flex justify-between">
            <span className="font-medium">Name</span>
            <span className="font-semibold">$46</span>
          </div>
            <div className="text-sm text-gray-500">MY DESC</div>
          
          <button className="rounded-2xl ring-1 ring-maaz text-maaz w-max py-2 px-4 text-xs hover:bg-maaz hover:text-white">
            Add to Cart
          </button>
          </Link>
          <Link
          href="/test" 
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
        <div className='relative h-80 w-full '>
<Image
src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
<Image
src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
alt=''
fill
sizes="25vw"
className='absolute object-cover rounded-md'/>

        </div>
        <div className="flex justify-between">
            <span className="font-medium">Name</span>
            <span className="font-semibold">$46</span>
          </div>
            <div className="text-sm text-gray-500">MY DESC</div>
          
          <button className="rounded-2xl ring-1 ring-maaz text-maaz w-max py-2 px-4 text-xs hover:bg-maaz hover:text-white">
            Add to Cart
          </button>
          </Link>

</div>

  )
}

export default ProductList