/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const ShowData = (props) => {
    
    const { img, name, price, seller, ratings } = props.dataitem;
    const hendleaddtocard =props.hendleaddtocard;
    return (
        <div className=''>
            <div className="p-4 rounded-md w-80 gap-3  bg-base-100 shadow-xl border-black">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="mt-2">
                    <h6 className="card-title  text-base ">
                        {name}
                    </h6>
                    <p className='m-0 p-0 flex justify-start'><span className='font-bold '>Price</span> : $ {price}</p>
                    <br />
                    <p className='flex justify-start'>Manufacturer : {seller}</p>
                    <p className='flex justify-start'>Rating : {ratings} start</p>
                    <div className='mt-2'>
                        <button onClick={()=>hendleaddtocard(props.dataitem)} className="btn mb-0 w-full bg-orange-200 badge-outline">Add To Card <span> <ShoppingCartIcon className="h-6 w-6 text-blue-500" /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowData;