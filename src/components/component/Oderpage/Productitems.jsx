/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Productitems = ({ productitem }) => {
    // let price= 0;
    // for(const productt of productitem){
    //     price =price + productt.price;
    //     console.log(price)
    // }
    return (
        
        <div className='flex'>
            <div className="card px-6 w-full  h-40 card-side bg-base-100 shadow-xl">
                <figure><img src={productitem.img} alt="img" className='w-20 h-20 ' /></figure>
                <div className="card-body flex ">
                    <h2 className="card-title">{productitem.name}</h2>
                    <p>Price : $ {productitem.price}</p>
                    <p>Shopping charge : $ {productitem.shipping}</p>
                </div>
                <button><TrashIcon className="h-12 w-12 text-red-500 border hover:bg-slate-800 bg-red-200 rounded-full" /></button>
            </div>
            
                        
                    
        </div>
    );
};

export default Productitems;