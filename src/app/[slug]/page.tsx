import React from 'react'
import ProductImages from '../../components/ProductImages';
import CustomizeProduct from '../../components/CustomizeProduct';
import Add from '../../components/Add';

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
<ProductImages/>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-6 '>
        <h1 className="text-4xl font-medium">Name</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at reiciendis similique sunt provident consectetur a consequatur exercitationem, tempora laudantium architecto libero. Recusandae accusantium mollitia sequi error ducimus, fuga est?</p>
        <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              $55
            </h3>
            <h2 className="font-medium text-2xl">
              $45
            </h2>
          </div>
          <div className='h-[2px] bg-gray-100'/>
            <CustomizeProduct/>
            <Add/>
            <div className='h-[2px] bg-gray-100'/>
<div className='text-sm'>
<h4 className='font-medium mb-4'>Title</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus culpa. Fugiat quidem iusto minima adipisci voluptatum error! Fuga, odio totam aspernatur error velit expedita non voluptate! Totam, dolor! Architecto!</p>
</div>
<div className='text-sm'>
<h4 className='font-medium mb-4'>Title</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus culpa. Fugiat quidem iusto minima adipisci voluptatum error! Fuga, odio totam aspernatur error velit expedita non voluptate! Totam, dolor! Architecto!</p>
</div>
        
<div className='text-sm'>
<h4 className='font-medium mb-4'>Title</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus culpa. Fugiat quidem iusto minima adipisci voluptatum error! Fuga, odio totam aspernatur error velit expedita non voluptate! Totam, dolor! Architecto!</p>
</div>
        
<div className='text-sm'>
<h4 className='font-medium mb-4'>Title</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus culpa. Fugiat quidem iusto minima adipisci voluptatum error! Fuga, odio totam aspernatur error velit expedita non voluptate! Totam, dolor! Architecto!</p>
</div>
        
          </div>
          
        </div>
  )
}

export default SinglePage;