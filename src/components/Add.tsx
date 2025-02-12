"use client"
import React, { useState } from 'react'

const Add = () => {
    const[quan,Setquan]=useState(1);
      // // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quan > 1) {
      Setquan((prev) => prev - 1);
    }
    if (type === "i" && quan < stock) {
      Setquan((prev) => prev + 1);
    }
  };
  return (
    <div className='flex flex-col gap-4'>
        
        <h4 className='font-medium'>
            Choose Quanitity
        </h4>
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
            <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quan}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>

</div>
<div className="text-xs">
              Only <span className="text-orange-500">4 items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>

            </div>
            <button
          
          className="w-36 text-sm rounded-3xl ring-1 ring-maaz text-maaz py-2 px-4 hover:bg-maaz hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
        </div>
       
    </div>
  )
}

export default Add