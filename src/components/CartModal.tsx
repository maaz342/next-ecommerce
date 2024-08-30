import React from 'react'
import Image from 'next/image';
const CartModal = () => {
    const cartIsempty=true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
{!cartIsempty?(
    <div className=''>Cart Is Empty</div>
):(
    <>
<h2 className='text-xl'>Shopping Cart</h2>
{/*List*/}
<div className='flex flex-col gap-8'>
{/*ITEM*/}
    <div className='flex gap-4'>
          <Image
                    src="https://image.tmdb.org/t/p/original/dlxzUj7z1MqEcFiwvvrj0bvBKDY.jpg"
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                  <div className='flex flex-col w-full justify-between'>
                    {/*TOP*/}

                    <div className=''>
<div className='flex items-center justify-between gap-8'>
<h3 className='font-semibold'>MAAZ</h3>
<div className='p-1 bg-gray-50 rounded-sm '>$49</div>
</div>
{/*DESC*/}

<div className='text-sm text-gray-500'>
    Available
</div>
                    </div>
                    {/*Bottom*/}

                    <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>
                            Qty.2
                        </span>
                        <span className='text-blue-500'>Remove</span>

                    </div>

                  </div>
                  </div>
                  <div className='flex gap-4'>
          <Image
                    src="https://image.tmdb.org/t/p/original/dlxzUj7z1MqEcFiwvvrj0bvBKDY.jpg"
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                  <div className='flex flex-col w-full justify-between'>
                    <div className=''>
<div className='flex items-center justify-between gap-8'>
<h3 className='font-semibold'>MAAZ</h3>
<div className='p-1 bg-gray-50 rounded-sm '>$49</div>
</div>
<div className='text-sm text-gray-500'>
    Available
</div>
                    </div>
                    <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>
                            Qty.2
                        </span>
                        <span className='text-blue-500'>Remove</span>

                    </div>

                  </div>
                  </div>

    </div>
{/*BOTTOM*/}
    <div className=''>
    <div className='flex justify-between items-center font-semibold'>
<span className=''>
Subtotal
</span>
<span className=''>
$40
</span>
    </div>
    <p className='text-gray-500 text-sm mt-2 mb-4'>
     Shipping and taxes calculated at the checkout

    </p>
<div className='flex justify-between text-sm'>
    <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
    <button className='rounded-md py-3 px-4 bg-black text-white'>Check Out</button>


</div>
    </div>
    </>

)}
</div>
  )
}

export default CartModal